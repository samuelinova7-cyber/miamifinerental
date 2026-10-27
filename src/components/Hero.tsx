import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';
import { ChevronRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onExploreFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onExploreFleet }) => {
  const t = TRANSLATIONS[currentLang];

  const heroWhatsAppLink = createWhatsAppLink(
    currentLang === 'pt'
      ? 'Olá! Gostaria de consultar os carros de luxo disponíveis para locação em Miami.'
      : currentLang === 'es'
      ? '¡Hola! Quisiera consultar autos de lujo disponibles para alquiler en Miami.'
      : 'Hello! I would like to check available luxury cars for rent in Miami.'
  );

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center text-center pt-28 pb-16 overflow-hidden">
      {/* Background Video - Fully visible without dark scrim overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://res.cloudinary.com/hd1sahto/video/upload/v1793142050/Luxury_sports_cars_parked_c7fb3b78.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/src/assets/images/hero_miami_luxury_cars_1793138559816.jpg"
          className="w-full h-full object-cover object-center"
        />
        {/* Only a subtle soft bottom vignette to smoothly merge with the page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b0714] to-transparent pointer-events-none" />
      </div>

      {/* Minimalist Floating Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Minimalist Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/40 backdrop-blur-md border border-purple-400/40 mb-4 shadow-[0_0_15px_rgba(192,132,252,0.4)]">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-purple-200">
            MIAMI FINE RENTAL · LUXURY & EXOTIC CARS
          </span>
        </div>

        {/* Headline with High-Legibility Shadow for Crisp Contrast on Live Video */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]"
          style={{ textWrap: 'balance' }}
        >
          Sua Viagem em <span className="text-purple-300 neon-glow-purple drop-shadow-[0_0_20px_rgba(192,132,252,0.8)]">Miami</span> Começa Aqui
        </h1>

        {/* Minimalist 1-Line Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-purple-100/95 max-w-2xl mx-auto mb-8 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          {t.hero.subtitle}
        </p>

        {/* Clean, Focused Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={heroWhatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold rounded-2xl neon-btn-green cursor-pointer shadow-2xl"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>{t.hero.ctaPrimary}</span>
          </a>

          <button
            onClick={onExploreFleet}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-black/40 hover:bg-black/60 border border-purple-400/40 rounded-2xl backdrop-blur-md transition-all cursor-pointer hover:border-purple-300 shadow-xl"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
