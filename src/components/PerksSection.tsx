import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Zap, ShieldCheck, Plane, MessageSquare, CreditCard, Sparkles } from 'lucide-react';

interface PerksSectionProps {
  currentLang: Language;
}

export const PerksSection: React.FC<PerksSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="diferenciais" className="py-20 relative bg-[#0b0714] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.perks.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.perks.title}
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            {t.perks.subtitle}
          </p>
        </div>

        {/* Asymmetric Bento Showcase with Miami Neon Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Bento Card 1: VIP Airport Delivery (Col Span 7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#130b24] border border-purple-500/30 overflow-hidden relative group flex flex-col justify-between neon-border-purple">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/images/vip_airport_delivery_1793138561939.jpg"
                alt="VIP Airport Delivery at Miami International Airport - Concierge key handoff"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130b24] via-[#130b24]/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-xs font-bold text-sky-300 flex items-center gap-1.5 shadow-lg">
                <Plane className="w-3.5 h-3.5" />
                <span>{t.perks.card1.badge}</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-purple-300 font-bold uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4 text-purple-400" />
                <span>{t.perks.card1.tag}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {t.perks.card1.title}
              </h3>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                {t.perks.card1.desc}
              </p>
            </div>
          </div>

          {/* Bento Card 2: Zero Burocracia & Atendimento VIP (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Zero Burocracia */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 flex-1 hover:border-purple-400/50 transition-colors neon-border-purple">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-1">
                {t.perks.card2.tag}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.perks.card2.title}
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                {t.perks.card2.desc}
              </p>
            </div>

            {/* Atendimento VIP */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 flex-1 hover:border-purple-400/50 transition-colors neon-border-purple">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">
                {t.perks.card3.tag}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t.perks.card3.title}
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                {t.perks.card3.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 3 Secondary Pillars Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.perks.card4.title}</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              {t.perks.card4.desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.perks.card5.title}</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              {t.perks.card5.desc}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{t.perks.card6.title}</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              {t.perks.card6.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
