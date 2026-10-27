import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Car, MessageCircle, KeyRound, Plane, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  currentLang: Language;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const stepIcons = [
    <Car key="car" className="w-6 h-6 text-purple-300" />,
    <MessageCircle key="msg" className="w-6 h-6 text-emerald-400" />,
    <KeyRound key="key" className="w-6 h-6 text-fuchsia-300" />
  ];

  return (
    <section id="como-funciona" className="py-20 relative bg-[#0e081c] border-t border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.howItWorks.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {t.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-3xl bg-[#140c26] border border-purple-500/30 p-7 sm:p-8 flex flex-col justify-between group hover:border-purple-400/60 transition-all hover:-translate-y-1.5 neon-border-purple"
            >
              <div>
                {/* Step header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/60 border border-purple-400/30 flex items-center justify-center shadow-md">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-black text-purple-800/80 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-purple-200/80 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-500/20 flex items-center text-xs text-purple-300 font-bold gap-1.5">
                <span>{t.howItWorks.stepCounter.replace('{num}', step.number)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Airport Concierge Arrival Spotlight Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-[#170c2e] via-[#211140] to-[#170c2e] border-2 border-purple-500/40 p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 shadow-xl neon-border-purple">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
            <Plane className="w-7 h-7 text-purple-300" />
          </div>

          <div className="flex-1">
            <h4 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
              <span>{t.howItWorks.airportCallout.title}</span>
            </h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              {t.howItWorks.airportCallout.desc}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/13058485075?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20entrega%20no%20aeroporto%20MIA/FLL."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold neon-btn-green whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t.howItWorks.airportCallout.btn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
