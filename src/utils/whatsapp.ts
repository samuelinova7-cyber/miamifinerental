import { Language } from '../types';

export const WHATSAPP_NUMBER = '13058485075';
export const DISPLAY_PHONE = '+1 (305) 848-5075';
export const INSTAGRAM_HANDLE = '@miami_fine_rental';
export const INSTAGRAM_URL = 'https://www.instagram.com/miami_fine_rental/';

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildSimulatorWhatsAppMessage(options: {
  lang: Language;
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  category: string;
  estimatedTotal?: number;
  days: number;
}): string {
  const { lang, pickupDate, returnDate, pickupLocation, category, estimatedTotal, days } = options;

  if (lang === 'pt') {
    return `Olá, equipe Miami Fine Rental! Gostaria de consultar a disponibilidade para locação:

📅 *Retirada:* ${pickupDate || 'A definir'}
📅 *Devolução:* ${returnDate || 'A definir'} (${days} ${days === 1 ? 'diária' : 'diárias'})
📍 *Local de Entrega:* ${pickupLocation}
🏎️ *Categoria:* ${category}
${estimatedTotal ? `💰 *Valor Estimado:* a partir de $${estimatedTotal}` : ''}

Podem me confirmar os modelos disponíveis e os próximos passos para a reserva? Obrigado!`;
  }

  if (lang === 'es') {
    return `¡Hola, equipo de Miami Fine Rental! Me gustaría consultar la disponibilidad de alquiler:

📅 *Fecha de Retirada:* ${pickupDate || 'Por definir'}
📅 *Fecha de Devolución:* ${returnDate || 'Por definir'} (${days} ${days === 1 ? 'día' : 'días'})
📍 *Lugar de Entrega:* ${pickupLocation}
🏎️ *Categoría:* ${category}
${estimatedTotal ? `💰 *Total Estimado:* desde $${estimatedTotal}` : ''}

¿Podrían confirmarme los autos disponibles y pasos para reservar? ¡Gracias!`;
  }

  return `Hello, Miami Fine Rental team! I would like to check availability for a luxury car rental:

📅 *Pickup Date:* ${pickupDate || 'To be determined'}
📅 *Return Date:* ${returnDate || 'To be determined'} (${days} ${days === 1 ? 'day' : 'days'})
📍 *Delivery Location:* ${pickupLocation}
🏎️ *Category:* ${category}
${estimatedTotal ? `💰 *Estimated Rate:* from $${estimatedTotal}` : ''}

Could you please confirm available models and next booking steps? Thank you!`;
}

export function buildCarBookingWhatsAppMessage(options: {
  lang: Language;
  carName: string;
  carYear: number;
  dailyRate: number;
  days?: number;
  pickupDate?: string;
  returnDate?: string;
  pickupLocation?: string;
}): string {
  const { lang, carName, carYear, dailyRate, days, pickupDate, returnDate, pickupLocation } = options;

  if (lang === 'pt') {
    return `Olá! Tenho interesse em alugar o *${carName} (${carYear})*.

💵 *Valor da Diária:* $${dailyRate}/dia
${pickupDate ? `📅 *Retirada:* ${pickupDate}` : ''}
${returnDate ? `📅 *Devolução:* ${returnDate}` : ''}
${days && days > 0 ? `⏳ *Duração:* ${days} ${days === 1 ? 'diária' : 'diárias'} (Est. $${days * dailyRate})` : ''}
${pickupLocation ? `📍 *Local de Entrega:* ${pickupLocation}` : '📍 *Local:* Aeroporto de Miami (MIA) ou Hotel'}

Gostaria de verificar a disponibilidade para minhas datas e fechar a reserva sem burocracia.`;
  }

  if (lang === 'es') {
    return `¡Hola! Estoy interesado en alquilar el *${carName} (${carYear})*.

💵 *Tarifa diaria:* $${dailyRate}/día
${pickupDate ? `📅 *Retirada:* ${pickupDate}` : ''}
${returnDate ? `📅 *Devolución:* ${returnDate}` : ''}
${days && days > 0 ? `⏳ *Duración:* ${days} ${days === 1 ? 'día' : 'días'} (Est. $${days * dailyRate})` : ''}
${pickupLocation ? `📍 *Lugar:* ${pickupLocation}` : '📍 *Lugar:* Aeropuerto de Miami (MIA) o Hotel'}

¿Podrían confirmarme disponibilidad para estas fechas?`;
  }

  return `Hello! I am interested in renting the *${carName} (${carYear})*.

💵 *Daily Rate:* $${dailyRate}/day
${pickupDate ? `📅 *Pickup:* ${pickupDate}` : ''}
${returnDate ? `📅 *Return:* ${returnDate}` : ''}
${days && days > 0 ? `⏳ *Duration:* ${days} ${days === 1 ? 'day' : 'days'} (Est. $${days * dailyRate})` : ''}
${pickupLocation ? `📍 *Delivery:* ${pickupLocation}` : '📍 *Location:* MIA Airport or Hotel'}

Could you please confirm availability for my travel dates?`;
}
