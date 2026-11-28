#!/usr/bin/env python3
"""
Descarga y procesa efectos de sonido REALES en línea (CC0 / licencia gratuita)
para todas las escenas sin sonido de Blinky's Blind Heart (S07–S10 y S14–S52).

Fuentes utilizadas (grabaciones reales, cero síntesis desde cero):
  - Freesound.org (Creative Commons 0 - Dominio Público)
  - Mixkit.co (Mixkit Sound Effects Free License)
  - Wikimedia Commons (Creative Commons 0)

Uso:
  python scripts/download_scene_sfx.py                  # Descarga y procesa todo
  python scripts/download_scene_sfx.py --download-only  # Solo descarga archivos crudos en .sfx_cache/
  python scripts/download_scene_sfx.py --process-only   # Solo recorta/normaliza desde .sfx_cache/ a audio/
"""

import argparse
import hashlib
import os
import re
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse

import requests

ROOT = Path(__file__).resolve().parent.parent
AUDIO_DIR = ROOT / "audio"
CACHE_DIR = ROOT / ".sfx_cache"

# Escenas que ya contaban con sonido original: nunca se sobrescriben
PROTECTED_SCENES = {1, 2, 3, 4, 5, 6, 11, 12, 13}

HEADERS = {
    "User-Agent": "BlinkysBlindHeartSFXDownloader/1.0 (Universidad del Valle student project; requests)"
}

# Catálogo curado de 43 sonidos reales en línea mapeados según el contexto de cada escena
SCENE_SFX_MANIFEST = [
    {
        "scene": 7,
        "id": "S07",
        "description": "Silencio tenso y latido acelerado tras el estruendo",
        "source": "Freesound (CC0)",
        "title": "Heartbeat 97 BPM (#688735)",
        "url": "https://cdn.freesound.org/previews/688/688735_10403690-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/688/688735_10403690-lq.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 9.8,
        "target_lufs": -19.0,
    },
    {
        "scene": 8,
        "id": "S08",
        "description": "Goteo sobre el asfalto áspero y silencio tenso",
        "source": "Freesound (CC0)",
        "title": "Water dripping after the rain (#628404)",
        "url": "https://cdn.freesound.org/previews/628/628404_13504080-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/628/628404_13504080-lq.mp3",
        "loop": True,
        "start": 2.0,
        "duration": 12.0,
        "target_lufs": -20.0,
    },
    {
        "scene": 9,
        "id": "S09",
        "description": "Goteo muy suave y quietud sombría bajo el piano melancólico",
        "source": "Freesound (CC0)",
        "title": "Rain Water Dripping Softly (#459983)",
        "url": "https://cdn.freesound.org/previews/459/459983_6253486-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/459/459983_6253486-lq.mp3",
        "loop": True,
        "start": 4.0,
        "duration": 12.0,
        "target_lufs": -24.0,
    },
    {
        "scene": 10,
        "id": "S10",
        "description": "Puerta de auto cerrándose en la avenida detenida",
        "source": "Mixkit (Free)",
        "title": "Car door close (#3129)",
        "url": "https://assets.mixkit.co/active_storage/sfx/3129/3129-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.0,
        "target_lufs": -17.0,
    },
    {
        "scene": 14,
        "id": "S14",
        "description": "Maullido dulce de despedida del Gato Guía",
        "source": "Mixkit (Free)",
        "title": "Little cat attention meow (#86)",
        "url": "https://assets.mixkit.co/active_storage/sfx/86/86-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.0,
        "target_lufs": -16.0,
    },
    {
        "scene": 15,
        "id": "S15",
        "description": "Lluvia amortiguada sobre el techo del callejón protegido",
        "source": "Freesound (CC0)",
        "title": "rain drops hit metal shed from outside (#637775)",
        "url": "https://cdn.freesound.org/previews/637/637775_612689-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/637/637775_612689-lq.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 9.2,
        "target_lufs": -21.0,
    },
    {
        "scene": 16,
        "id": "S16",
        "description": "Murmullo y voces lejanas en la esquina abierta",
        "source": "Freesound (CC0)",
        "title": "street busy downtown people voices steps activity (#451479)",
        "url": "https://cdn.freesound.org/previews/451/451479_612689-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/451/451479_612689-lq.mp3",
        "loop": True,
        "start": 6.0,
        "duration": 12.0,
        "target_lufs": -22.0,
        "extra_af": "lowpass=f=2400",
    },
    {
        "scene": 17,
        "id": "S17",
        "description": "Crujido de cajas de cartón al huir de regreso al refugio",
        "source": "Freesound (CC0)",
        "title": "Cardboard Box Rustle 5 (#334215)",
        "url": "https://cdn.freesound.org/previews/334/334215_4290188-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/334/334215_4290188-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.8,
        "target_lufs": -17.0,
    },
    {
        "scene": 18,
        "id": "S18",
        "description": "Goteo monótono y solitario fuera de la caja de cartón",
        "source": "Freesound (CC0)",
        "title": "03_Dripping_Water.wav (#461211)",
        "url": "https://cdn.freesound.org/previews/461/461211_9672278-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/461/461211_9672278-lq.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 12.0,
        "target_lufs": -20.0,
    },
    {
        "scene": 19,
        "id": "S19",
        "description": "Tráfico veloz y rugido de motores muy cerca del borde del andén",
        "source": "Mixkit (Free)",
        "title": "Passing car and urban ambience (#1554)",
        "url": "https://assets.mixkit.co/active_storage/sfx/1554/1554-preview.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 12.0,
        "target_lufs": -19.0,
    },
    {
        "scene": 20,
        "id": "S20",
        "description": "¡¡FROOOOSH!! Paso veloz de un camión junto a la nariz de Blinky",
        "source": "Mixkit (Free)",
        "title": "Truck in highway passing by (#1627)",
        "url": "https://assets.mixkit.co/active_storage/sfx/1627/1627-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 5.5,
        "target_lufs": -15.0,
    },
    {
        "scene": 21,
        "id": "S21",
        "description": "Respiración honda y cálida del Perro Salvador",
        "source": "Mixkit (Free)",
        "title": "Big tired dog panting (#52)",
        "url": "https://assets.mixkit.co/active_storage/sfx/52/52-preview.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 10.0,
        "target_lufs": -19.0,
    },
    {
        "scene": 22,
        "id": "S22",
        "description": "¡¡GUAU!! Ladrido grave y protector del perro gigante",
        "source": "Mixkit (Free)",
        "title": "Medium size angry dog bark (#54)",
        "url": "https://assets.mixkit.co/active_storage/sfx/54/54-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 2.8,
        "target_lufs": -15.0,
    },
    {
        "scene": 23,
        "id": "S23",
        "description": "Silbido del viento nocturno atravesando la reja",
        "source": "Freesound (CC0)",
        "title": "Wind howling (#767148)",
        "url": "https://cdn.freesound.org/previews/767/767148_15595729-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/767/767148_15595729-lq.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 6.3,
        "target_lufs": -20.0,
    },
    {
        "scene": 24,
        "id": "S24",
        "description": "Caminata y respiración acompañante del Perro Salvador",
        "source": "Mixkit (Free)",
        "title": "Medium size dog walking pant (#58)",
        "url": "https://assets.mixkit.co/active_storage/sfx/58/58-preview.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 10.0,
        "target_lufs": -19.0,
    },
    {
        "scene": 25,
        "id": "S25",
        "description": "Bufido cálido y olfateo de despedida del perro bajo el arco",
        "source": "Freesound (CC0)",
        "title": "Dog Sniff.mp3 (#595826)",
        "url": "https://cdn.freesound.org/previews/595/595826_9109192-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/595/595826_9109192-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 5.0,
        "target_lufs": -18.0,
    },
    {
        "scene": 26,
        "id": "S26",
        "description": "Rugido de estómago hambriento en la encrucijada",
        "source": "Freesound (CC0)",
        "title": "stomach growl-PiSh_01.wav (#52293)",
        "url": "https://cdn.freesound.org/previews/52/52293_627019-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/52/52293_627019-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.5,
        "target_lufs": -17.0,
    },
    {
        "scene": 27,
        "id": "S27",
        "description": "Olfateo concentrado buscando corrientes de olor en el aire",
        "source": "Mixkit (Free)",
        "title": "Dog sniffing the ground (#49)",
        "url": "https://assets.mixkit.co/active_storage/sfx/49/49-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.5,
        "target_lufs": -19.0,
    },
    {
        "scene": 28,
        "id": "S28",
        "description": "Corrientes suaves de viento nocturno trayendo los dos aromas",
        "source": "Freesound (CC0)",
        "title": "Deep wind night ambience in village (#640219)",
        "url": "https://cdn.freesound.org/previews/640/640219_13679740-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/640/640219_13679740-lq.mp3",
        "loop": True,
        "start": 5.0,
        "duration": 12.0,
        "target_lufs": -21.0,
    },
    {
        "scene": 29,
        "id": "S29",
        "description": "Ráfaga fría sacudiendo el callejón y deshaciendo los aromas",
        "source": "Freesound (CC0)",
        "title": "Old window gusty wind.wav (#627793)",
        "url": "https://cdn.freesound.org/previews/627/627793_1038119-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/627/627793_1038119-lq.mp3",
        "loop": False,
        "start": 2.0,
        "duration": 7.0,
        "target_lufs": -17.0,
    },
    {
        "scene": 30,
        "id": "S30",
        "description": "Brisa expectante de la noche en la encrucijada olfativa",
        "source": "Freesound (CC0)",
        "title": "Backyard with wind at night.wav (#380781)",
        "url": "https://cdn.freesound.org/previews/380/380781_5902878-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/380/380781_5902878-lq.mp3",
        "loop": True,
        "start": 5.0,
        "duration": 12.0,
        "target_lufs": -21.0,
    },
    {
        "scene": 31,
        "id": "S31",
        "description": "Bufido felino defensivo al escapar por las rejas",
        "source": "Freesound (CC0)",
        "title": "Cat Hiss (#485952)",
        "url": "https://cdn.freesound.org/previews/485/485952_7932944-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/485/485952_7932944-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.0,
        "target_lufs": -16.0,
    },
    {
        "scene": 32,
        "id": "S32",
        "description": "Roce metálico de alambres viejos y rejas húmedas",
        "source": "Mixkit (Free)",
        "title": "Metal Scrape (#809)",
        "url": "https://assets.mixkit.co/active_storage/sfx/809/809-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.5,
        "target_lufs": -18.0,
    },
    {
        "scene": 33,
        "id": "S33",
        "description": "Respiración entrecortada y temblorosa por el agotamiento",
        "source": "Freesound (CC0)",
        "title": "Shaky_Breaths.wav (#682884)",
        "url": "https://cdn.freesound.org/previews/682/682884_14795335-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/682/682884_14795335-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 6.5,
        "target_lufs": -19.0,
    },
    {
        "scene": 34,
        "id": "S34",
        "description": "Crujido de bolsas plásticas rasgadas detrás del restaurante",
        "source": "Freesound (CC0)",
        "title": "Plastic bags rustling.mp3 (#365520)",
        "url": "https://cdn.freesound.org/previews/365/365520_5407590-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/365/365520_5407590-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 6.5,
        "target_lufs": -17.0,
    },
    {
        "scene": 35,
        "id": "S35",
        "description": "Toque metálico suave al tropezar con la latita de atún",
        "source": "Freesound (CC0)",
        "title": "Tin can - small - handle - tap - metallic (#624490)",
        "url": "https://cdn.freesound.org/previews/624/624490_10443988-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/624/624490_10443988-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.0,
        "target_lufs": -20.0,
    },
    {
        "scene": 36,
        "id": "S36",
        "description": "Roce delicado contra tela y ropa limpia tibia",
        "source": "Freesound (CC0)",
        "title": "Soft Fabric Rustle (#850705)",
        "url": "https://cdn.freesound.org/previews/850/850705_9616576-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/850/850705_9616576-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.5,
        "target_lufs": -21.0,
    },
    {
        "scene": 37,
        "id": "S37",
        "description": "Pequeño sobresalto dulce de la niña al sentir el hocico de Blinky",
        "source": "Mixkit (Free)",
        "title": "Female astonished gasp (#964)",
        "url": "https://assets.mixkit.co/active_storage/sfx/964/964-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 2.5,
        "target_lufs": -20.0,
    },
    {
        "scene": 38,
        "id": "S38",
        "description": "Ronroneo tranquilo de Blinky durmiendo en el regazo de lana",
        "source": "Freesound (CC0)",
        "title": "House Cats - Tom Cat, Purr (#807969)",
        "url": "https://cdn.freesound.org/previews/807/807969_15895934-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/807/807969_15895934-lq.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 12.0,
        "target_lufs": -22.0,
    },
    {
        "scene": 39,
        "id": "S39",
        "description": "Chapoteos apresurados de botas corriendo sobre charcos de lluvia",
        "source": "Freesound (CC0)",
        "title": "running through a puddle (#249930)",
        "url": "https://cdn.freesound.org/previews/249/249930_389377-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/861/861369_8154783-hq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.0,
        "target_lufs": -16.0,
    },
    {
        "scene": 40,
        "id": "S40",
        "description": "Suspiro emotivo de alivio de la madre al abrazar a su hija",
        "source": "Freesound (CC0)",
        "title": "Sigh_3_Female (#318089)",
        "url": "https://cdn.freesound.org/previews/318/318089_5057106-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/318/318089_5057106-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.0,
        "target_lufs": -19.0,
    },
    {
        "scene": 41,
        "id": "S41",
        "description": "Maullido tierno de Blinky en brazos de la niña",
        "source": "Mixkit (Free)",
        "title": "Domestic cat hungry meow (#45)",
        "url": "https://assets.mixkit.co/active_storage/sfx/45/45-preview.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.0,
        "target_lufs": -19.0,
    },
    {
        "scene": 42,
        "id": "S42",
        "description": "Suspiro compasivo de la madre mirando al gatito",
        "source": "Freesound (CC0)",
        "title": "49-Suspiro.wav (#491813)",
        "url": "https://cdn.freesound.org/previews/491/491813_9238174-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/491/491813_9238174-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 2.2,
        "target_lufs": -19.0,
    },
    {
        "scene": 43,
        "id": "S43",
        "description": "Movimiento suave de tela al levantar a Blinky con ternura",
        "source": "Freesound (CC0)",
        "title": "Blanket Movement 6 (#320144)",
        "url": "https://cdn.freesound.org/previews/320/320144_140737-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/320/320144_140737-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 1.5,
        "target_lufs": -21.0,
    },
    {
        "scene": 44,
        "id": "S44",
        "description": "Abrigo envolvente de la manta tibia alrededor de Blinky",
        "source": "Freesound (CC0)",
        "title": "Comforter Rustle.wav (#404903)",
        "url": "https://cdn.freesound.org/previews/404/404903_7758304-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/404/404903_7758304-lq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 4.5,
        "target_lufs": -20.0,
    },
    {
        "scene": 45,
        "id": "S45",
        "description": "Pasos tranquilos de mamá y la niña caminando a casa sobre acera mojada",
        "source": "Freesound (CC0)",
        "title": "Two people's footsteps walking on a wet cement sidewalk (#334457)",
        "url": "https://cdn.freesound.org/previews/334/334457_2367065-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/334/334457_2367065-lq.mp3",
        "loop": True,
        "start": 2.0,
        "duration": 12.0,
        "target_lufs": -22.0,
    },
    {
        "scene": 46,
        "id": "S46",
        "description": "Ronroneo cálido y feliz de Blinky durmiendo en su nuevo hogar",
        "source": "Mixkit (Free)",
        "title": "Sphinx cat purr (#3091)",
        "url": "https://assets.mixkit.co/active_storage/sfx/3091/3091-preview.mp3",
        "loop": True,
        "start": 0.0,
        "duration": 10.0,
        "target_lufs": -22.0,
    },
    {
        "scene": 47,
        "id": "S47",
        "description": "Goteo pesado de lluvia golpeando contenedores metálicos del callejón",
        "source": "Freesound (CC0)",
        "title": "Medium rain dropping on metal surface.wav (#399824)",
        "url": "https://cdn.freesound.org/previews/399/399824_5902878-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/399/399824_5902878-lq.mp3",
        "loop": True,
        "start": 2.0,
        "duration": 12.0,
        "target_lufs": -21.0,
    },
    {
        "scene": 48,
        "id": "S48",
        "description": "Viento helado de madrugada soplando en el callejón vacío",
        "source": "Freesound (CC0)",
        "title": "Cold wind blowing outside (#686064)",
        "url": "https://cdn.freesound.org/previews/686/686064_9267630-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/686/686064_9267630-lq.mp3",
        "loop": True,
        "start": 4.0,
        "duration": 12.0,
        "target_lufs": -20.0,
    },
    {
        "scene": 49,
        "id": "S49",
        "description": "Hmmmmmmmm... Zumbido eléctrico constante del calefactor a ras del suelo",
        "source": "Freesound (CC0)",
        "title": "space heater run hum electric.wav (#545570)",
        "url": "https://cdn.freesound.org/previews/545/545570_6233742-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/545/545570_6233742-lq.mp3",
        "loop": True,
        "start": 3.0,
        "duration": 12.0,
        "target_lufs": -20.0,
    },
    {
        "scene": 50,
        "id": "S50",
        "description": "¡¡CLANC!! Choque metálico seco contra la rejilla oxidada del calefactor",
        "source": "Freesound (CC0)",
        "title": "metal clanging sound (#798077)",
        "url": "https://cdn.freesound.org/previews/798/798077_17180181-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/406/406562_5923045-hq.mp3",
        "loop": False,
        "start": 0.0,
        "duration": 3.5,
        "target_lufs": -15.0,
    },
    {
        "scene": 51,
        "id": "S51",
        "description": "Zumbido eléctrico monótono del viejo aparato bajo la lluvia",
        "source": "Freesound (CC0)",
        "title": "space heater run hum electric.wav (#545570, tramo B)",
        "url": "https://cdn.freesound.org/previews/545/545570_6233742-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/545/545570_6233742-lq.mp3",
        "loop": True,
        "start": 18.0,
        "duration": 12.0,
        "target_lufs": -21.0,
    },
    {
        "scene": 52,
        "id": "S52",
        "description": "Vibración tibia y mecánica del calefactor eléctrico en el cierre melancólico",
        "source": "Freesound (CC0)",
        "title": "space heater run hum electric.wav (#545570, tramo C)",
        "url": "https://cdn.freesound.org/previews/545/545570_6233742-hq.mp3",
        "fallback_url": "https://cdn.freesound.org/previews/545/545570_6233742-lq.mp3",
        "loop": True,
        "start": 34.0,
        "duration": 12.0,
        "target_lufs": -23.0,
    },
]


def cache_path_for_url(url: str) -> Path:
    ext = Path(urlparse(url).path).suffix.lower() or ".mp3"
    h = hashlib.sha1(url.encode("utf-8")).hexdigest()[:12]
    return CACHE_DIR / f"{h}{ext}"


def download_one(item: dict) -> tuple[str, bool, str]:
    url = item["url"]
    fallback = item.get("fallback_url")
    dest = cache_path_for_url(url)
    if dest.exists() and dest.stat().st_size > 2000:
        return item["id"], True, f"En caché ({dest.stat().st_size:,} B): {dest.name}"

    is_mp3 = dest.suffix.lower() == ".mp3"
    # Para MP3 largos (varios minutos), con 1.6 MB (~65-100 s) basta para cualquier recorte
    max_bytes = 1_600_000 if is_mp3 else 15_000_000

    urls_to_try = [url] + ([fallback] if fallback else [])
    last_err = ""
    for attempt_url in urls_to_try:
        try:
            with requests.get(attempt_url, headers=HEADERS, timeout=(10, 25), stream=True) as resp:
                resp.raise_for_status()
                buf = bytearray()
                for chunk in resp.iter_content(chunk_size=32768):
                    if not chunk:
                        continue
                    buf.extend(chunk)
                    if len(buf) >= max_bytes:
                        break
                if len(buf) < 1500:
                    raise ValueError(f"Archivo demasiado pequeño ({len(buf)} bytes)")
                tmp = dest.with_suffix(dest.suffix + ".part")
                tmp.write_bytes(bytes(buf))
                tmp.replace(dest)
                return item["id"], True, f"OK ({len(buf):,} B) <- {item['title']}"
        except Exception as exc:
            last_err = str(exc)
            time.sleep(0.35)

    return item["id"], False, f"ERROR ({item['title']}): {last_err}"


def download_all() -> int:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    failures = 0

    # Deduplicar por URL para descargar cada grabación única una sola vez en paralelo
    unique_items = []
    seen_urls = set()
    for item in SCENE_SFX_MANIFEST:
        if item["url"] in seen_urls:
            print(f"[{item['id']}] Reutilizará misma grabación base -> {item['title']}", flush=True)
            continue
        seen_urls.add(item["url"])
        unique_items.append(item)

    with ThreadPoolExecutor(max_workers=6) as pool:
        futs = [pool.submit(download_one, item) for item in unique_items]
        for fut in as_completed(futs):
            sid, ok, msg = fut.result()
            if ok:
                print(f"[{sid}] {msg}", flush=True)
            else:
                failures += 1
                print(f"[{sid}] {msg}", file=sys.stderr, flush=True)

    return failures


def get_audio_duration(ffmpeg_exe: str, path: Path) -> float:
    proc = subprocess.run([ffmpeg_exe, "-i", str(path)], capture_output=True, text=True)
    m = re.search(r"Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)", proc.stderr)
    if not m:
        return 0.0
    return int(m.group(1)) * 3600 + int(m.group(2)) * 60 + float(m.group(3))


def process_all(overwrite_generated: bool = False) -> int:
    import imageio_ffmpeg

    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    AUDIO_DIR.mkdir(parents=True, exist_ok=True)
    failures = 0

    for item in SCENE_SFX_MANIFEST:
        num = item["scene"]
        if num in PROTECTED_SCENES:
            print(f"[{item['id']}] OMITIDO (protegido)")
            continue

        # No sobrescribir si ya existe un .wav original
        if (AUDIO_DIR / f"s{num}.wav").exists():
            print(f"[{item['id']}] OMITIDO (ya existe audio/s{num}.wav)")
            continue

        out_mp3 = AUDIO_DIR / f"s{num}.mp3"
        if out_mp3.exists() and not overwrite_generated:
            print(f"[{item['id']}] Ya existe {out_mp3.name} (usa --force para reprocesar)")
            continue

        raw_path = cache_path_for_url(item["url"])
        if not raw_path.exists():
            print(f"[{item['id']}] ERROR: falta archivo en caché {raw_path}", file=sys.stderr)
            failures += 1
            continue

        total_dur = get_audio_duration(ffmpeg_exe, raw_path)
        start = float(item.get("start", 0.0))
        req_dur = float(item.get("duration", 8.0))
        if total_dur > 0:
            if start >= total_dur - 0.5:
                start = 0.0
            clip_dur = min(req_dur, max(0.6, total_dur - start))
        else:
            clip_dur = req_dur

        fade_in = 0.35 if item["loop"] else 0.04
        fade_out = 0.55 if item["loop"] else min(0.35, clip_dur * 0.25)
        fade_out_start = max(0.0, clip_dur - fade_out)

        filters = []
        if item.get("extra_af"):
            filters.append(item["extra_af"])
        filters.append(f"loudnorm=I={item['target_lufs']}:TP=-1.5:LRA=11")
        if clip_dur > (fade_in + fade_out + 0.1):
            filters.append(f"afade=t=in:st=0:d={fade_in:.2f}")
            filters.append(f"afade=t=out:st={fade_out_start:.2f}:d={fade_out:.2f}")

        cmd = [
            ffmpeg_exe,
            "-y",
            "-ss", f"{start:.2f}",
            "-t", f"{clip_dur:.2f}",
            "-i", str(raw_path),
            "-vn",
            "-af", ",".join(filters),
            "-ar", "44100",
            "-b:a", "128k",
            str(out_mp3),
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0 or not out_mp3.exists() or out_mp3.stat().st_size < 1000:
            print(f"[{item['id']}] ERROR ffmpeg: {res.stderr[-240:]}", file=sys.stderr)
            failures += 1
            continue

        # Verificar niveles de volumen para asegurar audio válido y no silencioso
        vchk = subprocess.run(
            [ffmpeg_exe, "-i", str(out_mp3), "-af", "volumedetect", "-f", "null", "-"],
            capture_output=True,
            text=True,
        ).stderr
        mean_m = re.search(r"mean_volume:\s*([-\d.]+)\s*dB", vchk)
        max_m = re.search(r"max_volume:\s*([-\d.]+)\s*dB", vchk)
        mean_db = mean_m.group(1) if mean_m else "?"
        max_db = max_m.group(1) if max_m else "?"
        mode_tag = "LOOP" if item["loop"] else "SHOT"
        print(
            f"[{item['id']}] {mode_tag} {out_mp3.name} ({clip_dur:.1f}s, {out_mp3.stat().st_size:,} B, mean={mean_db} dB, max={max_db} dB)"
        )

    return failures


def main():
    parser = argparse.ArgumentParser(description="Descarga y normaliza SFX reales para Blinky's Blind Heart.")
    parser.add_argument("--download-only", action="store_true", help="Solo descargar audios originales a .sfx_cache/")
    parser.add_argument("--process-only", action="store_true", help="Solo procesar audios desde .sfx_cache/ hacia audio/")
    parser.add_argument("--force", action="store_true", help="Reprocesar archivos .mp3 ya generados (nunca toca protegidos)")
    args = parser.parse_args()

    errs = 0
    if not args.process_only:
        errs += download_all()
    if not args.download_only:
        errs += process_all(overwrite_generated=args.force)

    if errs:
        print(f"\nCompletado con {errs} error(es).", file=sys.stderr)
        sys.exit(1)
    print("\nTodos los efectos de sonido fueron procesados correctamente.")


if __name__ == "__main__":
    main()
