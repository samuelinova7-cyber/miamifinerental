import { Vehicle } from '../types';

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'lamborghini-huracan-evo',
    name: 'Lamborghini Huracán EVO',
    brand: 'Lamborghini',
    year: 2024,
    category: 'supercars',
    categoryLabel: {
      pt: 'Superesportivo & Exótico',
      en: 'Supercar & Exotic',
      es: 'Superdeportivo y Exótico'
    },
    dailyRate: 890,
    featured: true,
    tag: {
      pt: 'Mais Desejado',
      en: 'Most Desired',
      es: 'Más Deseado'
    },
    image: '/src/assets/images/car_lamborghini_huracan_1793138559887.jpg',
    specs: {
      horsepower: 640,
      acceleration: '2.9s',
      passengers: 2,
      luggage: 1,
      transmission: {
        pt: 'Automático 7M LDF Dupla Embreagem',
        en: '7-Speed Dual-Clutch LDF',
        es: 'Automático 7M Doble Embrague'
      },
      engine: '5.2L V10 Aspirado (8.500 RPM)',
      topSpeed: '325 km/h (202 mph)'
    },
    features: {
      pt: [
        'Escapamento esportivo com modos Strada, Sport e Corsa',
        'Câmera de ré com sensores dianteiros e traseiros',
        'Sistema de telemetria Lamborghini e Apple CarPlay',
        'Interior em Alcântara preta com costura amarela',
        'Suspensão magnetoreológica adaptativa com lift dianteiro'
      ],
      en: [
        'Sports exhaust with Strada, Sport, and Corsa drive modes',
        'Rear backup camera with front/rear parking sensors',
        'Lamborghini telemetry system and Apple CarPlay',
        'Alcantara luxury interior with contrast yellow stitching',
        'Adaptive magnetorheological suspension with front axle lift'
      ],
      es: [
        'Escape deportivo con modos Strada, Sport y Corsa',
        'Cámara de reversa con sensores delanteros y traseros',
        'Sistema de telemetría Lamborghini y Apple CarPlay',
        'Interior en Alcántara con costuras amarillas',
        'Suspensión magnetoreológica con elevador delantero'
      ]
    },
    depositAmount: 1500,
    includedMilesPerDay: 100
  },
  {
    id: 'corvette-c8-convertible',
    name: 'Corvette C8 Stingray Convertible',
    brand: 'Chevrolet',
    year: 2024,
    category: 'supercars',
    categoryLabel: {
      pt: 'Superesportivo Conversível',
      en: 'Supercar Convertible',
      es: 'Superdeportivo Convertible'
    },
    dailyRate: 390,
    featured: true,
    tag: {
      pt: 'Sensação em Miami',
      en: 'Miami Favorite',
      es: 'Favorito en Miami'
    },
    image: '/src/assets/images/car_corvette_c8_1793138561336.jpg',
    specs: {
      horsepower: 495,
      acceleration: '2.9s',
      passengers: 2,
      luggage: 2,
      transmission: {
        pt: 'Automático 8M Tremec Dupla Embreagem',
        en: '8-Speed Dual-Clutch Tremec',
        es: 'Automático 8M Doble Embrague'
      },
      engine: '6.2L V8 LT2 Central-Traseiro',
      topSpeed: '312 km/h (194 mph)'
    },
    features: {
      pt: [
        'Capota rígida retrátil automática operável até 50 km/h',
        'Pacote Z51 Performance com freios Brembo reforçados',
        'Bose Performance Series com 14 alto-falantes',
        'Head-Up Display colorido no para-brisa',
        'Dois porta-malas (dianteiro e traseiro para malas de mão)'
      ],
      en: [
        'Power retractable hardtop operable up to 30 mph',
        'Z51 Performance package with upgraded Brembo brakes',
        'Bose Performance Series 14-speaker sound system',
        'Full-color Head-Up Display on windshield',
        'Dual trunks (front frunk and rear trunk for carry-on luggage)'
      ],
      es: [
        'Techo rígido retráctil operado hasta 50 km/h',
        'Paquete Z51 Performance con frenos Brembo',
        'Sistema de audio Bose Performance de 14 bocinas',
        'Head-Up Display a color en el parabrisas',
        'Doble maletero (delantero y trasero para equipaje)'
      ]
    },
    depositAmount: 800,
    includedMilesPerDay: 150
  },
  {
    id: 'porsche-911-cabriolet',
    name: 'Porsche 911 Carrera Cabriolet',
    brand: 'Porsche',
    year: 2024,
    category: 'convertibles',
    categoryLabel: {
      pt: 'Conversível & Esportivo Premium',
      en: 'Premium Sports Convertible',
      es: 'Convertible Deportivo Premium'
    },
    dailyRate: 520,
    featured: true,
    tag: {
      pt: 'Ícone de Elegância',
      en: 'Elegance Icon',
      es: 'Icono de Elegancia'
    },
    image: '/src/assets/images/car_porsche_911_cabrio_1793138562013.jpg',
    specs: {
      horsepower: 379,
      acceleration: '3.8s',
      passengers: 4,
      luggage: 2,
      transmission: {
        pt: 'PDK 8 Velocidades',
        en: '8-Speed Porsche Doppelkupplung (PDK)',
        es: 'PDK 8 Velocidades'
      },
      engine: '3.0L Boxer 6 Cilindros Twin-Turbo',
      topSpeed: '291 km/h (181 mph)'
    },
    features: {
      pt: [
        'Abertura ultrarrápida da capota em apenas 12 segundos',
        'Sistema de som surround BOSE de alta fidelidade',
        'Pacote Sport Chrono com seletor de modos no volante',
        'Bancos esportivos ventilados ideais para o calor da Flórida',
        'Porsche Communication Management (PCM) com CarPlay sem fio'
      ],
      en: [
        'Ultra-fast convertible soft top opens in just 12 seconds',
        'BOSE high-fidelity surround sound system',
        'Sport Chrono package with drive mode dial on steering wheel',
        'Ventilated sport seats perfect for Florida sunshine',
        'Porsche Communication Management (PCM) with wireless CarPlay'
      ],
      es: [
        'Apertura ultra-rápida de la capota en solo 12 segundos',
        'Sistema de sonido envolvente BOSE',
        'Paquete Sport Chrono con selector en el volante',
        'Asientos deportivos ventilados ideales para Florida',
        'Porsche Communication Management con Apple CarPlay inalámbrico'
      ]
    },
    depositAmount: 1000,
    includedMilesPerDay: 120
  },
  {
    id: 'cadillac-escalade-esv',
    name: 'Cadillac Escalade ESV Sport',
    brand: 'Cadillac',
    year: 2024,
    category: 'suvs',
    categoryLabel: {
      pt: 'SUV de Luxo & Família',
      en: 'Luxury Family SUV',
      es: 'SUV de Lujo y Familia'
    },
    dailyRate: 420,
    featured: true,
    tag: {
      pt: 'Espaço VIP Máximo',
      en: 'Maximum VIP Space',
      es: 'Espacio VIP Máximo'
    },
    image: '/src/assets/images/car_cadillac_escalade_1793138562483.jpg',
    specs: {
      horsepower: 420,
      acceleration: '5.9s',
      passengers: 7,
      luggage: 8,
      transmission: {
        pt: 'Automático de 10 Marchas',
        en: '10-Speed Automatic with Hydra-Matic',
        es: 'Automático de 10 Velocidades'
      },
      engine: '6.2L EcoTec3 V8',
      topSpeed: '210 km/h (130 mph)'
    },
    features: {
      pt: [
        'Painel Curvo OLED curvo de 38 polegadas com resolução 4K',
        'Sistema de som AKG Studio Reference com 36 alto-falantes',
        'Versão ESV (chassi longo) com espaço gigante para malas de compras',
        'Telas traseiras individuais de entretenimento para crianças',
        'Suspensão a ar adaptativa Air Ride com nivelamento automático'
      ],
      en: [
        'Curved 38-inch diagonal OLED display with 4K resolution',
        'AKG Studio Reference 36-speaker surround sound system',
        'Extended ESV wheelbase with massive luggage capacity for shopping',
        'Rear-seat dual entertainment displays for children and guests',
        'Air Ride adaptive suspension with automatic leveling'
      ],
      es: [
        'Pantalla curva OLED de 38 pulgadas con resolución 4K',
        'Sistema de sonido AKG Studio Reference con 36 altavoces',
        'Versión extendida ESV con amplio espacio para equipaje',
        'Pantallas traseras de entretenimiento para la familia',
        'Suspensión neumática adaptativa Air Ride'
      ]
    },
    depositAmount: 800,
    includedMilesPerDay: 150
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus S',
    brand: 'Lamborghini',
    year: 2024,
    category: 'supercars',
    categoryLabel: {
      pt: 'Super SUV Exótico',
      en: 'Exotic Super SUV',
      es: 'Super SUV Exótico'
    },
    dailyRate: 980,
    featured: false,
    tag: {
      pt: 'Performance & Conforto',
      en: 'Performance & Luxury',
      es: 'Rendimiento y Lujo'
    },
    image: '/src/assets/images/car_lamborghini_huracan_1793138559887.jpg', // high-res Lamborghini flagship asset
    specs: {
      horsepower: 666,
      acceleration: '3.5s',
      passengers: 5,
      luggage: 4,
      transmission: {
        pt: 'Automático 8M com Tração Integral AWD',
        en: '8-Speed Automatic AWD',
        es: 'Automático 8M Tracción AWD'
      },
      engine: '4.0L V8 Bi-Turbo',
      topSpeed: '305 km/h (190 mph)'
    },
    features: {
      pt: [
        'Seletor Tamburo com modo Sabbia, Terra, Neve, Strada, Sport e Corsa',
        'Sistema de áudio Bang & Olufsen 3D Advanced com 21 alto-falantes',
        'Teto solar panorâmico duplo em vidro',
        'Freios de carbono-cerâmica gigantes com pinças personalizadas',
        'O melhor dos dois mundos: velocidade de pista e conforto para 5 pessoas'
      ],
      en: [
        'Tamburo drive selector with Strada, Sport, Corsa, and Sabbia modes',
        'Bang & Olufsen 3D Advanced 21-speaker sound system',
        'Dual-pane panoramic glass sunroof',
        'Carbon-ceramic brakes with customized calipers',
        'Supercar racetrack DNA with 5-passenger luxury road trip comfort'
      ],
      es: [
        'Selector Tamburo con modos de conducción personalizados',
        'Sistema de sonido Bang & Olufsen 3D Advanced con 21 bocinas',
        'Techo panorámico corredizo de cristal',
        'Frenos carbono-cerámicos de alto rendimiento',
        'Superdeportivo y espacio de lujo para 5 personas'
      ]
    },
    depositAmount: 1800,
    includedMilesPerDay: 100
  },
  {
    id: 'ford-mustang-gt-convertible',
    name: 'Ford Mustang GT Premium Convertible',
    brand: 'Ford',
    year: 2024,
    category: 'convertibles',
    categoryLabel: {
      pt: 'Conversível Muscle Car',
      en: 'Muscle Convertible',
      es: 'Convertible Americano'
    },
    dailyRate: 210,
    featured: false,
    tag: {
      pt: 'Melhor Custo-Benefício',
      en: 'Best Value',
      es: 'Mejor Relación Calidad-Precio'
    },
    image: '/src/assets/images/car_corvette_c8_1793138561336.jpg', // convertible asset
    specs: {
      horsepower: 480,
      acceleration: '4.2s',
      passengers: 4,
      luggage: 2,
      transmission: {
        pt: 'Automático SelectShift 10 Velocidades',
        en: '10-Speed SelectShift Automatic',
        es: 'Automático de 10 Velocidades'
      },
      engine: '5.0L Coyote V8 com Válvula Ativa',
      topSpeed: '250 km/h (155 mph)'
    },
    features: {
      pt: [
        'Escapamento esportivo ativo com ronco inconfundível do motor V8 5.0',
        'Capota de lona acústica de acionamento elétrico',
        'Painel digital personalizável de 12.4 polegadas + central SYNC 4',
        'Bancos esportivos em couro com refrigeração e aquecimento',
        'Perfeito para cruzar a Ocean Drive e a ponte de Miami Beach'
      ],
      en: [
        'Active valve performance exhaust with signature American 5.0 V8 roar',
        'One-touch acoustic power folding convertible roof',
        '12.4-inch customizable digital cluster + SYNC 4 touchscreen',
        'Heated and cooled leather sport bucket seats',
        'The quintessential convertible to cruise Ocean Drive in Miami Beach'
      ],
      es: [
        'Escape deportivo activo con el inconfundible rugido V8',
        'Capota eléctrica con aislamiento acústico',
        'Tablero digital configurable de 12.4 pulgadas',
        'Asientos de cuero con refrigeración y calefacción',
        'Ideal para pasear con el viento en Ocean Drive'
      ]
    },
    depositAmount: 500,
    includedMilesPerDay: 150
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls-Royce Cullinan Black Badge',
    brand: 'Rolls-Royce',
    year: 2024,
    category: 'suvs',
    categoryLabel: {
      pt: 'Ultra-Luxo & Prestígio',
      en: 'Ultra-Luxury Prestige',
      es: 'Ultra Lujo y Prestigio'
    },
    dailyRate: 1850,
    featured: false,
    tag: {
      pt: 'Topo de Linha Mundial',
      en: 'World-Class Pinnacle',
      es: 'Cúspide de Lujo'
    },
    image: '/src/assets/images/car_cadillac_escalade_1793138562483.jpg',
    specs: {
      horsepower: 592,
      acceleration: '4.9s',
      passengers: 5,
      luggage: 5,
      transmission: {
        pt: 'Automático Satélite ZF 8 Velocidades',
        en: 'Satellite-Aided 8-Speed Automatic',
        es: 'Automático Asistido por Satélite 8V'
      },
      engine: '6.75L V12 Twin-Turbocharger',
      topSpeed: '250 km/h (155 mph)'
    },
    features: {
      pt: [
        'Teto estrelado Starlight Headliner com fibra ótica e estrelas cadentes',
        'Portas suicidas traseiras com fechamento elétrico automatizado',
        'Sistema de suspensão pneumática "Tapete Mágico" Magic Carpet Ride',
        'Frigobar com taças de champanhe no console central traseiro',
        'Atendimento e protocolo VIP com motorista opcional ou para dirigir'
      ],
      en: [
        'Starlight fiber-optic headliner with shooting star animation',
        'Electronic power-closing rear coach doors (suicide doors)',
        'Signature Magic Carpet Ride self-leveling air suspension',
        'Rear center console champagne chiller with crystal flutes',
        'Exclusive VIP handoff protocol with optional chauffeur or self-drive'
      ],
      es: [
        'Techo con efecto de cielo estrellado Starlight Headliner',
        'Puertas traseras de apertura invertida con cierre eléctrico',
        'Suspensión neumática de alfombra mágica Magic Carpet Ride',
        'Nevera para champán en la consola trasera',
        'Atención VIP exclusiva para una experiencia inigualable'
      ]
    },
    depositAmount: 3000,
    includedMilesPerDay: 100
  }
];

export const PICKUP_LOCATIONS = [
  {
    id: 'mia_airport',
    label: {
      pt: '✈️ Aeroporto Internacional de Miami (MIA) - Terminal',
      en: '✈️ Miami International Airport (MIA) - Curbside',
      es: '✈️ Aeropuerto Internacional de Miami (MIA) - Terminal'
    },
    tag: 'MIA'
  },
  {
    id: 'fll_airport',
    label: {
      pt: '✈️ Aeroporto de Fort Lauderdale (FLL) - Terminal',
      en: '✈️ Fort Lauderdale-Hollywood Airport (FLL) - Curbside',
      es: '✈️ Aeropuerto de Fort Lauderdale (FLL) - Terminal'
    },
    tag: 'FLL'
  },
  {
    id: 'south_beach_hotel',
    label: {
      pt: '🏨 Hotel em Miami Beach / South Beach / Mid-Beach',
      en: '🏨 Hotel in Miami Beach / South Beach / Mid-Beach',
      es: '🏨 Hotel en Miami Beach / South Beach / Mid-Beach'
    },
    tag: 'Miami Beach'
  },
  {
    id: 'brickell_downtown',
    label: {
      pt: '🏢 Brickell / Downtown Miami / Wynwood',
      en: '🏢 Brickell / Downtown Miami / Wynwood',
      es: '🏢 Brickell / Downtown Miami / Wynwood'
    },
    tag: 'Brickell'
  },
  {
    id: 'sunny_isles_aventura',
    label: {
      pt: '🌴 Sunny Isles Beach / Bal Harbour / Aventura',
      en: '🌴 Sunny Isles Beach / Bal Harbour / Aventura',
      es: '🌴 Sunny Isles Beach / Bal Harbour / Aventura'
    },
    tag: 'Sunny Isles'
  },
  {
    id: 'private_address',
    label: {
      pt: '📍 Residência Privada / Casa / Condomínio (Região Metropolitana)',
      en: '📍 Private Residence / Villa / Condo (Greater Miami Area)',
      es: '📍 Residencia Privada / Villa / Condominio'
    },
    tag: 'Custom'
  }
];
