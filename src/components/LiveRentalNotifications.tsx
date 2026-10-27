import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { CheckCircle2, Star, Car, X, Clock } from 'lucide-react';

interface LiveRentalNotificationsProps {
  currentLang: Language;
}

interface NotificationItem {
  id: string;
  type: 'rental' | 'review';
  author: string;
  vehicleOrRating?: string;
  location?: string;
  timeAgo: {
    pt: string;
    en: string;
    es: string;
  };
  text: {
    pt: string;
    en: string;
    es: string;
  };
}

const NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'n1',
    type: 'rental',
    author: 'Lucas S. (São Paulo)',
    vehicleOrRating: 'Corvette C8 Stingray',
    location: 'Miami Beach',
    timeAgo: { pt: 'há 4 min', en: '4 min ago', es: 'hace 4 min' },
    text: {
      pt: 'Acabou de reservar um Corvette C8 Conversível para entrega em Miami Beach',
      en: 'Just booked a Corvette C8 Convertible for Miami Beach delivery',
      es: 'Acaba de reservar un Corvette C8 Convertible para Miami Beach'
    }
  },
  {
    id: 'n2',
    type: 'review',
    author: 'Juliana R. (Curitiba)',
    vehicleOrRating: '5.0 ★ Google Review',
    timeAgo: { pt: 'há 9 min', en: '9 min ago', es: 'hace 9 min' },
    text: {
      pt: 'Avaliou com 5 estrelas: "Atendimento em português sensacional e sem filas no aeroporto!"',
      en: 'Rated 5 stars: "Sensational Portuguese concierge and zero airport queues!"',
      es: 'Calificó con 5 estrellas: "¡Servicio increíble y sin filas en el aeropuerto!"'
    }
  },
  {
    id: 'n3',
    type: 'rental',
    author: 'Thiago & Família (RJ)',
    vehicleOrRating: 'Cadillac Escalade ESV',
    location: 'MIA Airport Terminal',
    timeAgo: { pt: 'há 16 min', en: '16 min ago', es: 'hace 16 min' },
    text: {
      pt: 'Retiraram um Cadillac Escalade ESV no Aeroporto Internacional de Miami (MIA)',
      en: 'Picked up a Cadillac Escalade ESV at Miami International Airport (MIA)',
      es: 'Retiraron un Cadillac Escalade ESV en el Aeropuerto Internacional de Miami (MIA)'
    }
  },
  {
    id: 'n4',
    type: 'rental',
    author: 'Eduardo M. (Belo Horizonte)',
    vehicleOrRating: 'Lamborghini Huracán EVO',
    location: 'Brickell',
    timeAgo: { pt: 'há 24 min', en: '24 min ago', es: 'hace 24 min' },
    text: {
      pt: 'Confirmou reserva da Lamborghini Huracán EVO para rodar em Brickell e South Beach',
      en: 'Confirmed Lamborghini Huracán EVO booking for Brickell and South Beach',
      es: 'Confirmó reserva del Lamborghini Huracán EVO para Brickell y South Beach'
    }
  },
  {
    id: 'n5',
    type: 'review',
    author: 'Carlos & Fernanda (Brasília)',
    vehicleOrRating: '5.0 ★ Google Review',
    timeAgo: { pt: 'há 35 min', en: '35 min ago', es: 'hace 35 min' },
    text: {
      pt: 'Avaliou no Google: "Carro zero km impecável. Concierge nos entregou na calçada em 3 minutos."',
      en: 'Reviewed on Google: "Brand new car. Concierge handed us the keys at curbside in 3 minutes."',
      es: 'Calificó en Google: "Auto 0 km impecable. Nos entregaron las llaves en la acera en 3 minutos."'
    }
  },
  {
    id: 'n6',
    type: 'rental',
    author: 'Rodrigo P. (Porto Alegre)',
    vehicleOrRating: 'Porsche 911 Cabriolet',
    location: 'Sunny Isles Beach',
    timeAgo: { pt: 'há 48 min', en: '48 min ago', es: 'hace 48 min' },
    text: {
      pt: 'Reservou Porsche 911 Carrera Cabriolet para entrega em resort em Sunny Isles',
      en: 'Booked Porsche 911 Carrera Cabriolet for Sunny Isles resort delivery',
      es: 'Reservó Porsche 911 Carrera Cabriolet para entrega en Sunny Isles'
    }
  }
];

export const LiveRentalNotifications: React.FC<LiveRentalNotificationsProps> = ({ currentLang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const item = NOTIFICATIONS[currentIndex];

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 max-w-sm sm:max-w-md transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-[#120d22]/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-3.5 shadow-2xl shadow-purple-950/60 flex items-start gap-3 relative neon-border-purple">
        {/* Dismiss Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 text-purple-300/60 hover:text-white rounded-full hover:bg-white/5 transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* Icon Type */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
            item.type === 'rental'
              ? 'bg-purple-600/25 border border-purple-400/40 text-purple-300'
              : 'bg-emerald-600/25 border border-emerald-400/40 text-emerald-300'
          }`}
        >
          {item.type === 'rental' ? (
            <Car className="w-5 h-5 text-purple-300" />
          ) : (
            <Star className="w-5 h-5 text-amber-300 fill-amber-300" />
          )}
        </div>

        {/* Content */}
        <div className="pr-4 text-xs">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-bold text-white text-[12px]">{item.author}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-purple-300/70 flex items-center gap-1 font-mono">
              <Clock className="w-2.5 h-2.5" />
              {item.timeAgo[currentLang]}
            </span>
          </div>

          <p className="text-purple-100/90 leading-snug line-clamp-2">
            {item.text[currentLang]}
          </p>

          <div className="flex items-center gap-2 mt-1.5 text-[10px] text-purple-300 font-semibold">
            {item.type === 'rental' ? (
              <span className="text-purple-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-purple-400" />
                Reserva Verificada
              </span>
            ) : (
              <span className="text-amber-300 flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                Avaliação 5 Estrelas no Google
              </span>
            )}
            <span className="text-purple-500/50">·</span>
            <span className="text-emerald-400 font-mono">Miami, FL</span>
          </div>
        </div>
      </div>
    </div>
  );
};
