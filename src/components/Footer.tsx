import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { DISPLAY_PHONE, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../utils/whatsapp';
import { Phone, Instagram, ShieldCheck, X, Sparkles } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080410] border-t border-purple-500/25 text-purple-200/70 text-xs pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Col 1 & 2: Brand Info & Glowing Logo with Reflection */}
          <div className="lg:col-span-2 space-y-5">
            <div className="relative inline-block pb-3">
              {/* Footer Logo with intense Neon Glow & Reflection */}
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/hd1sahto/image/upload/v1793142045/WhatsApp_Image_2026-10-27_at_7.21.26_4cecc3bb_2K.jpg"
                  alt="Miami Fine Rental Car - Official Logo"
                  className="h-16 sm:h-20 w-auto object-contain rounded-xl shadow-[0_0_25px_rgba(192,132,252,0.55)] border border-purple-400/40 group-hover:shadow-[0_0_35px_rgba(216,180,254,0.8)] transition-all duration-300"
                />
                {/* Mirror Reflection underneath footer logo */}
                <div className="absolute -bottom-3 left-0 right-0 h-4 overflow-hidden opacity-30 blur-[1px] pointer-events-none">
                  <img
                    src="https://res.cloudinary.com/hd1sahto/image/upload/v1793142045/WhatsApp_Image_2026-10-27_at_7.21.26_4cecc3bb_2K.jpg"
                    alt=""
                    aria-hidden="true"
                    className="h-16 w-auto transform scale-y-[-1] object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="text-purple-200/80 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              {t.footer.tagline}
            </p>

            <div className="flex flex-col gap-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-purple-100">
                <Phone className="w-4 h-4 text-emerald-400" />
                <a
                  href="https://wa.me/13058485075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors font-mono"
                >
                  {DISPLAY_PHONE} (WhatsApp 24/7)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-purple-100">
                <Instagram className="w-4 h-4 text-pink-400" />
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 text-purple-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.footer.quickLinks}</span>
            </h4>
            <ul className="space-y-2.5 text-purple-200/80">
              <li>
                <button
                  onClick={() => handleNavClick('#frota')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.nav.fleet}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#como-funciona')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#diferenciais')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.nav.perks}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#depoimentos')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Service Areas */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-purple-300">
              {t.footer.coverage}
            </h4>
            <ul className="space-y-2 text-[11px] text-purple-200/70">
              {t.footer.coverageAreas.map((area, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Legal & Trust */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-purple-300">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-purple-200/80">
              <li>
                <button
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
              </li>
            </ul>
            <div className="pt-2 text-[11px] text-purple-300/80 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Contratos Digitais & Seguro Comercial</span>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-purple-400/70">
          <div>
            © {new Date().getFullYear()} Miami Fine Rental Car. {t.footer.rights}
          </div>
          <div className="text-center sm:text-right text-purple-400/60 max-w-md">
            {t.footer.disclaimer}
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#140c26] border-2 border-purple-500/40 rounded-3xl p-6 shadow-2xl text-purple-100 neon-border-purple">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-purple-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-3">
              {legalModal === 'terms' ? t.footer.terms : t.footer.privacy}
            </h3>
            <div className="text-xs space-y-3 max-h-80 overflow-y-auto pr-2 text-purple-200/80">
              {legalModal === 'terms' ? (
                <>
                  <p>1. Documentação: O locatário deve apresentar documento de habilitação válido (CNH do país de origem ou carteira internacional) e passaporte vigente no ato da retirada.</p>
                  <p>2. Depósito Caução: É realizada uma pré-autorização reembolsável no cartão de crédito do titular da locação, liberada após vistoria de devolução.</p>
                  <p>3. Seguro: Todos os veículos possuem seguro comercial com cobertura compreensiva contra danos e terceiros no estado da Flórida.</p>
                  <p>4. Quilometragem: Franquia padrão inclusa especificada no voucher. Milhas adicionais ou ilimitadas mediante contratação prévia.</p>
                  <p>5. Cancelamento: Cancelamento sem multa com até 48 horas de antecedência do horário agendado para entrega.</p>
                </>
              ) : (
                <>
                  <p>1. Coleta de Dados: Coletamos apenas as informações necessárias para formalização da reserva e entrega do veículo (nome, telefone de contato, datas de viagem e comprovantes de habilitação).</p>
                  <p>2. Segurança: Seus dados cadastrais e de pagamento são protegidos e tratados sob estrito sigilo comercial e em conformidade com as legislações vigentes.</p>
                  <p>3. Comunicação: O contato direto via WhatsApp é utilizado exclusivamente para suporte, coordenação de voos e facilitação do atendimento ao cliente.</p>
                </>
              )}
            </div>
            <div className="mt-5 pt-3 border-t border-purple-500/20 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
