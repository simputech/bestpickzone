export type SpanishSectionSlug = 'libros' | 'tecnologia' | 'oficina-en-casa' | 'hogar-cocina'

export type SpanishSection = {
  slug: SpanishSectionSlug
  title: string
  description: string
  englishPath: string
}

export type SpanishArticle = {
  section: SpanishSectionSlug
  slug: string
  title: string
  metaDescription: string
  englishPath: string
  publishedDate: string
  updatedDate: string
  dek: string
  intro: string
  perspective: string
  keyPoints: string[]
  buyingTips: string[]
  bookHighlights?: SpanishBookHighlight[]
}

export type SpanishRecommendation = {
  title: string
  description: string
  query?: string
  affiliateUrl?: string
  affiliatePlatform?: 'amazon' | 'ebay'
  affiliateLabel?: string
}

export type SpanishBookHighlight = {
  title: string
  badge: string
  summary: string
  insight: string
  bestFor: string
}

export const SPANISH_SITE_DATE = '2026-07-07'

export const spanishSections: SpanishSection[] = [
  {
    slug: 'libros',
    title: 'Libros',
    description:
      'Guias de lectura, rankings de autores y recomendaciones para lectores que quieren decidir mas rapido que leer despues.',
    englishPath: '/books',
  },
  {
    slug: 'tecnologia',
    title: 'Tecnologia',
    description:
      'Compras tecnologicas practicas para estudiantes, trabajo remoto y configuraciones de escritorio mas limpias.',
    englishPath: '/tech',
  },
  {
    slug: 'oficina-en-casa',
    title: 'Oficina En Casa',
    description:
      'Productos, ideas y comparativas para armar un espacio de trabajo mas comodo, mas sereno y mas util todos los dias.',
    englishPath: '/wfh',
  },
  {
    slug: 'hogar-cocina',
    title: 'Hogar Y Cocina',
    description:
      'Guias de compra enfocadas en articulos utiles para dormitorio, cocina, estudio y organizacion diaria.',
    englishPath: '/home-kitchen',
  },
]

export const spanishArticles: SpanishArticle[] = [
  {
    section: 'oficina-en-casa',
    slug: 'mejores-productos-para-tu-oficina-en-casa',
    title: "Oficina en casa: qué comprar para resolver una necesidad",
    metaDescription:
      "Prioriza muebles, pantalla y conexiones. Compara ejemplos de FlexiSpot, SIHOO, Ergotron y Logitech sin convertir cada categoría en una compra obligatoria.",
    englishPath: '/wfh/best-products-for-your-home-office',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Prioriza muebles, pantalla y conexiones. Compara ejemplos de FlexiSpot, SIHOO, Ergotron y Logitech sin convertir cada categoría en una compra obligatoria.",
    intro:
      'La mayoria de las oficinas en casa no necesitan veinte gadgets. Necesitan unas pocas piezas que mejoren la postura, el enfoque y la sensacion general del espacio. Un buen escritorio, una silla que no te castigue al mediodia y un par de accesorios bien elegidos suelen aportar mucho mas que una mesa llena de objetos de moda.',
    perspective:
      'Esta guia prioriza productos que resuelven fricciones reales: dolor de espalda, desorden visual, videollamadas flojas, mala iluminacion y configuraciones de pantalla que obligan a trabajar encorvado. Si una compra no mejora una de esas cosas, casi nunca merece ocupar espacio permanente.',
    keyPoints: [
      'Empieza por la silla, la altura del escritorio y la posicion de la pantalla antes de comprar extras decorativos.',
      'Un brazo para monitor o un soporte para laptop suele despejar mas el escritorio que otro accesorio pequeño.',
      'La iluminacion y el manejo de cables influyen mucho en como se siente la oficina durante ocho horas.',
    ],
    buyingTips: [
      'Si el presupuesto es corto, primero corrige postura y comodidad antes de pensar en una segunda pantalla.',
      'Si compartes espacio con comedor o sala, compra productos que se vean limpios y sean faciles de mover o guardar.',
      'Si trabajas en videollamadas todos los dias, una camara web y mejores audifonos pueden justificar su precio mas rapido de lo que parece.',
    ],
  },
  {
    section: 'oficina-en-casa',
    slug: 'oficina-en-casa-en-mesa-de-cocina',
    title: "Oficina en la mesa de cocina: monta, trabaja y guarda",
    metaDescription:
      "Planifica una zona temporal según espacio, conexiones y convivencia. Soporte, periféricos y almacenamiento sin promesas de montaje en cinco minutos.",
    englishPath: '/wfh/ultimate-kitchen-table-home-office-setup',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Planifica una zona temporal según espacio, conexiones y convivencia. Soporte, periféricos y almacenamiento sin promesas de montaje en cinco minutos.",
    intro:
      'Trabajar desde la mesa de la cocina no es ideal, pero para muchisima gente es la realidad diaria. El truco no es fingir que ya tienes una oficina dedicada, sino construir una configuracion ligera que se arme rapido, funcione de verdad y desaparezca sin convertir la cocina en un caos permanente.',
    perspective:
      'Lo que mas importa en este escenario es la velocidad de montaje y la capacidad de recuperar la mesa despues. Eso favorece soportes plegables, teclados ligeros, una canasta para guardar cables y accesorios, y productos que se sientan razonables en un espacio compartido.',
    keyPoints: [
      'Un soporte para laptop y un teclado separado cambian la postura mucho mas que cualquier accesorio estetico.',
      'La clave del exito es una rutina de cinco minutos para montar y otros cinco para despejar.',
      'Si la silla del comedor es mala, una almohadilla o soporte lumbar puede salvar la jornada.',
    ],
    buyingTips: [
      'Compra accesorios plegables o faciles de guardar antes de comprar piezas grandes.',
      'Usa una regleta compacta y clips de cable para no cruzar la mesa con cables sueltos.',
      'Si tienes reuniones frecuentes, reserva un rincon con mejor luz natural o agrega una lampara compacta.',
    ],
  },
  {
    section: 'oficina-en-casa',
    slug: 'mejores-escritorios-de-pie',
    title: "Escritorios elevables: configura Jarvis, UPLIFT y E7",
    metaDescription:
      "Compara altura mínima, tablero, controles y montaje. Distingue UPLIFT V2 usado del V3 actual y las variantes de Jarvis y FlexiSpot E7.",
    englishPath: '/wfh/fully-jarvis-vs-uplift-v2-standing-desk',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara altura mínima, tablero, controles y montaje. Distingue UPLIFT V2 usado del V3 actual y las variantes de Jarvis y FlexiSpot E7.",
    intro:
      'Los escritorios de pie dejaron de ser un lujo raro y se volvieron una de las mejoras mas claras para oficina en casa. Te permiten cambiar de posicion, ajustar mejor la altura de la pantalla y evitar que el dia se sienta inmovil. Pero la diferencia entre uno bueno y uno mediocre sigue siendo enorme.',
    perspective:
      'La mayoria de compradores se fijan primero en el motor o en la velocidad de elevacion, cuando el criterio mas importante suele ser la estabilidad. Si el escritorio vibra cada vez que escribes o el monitor rebota al mover el mouse, la experiencia se degrada muy rapido.',
    keyPoints: [
      'Busca profundidad suficiente para monitor, teclado y algo de espacio libre delante.',
      'Las memorias de altura son utiles si varias personas usan el mismo escritorio o si alternas mucho sentado y de pie.',
      'El manejo de cables importa mas en escritorios elevables porque cualquier desorden se nota y se mueve contigo.',
    ],
    buyingTips: [
      'Si usas dos monitores, da prioridad a un marco estable antes que a una superficie demasiado barata.',
      'Mide bien el cuarto y la pared antes de comprar: muchos escritorios se ven mas grandes de lo que parecen en fotos.',
      'Si eres sensible al ruido, revisa comentarios sobre el motor y la velocidad real de subida.',
    ],
  },
  {
    section: 'oficina-en-casa',
    slug: 'mejores-brazos-para-monitor',
    title: "Brazos para monitor: comprueba pantalla, mesa y modelo",
    metaDescription:
      "Evalúa el Ergotron LX original y las búsquedas de Amazon Basics por carga, montaje, alcance y piezas. Sin promesas de comodidad ni equivalencia entre marcas.",
    englishPath: '/wfh/ergotron-lx-vs-amazon-basics-monitor-arm',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Evalúa el Ergotron LX original y las búsquedas de Amazon Basics por carga, montaje, alcance y piezas. Sin promesas de comodidad ni equivalencia entre marcas.",
    intro:
      'Un brazo para monitor parece un detalle pequeno hasta que lo usas una semana. De pronto, la pantalla queda donde debe, el escritorio gana profundidad y el espacio deja de verse apretado. Para gente que trabaja muchas horas frente al monitor, eso no es un lujo. Es ergonomia y claridad.',
    perspective:
      'Lo mejor de este tipo de producto es que resuelve dos problemas a la vez: postura y desorden. Tambien es una de las mejoras mas utiles para escritorios pequenos, donde cada centímetro libre cambia la sensacion de amplitud.',
    keyPoints: [
      'La altura correcta de la pantalla reduce la tendencia a inclinar el cuello hacia delante.',
      'Los brazos baratos pueden funcionar, pero los modelos mejores ajustan con menos esfuerzo y duran mas.',
      'Si usas un monitor pesado o ultrawide, revisa el peso maximo real antes de comprar.',
    ],
    buyingTips: [
      'Verifica si tu escritorio acepta abrazadera o si necesitas montaje con ojal.',
      'Confirma compatibilidad VESA del monitor antes de decidir.',
      'Si piensas cambiar de pantalla pronto, compra un brazo con margen de peso y tamaño.',
    ],
  },
  {
    section: 'oficina-en-casa',
    slug: 'mejores-sillas-ergonomicas-para-home-office',
    title: "Sillas para oficina en casa: Aeron frente a Gesture",
    metaDescription:
      "Compara asiento, tallas, profundidad y opciones de ajuste. Evalúa la silla junto a tu mesa y distingue garantía del vendedor y del fabricante.",
    englishPath: '/wfh/herman-miller-aeron-vs-steelcase-gesture',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara asiento, tallas, profundidad y opciones de ajuste. Evalúa la silla junto a tu mesa y distingue garantía del vendedor y del fabricante.",
    intro:
      'La silla sigue siendo la compra mas importante para muchas oficinas en casa. Una mala te obliga a recolocarte cada veinte minutos. Una buena te deja trabajar sin pensar todo el tiempo en la espalda, las caderas o los hombros.',
    perspective:
      'El problema es que mucha gente compra por fotos o por fama de marca sin revisar ajuste real. La ergonomia no depende solo de que la silla se vea sofisticada; depende de si el respaldo, los brazos y la profundidad del asiento coinciden con tu cuerpo y tu escritorio.',
    keyPoints: [
      'Los apoyabrazos importan mas de lo que parece, especialmente si escribes mucho o usas mouse durante horas.',
      'La ventilacion y el material del asiento cambian mucho la experiencia en habitaciones calidas.',
      'Si puedes ahorrar en algo, que no sea en soporte lumbar basico ni estabilidad del mecanismo.',
    ],
    buyingTips: [
      'Si mides poco o mucho, verifica rango de ajuste y profundidad del asiento antes de comprar.',
      'Si trabajas con ropa ligera y en calor, el mesh puede sentirse mejor que un asiento grueso de espuma.',
      'Si el presupuesto no alcanza para una silla premium nueva, revisar opciones usadas o reacondicionadas puede tener mas sentido que comprar una barata mediocre.',
    ],
  },
  {
    section: 'oficina-en-casa',
    slug: 'mejores-monitores-portatiles-economicos',
    title: "Monitores portátiles económicos: conexión y estado primero",
    metaDescription:
      "Compara ThinkVision M14, ZenScreen MB16ACV y búsquedas de segunda mano. Verifica vídeo USB-C, controladores, accesorios y costo total.",
    englishPath: '/wfh/best-portable-monitors-under-100-ebay',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara ThinkVision M14, ZenScreen MB16ACV y búsquedas de segunda mano. Verifica vídeo USB-C, controladores, accesorios y costo total.",
    intro:
      'Los monitores portatiles baratos son una de esas categorias donde una mejora modesta cambia mucho el dia. Con una pantalla extra, el correo, las videollamadas y los documentos dejan de competir por el mismo espacio, y hasta una mesa pequeña empieza a sentirse mas capaz.',
    perspective:
      'No hace falta perseguir especificaciones de lujo aqui. En esta categoria suele importar mas que la pantalla se conecte rapido, ocupe poco, y sea lo bastante estable para uso diario sin convertirse en otra molestia que mover.',
    keyPoints: [
      'USB-C sencillo suele ser la opcion mas comoda si trabajas con laptop moderna.',
      'Para hojas de calculo y multitarea, 15.6 pulgadas es un punto muy util entre tamaño y portabilidad.',
      'Si el presupuesto es agresivo, revisar reacondicionados puede abrir opciones mucho mejores.',
    ],
    buyingTips: [
      'Confirma si tu laptop envia video por USB-C o si necesitaras HDMI adicional.',
      'Revisa brillo y soporte integrado; muchos modelos baratos fallan justo en esos dos puntos.',
      'Si piensas guardarlo todos los dias, peso y funda importan mas de lo que parece.',
    ],
  },
  {
    section: 'tecnologia',
    slug: 'mejores-monitores-economicos',
    title: "Monitores económicos: resolución, puertos y coste completo",
    metaDescription:
      "Compara LG 27GP850-B, Dell S2722DGM y ASUS VG249Q3A por pantalla, conexión y soporte. El presupuesto no equivale a un precio verificado.",
    englishPath: '/tech/best-budget-monitors',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara LG 27GP850-B, Dell S2722DGM y ASUS VG249Q3A por pantalla, conexión y soporte. El presupuesto no equivale a un precio verificado.",
    intro:
      'El mercado de monitores economicos mejoro bastante. Ya no hace falta gastar una fortuna para conseguir 1440p, mejor color o una frecuencia alta suficiente para jugar. El desafio ahora no es encontrar opciones; es filtrar cuales de verdad valen el espacio en tu escritorio.',
    perspective:
      'Mucha gente compra por precio o por marketing de “gaming” cuando lo que necesita es otra cosa: mejor texto para trabajar, una base ajustable, o una pantalla mas comoda para lectura diaria. Por eso conviene pensar primero en uso real y despues en especificaciones.',
    keyPoints: [
      'En 27 pulgadas, 1440p suele verse mucho mejor que 1080p para trabajo prolongado.',
      'La base ajustable sigue siendo una ventaja infravalorada en pantallas economicas.',
      'Para compra nueva, Amazon suele ser mas simple; para reacondicionados, eBay puede ofrecer mejor valor.',
    ],
    buyingTips: [
      'Si trabajas mas de lo que juegas, prioriza nitidez, ergonomia y color antes que una tasa extrema de refresco.',
      'Si piensas usar brazo para monitor, verifica montaje VESA.',
      'Revisa politicas de devolucion y estado del panel si compras reacondicionado.',
    ],
  },
  {
    section: 'tecnologia',
    slug: 'mejores-laptops-para-estudiantes',
    title: "Laptops para estudiantes: comprueba software y configuración",
    metaDescription:
      "Elige un portátil para estudiar según aplicaciones, exámenes y configuración. Compara MacBook Air M3, Flex 5i, XPS 13 y Spin 714 con límites claros.",
    englishPath: '/tech/best-laptops-for-college-students',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Elige un portátil para estudiar según aplicaciones, exámenes y configuración. Compara MacBook Air M3, Flex 5i, XPS 13 y Spin 714 con límites claros.",
    intro:
      'La mejor laptop para un estudiante rara vez es la mas potente. Casi siempre es la que aguanta bateria real, pesa poco, abre todo sin frustracion y no te obliga a cargar con un ladrillo por todo el campus. El equilibrio importa mas que la hoja de especificaciones perfecta.',
    perspective:
      'Conviene diferenciar entre perfiles: estudiante general, diseño, ingenieria o alguien que simplemente quiere un equipo serio para apuntes, navegación, videollamadas y trabajos largos. No todos necesitan la misma clase de maquina ni el mismo nivel de gasto.',
    keyPoints: [
      'Bateria y peso importan mas en la vida real que un exceso de potencia que no vas a usar.',
      'Una buena pantalla y un teclado decente se sienten todos los dias; un procesador de mas no siempre.',
      'Los puertos y la calidad de construccion siguen marcando diferencia en un equipo que viaja mucho.',
    ],
    buyingTips: [
      'Si el equipo sera para cuatro años, evita configuraciones con muy poca memoria o almacenamiento base.',
      'Para carreras creativas o tecnicas, confirma requisitos de software antes de enamorarte del precio.',
      'Si compraras accesorios despues, deja margen para una funda, mouse o monitor externo.',
    ],
  },
  {
    section: 'tecnologia',
    slug: 'mejores-teclados-mecanicos',
    title: "Teclados mecánicos: distribución, conexión y variantes",
    metaDescription:
      "Compara Keychron Q5 Max, Razer V4 75% y Redragon K552. Distingue versiones y considera MX Keys S como alternativa no mecánica.",
    englishPath: '/tech/best-mechanical-keyboards',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara Keychron Q5 Max, Razer V4 75% y Redragon K552. Distingue versiones y considera MX Keys S como alternativa no mecánica.",
    intro:
      'Los teclados mecanicos ya no son solo para setups gamer ruidosos. Tambien son una gran mejora para gente que escribe mucho, quiere mejor tacto o busca un escritorio con mas personalidad sin sacrificar funcion. La clave es elegir bien el formato y el tipo de switch.',
    perspective:
      'El error clasico es comprar por moda sin pensar en ruido, espacio o uso real. Un teclado perfecto para gaming rapido puede ser molesto en oficina compartida, y uno muy compacto puede cansar si dependes del pad numerico todos los dias.',
    keyPoints: [
      'El tamaño del teclado cambia mucho la comodidad del mouse y el espacio libre del escritorio.',
      'Los switches importan tanto por tacto como por volumen.',
      'Hot-swap y buena construccion suelen alargar la vida util mas que efectos RGB llamativos.',
    ],
    buyingTips: [
      'Si compartes espacio o haces videollamadas, prioriza switches silenciosos o lineales suaves.',
      'Si trabajas con numeros frecuentemente, no descartes un formato completo o con pad dedicado.',
      'Compra primero por escritura y comodidad; la estetica puede venir despues.',
    ],
  },
  {
    section: 'tecnologia',
    slug: 'mejores-audifonos-inalambricos',
    title: "Audífonos inalámbricos: elige por conexión, ajuste y llamadas",
    metaDescription:
      "Compara Sony, AirPods Pro 2, Jabra y Soundcore según tus dispositivos y llamadas. Revisa variantes, ajustes y búsquedas sin precios inventados.",
    englishPath: '/tech/best-wireless-earbuds',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara Sony, AirPods Pro 2, Jabra y Soundcore según tus dispositivos y llamadas. Revisa variantes, ajustes y búsquedas sin precios inventados.",
    intro:
      'El mercado de audifonos inalambricos esta saturado, y no todos los modelos fallan en lo mismo. Algunos suenan bien pero se sienten inseguros al caminar. Otros son comodos pero flojos en llamadas. Por eso conviene decidir primero si buscas musica, trabajo, ejercicio o una mezcla.',
    perspective:
      'Para la mayoria de usuarios, la experiencia completa importa mas que la firma de sonido perfecta. Ajuste, estabilidad, estuche, bateria y calidad del micro suelen pesar mas en el uso diario que detalles tecnicos que solo se notan en pruebas comparativas.',
    keyPoints: [
      'Cancelacion de ruido no siempre importa si tu prioridad principal es ejercicio o comodidad ligera.',
      'La calidad del micro es clave si piensas usarlos tambien para trabajo o llamadas largas.',
      'Un estuche pequeño y facil de cargar puede hacerlos mucho mas usados en la practica.',
    ],
    buyingTips: [
      'Si tienes oidos sensibles, revisa forma y opciones de puntas antes de comprar.',
      'Si entrenas con ellos, resistencia al sudor y ajuste seguro pesan mas que un sonido espectacular en papel.',
      'Si usas Apple o Android a fondo, la integracion del ecosistema puede inclinar la compra.',
    ],
  },
  {
    section: 'tecnologia',
    slug: 'airpods-pro-vs-sony-wf-1000xm5',
    title: "AirPods Pro 2 vs Sony WF-1000XM5: qué conexión te conviene",
    metaDescription:
      "Compara AirPods Pro 2 USB-C y Sony WF-1000XM5 por dispositivos, ajustes, autonomía y límites. Sin pruebas de sonido ni ofertas inventadas.",
    englishPath: '/tech/airpods-pro-vs-sony-wf-1000xm5',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara AirPods Pro 2 USB-C y Sony WF-1000XM5 por dispositivos, ajustes, autonomía y límites. Sin pruebas de sonido ni ofertas inventadas.",
    intro:
      'AirPods Pro y Sony WF-1000XM5 aparecen siempre en la misma conversacion, pero su atractivo no es identico. Apple gana mucho por integracion, simplicidad y llamadas. Sony suele empujar mas fuerte en sonido, personalizacion y control del perfil de escucha.',
    perspective:
      'Esta comparativa tiene sentido porque mucha gente no esta eligiendo solo audifonos: esta eligiendo que tipo de experiencia diaria quiere. Menos friccion y ecosistema, o mas control y una propuesta de audio algo mas ambiciosa.',
    keyPoints: [
      'Si vives dentro del ecosistema Apple, los AirPods Pro siguen teniendo una ventaja cotidiana real.',
      'Si te importa afinar mas el sonido y tocar ajustes, Sony suele ofrecer mas margen.',
      'La comodidad depende mucho del ajuste personal; aqui no hay un ganador universal.',
    ],
    buyingTips: [
      'Piensa en llamadas, transporte y uso diario antes de pensar solo en calidad musical.',
      'Si compartes dispositivos Apple todo el dia, la conveniencia de AirPods puede pesar mucho.',
      'Si priorizas cancelacion de ruido y tuning, compara bien lo que Sony ofrece en su app.',
    ],
  },
  {
    section: 'hogar-cocina',
    slug: 'mejores-freidoras-de-aire',
    title: "Freidoras de aire: capacidad, limpieza y modelo exacto",
    metaDescription:
      "Compara Ninja AF101 y COSORI Pro II CP358-AF por formato y mantenimiento, con identificación de modelos y comprobación de retiradas.",
    englishPath: '/home-kitchen/best-air-fryers',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara Ninja AF101 y COSORI Pro II CP358-AF por formato y mantenimiento, con identificación de modelos y comprobación de retiradas.",
    intro:
      'La categoria de freidoras de aire ya no gira solo alrededor de “cocinar mas sano”. Ahora compite por velocidad, facilidad de limpieza y capacidad real para comidas del dia a dia. Por eso las mejores opciones no siempre son las de mas funciones; a veces son las que menos complican la cena.',
    perspective:
      'Antes de comprar, conviene pensar si cocinas para una persona, pareja o familia, y si prefieres una canasta simple o un formato tipo horno. Esa decision cambia mas la experiencia que muchas promesas de marketing sobre crispiness o presets.',
    keyPoints: [
      'La limpieza del canasto y la facilidad para sacar la comida importan un monton con uso frecuente.',
      'El tamaño ideal depende tanto del espacio en la cocina como del numero de porciones.',
      'Mas funciones no siempre equivalen a mejor producto si el uso real sera repetitivo y simple.',
    ],
    buyingTips: [
      'Si tu cocina es pequena, mide encimera y espacio vertical antes de comprar.',
      'Revisa si las piezas principales se pueden limpiar con relativa facilidad.',
      'Para familia, el salto a una capacidad mayor suele valer mas que algunos extras electronicos.',
    ],
  },
  {
    section: 'hogar-cocina',
    slug: 'mejores-aspiradoras-robot',
    title: "Aspiradoras robot: Roomba j7+ frente a Roborock Q5+",
    metaDescription:
      "Compara navegación, base de vaciado y mantenimiento de los modelos j7+ y Q5+ originales. Sin prometer limpieza perfecta ni precios actuales.",
    englishPath: '/home-kitchen/best-robot-vacuums',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara navegación, base de vaciado y mantenimiento de los modelos j7+ y Q5+ originales. Sin prometer limpieza perfecta ni precios actuales.",
    intro:
      'Las aspiradoras robot funcionan mejor cuando las ves como herramientas de mantenimiento y no como reemplazo absoluto de limpieza profunda. Las mejores recogen pelo, polvo y migas con una consistencia que hace que el piso se vea aceptable mas a menudo y con menos esfuerzo humano.',
    perspective:
      'Lo importante no es solo succion. Tambien pesa como mapea, si se enreda, si evita obstaculos, cuanta atencion pide y si la base automatica de vaciado de verdad reduce trabajo o solo añade volumen al aparato.',
    keyPoints: [
      'Si tienes mascotas, el manejo de pelo y cepillos importa incluso mas que el marketing de potencia.',
      'El mapeo y la navegacion son lo que separa una robot util de una molesta.',
      'El valor real suele estar en la consistencia, no en una limpieza perfecta de una sola pasada.',
    ],
    buyingTips: [
      'Piensa en alfombras, cables sueltos y muebles bajos antes de elegir.',
      'Si tu casa tiene mucho pelo o polvo, una base autovaciable puede merecer la pena.',
      'No compres una version muy barata si ya sabes que te irritan los aparatos que piden mucha supervision.',
    ],
  },
  {
    section: 'hogar-cocina',
    slug: 'mejores-cafeteras-por-menos-de-100',
    title: "Cafeteras con presupuesto de US$100: qué comprobar",
    metaDescription:
      "Compara jarra y taza individual, identifica DCC-3200 y FlexBrew 49902, y verifica el total real antes de asumir que una oferta cuesta menos de US$100.",
    englishPath: '/home-kitchen/best-coffee-makers-under-100',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara jarra y taza individual, identifica DCC-3200 y FlexBrew 49902, y verifica el total real antes de asumir que una oferta cuesta menos de US$100.",
    intro:
      'Una cafetera barata puede ser una compra excelente o una decepcion diaria. Todo depende de si coincide con la forma en que realmente tomas cafe. Hay quien necesita una jarra rapida y grande. Hay quien solo quiere una taza mejor por la mañana sin convertir la cocina en hobby.',
    perspective:
      'En este rango de precio conviene bajar expectativas en lujo pero no en funcionalidad. Lo que vale la pena es un producto que sea simple, consistente y facil de usar medio dormido, no una maquina que intenta hacer de todo y falla en lo basico.',
    keyPoints: [
      'La rutina ideal importa mas que tener muchos botones.',
      'Un cafe sencillo pero consistente suele ser mejor compra que una maquina mas ambiciosa y menos fiable.',
      'Limpieza, tamaño y velocidad cuentan tanto como sabor en el uso diario.',
    ],
    buyingTips: [
      'Piensa si haces una sola taza o varias antes de elegir formato.',
      'Si el espacio es limitado, revisa altura y huella real en la encimera.',
      'Lee comentarios sobre fiabilidad y mantenimiento, no solo sobre sabor.',
    ],
  },
  {
    section: 'hogar-cocina',
    slug: 'mejores-articulos-para-dormitorio-universitario',
    title: "Dormitorio universitario: qué comprar y qué esperar",
    metaDescription:
      "Prioriza medidas, reglas de la residencia y compras compartidas antes de elegir ropa de cama, iluminación, almacenamiento o electrodomésticos.",
    englishPath: '/home-kitchen/best-dorm-room-essentials',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Prioriza medidas, reglas de la residencia y compras compartidas antes de elegir ropa de cama, iluminación, almacenamiento o electrodomésticos.",
    intro:
      'Comprar para un dormitorio universitario es facil de exagerar. La lista de “imprescindibles” se puede volver absurda muy rapido. La forma mas inteligente de comprar es pensar en sueño, estudio, almacenamiento y convivencia, no en llenar la habitación de cosas “cute” que luego estorban.',
    perspective:
      'En espacios pequeños, cada objeto compite por utilidad real. Por eso suelen ganar los productos que resuelven dos problemas a la vez: organizan, ahorran espacio, facilitan estudio o mejoran comodidad sin volver la habitación mas apretada.',
    keyPoints: [
      'Lo mas util suele estar en organizacion vertical, ropa de cama decente y una estacion de estudio limpia.',
      'Muchos articulos de moda para dormitorio se vuelven basura visual en dos semanas.',
      'Si el cuarto es compartido, el orden y la reduccion de ruido importan mucho mas.',
    ],
    buyingTips: [
      'Mide antes de comprar cualquier mueble auxiliar u organizador grande.',
      'Prioriza cosas que se usen a diario y no solo al principio del semestre.',
      'Si tienes poco presupuesto, invierte primero en descanso, luz y una mejor rutina de estudio.',
    ],
  },
  {
    section: 'hogar-cocina',
    slug: 'mejores-accesorios-de-escritorio-para-estudiar',
    title: "Accesorios para estudiar: luz, espacio y conexiones",
    metaDescription:
      "Elige lámpara, soporte, teclado y organización según tu mesa y equipo. Compatibilidad y límites, sin promesas sobre notas o salud.",
    englishPath: '/home-kitchen/best-study-desk-essentials',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Elige lámpara, soporte, teclado y organización según tu mesa y equipo. Compatibilidad y límites, sin promesas sobre notas o salud.",
    intro:
      'Los mejores accesorios de escritorio para estudiar no siempre son los mas llamativos. Suelen ser los que quitan friccion: una lampara que ilumina bien, un soporte para laptop, una forma simple de guardar cables o papeles, y una silla que no te haga huir despues de una hora.',
    perspective:
      'Estudiar mejor casi siempre tiene mas que ver con reducir distracciones fisicas y visuales que con comprar veinte organizadores distintos. Un escritorio limpio, iluminado y ergonomico ayuda mas que una configuracion repleta de accesorios sin criterio.',
    keyPoints: [
      'La iluminacion correcta y una buena posicion de pantalla reducen fatiga antes de que la notes.',
      'Un sistema simple de almacenamiento es mejor que muchos compartimentos pequeños que terminan desordenados.',
      'Si el escritorio es pequeño, cada compra debe justificar claramente su espacio.',
    ],
    buyingTips: [
      'Empieza por postura y luz antes de comprar decoracion.',
      'Usa una bandeja o cajon unico para evitar que los utiles se expandan por toda la mesa.',
      'Si estudias con laptop, un soporte y teclado externo suelen aportar mas que otro organizador.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-stephen-king',
    title: "Stephen King: cinco maneras de empezar",
    metaDescription:
      "Elige entre hotel encantado, cautiverio, viaje temporal, amistad y duelo. Compara las novelas por premisa, intensidad y compromiso de lectura.",
    englishPath: '/books/best-stephen-king-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Elige entre hotel encantado, cautiverio, viaje temporal, amistad y duelo. Compara las novelas por premisa, intensidad y compromiso de lectura.",
    intro:
      'Empezar con Stephen King puede ser intimidante porque su catalogo es inmenso y muy desigual en tono. Hay terror puro, historias de duelo, thrillers psicologicos y novelas largas que casi no se parecen entre si. Por eso conviene elegir una entrada que encaje con tu tolerancia al miedo y tu paciencia como lector.',
    perspective:
      'Lo mejor de King no es solo que da miedo. Es su capacidad para convertir ansiedad cotidiana, culpa, duelo o aislamiento en una historia que sigue avanzando con mucha naturalidad. Cuando funciona, funciona mejor que casi cualquiera en ese cruce entre personaje y tension.',
    keyPoints: [
      'The Shining sigue siendo una de las mejores puertas de entrada por equilibrio entre terror y lectura adictiva.',
      'Misery es ideal si quieres tension sin depender tanto de lo sobrenatural.',
      '11/22/63 demuestra que King no es solo “el de terror”.',
    ],
    buyingTips: [
      'Si no lees mucho terror, empieza por algo mas contenido antes de saltar a novelas enormes.',
      'No es necesario leerlo en orden; conviene leer por tono y curiosidad.',
      'Si buscas su lado mas perturbador, prioriza novelas centradas en duelo o obsesion, no solo monstruos.',
    ],
    bookHighlights: [
      {
        title: "Stephen King: cinco maneras de empezar",
        badge: 'Mejor Punto De Entrada',
        summary:
          'Sigue siendo el libro mas facil de recomendar porque concentra casi todas las virtudes de King sin exigir una novela gigantesca. El hotel Overlook, el deterioro de Jack Torrance y la sensibilidad de Danny crean un terror que mezcla casa rota, adiccion y presencia sobrenatural con un equilibrio muy raro.',
        insight:
          'Lo mejor aqui no es solo el miedo. Es la manera en que King convierte resentimientos familiares y culpa en una atmosfera cada vez mas cerrada. Si alguien quiere entender por que King funciona incluso cuando no pasan “grandes cosas” en cada pagina, este libro lo explica muy rapido.',
        bestFor: 'Lectores nuevos que quieren terror psicologico con tension constante y una puerta de entrada representativa.',
      },
      {
        title: "Stephen King: cinco maneras de empezar",
        badge: 'Mejor Si Prefieres Thriller',
        summary:
          'Misery demuestra que King no necesita monstruos ni mitologia para ser brutalmente eficaz. Con Paul Sheldon atrapado por Annie Wilkes, la novela reduce el escenario al minimo y saca provecho de cada gesto, cada escalera y cada cambio de humor para mantener la presion.',
        insight:
          'La gran ventaja de este libro es que casi nunca se dispersa. Es King en modo controlado, sin grasa y sin subtramas que alejen del conflicto principal. Por eso suele convencer a lectores que respetan su fama pero no conectan con sus novelas mas largas o sobrenaturales.',
        bestFor: 'Quien quiere suspense humano, ritmo mas tenso y una experiencia mas corta que sus epicas.',
      },
      {
        title: "Stephen King: cinco maneras de empezar",
        badge: 'Mejor Para Quien Cree Que No Le Gusta King',
        summary:
          'Aqui King se mueve mas hacia la historia alternativa, el viaje en el tiempo y una historia romantica con mucho peso emocional. La mision de impedir el asesinato de Kennedy da direccion, pero el encanto real esta en como recrea la vida cotidiana de finales de los cincuenta y principios de los sesenta.',
        insight:
          'Es una novela larga, si, pero tambien una de las mas calidas y legibles de su carrera. En lugar de apoyarse en sustos, se apoya en curiosidad, nostalgia, consecuencias y personajes que se quedan contigo. Para muchos lectores es la prueba de que King puede ser mucho mas amplio que la etiqueta de “autor de terror”.',
        bestFor: 'Lectores que prefieren ficcion historica, viaje temporal y una historia con mas corazon que horror puro.',
      },
      {
        title: "Stephen King: cinco maneras de empezar",
        badge: 'Mejor Gran Apuesta',
        summary:
          'It es la recomendacion para quien ya sabe que quiere sumergirse de lleno en el King mas ambicioso. Pennywise es el gancho obvio, pero la fuerza del libro esta en Derry, en la amistad del Club de los Perdedores y en esa mezcla de infancia, trauma y memoria que atraviesa toda la novela.',
        insight:
          'No conviene venderlo como un simple libro “de payaso asesino” porque se queda corto. Es una experiencia larga, sentimental, grotesca y a veces caotica, justo como sus mejores novelas-rio. Cuando engancha, engancha por su escala emocional tanto como por su terror.',
        bestFor: 'Lectores pacientes que quieren una novela enorme, coral y emocionalmente mas expansiva.',
      },
      {
        title: "Stephen King: cinco maneras de empezar",
        badge: 'La Opcion Mas Dura',
        summary:
          'Pet Sematary es probablemente la mejor eleccion si buscas el King mas oscuro y menos complaciente. La historia del cementerio y lo que ocurre despues importa, pero el verdadero centro es el duelo y la tentacion de deshacer una perdida que no admite arreglo.',
        insight:
          'Ese es el motivo por el que tanta gente la considera una de sus novelas mas perturbadoras. No depende tanto de un monstruo externo como de una pregunta insoportable: que haria una familia si tuviera una falsa oportunidad de revertir lo irreversible. Ese enfoque la vuelve mas pesada y mas memorable.',
        bestFor: 'Lectores que quieren horror emocional fuerte y no necesitan una lectura ligera o reconfortante.',
      },
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-colleen-hoover',
    title: "Colleen Hoover: por dónde empezar según el tono",
    metaDescription:
      "Compara cinco novelas de Hoover por relaciones, suspense, duelo y lectura independiente. Evita confundir romance con contenido ligero.",
    englishPath: '/books/best-colleen-hoover-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara cinco novelas de Hoover por relaciones, suspense, duelo y lectura independiente. Evita confundir romance con contenido ligero.",
    intro:
      'Colleen Hoover se vende muchas veces como una autora de romance accesible, pero esa etiqueta se queda corta. Sus libros mezclan intensidad emocional, giros grandes y temas bastante mas oscuros de lo que su fama viral a veces sugiere. Por eso no todos sus titulos sirven igual para empezar.',
    perspective:
      'La mejor manera de entrar a su obra no es seguir el libro mas famoso sin pensar. Es decidir si quieres un romance intenso, una experiencia mas dura emocionalmente o una opcion con energia de thriller. Ese filtro suele evitar decepciones.',
    keyPoints: [
      'It Ends With Us sigue siendo la entrada mas obvia si quieres entender su impacto cultural.',
      'Verity es mejor puente para lectores que normalmente no leen romance.',
      'Ugly Love y Reminders of Him funcionan mejor si ya sabes que quieres intensidad emocional.',
    ],
    buyingTips: [
      'Lee advertencias tematicas si eres sensible a abuso, duelo o relaciones emocionalmente complejas.',
      'No todos sus libros representan igual su estilo; elige por tono, no solo por ventas.',
      'Si normalmente lees thriller, empezar por Verity puede tener mucho mas sentido.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-autoayuda-2026',
    title: "Libros de autoayuda para leer en 2026: cuatro enfoques",
    metaDescription:
      "Elige entre hábitos, prioridades laborales, relaciones y comportamiento financiero. Distingue marcos de reflexión de promesas de resultados.",
    englishPath: '/books/self-help/best-self-help-books-2026',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Elige entre hábitos, prioridades laborales, relaciones y comportamiento financiero. Distingue marcos de reflexión de promesas de resultados.",
    intro:
      'El problema con muchos libros de autoayuda no es que quieran ayudarte. Es que prometen demasiado y te dejan con frases inspiradoras pero poca estructura. Los mejores del genero suelen ser los que organizan bien una idea, la hacen aplicable y respetan el tiempo del lector.',
    perspective:
      'Una guia de autoayuda buena deberia darte un marco simple para probar algo rapido, no solo una sensacion temporal de entusiasmo. Por eso conviene buscar libros con sistemas claros, ejemplos concretos y un alcance honesto.',
    keyPoints: [
      'Los libros mas utiles suelen centrarse en un problema especifico, no en arreglar toda tu vida de golpe.',
      'Habitos, dinero y enfoque siguen siendo las categorias mas practicas para la mayoria de lectores.',
      'Si ya lees mucho desarrollo personal, probablemente el valor real este en claridad y accion, no en originalidad extrema.',
    ],
    buyingTips: [
      'Busca un libro que responda a una friccion real de tu vida actual, no al problema que “suena” importante.',
      'Si odias la repeticion, prioriza autores mas directos y estructurados.',
      'No compres tres libros del mismo tema a la vez; es mejor aplicar uno.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-true-crime',
    title: "True crime: cuatro libros según perspectiva y contexto",
    metaDescription:
      "Compara Capote, McNamara, Grann y Keefe por enfoque narrativo, investigación y alcance. Revisa ediciones sin confundir el libro con un expediente actual.",
    englishPath: '/books/reader-picks/best-true-crime-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara Capote, McNamara, Grann y Keefe por enfoque narrativo, investigación y alcance. Revisa ediciones sin confundir el libro con un expediente actual.",
    intro:
      'Los mejores libros de true crime no son solo catalogos de horror. Son trabajos de investigacion que convierten un caso en una historia legible sin perder contexto humano, institucional o historico. Cuando estan bien hechos, dicen tanto sobre el sistema como sobre el crimen.',
    perspective:
      'Ese es el filtro clave. No todos los lectores quieren la misma mezcla de reporteo, psicologia, juicio y atmosfera. Algunos prefieren reconstruccion periodistica. Otros quieren una narracion casi novelesca. Elegir bien depende de eso.',
    keyPoints: [
      'El mejor true crime combina claridad narrativa con investigacion seria.',
      'Los casos muy conocidos no siempre producen los libros mas interesantes.',
      'Si te interesa justicia institucional, busca autores que trabajen bien proceso y contexto, no solo shock.',
    ],
    buyingTips: [
      'Si vienes del podcast, elige libros que aporten investigacion y profundidad extra.',
      'Si te cansa el sensacionalismo, revisa el tono del autor antes de comprar.',
      'Alternar casos famosos con historias menos conocidas suele dar mejores lecturas.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-para-quien-no-le-gusta-leer',
    title: "Libros para volver a leer: cuatro formas de empezar",
    metaDescription:
      "Prueba una novela técnica, un relato breve o dos memorias distintas. Elige por curiosidad, voz y formato, sin promesas de cambiar tus hábitos.",
    englishPath: '/books/reader-picks/best-books-for-people-who-dont-like-reading',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Prueba una novela técnica, un relato breve o dos memorias distintas. Elige por curiosidad, voz y formato, sin promesas de cambiar tus hábitos.",
    intro:
      'Mucha gente dice que no le gusta leer cuando en realidad no le gusta aburrirse, sentirse obligada o quedarse atrapada en un libro que avanza lento. Por eso los mejores libros para lectores reacios no suelen ser “importantes”. Suelen ser libros con impulso, claridad y una recompensa relativamente rapida.',
    perspective:
      'La meta aqui no es impresionar a nadie con gusto literario. Es recuperar el placer basico de seguir una historia o una idea sin sentir que estas haciendo deberes. Un libro adictivo y claro vale mucho mas que uno prestigioso pero pesado.',
    keyPoints: [
      'El ritmo importa mucho mas que el prestigio del libro.',
      'Thrillers, no ficcion narrativa y novelas cortas suelen funcionar mejor para volver al habito.',
      'Terminar un libro bueno y accesible casi siempre ayuda mas que abandonar uno “serio”.',
    ],
    buyingTips: [
      'Empieza con algo corto o muy legible antes de intentar una obra grande.',
      'Elige por curiosidad real, no por lo que “deberias” leer.',
      'Si un libro no te engancha pronto, cambiar a otro puede ser la mejor decision.',
    ],
  },
  {
    section: 'libros',
    slug: 'libros-como-el-codigo-da-vinci',
    title: "Libros como El código Da Vinci: elige el tipo de misterio",
    metaDescription:
      "Compara cuatro novelas por investigación, persecución, historia y elementos sobrenaturales. Comprueba autor, traducción y edición antes de comprar.",
    englishPath: '/books/reader-picks/best-books-like-da-vinci-code',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara cuatro novelas por investigación, persecución, historia y elementos sobrenaturales. Comprueba autor, traducción y edición antes de comprar.",
    intro:
      'Buscar libros como El Codigo Da Vinci casi siempre significa buscar una mezcla concreta: conspiracion, secretos historicos, pistas encadenadas y una historia que se mueve deprisa. No hace falta que todos imiten a Dan Brown exactamente, pero si conviene que mantengan esa energia de “una cosa lleva a la otra”.',
    perspective:
      'Algunas recomendaciones se inclinan mas por la historia y otras por la intriga pura. Lo ideal es elegir segun que parte te atrapaba mas: el rompecabezas, el trasfondo religioso, la persecucion o la lectura hiper veloz.',
    keyPoints: [
      'Los mejores equivalentes mantienen una estructura de descubrimiento continuo.',
      'No todos necesitan el mismo nivel de verosimilitud para disfrutar este subgenero.',
      'El ritmo y la claridad de la trama importan tanto como el tema historico.',
    ],
    buyingTips: [
      'Si te gustaban mas los enigmas que la accion, prioriza libros con investigacion y pistas.',
      'Si quieres algo aun mas veloz, busca thrillers de conspiracion contemporanea.',
      'Si te interesa el componente historico, no descartes novelas con contexto arqueologico o religioso.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-aventura-para-hombres',
    title: "Libros de aventura: acción, supervivencia y biografía",
    metaDescription:
      "Compara Killing Floor, The Martian, American Assassin y Unbroken por tipo de tensión, relación con los hechos y orden de lectura.",
    englishPath: '/books/reader-picks/best-action-adventure-books-for-men',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara Killing Floor, The Martian, American Assassin y Unbroken por tipo de tensión, relación con los hechos y orden de lectura.",
    intro:
      'Los mejores libros de aventura hacen que quieras pasar una pagina mas incluso cuando ya deberias dormir. Tienen movimiento, presion, decisiones rapidas y una sensacion real de que los personajes se juegan algo. Eso puede pasar en guerra, exploracion, espionaje o supervivencia.',
    perspective:
      'La clave esta en el tipo de energia que buscas. Algunos lectores quieren accion pura. Otros prefieren aventura historica o militar con mas contexto. Conviene separar esos impulsos antes de elegir.',
    keyPoints: [
      'Las mejores aventuras mantienen impulso sin perder orientacion narrativa.',
      'Supervivencia, espionaje y conflicto historico suelen ser tres rutas distintas dentro del genero.',
      'Si hace mucho que no lees ficcion, una novela de aventura puede ser una entrada excelente.',
    ],
    buyingTips: [
      'Si te gusta el cine de accion, empieza por novelas con estructura clara y capitulos cortos.',
      'Si te interesa contexto historico, busca aventura que no sacrifique demasiado el ritmo.',
      'No subestimes el valor de una prosa limpia; ayuda mucho en este tipo de lectura.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-historia-para-principiantes',
    title: "Libros de historia para empezar: cuatro alcances distintos",
    metaDescription:
      "Compara una síntesis sobre la humanidad, Roma antigua, Chicago y la historia de la ciencia. Elige por pregunta, alcance y edición.",
    englishPath: '/books/genre-fiction/best-history-books-for-beginners',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Compara una síntesis sobre la humanidad, Roma antigua, Chicago y la historia de la ciencia. Elige por pregunta, alcance y edición.",
    intro:
      'Los mejores libros de historia para principiantes son los que explican con claridad sin hablarle al lector como si fuera alumno castigado. Necesitas contexto, si, pero tambien ritmo, ejemplos y una estructura que no te haga sentir perdido a las veinte paginas.',
    perspective:
      'La mejor entrada depende del tema que ya te intrigue. Si eliges un libro generalista enorme sin interes previo, es facil abandonarlo. Si entras por guerra, imperios, biografia o una epoca concreta, la historia se vuelve mucho mas accesible.',
    keyPoints: [
      'Claridad y estructura pesan mas que “cobertura total” para empezar.',
      'Biografias y libros enfocados suelen funcionar mejor que historias universales gigantes.',
      'Una buena introduccion a la historia deberia darte contexto y ganas de seguir, no agotarte.',
    ],
    buyingTips: [
      'Empieza por un tema que ya te provoque curiosidad natural.',
      'No te obsesiones con leer “lo definitivo” primero.',
      'Si el libro es muy academico para este momento, cambia a uno mas narrativo sin culpa.',
    ],
  },
  {
    section: 'libros',
    slug: 'mejores-libros-de-la-segunda-guerra-mundial',
    title: "Segunda Guerra Mundial: novelas, testimonio e historia",
    metaDescription:
      "Distingue All the Light We Cannot See, Band of Brothers, Night y The Book Thief por género, perspectiva y límites de su relato.",
    englishPath: '/books/genre-fiction/best-world-war-ii-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: '2026-10-31',
    dek: "Distingue All the Light We Cannot See, Band of Brothers, Night y The Book Thief por género, perspectiva y límites de su relato.",
    intro:
      'Leer sobre la Segunda Guerra Mundial puede significar cosas muy distintas: estrategia militar, biografias, memorias, operaciones especiales, politica o experiencia civil. Por eso la mejor recomendacion no sale de una sola lista universal. Sale de entender que parte del conflicto te interesa mas.',
    perspective:
      'Hay lectores que buscan amplitud y contexto. Otros prefieren una campaña, una figura o una experiencia concreta. Elegir bien evita la sensacion de estar atrapado en un volumen enorme que explica mucho pero engancha poco.',
    keyPoints: [
      'Un buen libro de puerta de entrada suele equilibrar contexto amplio y narrativa clara.',
      'Las memorias y estudios de campaña ofrecen experiencias muy distintas del mismo conflicto.',
      'No hace falta empezar por el libro mas extenso para leer bien sobre la guerra.',
    ],
    buyingTips: [
      'Decide si quieres panoramica general, biografia o una operacion especifica.',
      'Si eres nuevo en el tema, un autor claro y bien estructurado vale mas que una obra mastodontica.',
      'Alternar no ficcion general con memorias puede dar una comprension mas rica del conflicto.',
    ],
  },
]

export const spanishSectionMap = Object.fromEntries(
  spanishSections.map((section) => [section.slug, section])
) as Record<SpanishSectionSlug, SpanishSection>

export function getSpanishArticle(sectionSlug: string, articleSlug: string) {
  return spanishArticles.find(
    (article) => article.section === sectionSlug && article.slug === articleSlug
  )
}

export function getSpanishArticlesBySection(sectionSlug: string) {
  return spanishArticles.filter((article) => article.section === sectionSlug)
}

export function getSpanishRelatedArticles(article: SpanishArticle, limit = 3) {
  return spanishArticles
    .filter((candidate) => candidate.section === article.section && candidate.slug !== article.slug)
    .slice(0, limit)
}

function getSpanishArticleKey(section: string, slug: string) {
  return `${section}/${slug}`
}

function spanishBookQuery(title: string, author: string) {
  return `${title} ${author} libro en español`
}

const spanishArticleRecommendations: Record<string, SpanishRecommendation[]> = {
  'libros/mejores-libros-de-stephen-king': [{"title": "The Shining — Stephen King", "description": "Hotel, aislamiento y familia; contenido adulto.", "query": "The Shining Stephen King libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "It — Stephen King", "description": "Relato coral entre infancia y adultez; no es una lectura infantil.", "query": "It Stephen King libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Misery — Stephen King", "description": "Cautiverio y amenaza humana; violencia explícita.", "query": "Misery Stephen King libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Pet Sematary — Stephen King", "description": "Duelo y horror; incluye muerte de niños y animales.", "query": "Pet Sematary Stephen King libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "11/22/63 — Stephen King", "description": "Viaje temporal y consecuencias; ficción, no historia documental.", "query": "11/22/63 Stephen King libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-colleen-hoover': [{"title": "It Ends with Us — Colleen Hoover", "description": "Relación y abuso; leer antes de It Starts with Us.", "query": "It Ends with Us Colleen Hoover libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Verity — Colleen Hoover", "description": "Suspense oscuro adulto; revisa contenido de ediciones especiales.", "query": "Verity Colleen Hoover libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Ugly Love — Colleen Hoover", "description": "Novela independiente con relaciones y pérdida.", "query": "Ugly Love Colleen Hoover libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "November 9 — Colleen Hoover", "description": "Encuentros anuales y secretos; no se promete un tono ligero.", "query": "November 9 Colleen Hoover libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Reminders of Him — Colleen Hoover", "description": "Regreso tras prisión y vínculos familiares; novela independiente.", "query": "Reminders of Him Colleen Hoover libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-autoayuda-2026': [{"title": "The Let Them Theory — Mel Robbins Sawyer Robbins", "description": "Marco sobre decisiones ajenas y respuesta propia; no promete resolver relaciones.", "query": "The Let Them Theory Mel Robbins Sawyer Robbins libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Slow Productivity — Cal Newport", "description": "Organización del trabajo; considera tu margen real de decisión.", "query": "Slow Productivity Cal Newport libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Psychology of Money — Morgan Housel", "description": "Reflexión sobre conducta, no asesoramiento financiero individual.", "query": "The Psychology of Money Morgan Housel libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Atomic Habits — James Clear", "description": "Libro original sobre rutinas; distingue el cuaderno complementario.", "query": "Atomic Habits James Clear libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-true-crime': [{"title": "In Cold Blood — Truman Capote", "description": "Narrativa de un caso; no expediente documental actualizado.", "query": "In Cold Blood Truman Capote libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "I’ll Be Gone in the Dark — Michelle McNamara", "description": "La autora participa en la búsqueda; comprueba cobertura de la edición.", "query": "I’ll Be Gone in the Dark Michelle McNamara libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Killers of the Flower Moon — David Grann", "description": "Contexto histórico e institucional de los asesinatos de osage.", "query": "Killers of the Flower Moon David Grann libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Say Nothing — Patrick Radden Keefe", "description": "Investigación narrativa con contexto político de Irlanda del Norte.", "query": "Say Nothing Patrick Radden Keefe libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-para-quien-no-le-gusta-leer': [{"title": "The Martian — Andy Weir", "description": "Prueba si disfrutas las explicaciones; distingue edición estándar y de aula.", "query": "The Martian Andy Weir libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Old Man and the Sea — Ernest Hemingway", "description": "Relato concentrado y reflexivo; no se promete lectura rápida.", "query": "The Old Man and the Sea Ernest Hemingway libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Born a Crime — Trevor Noah", "description": "Memorias con humor y material difícil; revisa idioma y adaptación.", "query": "Born a Crime Trevor Noah libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Educated — Tara Westover", "description": "Memorias sobre familia y educación; incluye abuso y conflicto.", "query": "Educated Tara Westover libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/libros-como-el-codigo-da-vinci': [{"title": "The Name of the Rose — Umberto Eco", "description": "Investigación medieval; confirma idioma y traductor.", "query": "The Name of the Rose Umberto Eco libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Amber Room — Steve Berry", "description": "Búsqueda de arte; no es una entrega de Cotton Malone.", "query": "The Amber Room Steve Berry libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Labyrinth — Kate Mosse", "description": "Dos épocas y protagonistas; comprueba la edición.", "query": "Labyrinth Kate Mosse libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Historian — Elizabeth Kostova", "description": "Misterio documental con una premisa sobrenatural.", "query": "The Historian Elizabeth Kostova libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-aventura-para-hombres': [{"title": "Killing Floor — Lee Child", "description": "Primer Reacher por publicación; thriller criminal violento.", "query": "Killing Floor Lee Child libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Martian — Andy Weir", "description": "Supervivencia ficticia con explicaciones técnicas; revisa edición.", "query": "The Martian Andy Weir libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "American Assassin — Vince Flynn", "description": "Inicio cronológico de Mitch Rapp, no primer libro publicado.", "query": "American Assassin Vince Flynn libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Unbroken — Laura Hillenbrand", "description": "Biografía; distingue original y adaptación juvenil.", "query": "Unbroken Laura Hillenbrand libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-historia-para-principiantes': [{"title": "Sapiens — Yuval Noah Harari", "description": "Síntesis interpretativa amplia; verifica texto y formato.", "query": "Sapiens Yuval Noah Harari libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Devil in the White City — Erik Larson", "description": "Chicago, exposición y crimen; no solo investigación policial.", "query": "The Devil in the White City Erik Larson libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "SPQR — Mary Beard", "description": "Historia de Roma; comprueba edición y traducción.", "query": "SPQR Mary Beard libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "A Short History of Nearly Everything — Bill Bryson", "description": "Divulgación científica; distingue original, 2.0 y audio abreviado.", "query": "A Short History of Nearly Everything Bill Bryson libro español", "affiliateLabel": "Buscar en Amazon"}],
  'libros/mejores-libros-de-la-segunda-guerra-mundial': [{"title": "All the Light We Cannot See — Anthony Doerr", "description": "Novela con perspectivas alternas; no testimonio documental.", "query": "All the Light We Cannot See Anthony Doerr libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Band of Brothers — Stephen E. Ambrose", "description": "Historia de Easy Company; no confundir con la serie audiovisual.", "query": "Band of Brothers Stephen E. Ambrose libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "Night — Elie Wiesel", "description": "Testimonio de un superviviente; revisa traducción y contenido.", "query": "Night Elie Wiesel libro español", "affiliateLabel": "Buscar en Amazon"}, {"title": "The Book Thief — Markus Zusak", "description": "Novela narrada por la Muerte; incluye persecución y pérdida.", "query": "The Book Thief Markus Zusak libro español", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/mejores-productos-para-tu-oficina-en-casa': [{"title": "FlexiSpot E7", "description": "Verifica bastidor, tablero y variante; no se ha probado estabilidad.", "query": "FlexiSpot E7 standing desk", "affiliateLabel": "Buscar en Amazon"}, {"title": "SIHOO Doro C300", "description": "Comprueba la versión y si incluye reposapiés; ajuste individual no garantizado.", "query": "SIHOO Doro C300 office chair", "affiliateLabel": "Buscar en Amazon"}, {"title": "Ergotron LX original", "description": "Identifica kit, carga, VESA y mesa compatible.", "query": "Ergotron LX 45-241 monitor arm", "affiliateLabel": "Buscar en Amazon"}, {"title": "Logitech MX Keys S", "description": "Teclado de tijera; confirma distribución y conexiones.", "query": "Logitech MX Keys S keyboard", "affiliateLabel": "Buscar en Amazon"}, {"title": "Logitech MX Master 3S", "description": "Comprueba forma, receptor y software compatible.", "query": "Logitech MX Master 3S mouse", "affiliateLabel": "Buscar en Amazon"}, {"title": "Monitor portátil ARZOPA de 15,6 pulgadas", "description": "Categoría sin referencia única verificada; exige modelo, puertos y accesorios.", "query": "ARZOPA 15.6 portable monitor", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/oficina-en-casa-en-mesa-de-cocina': [{"title": "Soporte plegable para portátil", "description": "Categoría; verifica carga, estabilidad, ventilación y espacio.", "query": "foldable laptop riser portable", "affiliateLabel": "Buscar en Amazon"}, {"title": "Teclado y ratón separados", "description": "Verifica distribución y conexión; inalámbrico no siempre significa Bluetooth.", "query": "wireless keyboard and mouse combo", "affiliateLabel": "Buscar en Amazon"}, {"title": "Monitor portátil", "description": "Categoría; comprueba vídeo, alimentación, soporte y guardado.", "query": "portable external monitor usb c", "affiliateLabel": "Buscar en Amazon"}, {"title": "Auriculares para llamadas", "description": "Comprueba micrófono y aplicación; ANC no garantiza privacidad.", "query": "headphones work from home calls", "affiliateLabel": "Buscar en Amazon"}, {"title": "Organización de cables", "description": "Categoría; respeta instrucciones eléctricas y deja libre el paso.", "query": "desk cable management kit", "affiliateLabel": "Buscar en Amazon"}, {"title": "Lámpara orientable portátil", "description": "Verifica base, alcance y ubicación en la mesa compartida.", "query": "adjustable portable desk lighting", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/mejores-escritorios-de-pie': [{"title": "Jarvis Bamboo Rectangle", "description": "Comprueba etapas, tamaño de tablero y mando; búsqueda sin oferta verificada.", "query": "Jarvis Bamboo Rectangle standing desk", "affiliateLabel": "Buscar en Amazon"}, {"title": "UPLIFT V2, unidad identificada", "description": "Modelo anterior: no aplicar especificaciones de V3; verifica componentes y estado.", "query": "UPLIFT V2 standing desk", "affiliateLabel": "Buscar en Amazon"}, {"title": "FlexiSpot E7", "description": "Verifica variante, bastidor y paquete completo antes de comparar precio.", "query": "FlexiSpot E7 standing desk", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/mejores-brazos-para-monitor': [{"title": "Ergotron LX original 45-241", "description": "Busca el kit exacto; verifica carga, VESA, montaje y piezas.", "query": "Ergotron LX 45-241 monitor arm", "affiliateLabel": "Buscar en Amazon"}, {"title": "Amazon Basics Lift Engine B00MIBN16O", "description": "Búsqueda del modelo histórico, sin confirmar existencias ni equivalencia con LX.", "query": "Amazon Basics B00MIBN16O Lift Engine monitor arm", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/mejores-sillas-ergonomicas-para-home-office': [{"title": "Herman Miller Aeron", "description": "Verifica talla A/B/C, generación y opciones; no todas incluyen el mismo apoyo.", "query": "Herman Miller Aeron Remastered office chair", "affiliateLabel": "Buscar en Amazon"}, {"title": "Steelcase Gesture", "description": "Confirma silla o taburete, profundidad y opciones; prueba el ajuste.", "query": "Steelcase Gesture office chair", "affiliateLabel": "Buscar en Amazon"}],
  'oficina-en-casa/mejores-monitores-portatiles-economicos': [{"title": "Monitores portátiles genéricos de 15,6 pulgadas", "description": "Categoría sin modelo verificado; exige referencia, puertos y accesorios.", "affiliateUrl": "https://www.ebay.com/sch/i.html?_nkw=portable+monitor+15.6+usb+c+1080p+new&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1", "affiliatePlatform": "ebay", "affiliateLabel": "Buscar en eBay"}, {"title": "Lenovo ThinkVision M14 original reacondicionado", "description": "Comprueba USB-C con vídeo, cable y estado de la unidad.", "affiliateUrl": "https://www.ebay.com/sch/i.html?_nkw=Lenovo+ThinkVision+M14+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1", "affiliatePlatform": "ebay", "affiliateLabel": "Buscar en eBay"}, {"title": "ASUS ZenScreen MB16ACV reacondicionado", "description": "Modelo específico; USB-A requiere controlador compatible.", "affiliateUrl": "https://www.ebay.com/sch/i.html?_nkw=Asus+ZenScreen+MB16ACV+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1", "affiliatePlatform": "ebay", "affiliateLabel": "Buscar en eBay"}, {"title": "ARZOPA, InnoView o KYY de caja abierta", "description": "Búsqueda de familias; no transfiere especificaciones entre modelos.", "affiliateUrl": "https://www.ebay.com/sch/i.html?_nkw=Arzopa+InnoView+KYY+portable+monitor+open+box&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1", "affiliatePlatform": "ebay", "affiliateLabel": "Buscar en eBay"}],
  'tecnologia/mejores-monitores-economicos': [{"title": "LG 27GP850-B", "description": "27 pulgadas 1440p plano; sin entrada ni carga USB-C.", "query": "LG 27GP850-B", "affiliateLabel": "Buscar en Amazon"}, {"title": "Dell S2722DGM", "description": "27 pulgadas 1440p curvo; revisar límites de cada entrada.", "query": "Dell S2722DGM", "affiliateLabel": "Buscar en Amazon"}, {"title": "ASUS VG249Q3A", "description": "23,8 pulgadas Full HD; soporte con inclinación, sin ajuste de altura.", "query": "ASUS VG249Q3A", "affiliateLabel": "Buscar en Amazon"}],
  'tecnologia/mejores-laptops-para-estudiantes': [{"title": "MacBook Air M3 de 13 pulgadas", "description": "Modelo de 2024; verificar memoria y requisitos macOS del curso.", "query": "Apple MacBook Air M3 13 inch", "affiliateLabel": "Buscar en Amazon"}, {"title": "Lenovo IdeaPad Flex 5i 14IRU8", "description": "Comprobar número completo de máquina, pantalla y paquete de lápiz.", "query": "Lenovo IdeaPad Flex 5i 14IRU8", "affiliateLabel": "Buscar en Amazon"}, {"title": "Dell XPS 13 9340", "description": "Referencia concreta; pantalla y configuración varían.", "query": "Dell XPS 13 9340", "affiliateLabel": "Buscar en Amazon"}, {"title": "Acer Chromebook Spin 714 CP714-1WN", "description": "Confirmar configuración regional, aplicaciones y actualizaciones.", "query": "Acer Chromebook Spin 714 CP714-1WN", "affiliateLabel": "Buscar en Amazon"}],
  'tecnologia/mejores-teclados-mecanicos': [{"title": "Keychron Q5 Max", "description": "Distribución 96%; distinguir versión montada de barebone.", "query": "Keychron Q5 Max", "affiliateLabel": "Buscar en Amazon"}, {"title": "Razer BlackWidow V4 75% original", "description": "Referencia con cable; no trasladar características del Pro.", "query": "Razer BlackWidow V4 75 keyboard", "affiliateLabel": "Buscar en Amazon"}, {"title": "Redragon K552", "description": "Comprobar variante exacta, interruptores, iluminación y cable.", "query": "Redragon K552", "affiliateLabel": "Buscar en Amazon"}, {"title": "Logitech MX Keys S — alternativa no mecánica", "description": "Mecanismo de tijera; comprobar formato completo y conexión.", "query": "Logitech MX Keys S", "affiliateLabel": "Buscar en Amazon"}],
  'tecnologia/mejores-audifonos-inalambricos': [{"title": "Sony WF-1000XM5", "description": "Comparar multipunto y fuentes compatibles; sin ranking de sonido.", "query": "Sony WF-1000XM5", "affiliateLabel": "Buscar en Amazon"}, {"title": "AirPods Pro 2 USB-C", "description": "Comprobar el paquete USB-C y los requisitos de funciones Apple.", "query": "Apple AirPods Pro 2 USB C", "affiliateLabel": "Buscar en Amazon"}, {"title": "Jabra Evolve2 Buds", "description": "Elegir variante Teams o UC y adaptador USB del paquete.", "query": "Jabra Evolve2 Buds Teams UC USB", "affiliateLabel": "Buscar en Amazon"}, {"title": "Soundcore Liberty 4 NC", "description": "LDAC requiere fuente compatible y desactiva multipunto.", "query": "Soundcore Liberty 4 NC", "affiliateLabel": "Buscar en Amazon"}],
  'tecnologia/airpods-pro-vs-sony-wf-1000xm5': [{"title": "AirPods Pro 2 con estuche USB-C", "description": "Referencia concreta de segunda generación; comprobar paquete y requisitos Apple.", "query": "Apple AirPods Pro 2 USB C", "affiliateLabel": "Buscar en Amazon"}, {"title": "Sony WF-1000XM5", "description": "Multipunto y LDAC sujetos a equipos y ajustes compatibles; no prueba de calidad sonora.", "query": "Sony WF-1000XM5", "affiliateLabel": "Buscar en Amazon"}],
  'hogar-cocina/mejores-freidoras-de-aire': [{"title": "Ninja AF101, 4 cuartos", "description": "Búsqueda del modelo AF101. Verifica piezas incluidas y manual; no es una oferta comprobada.", "query": "Ninja AF101 4 quart air fryer", "affiliateLabel": "Buscar en Amazon"}, {"title": "COSORI Pro II CP358-AF, 5,8 cuartos", "description": "Búsqueda de referencia exacta. No confundir con CP158-AF; revisa etiqueta y avisos de retirada antes de elegir una unidad.", "query": "COSORI Pro II CP358-AF air fryer", "affiliateLabel": "Buscar en Amazon"}],
  'hogar-cocina/mejores-aspiradoras-robot': [{"title": "iRobot Roomba j7+ original", "description": "Búsqueda del aspirador con Clean Base; no confundir con j7 sin base ni con Combo j7+.", "query": "iRobot Roomba j7+ self emptying robot vacuum", "affiliateLabel": "Buscar en Amazon"}, {"title": "Roborock Q5+ original", "description": "Búsqueda de Q5 con Auto-Empty Dock Pure; comprobar que no sea una variante Pro o Max.", "query": "Roborock Q5+ original Auto Empty Dock Pure", "affiliateLabel": "Buscar en Amazon"}],
  'hogar-cocina/mejores-cafeteras-por-menos-de-100': [{"title": "Cuisinart DCC-3200", "description": "Referencia descontinuada según el fabricante. Búsqueda para comparar ofertas y piezas; precio inferior a US$100 no verificado.", "query": "Cuisinart DCC-3200 14 cup coffee maker", "affiliateLabel": "Buscar en Amazon"}, {"title": "Hamilton Beach FlexBrew Trio 49902", "description": "Jarra y preparación individual. Verifica modelo, contenido y precio total; no se confirma que cueste menos de US$100.", "query": "Hamilton Beach FlexBrew Trio 49902", "affiliateLabel": "Buscar en Amazon"}],
  'hogar-cocina/mejores-articulos-para-dormitorio-universitario': [{"title": "Ropa de cama Twin XL, si es la medida de tu residencia", "description": "Búsqueda de categoría; confirma tamaño, grosor del colchón y contenido del juego.", "query": "twin xl sheet set dorm", "affiliateLabel": "Buscar en Amazon"}, {"title": "Organizadores para debajo de la cama", "description": "Búsqueda de categoría; mide altura libre y espacio para abrir y retirar el contenedor.", "query": "under bed storage dorm dimensions", "affiliateLabel": "Buscar en Amazon"}],
  'hogar-cocina/mejores-accesorios-de-escritorio-para-estudiar': [{"title": "Logitech MK270", "description": "Búsqueda del conjunto con receptor USB. Comprueba variante, distribución de teclas y compatibilidad del equipo.", "query": "Logitech MK270 keyboard mouse USB receiver", "affiliateLabel": "Buscar en Amazon"}, {"title": "Zebra Mildliner de doble punta", "description": "Búsqueda del resaltador con punta biselada y fina; verifica colores y cantidad del paquete.", "query": "Zebra Mildliner dual tip chisel bullet highlighter", "affiliateLabel": "Buscar en Amazon"}],
}

export function getSpanishArticleRecommendations(article: SpanishArticle) {
  return spanishArticleRecommendations[getSpanishArticleKey(article.section, article.slug)] ?? []
}

export function getSpanishStaticPaths() {
  return [
    [],
    ...spanishSections.map((section) => [section.slug]),
    ...spanishArticles.map((article) => [article.section, article.slug]),
  ]
}

export function getSpanishSitemapEntries() {
  const root = 'https://bestpickzone.com/es'

  return [
    { url: root, lastModified: spanishArticles.reduce((latest, article) => article.updatedDate > latest ? article.updatedDate : latest, SPANISH_SITE_DATE), changeFrequency: 'weekly' as const, priority: 0.95 },
    ...spanishSections.map((section) => ({
      url: `${root}/${section.slug}`,
      lastModified: spanishArticles.filter((article) => article.section === section.slug).reduce((latest, article) => article.updatedDate > latest ? article.updatedDate : latest, SPANISH_SITE_DATE),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...spanishArticles.map((article) => ({
      url: `${root}/${article.section}/${article.slug}`,
      lastModified: article.updatedDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
