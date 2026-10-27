import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DISPLAY_PHONE, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../utils/whatsapp';
import { Phone, Instagram, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const regions = [
    { name: 'Aeroporto Internacional de Miami (MIA)', type: 'Terminal Curbside Delivery' },
    { name: 'Aeroporto Fort Lauderdale-Hollywood (FLL)', type: 'Terminal Curbside Delivery' },
    { name: 'Miami Beach / South Beach / Mid-Beach', type: 'Entrega em Hotel & Residência' },
    { name: 'Brickell & Downtown Miami Financial District', type: 'Entrega VIP' },
    { name: 'Sunny Isles Beach & Bal Harbour Luxury Resorts', type: 'Entrega VIP' },
    { name: 'Aventura, Key Biscayne & Coral Gables', type: 'Sob Consulta' }
  ];

  return (
    <section id="contato" className="py-20 relative bg-[#0b0714] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>{t.contact.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Direct Cards (Col Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Card with Glowing Green Button */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 hover:border-purple-400/50 transition-colors neon-border-purple">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-300/80 block font-semibold">WhatsApp / Telefone Direto</span>
                  <span className="text-lg font-bold text-white tabular-nums tracking-wide font-mono">
                    {DISPLAY_PHONE}
                  </span>
                </div>
              </div>
              <p className="text-xs text-purple-200/80 mb-5 leading-relaxed">
                Atendimento humanizado 24 horas por dia em Português. Envie sua mensagem e receba a confirmação da sua reserva.
              </p>
              <a
                href="https://wa.me/13058485075?text=Ol%C3%A1!%20Gostaria%20de%20iniciar%20minha%20reserva%20na%20Miami%20Fine%20Rental."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-extrabold neon-btn-green cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t.contact.whatsappDirectBtn}</span>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#130b24] border border-purple-500/30 hover:border-pink-500/40 transition-colors neon-border-purple">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0 shadow-lg">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-purple-300/80 block font-semibold">Instagram Oficial</span>
                  <span className="text-lg font-bold text-white tracking-wide">
                    {INSTAGRAM_HANDLE}
                  </span>
                </div>
              </div>
              <p className="text-xs text-purple-200/80 mb-5 leading-relaxed">
                Acompanhe entregas diárias, vídeos com som dos motores e bastidores de clientes em Miami.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-purple-200 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors cursor-pointer"
              >
                <span>{t.contact.instagramDirectBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Hours & Availability */}
            <div className="p-4 rounded-2xl bg-[#130b24] border border-purple-500/20 flex items-center gap-3 text-xs text-purple-200/90">
              <Clock className="w-4 h-4 text-purple-300 shrink-0" />
              <span>{t.contact.hours}</span>
            </div>
          </div>

          {/* Service Area & Airport Curbside Map/Zones (Col Span 7) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#130b24] border border-purple-500/30 neon-border-purple">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-purple-400" />
              <span>Cobertura de Atendimento VIP</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Onde Entregamos e Retiramos Veículos
            </h3>
            <p className="text-purple-200/80 text-sm leading-relaxed mb-6">
              Nossa equipe faz a entrega pontual do carro onde você estiver na Grande Miami e Sul da Flórida. Se você pousar de madrugada ou de manhã cedo, o veículo estará preparado pontualmente para a sua chegada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {regions.map((region, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#1b1033] border border-purple-500/20 flex flex-col justify-between"
                >
                  <span className="text-xs font-bold text-white">{region.name}</span>
                  <span className="text-[11px] text-purple-300/90 mt-1 font-medium">{region.type}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Possibilidade de devolução em local diferente da retirada (sob consulta de rota).</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
