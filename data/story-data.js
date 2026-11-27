/* ==========================================================================
   Blinky's Blind Heart — Arquitectura Narrativa Completa (S01 a S52)
   Versión 4.0: Continuidad literaria causa-efecto en todos los actos.
   Protagonista: Blinky (gatito macho invidente).
   Imágenes genéricas: images/s1.png ... images/s52.png (+ frames one-shot).
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
      title: 'El Mundo a Oscuras',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Lluvia constante golpeando cartón húmedo',
      text: 'Nunca has visto la ciudad ni sabes qué forma tiene la noche. Para un gatito ciego como tú, el mundo entero cabe en tres cosas: el golpeteo de la lluvia sobre el cartón húmedo, el frío que se cuela por las rendijas y el calor tibio del cuerpo de tu mamá a tu lado.',
      choices: [
        { label: 'Acurrucarte más fuerte contra el calor de mamá', next: 'S02' }
      ]
    },
    {
      number: 2,
      id: 'S02',
      title: 'Un Latido Inquieto',
      act: 'acto-1',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Rugido suave de estómago y lluvia en la entrada',
      frames: [
        { src: 'images/s1.png', delay: 0, transition: 'cut' },
        { src: 'images/s2.png', delay: 650, transition: 'fade' }
      ],
      text: 'Hundes la nariz en su pelaje buscando abrigo… pero su cuerpo ya no está recostado. Sientes sus músculos tensos junto a la entrada del cartón: mamá está sentada, muy alerta hacia la lluvia. En ese instante, tu barriguita suelta un Grrr... vacío que te hace encoger las patitas.',
      html: 'Hundes la nariz en su pelaje buscando abrigo… pero su cuerpo ya no está recostado. Sientes sus músculos tensos junto a la entrada del cartón: mamá está sentada, muy alerta hacia la lluvia. En ese instante, tu barriguita suelta un <em class="vn-sound-whisper font-semibold">Grrr...</em> vacío que te hace encoger las patitas.',
      choices: [
        { label: 'Pegar la oreja a su pecho para escucharla', next: 'S03' }
      ]
    },
    {
      number: 3,
      id: 'S03',
      title: 'La Promesa en un Ronroneo',
      act: 'acto-1',
      speaker: 'MAMÁ GATO',
      speakerType: 'mama_gato',
      audioCue: 'Ronroneo cálido y maullido suave de mamá',
      text: 'Al sentirte temblar contra su costado, inclina la cabeza y pasa su lengua áspera por tu frente para secarte el agua.\n— Prrrr... Miau —su ronroneo vibra despacio contra tus costillas, como una promesa clara: «Quédate aquí quieto, pequeño. Voy a buscar algo para comer y vuelvo enseguida».',
      html: 'Al sentirte temblar contra su costado, inclina la cabeza y pasa su lengua áspera por tu frente para secarte el agua.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Prrrr... Miau</em> —su ronroneo vibra despacio contra tus costillas, como una promesa clara: «Quédate aquí quieto, pequeño. Voy a buscar algo para comer y vuelvo enseguida».</span>',
      choices: [
        { label: 'Obedecer y quedarte quieto en el cartón', next: 'S04' }
      ]
    },
    {
      number: 4,
      id: 'S04',
      title: 'El Frío que Regresa',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      audioCue: 'Pasos alejándose, brisa fría y goteo solitario',
      frames: [
        { src: 'images/s4_1.png', delay: 0, transition: 'cut' },
        { src: 'images/s4.png', delay: 1350, transition: 'fade' }
      ],
      text: 'Sus pasos suaves se pierden bajo la tormenta. Te quedas quieto tal como te pidió, contando gotas contra el cartón. Pasan los minutos… y el tibio hueco que dejó a tu lado se enfría por completo. Mamá nunca se había tardado tanto.',
      choices: [
        { label: 'Asomar el hocico fuera de la caja para buscar su olor', next: 'S05' }
      ]
    },
    {
      number: 5,
      id: 'S05',
      title: 'El Hilo de Leche y Lluvia',
      act: 'acto-1',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      audioCue: 'Roce metálico ligero de bigotes contra latas vacías',
      text: 'El viento helado te golpea la nariz, pero entre el olor a barro y basura mojada distingues su rastro intacto: leche tibia y pelaje limpio. Avanzas despacio siguiendo esa estela invisible hacia la salida del callejón, rozando latas vacías con tus bigotes.',
      choices: [
        { label: 'Seguir su rastro hasta la esquina de la avenida', next: 'S06' }
      ]
    },
    {
      number: 6,
      id: 'S06',
      title: 'El Estruendo en la Esquina',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      tension: 'impact',
      audioCue: 'Frenazo brusco de llantas sobre asfalto mojado y un golpe seco',
      frames: [
        { src: 'images/s6_1.png', delay: 0, transition: 'cut' },
        { src: 'images/s6.png', delay: 1480, transition: 'cut', shake: true },
        { src: 'images/s6_3.png', delay: 2550, transition: 'fade' }
      ],
      text: 'Justo cuando el asfalto áspero anuncia el final del callejón, un motor ruge demasiado cerca. ¡¡SKRRRRRCH!! ¡¡PUM!! Un frenazo desesperado de llantas rasga el pavimento mojado, seguido de un golpe seco. El humo a goma quemada borra el olor de mamá… y todo queda en silencio.',
      html: 'Justo cuando el asfalto áspero anuncia el final del callejón, un motor ruge demasiado cerca. <span class="vn-onomatopoeia">¡¡SKRRRRRCH!! ¡¡PUM!!</span> Un frenazo desesperado de llantas rasga el pavimento mojado, seguido de un golpe seco. El humo a goma quemada borra el olor de mamá… y todo queda en silencio.',
      choices: [
        { label: 'Quedarte helado, escuchando el silencio', next: 'S07' }
      ]
    },
    {
      number: 7,
      id: 'S07',
      title: 'Dos Caminos en la Oscuridad',
      act: 'acto-1',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      decisionCode: 'D01',
      tension: 'uneasy',
      audioCue: 'Silencio tenso y latido acelerado',
      text: 'Tus bigotes tiemblan y el silencio de la esquina pesa más que la lluvia. Hacia la avenida aún flota un último hilo del olor de mamá mezclado con humo; a tu espalda sigue intacto el refugio de cartón. ¿Qué haces?',
      choices: [
        {
          label: 'Avanzar hacia la avenida siguiendo su último olor',
          next: 'S08',
          state: { reaccion: 'buscar' }
        },
        {
          label: 'Retroceder corriendo hacia la seguridad de la caja',
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
      text: 'A pesar del temblor en tus patitas, te decides a salir del callejón siguiendo ese último hilo. El suelo cambia bajo tus almohadillas: de las piedras mojadas pasas al asfalto áspero de la avenida, donde el olor de mamá se vuelve intensísimo justo frente a ti.',
      choices: [
        { label: 'Acercarte despacio hacia donde brota su olor', next: 'S09' }
      ]
    },
    {
      number: 9,
      id: 'S09',
      title: 'El Cuerpo en el Suelo',
      act: 'acto-2a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      musicTrack: 'piano_melancolico',
      audioCue: 'Silencio absoluto; ausencia de respiración y ronroneo',
      text: 'A pocos pasos, tus patitas chocan con un bulto peludo tendido en el asfalto. Te acercas emocionado frotando tu cabeza para buscar su calor protector… pero ese cuerpo no se mueve. No respira y está completamente frío. Mamá siempre era tibia y cariñosa; esto ya no es mamá.',
      choices: [
        { label: 'Apartarte despacio, sintiendo un vacío helado', next: 'S10' }
      ]
    },
    {
      number: 10,
      id: 'S10',
      title: 'Cruzando al Otro Lado',
      act: 'acto-2a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      musicTrack: 'piano_melancolico',
      audioCue: 'Voces humanas lamentándose y puertas de autos cerrándose',
      text: 'Mientras te alejas desorientado de la escena, escuchas voces humanas lamentándose y puertas de autos cerrándose. Por suerte, los carros siguen detenidos. Cruzas con pasos torpes hasta chocar con el bordillo del andén de enfrente, sintiéndote completamente solo en el mundo.',
      choices: [
        { label: 'Trepar al andén y sacudirte el agua de los bigotes', next: 'S11' }
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
      text: 'Apenas trepas a la acera y sacudes tu pelaje empapado, un lomo ágil se frota contra tu costado con suavidad. Huele a tejados altos y a comida callejera.\n— Prrrr... Prrrr... Miau —ronronea con un ritmo parejo y calmado, marcándote con su voz dónde está parado.',
      html: 'Apenas trepas a la acera y sacudes tu pelaje empapado, un lomo ágil se frota contra tu costado con suavidad. Huele a tejados altos y a comida callejera.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Prrrr... Prrrr... Miau</em> —ronronea con un ritmo parejo y calmado, marcándote con su voz dónde está parado.</span>',
      choices: [
        { label: 'Inclinar las orejas y atender a su ronroneo', next: 'S12' }
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
      text: 'Al notar que prestas atención a su llamada, el gato adulto da unos pasos hacia un pasaje estrecho y se detiene a esperarte, repitiendo su ronroneo para guiarte. No sabes a dónde te llevará. ¿Confías en este extraño o prefieres seguir solo?',
      choices: [
        {
          label: 'Confiar en él y seguir el ritmo de su ronroneo',
          next: 'S13',
          state: { guia: 'gato' }
        },
        {
          label: 'Rechazar su ayuda y buscar tu camino solo',
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
      text: 'Decides confiar en él y te pegas a su costado, ajustando tus pequeños pasos a los suyos. El gato camina despacio sin dejar de ronronear ni un segundo para que no pierdas su rastro, guiándote por atajos estrechos lejos del estruendo de los carros y los charcos más hondos.',
      choices: [
        { label: 'Mantenerte pegado a su paso hasta que se detenga', next: 'S14' }
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
      text: 'Sin soltar su compás, notas que la lluvia deja de golpearte el lomo: acaban de entrar a un callejón techado. El gato se frena y apoya su cabeza con suavidad contra tu cuello en señal de despedida.\n— Miau —dice con dulzura antes de trepar por una reja alta y perderse en la noche.',
      html: 'Sin soltar su compás, notas que la lluvia deja de golpearte el lomo: acaban de entrar a un callejón techado. El gato se frena y apoya su cabeza con suavidad contra tu cuello en señal de despedida.<br><span class="block mt-1.5">— <em class="vn-sound-whisper font-semibold">Miau</em> —dice con dulzura antes de trepar por una reja alta y perderse en la noche.</span>',
      choices: [
        { label: 'Quedarte bajo el techo y olfatear el aire del callejón', next: 'S15' }
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
      text: 'Al respirar hondo en este rincón seco y protegido, un aroma conocido te llena el pecho: atún en lata. Es un olor modesto y sencillo, exactamente igual a la comida que mamá lograba traerte en las noches buenas.',
      choices: [
        { label: 'Dar unos pasos hacia el fondo del pasaje', next: 'S16' }
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
      text: 'Avanzas unos metros siguiendo el rastro a atún, pero el pasaje está tan callado que te inquieta. Más allá, en la esquina abierta, el viento trae risas y olores a comida mucho más intensa y abundante. ¿Te quedas en este callejón seguro o sales a investigar la otra calle?',
      choices: [
        {
          label: 'Quedarte en el callejón y seguir el olor sencillo a atún',
          next: 'S35',
          state: { rastro_alimento: 'atun', destino: 'F01' }
        },
        {
          label: 'Desconfiar del silencio y salir hacia los olores más fuertes',
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
      text: 'El pánico te vence: das media vuelta y corres a ciegas de regreso al callejón. Chocas contra cajas y bolsas mojadas hasta colarte bien al fondo de tu nido de cartón, donde te encoges hecho un ovillo tembloroso con las orejas gachas.',
      choices: [
        { label: 'Quedarte quieto en silencio esperando que pase el peligro', next: 'S18' }
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
      text: 'Esperas encogido durante horas hasta que el ruido de la avenida se calma, pero nadie regresa por ti. El estómago te duele de hambre y tienes las patitas entumecidas por la humedad. Si sigues ahí encerrado, no vas a resistir el frío.',
      choices: [
        { label: 'Salir a tientas por el lado opuesto del callejón', next: 'S19' }
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
      text: 'Te obligas a abandonar el refugio y caminas rozando la pared húmeda con tus bigotes para guiarte. De pronto, el muro se acaba bajo tu mejilla. Das un paso al frente sin saber que el andén terminó… y que estás a un centímetro de caer al paso de vehículos veloces.',
      choices: [
        { label: 'Clavar las uñitas e intentar frenar en el borde', next: 'S20' }
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
      text: 'Intentas frenarte en seco, pero tus patitas resbalan sobre la piedra mojada. ¡¡FROOOOSH!! Un camión pasa volando a milímetros de tu nariz y su ráfaga casi te voltea hacia la calle. Justo antes de caer, unos dientes grandes y firmes te sujetan con cuidado por el pellejo del cuello y te levantan en el aire.',
      html: 'Intentas frenarte en seco, pero tus patitas resbalan sobre la piedra mojada. <span class="vn-onomatopoeia">¡¡FROOOOSH!!</span> Un camión pasa volando a milímetros de tu nariz y su ráfaga casi te voltea hacia la calle. Justo antes de caer, unos dientes grandes y firmes te sujetan con cuidado por el pellejo del cuello y te levantan en el aire.',
      choices: [
        { label: 'Quedarte quieto mientras te apartan del peligro', next: 'S21' }
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
      text: 'Sin forcejear, sientes cómo te depositan con delicadeza sobre un piso seco y seguro. No te dolió nada. Alzas el hocico para descubrir quién te rescató: no huele a gato, sino a pelo grueso empapado, tierra húmeda y cuero. Es un animal enorme.',
      choices: [
        { label: 'Frotar tu cabecita tímidamente contra su pata delantera', next: 'S22' }
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
      text: 'Al sentir tu roce agradecido contra su pata, el gigante suelta un ladrido hondo que hace retumbar tu pecho. ¡¡GUAU!! No suena enojado; suena como la advertencia cariñosa de un adulto protector: «¡Cuidado, pequeñajo! Casi no la cuentas». Luego da media vuelta y empieza a caminar despacio.',
      html: 'Al sentir tu roce agradecido contra su pata, el gigante suelta un ladrido hondo que hace retumbar tu pecho. <span class="vn-onomatopoeia">¡¡GUAU!!</span> No suena enojado; suena como la advertencia cariñosa de un adulto protector: «¡Cuidado, pequeñajo! Casi no la cuentas». Luego da media vuelta y empieza a caminar despacio.',
      choices: [
        { label: 'Escuchar el eco pesado de sus pasos al alejarse', next: 'S23' }
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
      text: 'Sus pisadas se detienen a pocos pasos, esperando ver si decides ir detrás de él. Ese perro gigante acaba de salvarte la vida, pero su tamaño impone respeto; a tu derecha, el viento silba por el hueco estrecho de una reja. ¿Confías en él o escapas solo?',
      choices: [
        {
          label: 'Confiar en su tamaño y caminar junto al perro',
          next: 'S24',
          state: { guia: 'perro' }
        },
        {
          label: 'Asustarte de él y escapar solo por la reja',
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
      text: 'Decides confiar y corres hasta pegarte a su pata delantera. Su cuerpo ancho te cubre del viento helado como una pared tibia, y sus garras marcan un compás firme sobre las piedras: tac... tac... tac... guiándote sin que te pierdas.',
      html: 'Decides confiar y corres hasta pegarte a su pata delantera. Su cuerpo ancho te cubre del viento helado como una pared tibia, y sus garras marcan un compás firme sobre las piedras: <em class="vn-sound-whisper font-semibold">tac... tac... tac...</em> guiándote sin que te pierdas.',
      choices: [
        { label: 'Avanzar al ritmo seguro de sus pisadas', next: 'S25' }
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
      text: 'Siguiendo su paso firme, llegas bajo un arco techado de piedra donde no cae ni una gota. El perro se frena, te da un empujón suave con su hocico húmedo hacia el centro y suelta un bufido tibio: «Hasta aquí llego yo, enano. Ahora te toca a ti». Da la vuelta y se marcha bajo la lluvia.',
      choices: [
        { label: 'Adentrarte solo en el cruce protegido', next: 'S26' }
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
      text: 'A salvo bajo el arco gracias al perro, das unos pasos hacia un cruce donde chocan varias corrientes de aire. Apenas te detienes, tu estómago vuelve a rugir desesperado: necesitas encontrar alimento pronto.',
      choices: [
        { label: 'Alzar el hocico y concentrarte en los olores del aire', next: 'S27' }
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
      text: 'Estás solo en un cruce batido por corrientes de aire. Como tus ojos no pueden ver la calle, cierras tus otros sentidos y enfocas toda tu atención en tu nariz. Poco a poco, los olores del viento empiezan a dibujarse en tu mente como cintas de humo flotando en la oscuridad.',
      choices: [
        { label: 'Distinguir cada una de las dos corrientes de olor', next: 'S28' }
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
      text: 'Al concentrarte, separas dos rastros claros. Hacia un lado flota una cinta naranja brillante: despide un olor fuertísimo, grasoso y muy llamativo a salmón crudo de restaurante.\nHacia el otro lado serpentea una cinta azul delgada y modesta: huele suavemente a atún en lata, justo como la comida sencilla que mamá siempre compartía contigo.',
      html: 'Al concentrarte, separas dos rastros claros. Hacia un lado flota una <strong>cinta naranja brillante</strong>: despide un olor fuertísimo, grasoso y muy llamativo a salmón crudo de restaurante.<br><span class="block mt-1.5">Hacia el otro lado serpentea una <strong>cinta azul delgada y modesta</strong>: huele suavemente a atún en lata, justo como la comida sencilla que mamá siempre compartía contigo.</span>',
      choices: [
        { label: 'Inspirar de nuevo antes de que cambie el viento', next: 'S29' }
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
      text: 'Al inhalar otra vez, una ráfaga de aire frío sacude el cruce y empieza a deshacer ambas cintas de olor. Tienes que elegir rápido qué camino vas a seguir antes de que el viento se lleve los aromas y te deje a oscuras sin guía.',
      choices: [
        { label: 'Elegir qué rastro guiará tus pasos', next: 'S30' }
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
      text: '¿A cuál de los dos aromas le confías tu destino? ¿A la modesta cinta azul que te recuerda al cuidado sencillo de mamá, o a la brillante cinta naranja que promete un banquete gigante?',
      choices: [
        {
          label: 'Desenredar la cinta azul y modesta con olor a atún',
          next: 'S35',
          state: { rastro_alimento: 'atun', destino: 'F01' }
        },
        {
          label: 'Desenredar la cinta naranja y codiciosa con olor a salmón',
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
      text: 'El tamaño del perro te asusta demasiado. Pegas un brinco hacia atrás bufando con desconfianza y te metes a la fuerza entre los barrotes de una reja oxidada. Detrás de ti escuchas al perro quejarse con pena, pero se queda atrás.',
      choices: [
        { label: 'Arrastrarte por el lodo adentrándote en la oscuridad', next: 'S32' }
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
      text: 'Al avanzar empapado por el barro estrecho, tus costados rozan muros llenos de moho y alambres viejos. Roce... roce... Te lastimas la punta de las orejas mientras el agua gotea directo sobre tu cabeza. No queda ningún sonido amigable; estás completamente desorientado.',
      html: 'Al avanzar empapado por el barro estrecho, tus costados rozan muros llenos de moho y alambres viejos. <em class="vn-sound-whisper font-semibold">Roce... roce...</em> Te lastimas la punta de las orejas mientras el agua gotea directo sobre tu cabeza. No queda ningún sonido amigable; estás completamente desorientado.',
      choices: [
        { label: 'Continuar avanzando a tientas a pesar del cansancio', next: 'S33' }
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
      text: 'Sigues caminando apenas sosteniéndote en pie cuando un golpe de olor fuerte y pesado a restos de pescado crudo te pega de lleno en la nariz. Sale de unas bolsas tiradas en un rincón oscuro detrás de un callejón sin salida.',
      choices: [
        { label: 'Dejarte llevar por el hambre hacia ese olor', next: 'S34' }
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
      text: 'Vencido por el hambre y sin fijarte por dónde pisas, corres a tientas siguiendo ese aroma pesado hasta la parte trasera de un restaurante de sushi, donde se amontonan bolsas rasgadas en el suelo.',
      choices: [
        { label: 'Lanzarte directo sobre las bolsas de basura', next: 'S47' }
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
      musicTrack: 'final_bueno',
      audioCue: 'Silencio apacible bajo techo; lluvia muy lejana',
      text: 'Sigues con calma el aroma sencillo a atún por un pasaje seco hasta que tu hocico tropieza con una latita apoyada en el suelo. Tiene comida fresca y alguien dobló con mucho cuidado sus bordes metálicos para que ningún animalito se corte la lengua.',
      choices: [
        { label: 'Comer despacio todo el atún hasta dejar limpia la lata', next: 'S36' }
      ]
    },
    {
      number: 36,
      id: 'S36',
      title: 'El Choque con lo Desconocido',
      act: 'acto-4a',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      musicTrack: 'final_bueno',
      audioCue: 'Respiración humana suave, pausada y cercana',
      text: 'Tras lamer hasta el último bocado, sientes la barriguita llena y reconfortada. Das un par de pasos buscando un rincón para descansar y tu frente choca suavemente contra algo justo al lado de la lata. Es blando, huele a ropa limpia y no se mueve con violencia.',
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
      musicTrack: 'final_bueno',
      audioCue: 'Vocecita infantil suave y temblorosa',
      text: 'Tu roce provoca un pequeño sobresalto seguido de una vocecita temblorosa muy cerca de tus orejas.\n— ¿Hola?... ¿Quién está ahí? ¿Fuiste tú el que se comió la latita de atún que dejé? —pregunta una niña sentada en el suelo, perdida y esperando a que su familia la encuentre.',
      html: 'Tu roce provoca un pequeño sobresalto seguido de una vocecita temblorosa muy cerca de tus orejas.<br><span class="block mt-1.5">— «¿Hola?... ¿Quién está ahí? ¿Fuiste tú el que se comió la latita de atún que dejé?» —pregunta una niña sentada en el suelo, perdida y esperando a que su familia la encuentre.</span>',
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
      musicTrack: 'final_bueno',
      audioCue: 'Respiración tranquila y latido sereno',
      text: 'No entiendes lo que dice, pero su calor humano es el refugio más seguro que has sentido en toda la noche. Trepas con cuidado hasta su regazo de lana, das dos vueltas sobre ti mismo y te quedas profundamente dormido tras tantas horas de miedo.',
      choices: [
        { label: 'Descansar profundamente mientras afuera arrecia la noche', next: 'S39' }
      ]
    },
    {
      number: 39,
      id: 'S39',
      title: 'Pasos Rápidos en el Agua',
      act: 'acto-4a',
      speaker: 'NARRADOR',
      speakerType: 'narrador',
      musicTrack: 'final_bueno',
      audioCue: 'Chapoteos apresurados de botas en charcos cercanos',
      text: 'En medio de tu sueño tranquilo, el sonido de unas botas chapoteando a toda prisa en los charcos resuena hacia el callejón. Una presencia agitada se detiene de golpe justo frente a ustedes.',
      choices: [
        { label: 'Entreabrir las orejas adormiladas hacia la llegada', next: 'S40' }
      ]
    },
    {
      number: 40,
      id: 'S40',
      title: 'El Alivio de la Madre',
      act: 'acto-4a',
      speaker: 'MAMÁ DE LA NIÑA',
      speakerType: 'mama_nina',
      musicTrack: 'final_bueno',
      audioCue: 'Sollozos de alivio y abrazo materno',
      text: 'Apenas alzas las orejas, oyes a una mujer arrodillarse sobre el pavimento y abrazar con fuerza a la pequeña, llorando de pura alegría.\n— ¡Hija mía! ¡Dios mío, aquí estás! ¡Estaba desesperada buscándote por todas partes con esta lluvia! ¿Estás bien? ¿No te pasó nada?',
      html: 'Apenas alzas las orejas, oyes a una mujer arrodillarse sobre el pavimento y abrazar con fuerza a la pequeña, llorando de pura alegría.<br><span class="block mt-1.5">— «¡Hija mía! ¡Dios mío, aquí estás! ¡Estaba desesperada buscándote por todas partes con esta lluvia! ¿Estás bien? ¿No te pasó nada?»</span>',
      choices: [
        { label: 'Sentir el abrazo cálido que los rodea a los tres', next: 'S41' }
      ]
    },
    {
      number: 41,
      id: 'S41',
      title: 'El Ruego de la Pequeña',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      musicTrack: 'final_bueno',
      audioCue: 'Voz infantil dulce y suplicante',
      text: 'Envuelto en ese abrazo, notas que la niña no te suelta de su pecho. Con su manita acaricia tu lomo húmedo y le pide con mucha ilusión:\n— ¡Mamá, estoy bien! Mira… este gatito vino a darme calor cuando tenía mucho miedo. ¡Por favor, no lo dejemos aquí en la calle! ¡Llevémoslo con nosotras!',
      html: 'Envuelto en ese abrazo, notas que la niña no te suelta de su pecho. Con su manita acaricia tu lomo húmedo y le pide con mucha ilusión:<br><span class="block mt-1.5">— «¡Mamá, estoy bien! Mira… este gatito vino a darme calor cuando tenía mucho miedo. ¡Por favor, no lo dejemos aquí en la calle! ¡Llevémoslo con nosotras!»</span>',
      choices: [
        { label: 'Aguardar en silencio la respuesta de la madre', next: 'S42' }
      ]
    },
    {
      number: 42,
      id: 'S42',
      title: 'La Duda de la Madre',
      act: 'acto-4a',
      speaker: 'MAMÁ DE LA NIÑA',
      speakerType: 'mama_nina',
      musicTrack: 'final_bueno',
      audioCue: 'Suspiro suave y voz compasiva',
      text: 'Tras un breve silencio, la mujer acaricia la cabeza de su hija, algo indecisa mientras te mira empapado.\n— Cariño… ya sabes que un gatito de la calle necesita muchos cuidados. Pero… a ver, déjame verlo de cerca… pobrecito, ven acá.',
      html: 'Tras un breve silencio, la mujer acaricia la cabeza de su hija, algo indecisa mientras te mira empapado.<br><span class="block mt-1.5">— «Cariño… ya sabes que un gatito de la calle necesita muchos cuidados. Pero… a ver, déjame verlo de cerca… pobrecito, ven acá».</span>',
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
      musicTrack: 'final_bueno',
      audioCue: 'Voz llena de ternura y asombro',
      text: 'Sin resistirte, sientes cómo te levanta despacio a la altura de su rostro. Al mirarte de cerca, su voz se llena de ternura y sorpresa.\n— Hija… mira esto. Toca su carita con cuidado… Este gatito es igual a ti: tampoco puede ver. Pero mira cómo parpadea sus ojitos a cada momento hacia todos lados, como si estuviera buscando la luz.',
      html: 'Sin resistirte, sientes cómo te levanta despacio a la altura de su rostro. Al mirarte de cerca, su voz se llena de ternura y sorpresa.<br><span class="block mt-1.5">— «Hija… mira esto. Toca su carita con cuidado… Este gatito es igual a ti: tampoco puede ver. Pero mira cómo parpadea sus ojitos a cada momento hacia todos lados, como si estuviera buscando la luz».</span>',
      choices: [
        { label: 'Sentir las manitas de la niña rozando tus párpados', next: 'S44' }
      ]
    },
    {
      number: 44,
      id: 'S44',
      title: 'La Promesa de la Niña',
      act: 'acto-4a',
      speaker: 'LA NIÑA',
      speakerType: 'nina',
      musicTrack: 'final_bueno',
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
      text: 'Te acurrucas envuelto en una manta tibia y sientes el balanceo tranquilo de sus pasos rumbo a tu nuevo hogar mientras la niña te susurra al oído:\n«No ves, pero tus ojos parpadean buscando la luz a cada instante… De ahora en adelante nunca más estarás solo. Te llamarás Blinky».',
      html: 'Te acurrucas envuelto en una manta tibia y sientes el balanceo tranquilo de sus pasos rumbo a tu nuevo hogar mientras la niña te susurra al oído:<br><span class="block mt-1.5 font-semibold text-amber-100">«No ves, pero tus ojos parpadean buscando la luz a cada instante… De ahora en adelante nunca más estarás solo. Te llamarás Blinky».</span>',
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
      text: 'Tu ronroneo agradecido llena el silencio de la noche. Supiste confiar en quienes te ayudaron y tuviste paciencia para no dejarte tentar por comidas engañosas. Ahora Blinky duerme abrigado en una cama caliente, rodeado de amor de verdad.',
      choices: [
        { label: 'Ver créditos y volver a la portada', isEndingCredits: true }
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
      musicTrack: 'final_triste',
      audioCue: 'Goteo pesado sobre contenedores metálicos',
      text: 'Al llegar al basurero detrás del restaurante de sushi, te lanzas hambriento sobre las bolsas rotas. Devoras con desesperación restos congelados de pieles de salmón y arroz duro tirados en el barro. Llenas la barriga rápido, pero la comida helada te deja un dolor pesado por dentro.',
      choices: [
        { label: 'Alejarte tambaleando en busca de algo caliente', next: 'S48' }
      ]
    },
    {
      number: 48,
      id: 'S48',
      title: 'El Temblor del Cuerpo',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      musicTrack: 'final_triste',
      audioCue: 'Viento helado de madrugada y temblor continuo',
      text: 'Cada paso te cuesta más. El viento de la madrugada empapa tus costados y el cansancio hace que tus patitas se doblen. La comida fría no te da energía; sientes que si no encuentras pronto el calor de un cuerpo vivo, te quedarás congelado en el barro.',
      choices: [
        { label: 'Detenerte a buscar en el aire cualquier vibración conocida', next: 'S49' }
      ]
    },
    {
      number: 49,
      id: 'S49',
      title: 'El Zumbido en el Suelo',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      musicTrack: 'final_triste',
      audioCue: 'Hmmmmmmmm... Zumbido constante y rígido a ras del suelo',
      text: 'Al detenerte y agudizar tus sentidos, lo sientes bajo tus almohadillas: Hmmmmmmmm... El piso tiembla con un ritmo constante y una ráfaga tibia te roza la nariz. Te llenas de alegría pensando: «¡Ese ritmo que vibra… tiene que ser el ronroneo de mamá esperándome!».',
      html: 'Al detenerte y agudizar tus sentidos, lo sientes bajo tus almohadillas: <em class="vn-sound-whisper font-semibold">Hmmmmmmmm...</em> El piso tiembla con un ritmo constante y una ráfaga tibia te roza la nariz. Te llenas de alegría pensando: «¡Ese ritmo que vibra… tiene que ser el ronroneo de mamá esperándome!».',
      choices: [
        { label: 'Correr emocionado a frotarte contra ese calor', next: 'S50' }
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
      musicTrack: 'final_triste',
      audioCue: '¡¡CLANC!! Choque seco contra fierro oxidado y zumbido eléctrico',
      text: 'Te lanzas hacia adelante esperando hundirte en el pelaje suave de mamá… ¡¡CLANC!! Tu cabeza choca con fuerza contra una reja de fierro duro y oxidado. Huele a cables quemados, polvo y aceite viejo. No es un ser vivo: es un calefactor eléctrico dañado.',
      html: 'Te lanzas hacia adelante esperando hundirte en el pelaje suave de mamá… <span class="vn-onomatopoeia">¡¡CLANC!!</span> Tu cabeza choca con fuerza contra una reja de fierro duro y oxidado. Huele a cables quemados, polvo y aceite viejo. No es un ser vivo: es un calefactor eléctrico dañado.',
      choices: [
        { label: 'Bajar la nariz al lodo para entender dónde estás', next: 'S51' }
      ]
    },
    {
      number: 51,
      id: 'S51',
      title: 'Caminando en Círculos',
      act: 'acto-4b',
      speaker: 'BLINKY',
      speakerType: 'blinky',
      musicTrack: 'final_triste',
      audioCue: 'Zumbido eléctrico monótono bajo la lluvia incesante',
      text: 'Al olfatear el barro bajo la máquina, reconoces el rastro de tus propias huellas: caminaste en círculos durante horas hasta terminar en el mismo callejón donde empezó todo. El aparato viejo vibra soltando apenas un poco de calor artificial entre las latas.',
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
      text: 'Te dejas caer vencido contra la rejilla tibia. Desconfiar de la ayuda y dejarte ganar por el hambre fácil te devolvió a un callejón sin salida. Sin fuerzas para volver a levantarte, te quedas dormido pegado al metal que vibra, conformándote con su falso calor mientras la lluvia cae en la noche.',
      choices: [
        { label: 'Ver créditos y volver a la portada', isEndingCredits: true }
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
