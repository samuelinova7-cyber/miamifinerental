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
                src="/src/assets/images/vip_airport_delivery_1793138561939.jpg"
                alt="VIP Airport Delivery at Miami International Airport - Concierge key handoff"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130b24] via-[#130b24]/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-xs font-bold text-sky-300 flex items-center gap-1.5 shadow-lg">
                <Plane className="w-3.5 h-3.5" />
                <span>MIA & FLL Terminais de Desembarque</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs text-purple-300 font-bold uppercase tracking-wider mb-2">
                <Plane className="w-4 h-4 text-purple-400" />
                <span>VIP Airport Delivery</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Entrega e Retirada na Calçada do Aeroporto
              </h3>
              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                Chega de monotrilho, vans lotadas e filas de 2 horas em balcões de locadoras convencionais. Ao desembarcar no Aeroporto de Miami (MIA) ou Fort Lauderdale (FLL), nosso concierge já estará com o carro te aguardando na saída do portão de desembarque.
              </p>
            </div>
          </div>

          {/* Bento Card 2: Zero Burocracia & Atendimento em Português (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Zero Burocracia */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 flex-1 hover:border-purple-400/50 transition-colors neon-border-purple">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-300 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-1">
                Apenas CNH + Passaporte
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Zero Burocracia para Brasileiros
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Processo 100% digital e descomplicado. Alugue com sua CNH brasileira regular e passaporte. Sem exigência de PID (Permissão Internacional) e sem contrato em letras miúdas.
              </p>
            </div>

            {/* Atendimento VIP em Português */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 flex-1 hover:border-purple-400/50 transition-colors neon-border-purple">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider mb-1">
                Suporte 24 Horas
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Atendimento VIP em Português
              </h3>
              <p className="text-purple-200/80 text-sm leading-relaxed">
                Concierge brasileiro para suporte contínuo antes, durante e após a sua viagem. Dúvidas sobre estradas, pedágios na Flórida (SunPass) ou roteiros em Miami? Estamos a um WhatsApp de distância.
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
            <h4 className="text-lg font-bold text-white mb-2">Frota 100% Nova e Revisada</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              Todos os nossos veículos são modelos 2024 rigorosamente inspecionados, limpos e higienizados a cada devolução, sempre com cheirinho de novo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 mb-4">
              <CreditCard className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Pagamento Facilitado (PIX & Cartão)</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              Pague em Dólar ou no Brasil via PIX e cartões nacionais e internacionais sem complicações de câmbio ou IOF excessivo.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#130b24] border border-purple-500/25 hover:border-purple-400/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">O Carro Exato (Sem "Ou Similar")</h4>
            <p className="text-purple-200/80 text-sm leading-relaxed">
              Se você reservou o Corvette C8 Vermelho ou o Porsche 911 Conversível, é exatamente essa máquina que você vai dirigir ao sair do aeroporto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
