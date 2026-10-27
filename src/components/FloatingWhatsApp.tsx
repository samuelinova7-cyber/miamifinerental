import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [isOpen, setIsOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  const bubbleText = {
    pt: 'Me chame aqui para alugar um carro',
    en: 'Chat here to rent a luxury car',
    es: 'Escríbeme aquí para alquilar un auto'
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const textToSend = customText || (
      currentLang === 'pt'
        ? 'Olá! Gostaria de consultar os carros disponíveis e valores para a minha viagem a Miami.'
        : currentLang === 'es'
        ? '¡Hola! Quisiera consultar autos y tarifas para mi viaje a Miami.'
        : 'Hello! I would like to check available luxury cars and rates for my Miami trip.'
    );
    const url = `https://wa.me/13058485075?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Speech Bubble "Me chame aqui para alugar um carro" */}
      {!isOpen && !bubbleDismissed && (
        <div className="mb-2 relative animate-bubble cursor-pointer" onClick={() => handleOpenWhatsApp()}>
          <div className="bg-[#180e2e]/95 backdrop-blur-md border-2 border-emerald-400 text-white text-xs sm:text-sm font-extrabold px-3.5 py-2 rounded-2xl shadow-[0_0_20px_rgba(74,222,128,0.5)] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-emerald-300 neon-glow-purple">{bubbleText[currentLang]}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setBubbleDismissed(true);
              }}
              className="text-purple-300/60 hover:text-white p-0.5 rounded-full hover:bg-white/10 ml-1"
              aria-label="Fechar balão"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          {/* Speech bubble notch pointing to the WhatsApp button */}
          <div className="w-3 h-3 bg-[#180e2e] border-r-2 border-b-2 border-emerald-400 transform rotate-45 absolute -bottom-1.5 right-6 shadow-md" />
        </div>
      )}

      {/* Quick Concierge Chat Popover */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-96 bg-[#120b24] border-2 border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 neon-border-purple"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-[#120b24] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-300 text-black font-extrabold flex items-center justify-center text-sm shadow">
                  MF
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#120b24]" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">{t.floating.quickTitle}</h4>
                <div className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span>{t.floating.badge}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-200 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 text-xs">
            <div className="bg-[#1b1033] p-3 rounded-2xl border border-purple-500/20 text-purple-100 leading-relaxed">
              <p className="flex items-center gap-1 font-bold text-emerald-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concierge Online 24h</span>
              </p>
              {t.floating.quickPrompt}
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-purple-300 uppercase tracking-wider block">
                Escolha uma opção rápida:
              </span>
              {t.floating.quickOptions.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOpenWhatsApp(opt)}
                  className="w-full text-left px-3.5 py-2.5 rounded-xl bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/25 hover:border-emerald-400/50 text-purple-100 hover:text-white transition-all text-xs flex items-center justify-between group cursor-pointer"
                >
                  <span>{opt}</span>
                  <Send className="w-3 h-3 text-purple-400 group-hover:text-emerald-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Direct CTA */}
          <div className="p-3 bg-[#0d071a] border-t border-purple-500/20">
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold neon-btn-green cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.floating.sendWhatsApp}</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button in Glowing Neon Green */}
      <button
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            // Direct open WhatsApp or toggle popover
            setIsOpen(true);
          }
        }}
        className="relative w-15 h-15 rounded-full neon-btn-green flex items-center justify-center cursor-pointer border-2 border-white/30 focus:outline-none"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-black" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7 fill-current" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-purple-400 border-2 border-[#0b0714] flex items-center justify-center text-[9px] font-black text-black">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
};
