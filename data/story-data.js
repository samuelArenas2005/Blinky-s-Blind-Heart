/* ==========================================================================
   Blinky's Blind Heart — Arquitectura Narrativa Completa (S01 a S52)
   Emisores exclusivamente diegéticos / personajes de la historia:
   NARRADOR, BLINKY, MAMÁ GATO, GATO GUÍA, PERRO SALVADOR, LA NIÑA, MAMÁ DE LA NIÑA.
   Imágenes genéricas: images/s1.png ... images/s52.png
   ========================================================================== */

window.BLINKY_STORY = (function () {
  const ACTS = {
    'acto-1': {
      id: 'acto-1',
      shortTitle: 'El Nido Roto',
      fullTitle: 'Acto I · El Nido Roto'
    },
    'acto-2a': {
      id: 'acto-2a',
      shortTitle: 'La Búsqueda',
      fullTitle: 'Acto II · La Búsqueda y el Gato Guía'
    },
    'rama-gato': {
      id: 'rama-gato',
      shortTitle: 'El Callejón Protegido',
      fullTitle: 'El Callejón Protegido'
    },
    'acto-2b': {
      id: 'acto-2b',
      shortTitle: 'El Perro Salvador',
      fullTitle: 'Acto II · El Pánico y el Perro Salvador'
    },
    'rama-perro': {
      id: 'rama-perro',
      shortTitle: 'La Escolta',
      fullTitle: 'La Escolta hacia el Cruce'
    },
    'acto-3': {
      id: 'acto-3',
      shortTitle: 'La Encrucijada Olfativa',
      fullTitle: 'Acto III · La Encrucijada Olfativa'
    },
    'rama-extravio': {
      id: 'rama-extravio',
      shortTitle: 'El Extravío',
      fullTitle: 'El Extravío en Solitario'
    },
    'acto-4a': {
      id: 'acto-4a',
      shortTitle: 'Un Nuevo Hogar',
      fullTitle: 'El Encuentro y Nuevo Hogar'
    },
    'acto-4b': {
      id: 'acto-4b',
      shortTitle: 'El Falso Calor',
      fullTitle: 'El Falso Calor y la Soledad'
    }
  };

  const SCREENS_LIST = [
    // ==================== ACTO I: EL NIDO ROTO (S01 – S07) ====================
    {
      number: 1,
      id: 'S01',
      title: 'Refugio en la Lluvia',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Lluvia constante golpeando cartón húmedo',
      text: 'La lluvia cae con fuerza y golpea el cartón que te cubre. El agua helada se filtra poco a poco por las esquinas y moja el suelo donde estás echado. Estás en un rincón oscuro de un callejón, bien pegado al cuerpo tibio de tu mamá.',
      choices: [
        { label: 'Acurrucarte más fuerte contra el pelaje de mamá', next: 'S02' }
      ]
    },
    {
      number: 2,
      id: 'S02',
      title: 'La Barriga Vacía',
      act: 'acto-1',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Rugido suave de estómago y lluvia lejana',
      text: 'Grrr... Tu pequeña barriga suena muy fuerte. Tienes mucha hambre y tus patitas tiemblan de frío. Intentas buscar comida con la nariz entre el pelaje de mamá, pero notas que ella está sentada, muy alerta y mirando hacia la lluvia.',
      html: '<em class="vn-sound-whisper font-semibold">Grrr...</em> Tu pequeña barriga suena muy fuerte. Tienes mucha hambre y tus patitas tiemblan de frío. Intentas buscar comida con la nariz entre el pelaje de mamá, pero notas que ella está sentada, muy alerta y mirando hacia la lluvia.',
      choices: [
        { label: 'Escuchar qué hace mamá', next: 'S03' }
      ]
    },
    {
      number: 3,
      id: 'S03',
      title: 'La Despedida de Mamá',
      act: 'acto-1',
      speaker: 'MAMÁ GATO',
      speakerType: 'mama_gato',
      audioCue: 'Ronroneo cálido y reconfortante de mamá',
      text: 'Mamá te da una suave caricia con su lengua en la frente para limpiarte el agua.\n— Prrrr... Miau —te ronronea muy bajito, como diciéndote: «Quédate aquí quieto, pequeño. Voy a buscar algo para comer».',
      html: 'Mamá te da una suave caricia con su lengua en la frente para limpiarte el agua.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Prrrr... Miau</em> —te ronronea muy bajito, como diciéndote: «Quédate aquí quieto, pequeño. Voy a buscar algo para comer».</span>',
      choices: [
        { label: 'Quedarte en el nido esperando su regreso', next: 'S04' }
      ]
    },
    {
      number: 4,
      id: 'S04',
      title: 'El Frío que se Queda',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Silencio helado y goteo más denso',
      text: 'Pasa un largo rato. El calor que mamá dejó en la caja de cartón desaparece por completo. El aire del callejón se siente cada vez más helado y silencioso. Tu mamá nunca se había demorado tanto tiempo.',
      choices: [
        { label: 'Sacar la nariz fuera de la caja para buscar su olor', next: 'S05' }
      ]
    },
    {
      number: 5,
      id: 'S05',
      title: 'Siguiendo el Rastro',
      act: 'acto-1',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Roce metálico ligero de bigotes contra latas vacías',
      text: 'Entre el olor a basura mojada y charcos de barro, logras captar un aroma suave y conocido: es el olor a leche y pelaje limpio de mamá. Caminas con torpeza hacia la salida del callejón, chocando los bigotes contra latas vacías.',
      choices: [
        { label: 'Seguir caminando despacio hacia donde va el rastro', next: 'S06' }
      ]
    },
    {
      number: 6,
      id: 'S06',
      title: 'El Golpe en la Avenida',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      tension: 'impact',
      audioCue: '¡¡SKRRRRRCH!! ¡¡PUM!! Frenazo brusco e impacto seco',
      text: '¡¡SKRRRRRCH!! ¡¡PUM!! Un frenazo desgarrador de llantas rechina contra el asfalto mojado, seguido de un golpe durísimo justo en la esquina. El suelo tiembla. De golpe, un olor quemado a llantas y humo invade el aire, y todo queda en un silencio aterrador.',
      html: '<span class="vn-onomatopoeia block mb-1">¡¡SKRRRRRCH!! ¡¡PUM!!</span>Un frenazo desgarrador de llantas rechina contra el asfalto mojado, seguido de un golpe durísimo justo en la esquina. El suelo tiembla. De golpe, un olor quemado a llantas y humo invade el aire, y todo queda en un silencio aterrador.',
      choices: [
        { label: 'Parar en seco con todo el pelaje erizado', next: 'S07' }
      ]
    },
    {
      number: 7,
      id: 'S07',
      title: '¿Huir o Buscar?',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D01',
      tension: 'uneasy',
      audioCue: 'Silencio tenso y latido acelerado',
      text: 'El fuerte ruido ocurrió justo donde iba el olor de mamá. Sabes que la calle es peligrosa para un gatito ciego, pero tu corazón te pide no dejarla sola. ¿Qué camino vas a tomar?',
      choices: [
        {
          label: '¡Insistir en tu búsqueda! (Avanzar hacia la calle)',
          next: 'S08',
          state: { reaccion: 'buscar' }
        },
        {
          label: '¡Huir a tu refugio! (Correr asustado de vuelta a la caja)',
          next: 'S17',
          state: { reaccion: 'huir' }
        }
      ]
    },

    // ==================== ACTO II-A: LA BÚSQUEDA Y EL GATO GUÍA (S08 – S12) ====================
    {
      number: 8,
      id: 'S08',
      title: 'El Rastro en la Carretera',
      act: 'acto-2a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Goteo sobre el asfalto áspero y silencio tenso',
      text: 'El miedo te hace temblar las patas, pero sigues adelante. Sales del callejón y sientes el cambio en el suelo: de las piedras mojadas pasas al asfalto áspero de la calle. El olor de mamá es fuertísimo aquí mismo.',
      choices: [
        { label: 'Caminar con cuidado hacia donde está el olor', next: 'S09' }
      ]
    },
    {
      number: 9,
      id: 'S09',
      title: 'El Cuerpo en el Suelo',
      act: 'acto-2a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Silencio absoluto; ausencia de respiración y ronroneo',
      text: 'Tus patitas chocan con algo peludo en el piso. Te acercas emocionado frotando tu cabeza, buscando su calor protector... pero este cuerpo no se mueve. No respira y está completamente frío. Mamá siempre era tibia y cariñosa; esto no es mamá.',
      choices: [
        { label: 'Alejarte despacio con mucha tristeza', next: 'S10' }
      ]
    },
    {
      number: 10,
      id: 'S10',
      title: 'Cruzando al Otro Lado',
      act: 'acto-2a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Voces lejanas lamentándose y puertas de autos cerrándose',
      text: 'Escuchas a lo lejos la voz de una persona lamentándose y puertas de autos cerrándose. Por suerte, los carros están detenidos. Das pasos torpes hasta subir el andén de enfrente, sintiéndote completamente solo en el mundo.',
      choices: [
        { label: 'Subir el andén y sacudirte el agua de la cara', next: 'S11' }
      ]
    },
    {
      number: 11,
      id: 'S11',
      title: 'Un Roce Desconocido',
      act: 'acto-2a',
      speaker: 'GATO GUÍA',
      speakerType: 'gato_guia',
      audioCue: 'Ronroneo rítmico y parejo de otro felino',
      text: 'De pronto, un lomo ágil se frota contra ti con suavidad. Huele a tejados y a comida callejera.\n— Prrrr... Prrrr... Miau —ronronea con un ritmo parejo y calmado, como si quisiera que escuches exactamente por dónde camina.',
      html: 'De pronto, un lomo ágil se frota contra ti con suavidad. Huele a tejados y a comida callejera.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Prrrr... Prrrr... Miau</em> —ronronea con un ritmo parejo y calmado, como si quisiera que escuches exactamente por dónde camina.</span>',
      choices: [
        { label: 'Prestar atención a su ronroneo', next: 'S12' }
      ]
    },
    {
      number: 12,
      id: 'S12',
      title: 'La Ayuda del Compañero',
      act: 'acto-2a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D02',
      audioCue: 'Ronroneo constante frente al viento frío de la calle',
      text: 'El gato adulto da unos pasos hacia un pasaje estrecho y se detiene a esperarte, ronroneando para que lo sigas. No sabes a dónde te llevará. ¿Prefieres confiar en este extraño o seguir tu camino solo?',
      choices: [
        {
          label: 'Recibir la ayuda de este repentino guía felino',
          next: 'S13',
          state: { guia: 'gato' }
        },
        {
          label: 'Escoger un camino solitario (Rechazar su ayuda)',
          next: 'S27',
          state: { guia: 'ninguno' }
        }
      ]
    },

    // ==================== SUB-RAMA GATO: EL CALLEJÓN PROTEGIDO (S13 – S16) ====================
    {
      number: 13,
      id: 'S13',
      title: 'Caminando al Compás',
      act: 'rama-gato',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Pasos ligeros y ronroneo continuo lejos del tráfico',
      text: 'Decides confiar en él. El gato camina despacio a tu lado y no deja de ronronear para que no pierdas su rastro. Te guía con destreza por atajos estrechos, lejos del ruido ensordecedor de los carros y de los charcos más hondos.',
      choices: [
        { label: 'Mantenerte pegado a su ritmo de caminata', next: 'S14' }
      ]
    },
    {
      number: 14,
      id: 'S14',
      title: 'La Despedida del Amigo',
      act: 'rama-gato',
      speaker: 'GATO GUÍA',
      speakerType: 'gato_guia',
      audioCue: 'Maullido dulce y eco metálico sobre la reja alta',
      text: 'Al llegar a la entrada de un callejón techado, el gato se frena. Te da un suave cabezazo de despedida en el cuello.\n— Miau —dice con dulzura antes de trepar por una reja alta y desaparecer en la noche. Te ha dejado en un lugar protegido.',
      html: 'Al llegar a la entrada de un callejón techado, el gato se frena. Te da un suave cabezazo de despedida en el cuello.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Miau</em> —dice con dulzura antes de trepar por una reja alta y desaparecer en la noche. Te ha dejado en un lugar protegido.</span>',
      choices: [
        { label: 'Olfatear el aire de este nuevo callejón', next: 'S15' }
      ]
    },
    {
      number: 15,
      id: 'S15',
      title: 'El Aroma Familiar',
      act: 'rama-gato',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Silencio protegido; lluvia amortiguada sobre el techo',
      text: 'Aquí adentro la lluvia no te moja. Al respirar profundo, sientes un olor conocido y delicioso: atún en lata. Es modesto, sencillo y huele exactamente a lo que mamá solía traerte cuando lograba conseguir comida.',
      choices: [
        { label: 'Explorar el interior del pasaje', next: 'S16' }
      ]
    },
    {
      number: 16,
      id: 'S16',
      title: 'La Quietud del Callejón',
      act: 'rama-gato',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D04',
      audioCue: 'Calma del pasaje techado frente a risas lejanas en la esquina',
      text: 'El olor a atún viene del fondo, pero el lugar está muy callado. Más allá en la esquina se escuchan risas y olores a comida más abundante. ¿Te quedas a buscar en este callejón seguro o desconfías y sales a investigar la otra calle?',
      choices: [
        {
          label: 'Te quedas en el callejón (Seguir el olor a atún)',
          next: 'S35',
          state: { rastro_alimento: 'atun', destino: 'F01' }
        },
        {
          label: 'Desconfías y te vas (Salir a buscar otra comida)',
          next: 'S47',
          state: { rastro_alimento: 'salmon', destino: 'F02' }
        }
      ]
    },

    // ==================== ACTO II-B: EL PÁNICO Y EL PERRO SALVADOR (S17 – S23) ====================
    {
      number: 17,
      id: 'S17',
      title: 'La Huida Desesperada',
      act: 'acto-2b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      tension: 'uneasy',
      audioCue: 'Respiración agitada y crujido de cartón empapado',
      text: 'El ruido del choque te asusta tanto que das media vuelta y sales corriendo como puedes. Chocas contra cajas y bolsas hasta meterte bien al fondo de tu nido de cartón. Te haces una bolita temblorosa con las orejas gachas.',
      choices: [
        { label: 'Esperar en silencio a que pase el peligro', next: 'S18' }
      ]
    },
    {
      number: 18,
      id: 'S18',
      title: 'El Hambre Obliga a Moverse',
      act: 'acto-2b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Silencio opresivo y goteo monótono fuera de la caja',
      text: 'Pasan las horas y el ruido de la calle se calma, pero nadie regresa por ti. Tienes el estómago adolorido por el hambre y las patitas entumecidas por la humedad. Si te quedas ahí encerrado, no vas a resistir el frío.',
      choices: [
        { label: 'Salir a tientas por el otro lado del callejón', next: 'S19' }
      ]
    },
    {
      number: 19,
      id: 'S19',
      title: 'Al Borde del Peligro',
      act: 'acto-2b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      tension: 'uneasy',
      audioCue: 'Rugido cercano de motores veloces y brisa cortante',
      text: 'Caminas rozando la pared con tus bigotes para guiarte. De pronto, la pared se termina. Das un paso hacia adelante sin saber que el andén se acabó y que estás a punto de caer directo al paso de los vehículos veloces.',
      choices: [
        { label: 'Intentar frenar las patitas en el borde', next: 'S20' }
      ]
    },
    {
      number: 20,
      id: 'S20',
      title: 'El Viento del Camión y la Mordida',
      act: 'acto-2b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      tension: 'impact',
      audioCue: '¡¡FROOOOSH!! Paso veloz de camión y sujeción protectora',
      text: '¡¡FROOOOSH!! Un camión pasa volando a milímetros de tu nariz, levantando una brisa helada que casi te voltea. Pero antes de que caigas al pavimento, unos dientes grandes y firmes te agarran con cuidado por el pellejo del cuello y te levantan en el aire.',
      html: '<span class="vn-onomatopoeia block mb-1">¡¡FROOOOSH!!</span>Un camión pasa volando a milímetros de tu nariz, levantando una brisa helada que casi te voltea. Pero antes de que caigas al pavimento, unos dientes grandes y firmes te agarran con cuidado por el pellejo del cuello y te levantan en el aire.',
      choices: [
        { label: 'Quedarte quieto sintiendo que te apartan del peligro', next: 'S21' }
      ]
    },
    {
      number: 21,
      id: 'S21',
      title: 'El Gigante de Pelaje Mojado',
      act: 'acto-2b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Respiración honda y cálida de un animal grande',
      text: 'Los dientes te sueltan con delicadeza sobre el piso seco. No te duele nada. Alzas el hocico para entender quién es: no huele a gato, huele a pelo grueso mojado por la lluvia, a tierra y a cuero. Es un animal muy grande.',
      choices: [
        { label: 'Frotar tu cabeza tímidamente contra su pata delantera', next: 'S22' }
      ]
    },
    {
      number: 22,
      id: 'S22',
      title: 'La Voz del Perro',
      act: 'acto-2b',
      speaker: 'PERRO SALVADOR',
      speakerType: 'perro_salvador',
      audioCue: '¡¡GUAU!! Ladrido grave y protector',
      text: '¡¡GUAU!! El ladrido es hondo y hace retumbar tu pechito, pero no suena enojado; suena como una llamada de atención de un adulto protector diciéndote: «¡Cuidado, pequeñajo! Casi no la cuentas». El perro da la vuelta y empieza a caminar despacio.',
      html: '<span class="vn-onomatopoeia block mb-1">¡¡GUAU!!</span>El ladrido es hondo y hace retumbar tu pechito, pero no suena enojado; suena como una llamada de atención de un adulto protector diciéndote: «¡Cuidado, pequeñajo! Casi no la cuentas». El perro da la vuelta y empieza a caminar despacio.',
      choices: [
        { label: 'Seguir el sonido pesado de sus pasos', next: 'S23' }
      ]
    },
    {
      number: 23,
      id: 'S23',
      title: '¿Seguir al Perro?',
      act: 'acto-2b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D03',
      audioCue: 'Pasos pausados del perro frente al silbido del viento en una reja',
      text: 'Ese perro gigante acaba de salvarte la vida. Camina a paso lento esperando ver si vas detrás de él. ¿Confías en su tamaño para que te cuide, o te da miedo y prefieres meterte por un hueco tú solo?',
      choices: [
        {
          label: 'Sigues al canino (Aceptar la compañía del perro)',
          next: 'S24',
          state: { guia: 'perro' }
        },
        {
          label: 'Ignoras a tu salvador (Escapar asustado por tu cuenta)',
          next: 'S31',
          state: { guia: 'ninguno' }
        }
      ]
    },

    // ==================== SUB-RAMA PERRO: LA ESCOLTA HACIA EL CRUCE (S24 – S26) ====================
    {
      number: 24,
      id: 'S24',
      title: 'Escoltado por el Canino',
      act: 'rama-perro',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Sonido rítmico de garras sobre piedra: tac... tac... tac...',
      text: 'Caminas muy pegado a la pata del perro. Su cuerpo ancho te tapa el viento helado como si fuera una pared tibia. Sus garras hacen un sonido rítmico: tac... tac... tac... contra el suelo de piedra, guiándote sin que te pierdas.',
      html: 'Caminas muy pegado a la pata del perro. Su cuerpo ancho te tapa el viento helado como si fuera una pared tibia. Sus garras hacen un sonido rítmico: <em class="vn-sound-whisper font-semibold">tac... tac... tac...</em> contra el suelo de piedra, guiándote sin que te pierdas.',
      choices: [
        { label: 'Avanzar al ritmo de sus pisadas firmes', next: 'S25' }
      ]
    },
    {
      number: 25,
      id: 'S25',
      title: 'El Arco Seguro',
      act: 'rama-perro',
      speaker: 'PERRO SALVADOR',
      speakerType: 'perro_salvador',
      audioCue: 'Bufido cálido y pasos caninos alejándose bajo la lluvia',
      text: 'El perro se detiene bajo un arco techado de piedra donde no cae ni una gota. Te da un pequeño empujón con su hocico húmedo para meterte al centro y suelta un bufido caliente: «Hasta aquí llego yo, enano. Ahora te toca a ti». Da la vuelta y se marcha.',
      choices: [
        { label: 'Adentrarte en el cruce protegido', next: 'S26' }
      ]
    },
    {
      number: 26,
      id: 'S26',
      title: 'En la Encrucijada',
      act: 'rama-perro',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Silbido suave de corrientes cruzadas y rugido de estómago',
      text: 'Estás sano y salvo gracias al perro. Te encuentras en un cruce donde chocan varias corrientes de aire. Tu estómago vuelve a rugir desesperado: necesitas encontrar alimento pronto.',
      choices: [
        { label: 'Alzar el hocico para analizar los olores en el aire', next: 'S27' }
      ]
    },

    // ==================== ACTO III: LA ENCRUCIJADA OLFATIVA (S27 – S30) ====================
    {
      number: 27,
      id: 'S27',
      title: 'El Mapa en la Imaginación',
      act: 'acto-3',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Silencio concentrado; respiración profunda',
      text: 'Como tus ojos no pueden ver la calle, cierras tus otros sentidos para concentrarte solo en la nariz. En tu cabecita, los olores que trae el viento empiezan a dibujarse como cintas de humo de colores flotando en el aire.',
      choices: [
        { label: 'Concentrarte en descifrar los dos caminos de olor', next: 'S28' }
      ]
    },
    {
      number: 28,
      id: 'S28',
      title: 'Las Dos Cintas de Color',
      act: 'acto-3',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Dos corrientes olfativas flotan en el aire nocturno',
      text: 'Hacia un lado flota una cinta naranja brillante: despide un olor fuertísimo, grasoso y muy llamativo a salmón crudo de restaurante.\nHacia el otro lado flota una cinta azul delgada y modesta: huele suavemente a lata humilde y a atún, justo como la comida sencilla que mamá siempre compartía contigo.',
      html: 'Hacia un lado flota una <strong>cinta naranja brillante</strong>: despide un olor fuertísimo, grasoso y muy llamativo a salmón crudo de restaurante.<br><span class="block mt-1.5">Hacia el otro lado flota una <strong>cinta azul delgada y modesta</strong>: huele suavemente a lata humilde y a atún, justo como la comida sencilla que mamá siempre compartía contigo.</span>',
      choices: [
        { label: 'Notar cómo el viento empieza a soplar más rápido', next: 'S29' }
      ]
    },
    {
      number: 29,
      id: 'S29',
      title: 'La Ráfaga que se Acerca',
      act: 'acto-3',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Ráfaga fría sacudiendo el callejón',
      text: 'Una corriente de aire frío sacude el callejón y empieza a desarmar las cintas de olor. Tienes que elegir rápido qué camino vas a seguir antes de que el viento se lleve los aromas y te quedes a oscuras sin guía.',
      choices: [
        { label: 'Decidir qué rastro vas a seguir con tu nariz', next: 'S30' }
      ]
    },
    {
      number: 30,
      id: 'S30',
      title: '¿Qué Rastro Elegir?',
      act: 'acto-3',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D05',
      audioCue: 'Silencio expectante entre dos rastros de olor',
      text: '¿Qué rastro vas a seguir? ¿La modesta cinta azul que te recuerda al cuidado sencillo de mamá, o la brillante cinta naranja que promete un banquete gigante?',
      choices: [
        {
          label: 'Desenredar la cinta azul y modesta a atún',
          next: 'S35',
          state: { rastro_alimento: 'atun', destino: 'F01' }
        },
        {
          label: 'Desenredar la cinta naranja y codiciosa a salmón',
          next: 'S47',
          state: { rastro_alimento: 'salmon', destino: 'F02' }
        }
      ]
    },

    // ==================== SUB-RAMA EXTRAVÍO: EL AISLAMIENTO (S31 – S34) ====================
    {
      number: 31,
      id: 'S31',
      title: 'Escape por las Rejas',
      act: 'rama-extravio',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Bufido felino y quejido triste del perro tras la reja',
      text: 'El tamaño del perro te asusta demasiado. Pegas un brinco hacia atrás bufando con desconfianza y te metes a la fuerza por los barrotes de una reja oxidada. Escuchas al perro quejarse como si sintiera pena por ti, pero se queda atrás.',
      choices: [
        { label: 'Arrastrarte por el lodo en completa soledad', next: 'S32' }
      ]
    },
    {
      number: 32,
      id: 'S32',
      title: 'Entre Paredes Frías',
      act: 'rama-extravio',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Roce metálico de alambres viejos y goteo helado',
      text: 'Caminas rozando las paredes llenas de moho y alambres viejos. Roce... roce... Te lastimas la punta de las orejas y el agua gotea directo sobre tu cabeza. No hay ningún ruido amigable; estás completamente desorientado.',
      html: 'Caminas rozando las paredes llenas de moho y alambres viejos. <em class="vn-sound-whisper font-semibold">Roce... roce...</em> Te lastimas la punta de las orejas y el agua gotea directo sobre tu cabeza. No hay ningún ruido amigable; estás completamente desorientado.',
      choices: [
        { label: 'Continuar avanzando a pesar del cansancio', next: 'S33' }
      ]
    },
    {
      number: 33,
      id: 'S33',
      title: 'La Tentación Desesperada',
      act: 'rama-extravio',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Respiración entrecortada en callejón sin salida',
      text: 'Ya casi no puedes tenerte en pie. De pronto, un golpe de olor fuerte y pesado a restos de pescado crudo te pega en la nariz. Sale de unas bolsas tiradas en un rincón oscuro detrás de un callejón sin salida.',
      choices: [
        { label: 'Dejarte llevar por el hambre desesperada', next: 'S34' }
      ]
    },
    {
      number: 34,
      id: 'S34',
      title: 'Corriendo a Ciegas al Basurero',
      act: 'rama-extravio',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Crujido de bolsas plásticas rasgadas sobre el suelo húmedo',
      text: 'Sin fijarte por dónde pisas ni pensar en nada más que en llenar tu barriga, corres a tientas hacia las bolsas de basura de un restaurante de sushi. Te lanzas directo sobre los desperdicios.',
      choices: [
        { label: 'Tragar las sobras frías del suelo', next: 'S47' }
      ]
    },

    // ==================== ACTO IV-A: FINAL BUENO F01 (S35 – S46) ====================
    {
      number: 35,
      id: 'S35',
      title: 'La Lata en el Callejón',
      act: 'acto-4a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Silencio apacible bajo techo; lluvia muy lejana',
      text: 'Sigues el olor modesto y tranquilo a atún. Caminas por un pasaje seco hasta tropezar con una latita apoyada en el suelo. Tiene comida fresca y sus bordes están doblados con mucho cuidado para que ningún animalito se corte la lengua.',
      choices: [
        { label: 'Comer todo el atún con calma hasta dejar limpia la lata', next: 'S36' }
      ]
    },
    {
      number: 36,
      id: 'S36',
      title: 'El Choque con lo Desconocido',
      act: 'acto-4a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Respiración humana suave, pausada y cercana',
      text: 'Con la barriguita llena y reconfortada, das un par de pasos hacia un lado para buscar dónde descansar. De pronto, tu frente choca suavemente contra algo al lado de la lata. Es suave, huele a ropa limpia y no se mueve con violencia.',
      choices: [
        { label: 'Frotar tu hocico contra esa superficie tibia', next: 'S37' }
      ]
    },
    {
      number: 37,
      id: 'S37',
      title: 'La Niña que Espera',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      audioCue: 'Vocecita infantil suave y temblorosa',
      text: 'Escuchas una vocecita temblorosa muy cerca de tus orejas.\n— ¿Hola?... ¿Quién está ahí? ¿Fuiste tú el que se comió la latita de atún que dejé? —dice una niña sentada en el suelo, que está perdida y esperando que su familia la encuentre.',
      html: 'Escuchas una vocecita temblorosa muy cerca de tus orejas.<br><span class="block mt-1.5">— «¿Hola?... ¿Quién está ahí? ¿Fuiste tú el que se comió la latita de atún que dejé?» —dice una niña sentada en el suelo, que está perdida y esperando que su familia la encuentre.</span>',
      choices: [
        { label: 'Trepar despacio hacia su regazo buscando calor', next: 'S38' }
      ]
    },
    {
      number: 38,
      id: 'S38',
      title: 'El Sueño en el Regazo',
      act: 'acto-4a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Respiración tranquila y latido sereno',
      text: 'No entiendes lo que dice, pero sientes su calor humano en medio de este frío que casi te congela. Subes tus patitas a su regazo de lana, das dos vueltas sobre ti mismo y te quedas profundamente dormido después de tantas horas de miedo.',
      choices: [
        { label: 'Quedarte dormido mientras afuera suenan voces', next: 'S39' }
      ]
    },
    {
      number: 39,
      id: 'S39',
      title: 'Pasos Rápidos en el Agua',
      act: 'acto-4a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Chapoteos apresurados de botas en charcos cercanos',
      text: 'Entre tu sueño profundo, sientes que el agua de los charcos afuera salpica por pasos de botas que corren a toda prisa hacia el callejón. Una sombra agitada se detiene justo frente a ustedes.',
      choices: [
        { label: 'Entreabrir las orejas adormiladas', next: 'S40' }
      ]
    },
    {
      number: 40,
      id: 'S40',
      title: 'El Alivio de la Madre',
      act: 'acto-4a',
      speaker: 'MAMÁ DE LA NIÑA',
      speakerType: 'mama_nina',
      audioCue: 'Sollozos de alivio y abrazo materno',
      text: 'Una mujer se arrodilla de golpe en el suelo y abraza con fuerza a la pequeña, llorando de pura alegría.\n— ¡Hija mía! ¡Dios mío, aquí estás! ¡Estaba desesperada buscándote por todas partes con esta lluvia! ¿Estás bien? ¿No te pasó nada?',
      html: 'Una mujer se arrodilla de golpe en el suelo y abraza con fuerza a la pequeña, llorando de pura alegría.<br><span class="block mt-1.5">— «¡Hija mía! ¡Dios mío, aquí estás! ¡Estaba desesperada buscándote por todas partes con esta lluvia! ¿Estás bien? ¿No te pasó nada?»</span>',
      choices: [
        { label: 'Sentir el abrazo cálido que las une', next: 'S41' }
      ]
    },
    {
      number: 41,
      id: 'S41',
      title: 'El Ruego de la Pequeña',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      audioCue: 'Voz infantil dulce y suplicante',
      text: 'La niña abraza a su mamá sin soltarte de su pecho. Con su manita acaricia tu pelaje y le pide con mucha ilusión:\n— ¡Mamá, estoy bien! Mira... este gatito vino a darme calor cuando tenía mucho miedo. ¡Por favor, no lo dejemos aquí en la calle! ¡Llevémoslo con nosotras!',
      html: 'La niña abraza a su mamá sin soltarte de su pecho. Con su manita acaricia tu pelaje y le pide con mucha ilusión:<br><span class="block mt-1.5">— «¡Mamá, estoy bien! Mira... este gatito vino a darme calor cuando tenía mucho miedo. ¡Por favor, no lo dejemos aquí en la calle! ¡Llevémoslo con nosotras!»</span>',
      choices: [
        { label: 'Escuchar la respuesta de la madre', next: 'S42' }
      ]
    },
    {
      number: 42,
      id: 'S42',
      title: 'La Duda de la Madre',
      act: 'acto-4a',
      speaker: 'MAMÁ DE LA NIÑA',
      speakerType: 'mama_nina',
      audioCue: 'Suspiro suave y voz compasiva',
      text: 'La mujer acaricia la cabeza de su hija, algo indecisa mientras mira al animalito mojado.\n— Cariño... ya sabes que un gatito de la calle necesita muchos cuidados. Pero... a ver, déjame verlo de cerca... pobrecito, ven acá.',
      html: 'La mujer acaricia la cabeza de su hija, algo indecisa mientras mira al animalito mojado.<br><span class="block mt-1.5">— «Cariño... ya sabes que un gatito de la calle necesita muchos cuidados. Pero... a ver, déjame verlo de cerca... pobrecito, ven acá».</span>',
      choices: [
        { label: 'Dejar que la señora te tome con ternura entre sus manos', next: 'S43' }
      ]
    },
    {
      number: 43,
      id: 'S43',
      title: 'Los Ojos que Parpadean',
      act: 'acto-4a',
      speaker: 'MAMÁ DE LA NIÑA',
      speakerType: 'mama_nina',
      audioCue: 'Voz llena de ternura y asombro',
      text: 'La madre te levanta suavemente a la altura de su rostro. Al mirarte fijamente, su voz se llena de ternura y sorpresa.\n— Hija... mira esto. Toca su carita con cuidado... Este gatito es igual a ti: tampoco puede ver. Pero mira cómo parpadea sus ojitos a cada momento hacia todos lados, como si estuviera buscando la luz.',
      html: 'La madre te levanta suavemente a la altura de su rostro. Al mirarte fijamente, su voz se llena de ternura y sorpresa.<br><span class="block mt-1.5">— «Hija... mira esto. Toca su carita con cuidado... Este gatito es igual a ti: tampoco puede ver. Pero mira cómo parpadea sus ojitos a cada momento hacia todos lados, como si estuviera buscando la luz».</span>',
      choices: [
        { label: 'Sentir las manitas de la niña tocando tus párpados', next: 'S44' }
      ]
    },
    {
      number: 44,
      id: 'S44',
      title: 'La Promesa de la Niña',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      audioCue: 'Sonrisa conmovida y abrigo de manta tibia',
      text: 'La pequeña pasa sus deditos por tus ojos cerrados con muchísimo cariño y sonríe conmovida.\n— ¿Es ciego como yo, mami?... Entonces se viene a casa para siempre. Yo lo voy a cuidar, te lo prometo.',
      html: 'La pequeña pasa sus deditos por tus ojos cerrados con muchísimo cariño y sonríe conmovida.<br><span class="block mt-1.5">— «¿Es ciego como yo, mami?... Entonces se viene a casa para siempre. Yo lo voy a cuidar, te lo prometo».</span>',
      choices: [
        { label: 'Acurrucarte en su pecho mientras te abrigan con una manta', next: 'S45' }
      ]
    },
    {
      number: 45,
      id: 'S45',
      title: 'El Bautizo',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      musicTrack: 'final_bueno',
      audioCue: '♫ «Hijo del corazón, deja ya de llorar» (melodía suave de cuna)',
      text: 'La niña te abraza fuerte contra su abrigo mientras caminan rumbo a tu nuevo hogar y te susurra al oído:\n«No ves, pero tus ojos parpadean buscando la luz a cada instante... De ahora en adelante nunca más estarás solo. Te llamarás Blinky».',
      html: 'La niña te abraza fuerte contra su abrigo mientras caminan rumbo a tu nuevo hogar y te susurra al oído:<br><span class="block mt-1.5 font-semibold text-amber-100">«No ves, pero tus ojos parpadean buscando la luz a cada instante... De ahora en adelante nunca más estarás solo. Te llamarás Blinky».</span>',
      choices: [
        { label: 'Ronronear feliz sabiendo que encontraste una familia', next: 'S46' }
      ]
    },
    {
      number: 46,
      id: 'S46',
      title: 'Cierre del Final Óptimo',
      act: 'acto-4a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      isEnding: 'F01',
      musicTrack: 'final_bueno',
      audioCue: '♫ Compases finales de «Hijo del corazón, deja ya de llorar»',
      text: 'Supiste confiar en los que te ayudaron y tuviste paciencia para no dejarte tentar por comidas engañosas. Ahora Blinky duerme en una cama caliente y con amor de verdad.',
      choices: [
        { label: 'Volver a la portada de la novela visual', next: 'S01', isRestart: true }
      ]
    },

    // ==================== ACTO IV-B: FINAL MALO F02 (S47 – S52) ====================
    {
      number: 47,
      id: 'S47',
      title: 'Las Sobras Grasosas',
      act: 'acto-4b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Goteo pesado sobre contenedores metálicos',
      text: 'Llegas al basurero detrás de un restaurante de sushi. Comes con desesperación restos congelados de pieles de salmón y arroz duro tirado en el suelo. Llenas tu barriga rápidamente, pero la comida fría te produce un dolor pesado por dentro.',
      choices: [
        { label: 'Buscar desesperadamente un lugar caliente para no temblar', next: 'S48' }
      ]
    },
    {
      number: 48,
      id: 'S48',
      title: 'El Temblor del Cuerpo',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Viento helado de madrugada y temblor continuo',
      text: 'El viento de la madrugada te empapa los costados y el cansancio hace que tus patas se doblen. La comida fría no te da energía. Sientes que si no encuentras el calor de un cuerpo vivo en los próximos minutos, te vas a quedar congelado en el barro.',
      choices: [
        { label: 'Buscar en el aire cualquier vibración que te recuerde a mamá', next: 'S49' }
      ]
    },
    {
      number: 49,
      id: 'S49',
      title: 'El Zumbido en el Suelo',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Hmmmmmmmm... Zumbido constante y rígido a ras del suelo',
      text: 'Hmmmmmmmm... De repente, sientes que el piso tiembla con un ritmo constante. Una ráfaga tibia de aire te roza la nariz. Te llenas de alegría pensando: «¡Ese ritmo que vibra... tiene que ser el ronroneo de mamá esperándome!».',
      html: '<em class="vn-sound-whisper font-semibold">Hmmmmmmmm...</em> De repente, sientes que el piso tiembla con un ritmo constante. Una ráfaga tibia de aire te roza la nariz. Te llenas de alegría pensando: «¡Ese ritmo que vibra... tiene que ser el ronroneo de mamá esperándome!».',
      choices: [
        { label: 'Correr emocionado a frotarte contra ella', next: 'S50' }
      ]
    },
    {
      number: 50,
      id: 'S50',
      title: 'El Choque con el Metal',
      act: 'acto-4b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      tension: 'impact',
      audioCue: '¡¡CLANC!! Choque seco contra fierro oxidado y zumbido eléctrico',
      text: '¡¡CLANC!! Te tiras de golpe esperando encontrar el pelaje suave de mamá, pero tu cabeza choca con fuerza contra una reja de fierro duro y oxidado. Huele a cables quemados, polvo y aceite viejo. No es un ser vivo; es un aparato eléctrico dañado.',
      html: '<span class="vn-onomatopoeia block mb-1">¡¡CLANC!!</span>Te tiras de golpe esperando encontrar el pelaje suave de mamá, pero tu cabeza choca con fuerza contra una reja de fierro duro y oxidado. Huele a cables quemados, polvo y aceite viejo. No es un ser vivo; es un aparato eléctrico dañado.',
      choices: [
        { label: 'Olfatear el suelo bajo la máquina para entender dónde estás', next: 'S51' }
      ]
    },
    {
      number: 51,
      id: 'S51',
      title: 'Caminando en Círculos',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Zumbido eléctrico monótono bajo la lluvia incesante',
      text: 'Pones la nariz en el lodo. Reconoces el olor de tus propias huellas: caminaste en círculos durante horas para terminar en el mismo callejón donde empezó todo. El aparato viejo vibra tirando un poco de calor falso entre las latas.',
      choices: [
        { label: 'Rendirte y echarte pegado al metal', next: 'S52' }
      ]
    },
    {
      number: 52,
      id: 'S52',
      title: 'Cierre del Final Malo',
      act: 'acto-4b',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      isEnding: 'F02',
      musicTrack: 'final_triste',
      audioCue: '♫ «500 Miles» (Peter, Paul and Mary) junto a lluvia apagada',
      text: 'Desconfiar de la ayuda y dejarte ganar por el hambre fácil te llevó a un callejón sin salida. Sin fuerzas para levantarte, te quedas dormido pegado al metal que vibra, conformándote con su calor artificial mientras la lluvia cae en la noche.',
      choices: [
        { label: 'Reiniciar la historia para probar otras decisiones', next: 'S01', isRestart: true }
      ]
    }
  ];

  // Mapa indexado por ID + rutas genéricas images/s(n).png y audio/s(n).mp3
  const SCREENS = {};
  SCREENS_LIST.forEach((screen) => {
    screen.image = `images/s${screen.number}.png`;
    screen.audioFile = `audio/s${screen.number}.mp3`;
    SCREENS[screen.id] = screen;
  });

  return {
    TITLE: "Blinky's Blind Heart",
    TOTAL_SCREENS: SCREENS_LIST.length,
    START_ID: 'S01',
    ACTS,
    SCREENS_LIST,
    SCREENS
  };
})();
