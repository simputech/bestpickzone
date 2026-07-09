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
    title: 'Los Mejores Productos Para Tu Oficina En Casa',
    metaDescription:
      'Una guia en espanol con los mejores productos para oficina en casa: escritorio, silla, brazo para monitor, iluminacion, camara web y accesorios que hacen el trabajo remoto mas comodo.',
    englishPath: '/wfh/best-products-for-your-home-office',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Si quieres que tu escritorio se sienta mas ordenado y menos improvisado, estos son los productos que suelen cambiar mas la experiencia diaria.',
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
    title: 'Como Armar Una Oficina En Casa Sobre La Mesa De La Cocina',
    metaDescription:
      'Ideas practicas para convertir una mesa de cocina en oficina en casa con mejor ergonomia, menos cables y una rutina facil de montar y guardar.',
    englishPath: '/wfh/ultimate-kitchen-table-home-office-setup',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Una buena oficina temporal no tiene que sentirse precaria. Con pocas piezas, una mesa de cocina puede trabajar mucho mejor.',
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
    title: 'Los Mejores Escritorios De Pie Para Trabajar Desde Casa',
    metaDescription:
      'Que buscar en un escritorio de pie para home office: estabilidad, profundidad, medidas y por que algunos modelos economicos funcionan mejor que otros.',
    englishPath: '/wfh/fully-jarvis-vs-uplift-v2-standing-desk',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Un escritorio de pie bueno no solo sube y baja. Tambien sostiene mejor tu flujo de trabajo y limpia visualmente la oficina.',
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
    title: 'Los Mejores Brazos Para Monitor En Una Oficina En Casa',
    metaDescription:
      'Por que un brazo para monitor puede mejorar la postura y despejar el escritorio mas rapido que otros accesorios de oficina en casa.',
    englishPath: '/wfh/ergotron-lx-vs-amazon-basics-monitor-arm',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Pocas compras liberan tanto espacio visual como un buen brazo para monitor.',
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
    title: 'Las Mejores Sillas Ergonomicas Para Home Office',
    metaDescription:
      'Como elegir una silla ergonomica para trabajar desde casa y que elementos importan de verdad: soporte lumbar, brazos, profundidad y ajuste.',
    englishPath: '/wfh/herman-miller-aeron-vs-steelcase-gesture',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'La silla correcta no se nota tanto como la equivocada, pero cambia todo el dia.',
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
    title: 'Los Mejores Monitores Portatiles Economicos',
    metaDescription:
      'Que buscar en un monitor portatil economico para trabajo remoto, viajes o segunda pantalla flexible sin gastar de mas.',
    englishPath: '/wfh/best-portable-monitors-under-100-ebay',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Una segunda pantalla ligera puede hacer que un escritorio temporal se sienta mucho mas serio.',
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
    title: 'Los Mejores Monitores Economicos Por Menos De $300',
    metaDescription:
      'Monitores economicos recomendados para trabajo, juegos y uso general, con explicacion clara de resolucion, panel, tasa de refresco y donde conviene comprar.',
    englishPath: '/tech/best-budget-monitors',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Hoy se puede comprar una pantalla mucho mejor que hace dos años por el mismo dinero, pero aun conviene separar bien uso de oficina y uso gamer.',
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
    title: 'Las Mejores Laptops Para Estudiantes',
    metaDescription:
      'Que portatiles valen mas la pena para estudiantes: bateria, peso, rendimiento y que compromisos si convienen y cuales no.',
    englishPath: '/tech/best-laptops-for-college-students',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Una laptop para estudiar tiene que sobrevivir clases, biblioteca, mochila y multitarea sin volverse una carga.',
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
    title: 'Los Mejores Teclados Mecanicos',
    metaDescription:
      'Guia en espanol para elegir teclado mecanico segun escritura, juegos, ruido, tamaño y presupuesto.',
    englishPath: '/tech/best-mechanical-keyboards',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'No hace falta ser gamer para disfrutar un teclado mecanico; hace falta pasar muchas horas escribiendo o usar uno malo actualmente.',
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
    title: 'Los Mejores Audifonos Inalambricos',
    metaDescription:
      'Audifonos inalambricos recomendados para musica, llamadas, gimnasio y uso diario con enfoque practico en bateria, sonido y comodidad.',
    englishPath: '/tech/best-wireless-earbuds',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Un buen par de audifonos inalambricos mejora trayectos, gimnasio y llamadas, pero conviene comprar segun uso real y no por moda.',
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
    title: 'AirPods Pro Vs Sony WF-1000XM5',
    metaDescription:
      'Comparativa en espanol entre AirPods Pro y Sony WF-1000XM5 para decidir por sonido, llamadas, cancelacion de ruido y comodidad.',
    englishPath: '/tech/airpods-pro-vs-sony-wf-1000xm5',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Dos de los auriculares mas populares del mercado, pero no necesariamente para el mismo comprador.',
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
    title: 'Las Mejores Freidoras De Aire',
    metaDescription:
      'Que freidora de aire conviene comprar segun tamaño, facilidad de limpieza, potencia y uso real en cocina diaria.',
    englishPath: '/home-kitchen/best-air-fryers',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'La mejor freidora de aire no es la mas grande ni la mas famosa; es la que realmente encaja con tu cocina y tu rutina.',
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
    title: 'Las Mejores Aspiradoras Robot',
    metaDescription:
      'Guia en espanol para elegir aspiradora robot segun pisos, mascotas, mapeo y si realmente quieres ahorrar tiempo o solo sumar otro aparato.',
    englishPath: '/home-kitchen/best-robot-vacuums',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Una aspiradora robot buena no te cambia la vida por magia, pero si te quita una capa muy real de mantenimiento diario.',
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
    title: 'Las Mejores Cafeteras Por Menos De 100 Dolares',
    metaDescription:
      'Cafeteras economicas recomendadas para quien quiere una taza mejor sin pagar una maquina premium ni complicarse todas las mañanas.',
    englishPath: '/home-kitchen/best-coffee-makers-under-100',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Con menos de cien dolares aun se puede preparar cafe muy decente, pero conviene elegir segun rutina y no solo segun precio.',
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
    title: 'Los Mejores Articulos Para Dormitorio Universitario',
    metaDescription:
      'Que productos valen de verdad para un dormitorio universitario: organizacion, comodidad, estudio y pequeñas mejoras que si se usan todos los dias.',
    englishPath: '/home-kitchen/best-dorm-room-essentials',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Los mejores productos de dormitorio no son los mas virales, sino los que hacen mas llevadero un espacio pequeño y compartido.',
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
    title: 'Los Mejores Accesorios De Escritorio Para Estudiar',
    metaDescription:
      'Accesorios y productos de escritorio que ayudan a estudiar mejor: orden, iluminacion, postura y pequeñas mejoras que reducen fatiga.',
    englishPath: '/home-kitchen/best-study-desk-essentials',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Un buen escritorio para estudiar no necesita verse perfecto; necesita ser facil de usar durante horas sin sentirse caotico.',
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
    title: 'Los Mejores Libros De Stephen King',
    metaDescription:
      'Por donde empezar con Stephen King y cuales son sus libros mas recomendables segun terror, suspense, personajes y accesibilidad para lectores nuevos.',
    englishPath: '/books/best-stephen-king-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Stephen King tiene una biblioteca enorme, pero unos pocos titulos siguen funcionando mejor que otros como puerta de entrada.',
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
        title: 'The Shining',
        badge: 'Mejor Punto De Entrada',
        summary:
          'Sigue siendo el libro mas facil de recomendar porque concentra casi todas las virtudes de King sin exigir una novela gigantesca. El hotel Overlook, el deterioro de Jack Torrance y la sensibilidad de Danny crean un terror que mezcla casa rota, adiccion y presencia sobrenatural con un equilibrio muy raro.',
        insight:
          'Lo mejor aqui no es solo el miedo. Es la manera en que King convierte resentimientos familiares y culpa en una atmosfera cada vez mas cerrada. Si alguien quiere entender por que King funciona incluso cuando no pasan “grandes cosas” en cada pagina, este libro lo explica muy rapido.',
        bestFor: 'Lectores nuevos que quieren terror psicologico con tension constante y una puerta de entrada representativa.',
      },
      {
        title: 'Misery',
        badge: 'Mejor Si Prefieres Thriller',
        summary:
          'Misery demuestra que King no necesita monstruos ni mitologia para ser brutalmente eficaz. Con Paul Sheldon atrapado por Annie Wilkes, la novela reduce el escenario al minimo y saca provecho de cada gesto, cada escalera y cada cambio de humor para mantener la presion.',
        insight:
          'La gran ventaja de este libro es que casi nunca se dispersa. Es King en modo controlado, sin grasa y sin subtramas que alejen del conflicto principal. Por eso suele convencer a lectores que respetan su fama pero no conectan con sus novelas mas largas o sobrenaturales.',
        bestFor: 'Quien quiere suspense humano, ritmo mas tenso y una experiencia mas corta que sus epicas.',
      },
      {
        title: '11/22/63',
        badge: 'Mejor Para Quien Cree Que No Le Gusta King',
        summary:
          'Aqui King se mueve mas hacia la historia alternativa, el viaje en el tiempo y una historia romantica con mucho peso emocional. La mision de impedir el asesinato de Kennedy da direccion, pero el encanto real esta en como recrea la vida cotidiana de finales de los cincuenta y principios de los sesenta.',
        insight:
          'Es una novela larga, si, pero tambien una de las mas calidas y legibles de su carrera. En lugar de apoyarse en sustos, se apoya en curiosidad, nostalgia, consecuencias y personajes que se quedan contigo. Para muchos lectores es la prueba de que King puede ser mucho mas amplio que la etiqueta de “autor de terror”.',
        bestFor: 'Lectores que prefieren ficcion historica, viaje temporal y una historia con mas corazon que horror puro.',
      },
      {
        title: 'It',
        badge: 'Mejor Gran Apuesta',
        summary:
          'It es la recomendacion para quien ya sabe que quiere sumergirse de lleno en el King mas ambicioso. Pennywise es el gancho obvio, pero la fuerza del libro esta en Derry, en la amistad del Club de los Perdedores y en esa mezcla de infancia, trauma y memoria que atraviesa toda la novela.',
        insight:
          'No conviene venderlo como un simple libro “de payaso asesino” porque se queda corto. Es una experiencia larga, sentimental, grotesca y a veces caotica, justo como sus mejores novelas-rio. Cuando engancha, engancha por su escala emocional tanto como por su terror.',
        bestFor: 'Lectores pacientes que quieren una novela enorme, coral y emocionalmente mas expansiva.',
      },
      {
        title: 'Pet Sematary',
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
    title: 'Los Mejores Libros De Colleen Hoover',
    metaDescription:
      'Guia en espanol para decidir con que libro empezar de Colleen Hoover y cual encaja mejor si buscas romance, intensidad emocional o thriller.',
    englishPath: '/books/best-colleen-hoover-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Colleen Hoover no siempre es “romance ligero”, y elegir mal el primer libro puede cambiar por completo tu opinion sobre ella.',
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
    title: 'Los Mejores Libros De Autoayuda De 2026',
    metaDescription:
      'Libros de autoayuda recomendados para habitos, enfoque, dinero, carrera y crecimiento personal sin caer en promesas vacias.',
    englishPath: '/books/self-help/best-self-help-books-2026',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'La autoayuda util suele sentirse mas como una herramienta concreta que como una charla motivacional eterna.',
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
    title: 'Los Mejores Libros De True Crime',
    metaDescription:
      'Recomendaciones de true crime para lectores que quieren reporteo serio, casos complejos y narrativas que vayan mas alla del morbo.',
    englishPath: '/books/reader-picks/best-true-crime-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'El true crime funciona mejor cuando entiende que el caso importa, pero tambien importa como esta contado y con que responsabilidad.',
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
    title: 'Los Mejores Libros Para Gente A La Que No Le Gusta Leer',
    metaDescription:
      'Una lista en espanol para lectores reacios: libros cortos o muy adictivos que ayudan a recuperar el habito sin sentirse como tarea.',
    englishPath: '/books/reader-picks/best-books-for-people-who-dont-like-reading',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'A veces el problema no es que no te guste leer; es que sigues eligiendo libros equivocados para este momento.',
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
    title: 'Libros Como El Codigo Da Vinci',
    metaDescription:
      'Recomendaciones para lectores que quieren mas thrillers de conspiracion, secretos historicos y enigmas al estilo El Codigo Da Vinci.',
    englishPath: '/books/reader-picks/best-books-like-da-vinci-code',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Si lo que te gustaba era la mezcla de conspiracion, ritmo y simbolos, hay varios caminos muy buenos para seguir.',
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
    title: 'Los Mejores Libros De Aventura Para Hombres',
    metaDescription:
      'Novelas de aventura y accion para lectores que buscan ritmo, viajes, peligro, supervivencia o historias con impulso constante.',
    englishPath: '/books/reader-picks/best-action-adventure-books-for-men',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'La aventura buena no depende solo de explosiones o testosterona. Depende de movimiento, riesgo y claridad narrativa.',
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
    title: 'Los Mejores Libros De Historia Para Principiantes',
    metaDescription:
      'Libros de historia recomendados para empezar sin sentirse perdido: claros, bien estructurados y lo bastante interesantes para seguir leyendo.',
    englishPath: '/books/genre-fiction/best-history-books-for-beginners',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'Empezar con historia no significa empezar con el libro mas largo del estante.',
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
    title: 'Los Mejores Libros De La Segunda Guerra Mundial',
    metaDescription:
      'Recomendaciones sobre la Segunda Guerra Mundial para lectores que buscan historia militar, contexto politico, memorias y narrativas accesibles.',
    englishPath: '/books/genre-fiction/best-world-war-ii-books',
    publishedDate: SPANISH_SITE_DATE,
    updatedDate: SPANISH_SITE_DATE,
    dek: 'La Segunda Guerra Mundial tiene cientos de libros excelentes, pero no todos sirven igual para empezar ni para el mismo tipo de lector.',
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
  'libros/mejores-libros-de-stephen-king': [
    { title: 'The Shining', description: 'La opcion mas segura para empezar con King en una edicion en espanol.', query: spanishBookQuery('The Shining', 'Stephen King'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'It', description: 'La recomendacion para lectores que quieren la version mas ambiciosa y larga de King.', query: spanishBookQuery('It', 'Stephen King'), affiliateLabel: 'Ver opciones en espanol en Amazon' },
    { title: 'Misery', description: 'La mejor compra si prefieres thriller psicologico sin elemento sobrenatural pesado.', query: spanishBookQuery('Misery', 'Stephen King'), affiliateLabel: 'Buscar Misery en espanol' },
    { title: 'Pet Sematary', description: 'La eleccion para lectores que quieren el King mas duro y perturbador.', query: spanishBookQuery('Pet Sematary', 'Stephen King'), affiliateLabel: 'Buscar Pet Sematary en espanol' },
    { title: '11/22/63', description: 'La apuesta para quienes quieren historia alternativa y menos terror puro.', query: spanishBookQuery('11/22/63', 'Stephen King'), affiliateLabel: 'Buscar 11/22/63 en espanol' },
  ],
  'libros/mejores-libros-de-colleen-hoover': [
    { title: 'It Ends With Us', description: 'El punto de entrada mas claro al estilo emocionalmente intenso de Hoover.', query: spanishBookQuery('It Ends With Us', 'Colleen Hoover'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'Verity', description: 'La mejor compra si llegas a Hoover desde thriller y suspense.', query: spanishBookQuery('Verity', 'Colleen Hoover'), affiliateLabel: 'Ver Verity en espanol' },
    { title: 'Ugly Love', description: 'La opcion para quien quiere una lectura mas romantica y emocionalmente fuerte.', query: spanishBookQuery('Ugly Love', 'Colleen Hoover'), affiliateLabel: 'Buscar Ugly Love en espanol' },
    { title: 'November 9', description: 'La recomendacion mas ligera y romantica dentro de esta lista.', query: spanishBookQuery('November 9', 'Colleen Hoover'), affiliateLabel: 'Buscar November 9 en espanol' },
    { title: 'Reminders of Him', description: 'La mejor compra si prefieres culpa, redencion y un tono algo mas maduro.', query: spanishBookQuery('Reminders of Him', 'Colleen Hoover'), affiliateLabel: 'Buscar Reminders of Him en espanol' },
  ],
  'libros/mejores-libros-de-autoayuda-2026': [
    { title: 'The Let Them Theory', description: 'La apuesta mas actual si quieres motivacion clara y accion inmediata.', query: spanishBookQuery('The Let Them Theory', 'Mel Robbins'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'Slow Productivity', description: 'Ideal si quieres trabajar mejor con menos saturacion y mas enfoque.', query: spanishBookQuery('Slow Productivity', 'Cal Newport'), affiliateLabel: 'Ver Slow Productivity en espanol' },
    { title: 'The Psychology of Money', description: 'La mejor compra si tu prioridad es mentalidad financiera y decisiones practicas.', query: spanishBookQuery('The Psychology of Money', 'Morgan Housel'), affiliateLabel: 'Buscar este libro en espanol' },
    { title: 'Atomic Habits', description: 'Sigue siendo el libro mas consistente para cambiar sistemas y rutinas.', query: spanishBookQuery('Atomic Habits', 'James Clear'), affiliateLabel: 'Buscar Atomic Habits en espanol' },
  ],
  'libros/mejores-libros-de-true-crime': [
    { title: 'In Cold Blood', description: 'El clasico fundacional del true crime para lectores que quieren contexto y escritura fuerte.', query: spanishBookQuery('In Cold Blood', 'Truman Capote'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: "I'll Be Gone in the Dark", description: 'La recomendacion para lectores que quieren investigacion moderna y obsesiva.', query: spanishBookQuery("I'll Be Gone in the Dark", 'Michelle McNamara'), affiliateLabel: 'Ver opciones en espanol' },
    { title: 'Killers of the Flower Moon', description: 'La mejor compra si te interesa crimen real con peso historico y politico.', query: spanishBookQuery('Killers of the Flower Moon', 'David Grann'), affiliateLabel: 'Buscar este libro en espanol' },
    { title: 'Say Nothing', description: 'Una opcion mas politica y periodistica para quien quiere algo mas amplio que un caso.', query: spanishBookQuery('Say Nothing', 'Patrick Radden Keefe'), affiliateLabel: 'Buscar Say Nothing en espanol' },
  ],
  'libros/mejores-libros-para-quien-no-le-gusta-leer': [
    { title: 'The Martian', description: 'La mejor compra si quieres ritmo, humor y una estructura que nunca se atasca.', query: spanishBookQuery('The Martian', 'Andy Weir'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'The Old Man and the Sea', description: 'La opcion corta para volver a leer sin sentir que tomas una tarea enorme.', query: spanishBookQuery('The Old Man and the Sea', 'Ernest Hemingway'), affiliateLabel: 'Ver en espanol' },
    { title: 'Born a Crime', description: 'La recomendacion si prefieres memorias con voz muy fuerte y lectura agil.', query: spanishBookQuery('Born a Crime', 'Trevor Noah'), affiliateLabel: 'Buscar este libro en espanol' },
    { title: 'Educated', description: 'La compra indicada si quieres historia real intensa y muy legible.', query: spanishBookQuery('Educated', 'Tara Westover'), affiliateLabel: 'Buscar Educated en espanol' },
  ],
  'libros/libros-como-el-codigo-da-vinci': [
    { title: 'The Name of the Rose', description: 'La recomendacion mas seria para quien quiere misterio historico con mas profundidad.', query: spanishBookQuery('The Name of the Rose', 'Umberto Eco'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'The Amber Room', description: 'La compra mas cercana al ritmo rapido tipo Dan Brown.', query: spanishBookQuery('The Amber Room', 'Steve Berry'), affiliateLabel: 'Ver en espanol' },
    { title: 'Labyrinth', description: 'La opcion para quien quiere conspiracion, historia y atmosfera.', query: spanishBookQuery('Labyrinth', 'Kate Mosse'), affiliateLabel: 'Buscar Labyrinth en espanol' },
    { title: 'The Historian', description: 'La apuesta para lectores que quieren mas investigacion y tono oscuro.', query: spanishBookQuery('The Historian', 'Elizabeth Kostova'), affiliateLabel: 'Buscar este libro en espanol' },
  ],
  'libros/mejores-libros-de-aventura-para-hombres': [
    { title: 'Killing Floor', description: 'La compra mas segura si quieres accion inmediata y lectura muy adictiva.', query: spanishBookQuery('Killing Floor', 'Lee Child'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'The Martian', description: 'La mejor opcion si prefieres supervivencia, ingenio y ciencia accesible.', query: spanishBookQuery('The Martian', 'Andy Weir'), affiliateLabel: 'Ver en espanol' },
    { title: 'American Assassin', description: 'La recomendacion para quien quiere espionaje y violencia mas directa.', query: spanishBookQuery('American Assassin', 'Vince Flynn'), affiliateLabel: 'Buscar este libro en espanol' },
    { title: 'Unbroken', description: 'La compra para lectores que quieren aventura real y resistencia humana.', query: spanishBookQuery('Unbroken', 'Laura Hillenbrand'), affiliateLabel: 'Buscar Unbroken en espanol' },
  ],
  'libros/mejores-libros-de-historia-para-principiantes': [
    { title: 'Sapiens', description: 'La compra mas facil para un lector nuevo que quiere una gran vista general.', query: spanishBookQuery('Sapiens', 'Yuval Noah Harari'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'The Devil in the White City', description: 'La recomendacion si prefieres historia contada como thriller.', query: spanishBookQuery('The Devil in the White City', 'Erik Larson'), affiliateLabel: 'Ver en espanol' },
    { title: 'SPQR', description: 'La mejor apuesta si te interesa Roma y una explicacion clara.', query: spanishBookQuery('SPQR', 'Mary Beard'), affiliateLabel: 'Buscar SPQR en espanol' },
    { title: 'A Short History of Nearly Everything', description: 'Ideal si quieres una entrada muy accesible a grandes ideas historicas y cientificas.', query: spanishBookQuery('A Short History of Nearly Everything', 'Bill Bryson'), affiliateLabel: 'Buscar este libro en espanol' },
  ],
  'libros/mejores-libros-de-la-segunda-guerra-mundial': [
    { title: 'All the Light We Cannot See', description: 'La mejor novela para entrar al tema desde personajes y atmosfera.', query: spanishBookQuery('All the Light We Cannot See', 'Anthony Doerr'), affiliateLabel: 'Buscar edicion en espanol en Amazon' },
    { title: 'Band of Brothers', description: 'La compra principal si quieres no ficcion militar y relato de unidad.', query: spanishBookQuery('Band of Brothers', 'Stephen Ambrose'), affiliateLabel: 'Ver en espanol' },
    { title: 'Night', description: 'La lectura mas corta y directa si quieres memoria y testimonio.', query: spanishBookQuery('Night', 'Elie Wiesel'), affiliateLabel: 'Buscar este libro en espanol' },
    { title: 'The Book Thief', description: 'La recomendacion para quien quiere una novela emotiva y mas accesible.', query: spanishBookQuery('The Book Thief', 'Markus Zusak'), affiliateLabel: 'Buscar The Book Thief en espanol' },
  ],
  'oficina-en-casa/mejores-productos-para-tu-oficina-en-casa': [
    { title: 'FlexiSpot E7 standing desk', description: 'El escritorio de pie recomendado en la version en ingles para una base mas seria.', query: 'FlexiSpot E7 standing desk', affiliateLabel: 'Ver en Amazon' },
    { title: 'SIHOO Doro C300 ergonomic chair', description: 'La silla ergonomica recomendada para pasar muchas horas sin sentir el set improvisado.', query: 'SIHOO Doro C300 ergonomic office chair', affiliateLabel: 'Ver en Amazon' },
    { title: 'Ergotron LX single monitor arm', description: 'El brazo para monitor que mejor libera espacio y mejora la altura de pantalla.', query: 'Ergotron LX monitor arm', affiliateLabel: 'Ver en Amazon' },
    { title: 'Logitech MX Keys S', description: 'El teclado externo recomendado para mejorar postura y mantener el escritorio limpio.', query: 'Logitech MX Keys S keyboard', affiliateLabel: 'Ver en Amazon' },
    { title: 'Logitech MX Master 3S', description: 'El mouse mas facil de recomendar para trabajo largo y productividad diaria.', query: 'Logitech MX Master 3S mouse', affiliateLabel: 'Ver en Amazon' },
    { title: 'ARZOPA 15.6-inch portable monitor', description: 'La segunda pantalla ligera recomendada si necesitas mas espacio sin una oficina fija.', query: 'ARZOPA 15.6 portable monitor', affiliateLabel: 'Ver en Amazon' },
  ],
  'oficina-en-casa/oficina-en-casa-en-mesa-de-cocina': [
    { title: 'Foldable laptop riser', description: 'La primera compra para subir la pantalla y dejar de encorvarte en la mesa.', query: 'foldable laptop riser portable', affiliateLabel: 'Ver en Amazon' },
    { title: 'Wireless keyboard and mouse', description: 'El combo que convierte la laptop en pantalla y hace viable una postura mejor.', query: 'wireless keyboard and mouse combo', affiliateLabel: 'Ver en Amazon' },
    { title: 'Portable external monitor', description: 'La pantalla extra que hace que una mesa temporal se sienta mucho mas capaz.', query: 'portable external monitor usb c', affiliateLabel: 'Ver en Amazon' },
    { title: 'Noise-cancelling headphones', description: 'La pieza que ayuda a crear foco cuando la cocina sigue siendo un espacio compartido.', query: 'noise cancelling headphones work from home', affiliateLabel: 'Ver en Amazon' },
    { title: 'Cable and power kit', description: 'Lo necesario para montar y desmontar rapido sin llenar la mesa de cables.', query: 'cable management kit desk power strip', affiliateLabel: 'Ver en Amazon' },
    { title: 'Adjustable portable lighting', description: 'La luz compacta recomendada si tu lugar cambia durante el dia.', query: 'adjustable portable desk lighting', affiliateLabel: 'Ver en Amazon' },
  ],
  'oficina-en-casa/mejores-escritorios-de-pie': [
    { title: 'Fully Jarvis standing desk', description: 'Una de las referencias de la comparativa en ingles para estabilidad y ajuste.', query: 'Fully Jarvis standing desk', affiliateLabel: 'Ver en Amazon' },
    { title: 'Uplift V2 standing desk', description: 'La otra mesa clave de la comparativa, muy fuerte en opciones y robustez.', query: 'Uplift V2 standing desk', affiliateLabel: 'Ver en Amazon' },
    { title: 'FlexiSpot E7 standing desk', description: 'Una alternativa fuerte si quieres algo mas facil de encontrar en Amazon.', query: 'FlexiSpot E7 standing desk', affiliateLabel: 'Ver en Amazon' },
  ],
  'oficina-en-casa/mejores-brazos-para-monitor': [
    { title: 'Ergotron LX single monitor arm', description: 'La referencia premium de la comparativa original para movimiento suave y durabilidad.', query: 'Ergotron LX monitor arm', affiliateLabel: 'Ver en Amazon' },
    { title: 'Amazon Basics monitor arm', description: 'La opcion mas sencilla si quieres ahorrar sin perder la mejora principal.', query: 'Amazon Basics monitor arm', affiliateLabel: 'Ver en Amazon' },
  ],
  'oficina-en-casa/mejores-sillas-ergonomicas-para-home-office': [
    { title: 'Herman Miller Aeron chair', description: 'La silla para quien valora ventilacion, mesh y tallas mas precisas.', query: 'Herman Miller Aeron chair', affiliateLabel: 'Ver en Amazon' },
    { title: 'Steelcase Gesture office chair', description: 'La mejor compra si prefieres asiento acolchado y brazos mas flexibles.', query: 'Steelcase Gesture office chair', affiliateLabel: 'Ver en Amazon' },
  ],
  'oficina-en-casa/mejores-monitores-portatiles-economicos': [
    { title: 'New 15.6-inch generic USB-C portable monitors', description: 'La opcion nueva mas comun cuando quieres quedarte por debajo de 100 dolares.', affiliateUrl: 'https://www.ebay.com/sch/i.html?_nkw=portable+monitor+15.6+usb+c+1080p+new&LH_BIN=1&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1', affiliatePlatform: 'ebay', affiliateLabel: 'Ver en eBay' },
    { title: 'Lenovo ThinkVision M14 refurbished', description: 'La recomendacion reacondicionada mas fuerte si priorizas marca y portabilidad.', affiliateUrl: 'https://www.ebay.com/sch/i.html?_nkw=Lenovo+ThinkVision+M14+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1', affiliatePlatform: 'ebay', affiliateLabel: 'Buscar en eBay' },
    { title: 'Asus ZenScreen refurbished', description: 'Una busqueda util si quieres un nombre conocido sin irte por encima del presupuesto.', affiliateUrl: 'https://www.ebay.com/sch/i.html?_nkw=Asus+ZenScreen+portable+monitor+refurbished&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1', affiliatePlatform: 'ebay', affiliateLabel: 'Buscar en eBay' },
    { title: 'Arzopa / InnoView / KYY open-box', description: 'La zona de valor si quieres una pantalla ligera con menos gasto inicial.', affiliateUrl: 'https://www.ebay.com/sch/i.html?_nkw=Arzopa+InnoView+KYY+portable+monitor+open+box&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5339164184&customid=&toolid=10001&mkevt=1', affiliatePlatform: 'ebay', affiliateLabel: 'Buscar en eBay' },
  ],
  'tecnologia/mejores-monitores-economicos': [
    { title: 'LG 27GP850-B', description: 'La mejor compra global de la guia inglesa si quieres 1440p y gran valor.', affiliateUrl: 'https://www.amazon.com/s?k=LG+27GP850-B&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Dell S2722DGM', description: 'La opcion curva para quien quiere contraste fuerte y buen precio.', affiliateUrl: 'https://www.amazon.com/s?k=Dell+S2722DGM&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'ASUS TUF VG249Q3A', description: 'La compra para priorizar gaming economico con panel IPS rapido.', affiliateUrl: 'https://www.amazon.com/s?k=ASUS+TUF+VG249Q3A&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Acer SB220Q bi', description: 'La opcion mas barata si solo quieres una mejora clara frente a una pantalla mediocre.', affiliateUrl: 'https://www.amazon.com/s?k=Acer+SB220Q+bi&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'tecnologia/mejores-laptops-para-estudiantes': [
    { title: 'MacBook Air M3 13-inch', description: 'La recomendacion premium para estudiantes que priorizan bateria, peso y silencio.', affiliateUrl: 'https://www.amazon.com/s?k=MacBook+Air+M3+13+inch&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Lenovo IdeaPad Flex 5i 14-inch', description: 'La opcion equilibrada para quien quiere valor y versatilidad.', affiliateUrl: 'https://www.amazon.com/s?k=Lenovo+IdeaPad+Flex+5i+14+inch&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Dell XPS 13', description: 'La compra para quien quiere un equipo mas pulido y compacto.', affiliateUrl: 'https://www.amazon.com/s?k=Dell+XPS+13+2026&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Acer Chromebook Spin 714', description: 'La recomendacion para presupuestos mas controlados y tareas generales.', affiliateUrl: 'https://www.amazon.com/s?k=Acer+Chromebook+Spin+714&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'tecnologia/mejores-teclados-mecanicos': [
    { title: 'Keychron Q5 Max', description: 'La opcion mas completa para quien quiere una experiencia premium de escritura.', affiliateUrl: 'https://www.amazon.com/s?k=Keychron+Q5+Max&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Logitech MX Keys S', description: 'La compra mas facil si prefieres algo mas silencioso y de oficina.', affiliateUrl: 'https://www.amazon.com/s?k=Logitech+MX+Keys+S&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Razer BlackWidow V4 75', description: 'La recomendacion fuerte para gaming y personalizacion.', affiliateUrl: 'https://www.amazon.com/s?k=Razer+BlackWidow+V4+75&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Redragon K552 Kumara', description: 'La opcion economica para entrar a esta categoria sin gastar de mas.', affiliateUrl: 'https://www.amazon.com/s?k=Redragon+K552+Kumara&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'tecnologia/mejores-audifonos-inalambricos': [
    { title: 'Sony WF-1000XM5', description: 'La mejor compra general si priorizas ANC y sonido por encima de todo.', affiliateUrl: 'https://www.amazon.com/s?k=Sony+WF-1000XM5&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'AirPods Pro 2nd Generation', description: 'La opcion mas sensata si usas iPhone y quieres integracion con Apple.', affiliateUrl: 'https://www.amazon.com/s?k=AirPods+Pro+2nd+Generation&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Jabra Evolve2 Buds', description: 'La compra para quien vive en llamadas y trabajo remoto.', affiliateUrl: 'https://www.amazon.com/s?k=Jabra+Evolve2+Buds&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Soundcore Liberty 4 NC', description: 'La opcion con mejor equilibrio entre precio y cancelacion activa.', affiliateUrl: 'https://www.amazon.com/s?k=Soundcore+Liberty+4+NC&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'tecnologia/airpods-pro-vs-sony-wf-1000xm5': [
    { title: 'AirPods Pro 2nd Generation', description: 'La compra recomendada para usuarios de iPhone y ecosistema Apple.', affiliateUrl: 'https://www.amazon.com/s?k=AirPods+Pro+2nd+Generation&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Sony WF-1000XM5', description: 'La compra ganadora para Android y para quien quiere mejor audio puro.', affiliateUrl: 'https://www.amazon.com/s?k=Sony+WF-1000XM5&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'hogar-cocina/mejores-freidoras-de-aire': [
    { title: 'Cosori Pro II Air Fryer 5.8 Qt', description: 'La ganadora principal de la comparativa inglesa por equilibrio general.', affiliateUrl: 'https://www.amazon.com/s?k=cosori+pro+ii+air+fryer+5.8+qt&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Ninja AF101 Air Fryer 4 Qt', description: 'La alternativa compacta y sencilla si no necesitas tanta capacidad.', affiliateUrl: 'https://www.amazon.com/s?k=Ninja+AF101+Air+Fryer+4+Qt&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'hogar-cocina/mejores-aspiradoras-robot': [
    { title: 'iRobot Roomba j7+ Self-Emptying', description: 'La recomendacion principal si quieres una experiencia mas pulida y fiable.', affiliateUrl: 'https://www.amazon.com/s?k=iRobot+Roomba+j7%2B+self+emptying&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Roborock Q5+ Self-Emptying', description: 'La alternativa fuerte si quieres mejor valor y navegacion muy competente.', affiliateUrl: 'https://www.amazon.com/s?k=roborock+Q5+plus+self+emptying&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'hogar-cocina/mejores-cafeteras-por-menos-de-100': [
    { title: 'Cuisinart DCC-3200 Perfectemp 14-Cup', description: 'La mejor compra si quieres una cafetera clasica y consistente.', affiliateUrl: 'https://www.amazon.com/s?k=Cuisinart+DCC-3200+Perfectemp+14-Cup&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
    { title: 'Hamilton Beach FlexBrew Trio 2-Way', description: 'La recomendacion si quieres flexibilidad entre jarra y taza individual.', affiliateUrl: 'https://www.amazon.com/s?k=hamilton+beach+flexbrew+trio+2+way+coffee+maker&tag=althcu-20', affiliateLabel: 'Ver en Amazon' },
  ],
  'hogar-cocina/mejores-articulos-para-dormitorio-universitario': [
    { title: 'Bedsure Twin XL Sheet Set', description: 'Una compra base para empezar bien la cama del dormitorio.', query: 'twin xl sheet set dorm', affiliateLabel: 'Ver en Amazon' },
    { title: 'Linenspa 3-Inch Gel Memory Foam Topper', description: 'La mejora de comodidad con mas impacto para una cama universitaria regular.', query: 'twin xl mattress topper gel memory foam', affiliateLabel: 'Ver en Amazon' },
    { title: 'Frigidaire Retro 3.2 Cu Ft Compact Fridge', description: 'La mini nevera recomendada si quieres algo util y con un poco mas de estilo.', query: 'mini fridge dorm 3.2 cu ft', affiliateLabel: 'Ver en Amazon' },
    { title: 'Surge Protector Tower with USB Ports', description: 'La pieza practica que suele hacer mas facil conectar todo sin caos.', query: 'surge protector power strip tower usb dorm', affiliateLabel: 'Ver en Amazon' },
    { title: 'Magicteam White Noise Machine', description: 'Una compra inteligente si el piso o la residencia son ruidosos.', query: 'white noise machine dorm sleep', affiliateLabel: 'Ver en Amazon' },
    { title: 'Addtam LED Desk Lamp with Power Strip Base', description: 'Una buena combinacion de luz y carga para cuartos pequenos.', query: 'desk lamp usb charging port outlet dorm', affiliateLabel: 'Ver en Amazon' },
  ],
  'hogar-cocina/mejores-accesorios-de-escritorio-para-estudiar': [
    { title: 'Voncerus LED Desk Lamp with Clamp', description: 'La luz de trabajo principal recomendada para escritorios pequeños.', query: 'led desk lamp clamp students', affiliateLabel: 'Ver en Amazon' },
    { title: 'Quntis Monitor Light Bar', description: 'La opcion para iluminar mejor sin comerte espacio frontal del escritorio.', query: 'monitor light bar usb', affiliateLabel: 'Ver en Amazon' },
    { title: 'RIWUCT Foldable Aluminum Laptop Stand', description: 'La compra de postura mas clara para estudiantes con laptop.', query: 'laptop stand adjustable aluminum', affiliateLabel: 'Ver en Amazon' },
    { title: 'Logitech MK270 Wireless Combo', description: 'El combo facil para separar teclado y mejorar comodidad.', query: 'wireless keyboard and mouse combo', affiliateLabel: 'Ver en Amazon' },
    { title: 'Zebra Mildliner Double-Ended Highlighters', description: 'La recomendacion para tomar apuntes y marcar sin saturar la pagina.', query: 'zebra mildliner highlighters set', affiliateLabel: 'Ver en Amazon' },
    { title: 'Marbrasse 3-Tier Mesh Desk Organizer', description: 'La pieza para mantener papeles, cables y utiles en un mismo sitio.', query: 'mesh desk organizer with drawer', affiliateLabel: 'Ver en Amazon' },
  ],
}

export function getSpanishArticleRecommendations(article: SpanishArticle) {
  return spanishArticleRecommendations[getSpanishArticleKey(article.section, article.slug)] ?? []
}

export function getSpanishUrlForEnglishPath(englishPath: string) {
  const normalizedPath = englishPath.startsWith('http')
    ? new URL(englishPath).pathname
    : englishPath.startsWith('/')
      ? englishPath
      : `/${englishPath}`

  const matchingSection = spanishSections.find((section) => section.englishPath === normalizedPath)
  if (matchingSection) {
    return `https://bestpickzone.com/es/${matchingSection.slug}`
  }

  const matchingArticle = spanishArticles.find((article) => article.englishPath === normalizedPath)
  if (matchingArticle) {
    return `https://bestpickzone.com/es/${matchingArticle.section}/${matchingArticle.slug}`
  }

  return null
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
    { url: root, lastModified: SPANISH_SITE_DATE, changeFrequency: 'weekly' as const, priority: 0.95 },
    ...spanishSections.map((section) => ({
      url: `${root}/${section.slug}`,
      lastModified: SPANISH_SITE_DATE,
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
