/* ==========================================================================
   Motor Compartido de Sonidos de Interfaz — Blinky's Blind Heart
   Solo clics suaves (sin sonido de hover) para Jugar, Ajustes y Menú lateral.
   ========================================================================== */

(function () {
  const SOUND_DEFS = {
    click:      { src: 'audio/ui/click.wav?v=3',      relVol: 0.56, minVol: 0.22, pool: 4 },
    toggle_on:  { src: 'audio/ui/toggle_on.wav?v=3',  relVol: 0.54, minVol: 0.21, pool: 3 },
    toggle_off: { src: 'audio/ui/toggle_off.wav?v=3', relVol: 0.52, minVol: 0.20, pool: 3 },
    tab:        { src: 'audio/ui/tab.wav?v=3',        relVol: 0.50, minVol: 0.19, pool: 3 },
    menu_open:  { src: 'audio/ui/menu_open.wav?v=3',  relVol: 0.54, minVol: 0.21, pool: 2 },
    menu_close: { src: 'audio/ui/menu_close.wav?v=3', relVol: 0.50, minVol: 0.19, pool: 2 },
    play_start: { src: 'audio/ui/play_start.wav?v=3', relVol: 0.78, minVol: 0.34, pool: 2 }
  };

  let enabled = true;
  let volume = 0.6;
  let ctx = null;
  const pools = {};

  function initPools() {
    Object.keys(SOUND_DEFS).forEach((key) => {
      const def = SOUND_DEFS[key];
      const list = [];
      for (let i = 0; i < def.pool; i++) {
        const a = new Audio(def.src);
        a.preload = 'auto';
        list.push(a);
      }
      pools[key] = { list, cursor: 0 };
    });
  }
  initPools();

  function ensureContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      ctx = new AudioCtx();
    }
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  // Desbloquea el motor Web Audio en la primera interacción del usuario
  function unlockAudio() {
    ensureContext();
  }
  window.addEventListener('pointerdown', unlockAudio, { passive: true });
  window.addEventListener('keydown', unlockAudio, { passive: true });

  // Respaldo Web Audio (si un archivo WAV fallara en cargarse), esperando resume()
  function playSynthFallback(kind) {
    const ac = ensureContext();
    if (!ac) return;

    const trigger = () => {
      if (ac.state !== 'running') return;
      const t0 = ac.currentTime;
      const v = Math.max(0.15, Math.min(1, Number(volume) || 0.6));
      const filter = ac.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(760, t0);
      filter.connect(ac.destination);

      const playFeltNote = (freq, startOffset, peakGain, decaySec) => {
        const osc = ac.createOscillator();
        const gain = ac.createGain();
        const st = t0 + startOffset;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, st);
        gain.gain.setValueAtTime(0.0001, st);
        gain.gain.linearRampToValueAtTime(peakGain * v, st + 0.014);
        gain.gain.exponentialRampToValueAtTime(0.0001, st + decaySec);
        osc.connect(gain);
        gain.connect(filter);
        osc.start(st);
        osc.stop(st + decaySec + 0.03);
      };

      if (kind === 'play_start') {
        playFeltNote(146.83, 0.0, 0.075, 0.95);
        playFeltNote(220.0, 0.05, 0.065, 0.90);
        playFeltNote(349.23, 0.10, 0.060, 0.88);
        playFeltNote(440.0, 0.16, 0.050, 0.85);
      } else if (kind === 'toggle_off' || kind === 'menu_close') {
        playFeltNote(349.23, 0.0, 0.050, 0.22);
        playFeltNote(261.63, 0.048, 0.060, 0.28);
      } else {
        playFeltNote(293.66, 0.0, 0.060, 0.26);
      }
    };

    if (ac.state === 'suspended') {
      ac.resume().then(trigger).catch(() => {});
    } else {
      trigger();
    }
  }

  function playSound(key) {
    if (!enabled) return;
    const def = SOUND_DEFS[key];
    const pool = pools[key];
    if (!def || !pool) return;

    const audio = pool.list[pool.cursor];
    pool.cursor = (pool.cursor + 1) % pool.list.length;

    const v = Number(volume);
    const vol = v <= 0 ? 0 : Math.min(1, Math.max(def.minVol * v, v * def.relVol));
    if (vol <= 0.001) return;

    try {
      audio.pause();
      audio.currentTime = 0;
      audio.volume = vol;
      const p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => {
          // Si falló por carga (no por bloqueo de autoplay), usamos respaldo Web Audio
          if (audio.error) playSynthFallback(key);
        });
      }
    } catch (e) {
      playSynthFallback(key);
    }
  }

  // Hover desactivado por diseño: solo sonido suave al hacer clic en Jugar, Ajustes y Menú lateral
  function playHover() {}

  function playClick() {
    playSound('click');
  }

  function playToggle(isOn) {
    playSound(isOn ? 'toggle_on' : 'toggle_off');
  }

  function playTab() {
    playSound('tab');
  }

  function playMenu(isOpen) {
    playSound(isOpen ? 'menu_open' : 'menu_close');
  }

  function playStartChord() {
    playSound('play_start');
  }

  function playConsequence() {}

  /**
   * Mantenido como no-op compatible: sin sonidos en hover ni clics automáticos
   * en botones narrativos; cada botón de Jugar, Ajustes y Menú lateral dispara
   * explícitamente su sonido suave de clic.
   */
  function attachHoverDelegation() {}

  window.BlinkyUiSfx = {
    configure(opts = {}) {
      if (typeof opts.enabled === 'boolean') enabled = opts.enabled;
      if (typeof opts.volume === 'number') volume = opts.volume;
    },
    unlock: unlockAudio,
    playHover,
    playClick,
    playToggle,
    playTab,
    playMenu,
    playStartChord,
    playConsequence,
    attachHoverDelegation
  };
})();
