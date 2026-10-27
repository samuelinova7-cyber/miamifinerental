import { FaqItem, Review } from '../types';

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-docs',
    question: {
      pt: 'Quais os documentos necessários para alugar um carro?',
      en: 'What documents are required to rent a vehicle?',
      es: '¿Qué documentos se necesitan para alquilar un vehículo?'
    },
    answer: {
      pt: 'O processo é 100% sem burocracia. Você só precisa apresentar sua CNH brasileira válida (física ou digital) ou Driver’s License americana, Passaporte válido e um cartão de crédito para o depósito caução. Não exigimos Permissão Internacional para Dirigir (PID).',
      en: 'The process is zero-bureaucracy. You only need a valid Driver’s License (international or domestic), a valid Passport, and a major credit card for the security deposit. No complex international permits required.',
      es: 'El proceso es sin burocracia. Solo necesitas presentar tu Licencia de Conducir vigente, Pasaporte válido y una tarjeta de crédito para el depósito de garantía. No se requieren permisos internacionales complicados.'
    }
  },
  {
    id: 'faq-airport',
    question: {
      pt: 'Como funciona a entrega e devolução no aeroporto (MIA / FLL)?',
      en: 'How does VIP airport curbside pickup and return work (MIA / FLL)?',
      es: '¿Cómo funciona la entrega y devolución en el aeropuerto (MIA / FLL)?'
    },
    answer: {
      pt: 'Diferente das locadoras comuns onde você pega monotrilho, enfrenta filas de mais de 1 hora e vans cheias, nosso concierge aguarda você diretamente na calçada do portão de desembarque do seu terminal (MIA ou FLL). O carro já estará gelando com ar condicionado ligado. Assinatura digital rápida e a chave é entregue em menos de 5 minutos.',
      en: 'Unlike traditional rental agencies with people movers, shuttle buses, and 1-hour counter queues, our concierge meets you directly curbside at your arrival terminal (MIA or FLL). The vehicle is already detailed with A/C cooled. In under 5 minutes, you have the keys and are driving away.',
      es: 'A diferencia de las agencias tradicionales con autobuses y filas de más de una hora, nuestro conserje te espera directamente en la acera de llegadas de tu terminal (MIA o FLL). El auto ya estará listo con el aire acondicionado encendido. En menos de 5 minutos tienes las llaves en mano.'
    }
  },
  {
    id: 'faq-mileage',
    question: {
      pt: 'Existe limite de milhas/quilometragem? Posso viajar até Orlando ou Key West?',
      en: 'Is there a mileage limit? Can I drive to Orlando or Key West?',
      es: '¿Existe límite de kilometraje? ¿Puedo viajar a Orlando o Key West?'
    },
    answer: {
      pt: 'Todas as locações incluem uma franquia generosa de milhas diárias (100 a 150 milhas/dia dependendo do modelo), mais que suficiente para circular por Miami, South Beach, Brickell e praias. Caso deseje viajar até Orlando, Tampa ou Key West, disponibilizamos pacotes de milhagem ilimitada ou estendida sob medida!',
      en: 'All rentals include a generous daily mileage allowance (100 to 150 miles/day depending on the car model), plenty for Miami, South Beach, Brickell, and coastal cruising. For extended road trips to Orlando, Tampa, or Key West, we offer customized unlimited or extended mileage packages!',
      es: 'Todos los alquileres incluyen un generoso límite diario de millas (100 a 150 millas/día según el modelo), perfecto para recorrer Miami y playas. Si deseas viajar a Orlando, Tampa o Key West, ¡tenemos paquetes de millas ilimitadas o extendidas a tu medida!'
    }
  },
  {
    id: 'faq-insurance',
    question: {
      pt: 'Como funciona o seguro do veículo e o depósito caução?',
      en: 'How does vehicle insurance and the security deposit work?',
      es: '¿Cómo funciona el seguro del auto y el depósito de garantía?'
    },
    answer: {
      pt: 'Todos os nossos veículos contam com seguro comercial completo. O depósito caução é bloqueado no cartão de crédito na retirada (apenas pré-autorização, sem cobrança real na fatura) e liberado automaticamente assim que o veículo é devolvido no mesmo estado.',
      en: 'All our vehicles carry full comprehensive commercial insurance. The security deposit is held on your credit card at pickup (pre-authorization hold only, not a charge) and released immediately upon return of the vehicle in good condition.',
      es: 'Todos nuestros vehículos cuentan con seguro comercial completo. El depósito de garantía se pre-autoriza temporalmente en la tarjeta de crédito y se libera inmediatamente una vez devuelto el auto en óptimas condiciones.'
    }
  },
  {
    id: 'faq-payment',
    question: {
      pt: 'Quais são as formas de pagamento aceitas? Aceitam PIX?',
      en: 'What payment methods do you accept? Can I pay in Brazilian PIX or cards?',
      es: '¿Cuáles son las formas de pago aceptadas?'
    },
    answer: {
      pt: 'Aceitamos cartões de crédito internacionais, cartões emitidos no Brasil, transferências bancárias americanas (Zelle, Wire), pagamentos em Dólar e também facilitamos o pagamento via PIX para turistas brasileiros, evitando taxas abusivas de IOF e câmbio desfavorável.',
      en: 'We accept all major credit cards, US bank transfers (Zelle, Wire), cash in USD, and convenient direct payment methods including Brazilian PIX for international clients seeking zero exchange hassle.',
      es: 'Aceptamos tarjetas de crédito internacionales, transferencias bancarias de EE.UU. (Zelle, Wire), dólares en efectivo y métodos de pago directo como PIX para mayor comodidad sin trámites complejos.'
    }
  },
  {
    id: 'faq-age',
    question: {
      pt: 'Qual a idade mínima para alugar e posso incluir motorista adicional?',
      en: 'What is the minimum age to rent and can I add an extra driver?',
      es: '¿Cuál es la edad mínima para alquilar y puedo agregar conductor adicional?'
    },
    answer: {
      pt: 'A idade mínima é de 21 anos para modelos esportivos premium e SUVs de luxo, e 25 anos para superesportivos de alta cilindrada (exceções podem ser avaliadas com depósito caução adicional). Motorista adicional pode ser incluído gratuitamente mediante apresentação de CNH e documento.',
      en: 'The minimum age is 21 for premium sports and luxury SUVs, and 25 for exotic supercars (exceptions considered with custom deposit). Additional drivers can be added at no extra cost with their valid driver’s license.',
      es: 'La edad mínima es de 21 años para autos deportivos premium y SUVs de lujo, y 25 años para superdeportivos de alta potencia. Se puede agregar un conductor adicional sin costo presentando su licencia.'
    }
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'review-1',
    name: 'Rodrigo Silveira',
    location: 'São Paulo, SP',
    origin: 'Brasil',
    rating: 5,
    date: 'Outubro 2024',
    carRented: 'Corvette C8 Convertible',
    comment: {
      pt: 'Melhor experiência de aluguel que já tive nos EUA! O atendimento em português pelo WhatsApp foi rápido demais. Desembarquei no MIA e o Corvette já estava me esperando na calçada. Carro zero km, cheirando a novo. Recomendo de olhos fechados!',
      en: 'Best car rental experience I have ever had in the US! Concierge service on WhatsApp was lightning fast. Landed at MIA and the Corvette was already waiting at curbside. Brand-new car with zero miles. Highly recommended!',
      es: '¡La mejor experiencia de alquiler que he tenido en EE. UU.! La atención por WhatsApp fue súper rápida. Aterricé en MIA y el Corvette ya me estaba esperando en la acera. Auto nuevo impecable. ¡100% recomendado!'
    },
    avatarInitial: 'RS'
  },
  {
    id: 'review-2',
    name: 'Fernanda & Marcelo Castro',
    location: 'Curitiba, PR',
    origin: 'Brasil',
    rating: 5,
    date: 'Setembro 2024',
    carRented: 'Cadillac Escalade ESV',
    comment: {
      pt: 'Viajamos em família com 5 pessoas e muitas malas de compras. A Escalade chassi longo salvou nossa viagem! Espaçosa, confortável e o concierge foi super atencioso na entrega e devolução. Sem fila de locadora de aeroporto, economizamos pelo menos 2 horas.',
      en: 'Traveled as a family of 5 with tons of shopping bags. The extended Escalade saved our vacation! Huge space, luxurious comfort, and concierge was incredibly attentive at MIA. Saved over 2 hours bypassing standard rental counters.',
      es: 'Viajamos en familia con 5 personas y muchas compras. La Escalade de chasis largo fue perfecta. Muy espaciosa, cómoda y la entrega en el aeropuerto fue impecable sin perder tiempo en filas.'
    },
    avatarInitial: 'FC'
  },
  {
    id: 'review-3',
    name: 'Eduardo Guimarães',
    location: 'Rio de Janeiro, RJ',
    origin: 'Brasil',
    rating: 5,
    date: 'Agosto 2024',
    carRented: 'Lamborghini Huracán EVO',
    comment: {
      pt: 'Realizei o sonho de acelerar uma Lamborghini em Miami! Carro impecável, som do V10 absurdo rodando na Ocean Drive e Brickell. O pessoal da Miami Fine Rental é profissional ao extremo e o pagamento via PIX facilitou demais a vida.',
      en: 'Fulfilled a dream of driving a Lamborghini in Miami! Flawless car, stunning V10 exhaust sound along Ocean Drive and Brickell. The Miami Fine Rental team is top notch and the seamless payment made it so easy.',
      es: '¡Cumplí el sueño de conducir un Lamborghini en Miami! El auto impecable y el rugido del V10 por Ocean Drive fue increíble. Gran profesionalismo y trato de primera.'
    },
    avatarInitial: 'EG'
  },
  {
    id: 'review-4',
    name: 'Carolina Mendes',
    location: 'Belo Horizonte, MG',
    origin: 'Brasil',
    rating: 5,
    date: 'Julho 2024',
    carRented: 'Porsche 911 Carrera Cabrio',
    comment: {
      pt: 'Sensacional! Aluguei o Porsche 911 Conversível para um final de semana romântico. Tudo perfeito, desde o primeiro contato no WhatsApp até a entrega rápida na porta do nosso hotel em South Beach. Com certeza alugarei de novo!',
      en: 'Sensational! Rented the Porsche 911 Convertible for a romantic weekend getaway. Everything was perfection from initial WhatsApp chat to curbside handoff right in front of our South Beach hotel.',
      es: '¡Sensacional! Alquilé el Porsche 911 Convertible para una escapada en South Beach. Todo perfecto desde el primer chat en WhatsApp hasta la entrega en la puerta de nuestro hotel.'
    },
    avatarInitial: 'CM'
  }
];
