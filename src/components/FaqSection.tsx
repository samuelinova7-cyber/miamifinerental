import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FAQ_DATA } from '../data/faqAndReviews';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#0e081c] border-t border-purple-500/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.faq.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List with Miami Neon Purple Theme */}
        <div className="space-y-4 mb-12">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#150c29] border-purple-400/60 shadow-lg shadow-purple-950/60 neon-border-purple'
                    : 'bg-[#120a22] border-purple-500/25 hover:border-purple-400/40'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {faq.question[currentLang]}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-purple-600 text-white rotate-180 shadow-[0_0_10px_rgba(168,85,247,0.5)]'
                        : 'bg-purple-950/60 text-purple-300 hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-purple-100/90 text-sm sm:text-base leading-relaxed border-t border-purple-500/20 animate-in fade-in duration-200">
                    <p>{faq.answer[currentLang]}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper banner - 100% Translated */}
        <div className="rounded-3xl bg-[#140c26] border border-purple-500/30 p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl neon-border-purple">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t.faq.helpTitle}</h4>
              <p className="text-xs text-purple-200/70">{t.faq.helpDesc}</p>
            </div>
          </div>

          <a
            href="https://wa.me/13058485075?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20loca%C3%A7%C3%A3o%20de%20carros%20em%20Miami."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold neon-btn-green whitespace-nowrap cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.faq.helpBtn}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
