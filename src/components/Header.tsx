import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle, Menu, X, Globe, Zap, Plane, ShieldCheck, Sparkles, CreditCard } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const directWhatsAppLink = createWhatsAppLink(
    currentLang === 'pt'
      ? 'Olá! Gostaria de consultar os carros de luxo disponíveis para aluguel em Miami.'
      : currentLang === 'es'
      ? '¡Hola! Me gustaría consultar los autos de lujo disponibles para alquilar en Miami.'
      : 'Hello! I would like to check available luxury car rentals in Miami.'
  );

  const tickerItems = [
    { icon: <Zap className="w-3 h-3 text-purple-300" />, text: 'SEM BUROCRACIA: APENAS CNH + PASSAPORTE' },
    { icon: <Plane className="w-3 h-3 text-sky-400" />, text: 'ENTREGA VIP NOS AEROPORTOS MIA E FLL SEM FILAS' },
    { icon: <Sparkles className="w-3 h-3 text-purple-300" />, text: 'FROTA 100% 2024: LAMBORGHINI, CORVETTE, PORSCHE, ESCALADE' },
    { icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />, text: 'ATENDIMENTO VIP EM PORTUGUÊS 24H NO WHATSAPP' },
    { icon: <CreditCard className="w-3 h-3 text-purple-300" />, text: 'PAGAMENTO VIA PIX OU CARTÃO EM ATÉ 12X' },
    { icon: <Plane className="w-3 h-3 text-emerald-400" />, text: 'CHAVE NA MÃO EM MENOS DE 5 MINUTOS NO DESEMBARQUE' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d071a]/95 backdrop-blur-md border-b border-purple-500/30 shadow-2xl shadow-purple-950/60'
          : 'bg-gradient-to-b from-[#0b0616]/95 via-[#0b0616]/80 to-transparent'
      }`}
    >
      {/* 1. Running Ticker Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-950 via-[#1e0e38] to-purple-950 border-b border-purple-500/30 overflow-hidden py-1.5 text-xs text-purple-200">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="inline-flex items-center gap-2 px-2 text-[11px] font-semibold tracking-wide">
              {item.icon}
              <span className="text-purple-100">{item.text}</span>
              <span className="text-purple-400/50">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Site Logo with Reflexo and Neon Glow */}
          <a
            href="#"
            className="flex items-center gap-3 shrink-0 group focus:outline-none relative py-1"
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/hd1sahto/image/upload/v1793142038/WhatsApp_Image_2026-10-27_at_7.21.26_PM_2.jpg"
                alt="Miami Fine Rental Car - Logo"
                className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-[0_0_15px_rgba(192,132,252,0.45)] group-hover:shadow-[0_0_25px_rgba(216,180,254,0.7)] transition-all duration-300"
              />
              {/* Subtle Mirror Reflection Effect below logo */}
              <div className="absolute -bottom-2 left-0 right-0 h-2 overflow-hidden opacity-35 blur-[1px] pointer-events-none hidden sm:block">
                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793142038/WhatsApp_Image_2026-10-27_at_7.21.26_PM_2.jpg"
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-auto transform scale-y-[-1] object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs uppercase font-extrabold tracking-widest text-purple-300 neon-glow-purple block leading-tight">
                MIAMI FINE RENTAL
              </span>
              <span className="text-[10px] uppercase tracking-wider text-purple-400/70 block">
                LUXURY & EXOTIC CARS
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-purple-200">
            <button
              onClick={() => handleNavClick('#frota')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.fleet}
            </button>
            <button
              onClick={() => handleNavClick('#como-funciona')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => handleNavClick('#diferenciais')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.perks}
            </button>
            <button
              onClick={() => handleNavClick('#depoimentos')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.testimonials}
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.faq}
            </button>
            <button
              onClick={() => handleNavClick('#contato')}
              className="hover:text-purple-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: Language Selector + Glowing Neon Green WhatsApp CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-purple-950/60 hover:bg-purple-900/60 text-purple-200 border border-purple-500/30 transition-colors focus:outline-none"
                aria-label="Selecionar Idioma"
              >
                <Globe className="w-3.5 h-3.5 text-purple-300" />
                <span className="uppercase">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-36 py-1 bg-[#160d2b] border border-purple-500/40 rounded-xl shadow-2xl shadow-purple-950 z-50 animate-in fade-in zoom-in-95 duration-150"
                  onMouseLeave={() => setLangMenuOpen(false)}
                >
                  <button
                    onClick={() => {
                      onLanguageChange('pt');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-purple-900/40 transition-colors ${
                      currentLang === 'pt' ? 'text-purple-300 font-bold' : 'text-slate-300'
                    }`}
                  >
                    <span>🇧🇷 Português</span>
                    {currentLang === 'pt' && <span className="text-emerald-400">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('en');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-purple-900/40 transition-colors ${
                      currentLang === 'en' ? 'text-purple-300 font-bold' : 'text-slate-300'
                    }`}
                  >
                    <span>🇺🇸 English</span>
                    {currentLang === 'en' && <span className="text-emerald-400">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      onLanguageChange('es');
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-purple-900/40 transition-colors ${
                      currentLang === 'es' ? 'text-purple-300 font-bold' : 'text-slate-300'
                    }`}
                  >
                    <span>🇪🇸 Español</span>
                    {currentLang === 'es' && <span className="text-emerald-400">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Glowing Neon Green WhatsApp Button */}
            <a
              href={directWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-extrabold rounded-xl neon-btn-green whitespace-nowrap shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.nav.cta}</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-purple-200 hover:text-white bg-purple-950/60 border border-purple-500/30 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#120a24] border-b border-purple-500/30 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('#frota')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.fleet}
          </button>
          <button
            onClick={() => handleNavClick('#como-funciona')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.howItWorks}
          </button>
          <button
            onClick={() => handleNavClick('#diferenciais')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.perks}
          </button>
          <button
            onClick={() => handleNavClick('#depoimentos')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.testimonials}
          </button>
          <button
            onClick={() => handleNavClick('#faq')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.faq}
          </button>
          <button
            onClick={() => handleNavClick('#contato')}
            className="block w-full text-left py-2 text-sm font-medium text-purple-100 hover:text-purple-300 border-b border-purple-900/30"
          >
            {t.nav.contact}
          </button>

          <div className="pt-2 flex items-center justify-between text-xs text-purple-300">
            <span>Idioma:</span>
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('pt')}
                className={`px-2.5 py-1 rounded-lg ${currentLang === 'pt' ? 'bg-purple-600 text-white font-bold' : 'text-purple-300'}`}
              >
                PT
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-lg ${currentLang === 'en' ? 'bg-purple-600 text-white font-bold' : 'text-purple-300'}`}
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('es')}
                className={`px-2.5 py-1 rounded-lg ${currentLang === 'es' ? 'bg-purple-600 text-white font-bold' : 'text-purple-300'}`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
