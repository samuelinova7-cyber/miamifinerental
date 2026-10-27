import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { createWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle, Zap, ShieldCheck, Plane, Sparkles, ArrowRight } from 'lucide-react';

interface MidPageVideoSectionProps {
  currentLang: Language;
}

export const MidPageVideoSection: React.FC<MidPageVideoSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const whatsAppDirect = createWhatsAppLink(
    currentLang === 'pt'
      ? 'Olá! Vi o vídeo dos carros na rua em Miami e gostaria de consultar a disponibilidade imediata para aluguel.'
      : currentLang === 'es'
      ? '¡Hola! Vi el video de los autos en Miami y quiero consultar disponibilidad inmediata.'
      : 'Hello! I saw the sports car street video in Miami and would like to check immediate availability.'
  );

  return (
    <section className="py-20 relative bg-[#0d0819] overflow-hidden border-t border-b border-purple-500/20">
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Video Container (Col Span 7) with Neon Purple Borders & Reflections */}
          <div className="lg:col-span-7 relative group">
            <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/40 bg-black/60 shadow-[0_0_30px_rgba(192,132,252,0.35)]">
              <video
                src="https://res.cloudinary.com/hd1sahto/video/upload/v1793142046/White_sports_car_parked_street_5aff4150.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[360px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0819] via-transparent to-black/30 pointer-events-none" />

              {/* Top Neon Badge */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-purple-950/80 backdrop-blur-md border border-purple-400/40 text-xs font-bold text-purple-200 flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                <span className="tracking-wide">{t.midVideo.badgeTop}</span>
              </div>

              {/* Bottom Quick Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 backdrop-blur-md border border-purple-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-purple-200 font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.midVideo.badgeBottomLeft}</span>
                </div>
                <span className="text-emerald-400 font-bold font-mono">{t.midVideo.badgeBottomRight}</span>
              </div>
            </div>

            {/* Mirror Reflection Effect below video */}
            <div className="h-6 w-full opacity-30 blur-[2px] overflow-hidden -mt-1 hidden sm:block">
              <div className="w-full h-full bg-gradient-to-b from-purple-500/40 to-transparent rounded-full" />
            </div>
          </div>

          {/* Direct WhatsApp Callout & Booking Info (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.midVideo.kicker}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {t.midVideo.titlePart1} <span className="text-purple-300 neon-glow-purple">{t.midVideo.titleCity}</span>
            </h2>

            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
              {t.midVideo.desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs sm:text-sm text-purple-100">
                <Plane className="w-4 h-4 text-purple-300 shrink-0" />
                <span>{t.midVideo.point1}</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs sm:text-sm text-purple-100">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.midVideo.point2}</span>
              </div>
            </div>

            {/* Glowing Neon Green WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={whatsAppDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-extrabold neon-btn-green cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{t.midVideo.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-purple-300/70 mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{t.midVideo.replyNote}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
