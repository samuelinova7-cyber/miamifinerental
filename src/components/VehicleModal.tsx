import React, { useState, useId } from 'react';
import { Vehicle, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PICKUP_LOCATIONS } from '../data/fleet';
import { buildCarBookingWhatsAppMessage } from '../utils/whatsapp';
import { X, Check, ShieldCheck, Gauge, Users, Briefcase, Zap, Calendar, MapPin, MessageCircle, Sparkles } from 'lucide-react';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  currentLang: Language;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({
  vehicle,
  currentLang,
  onClose
}) => {
  const t = TRANSLATIONS[currentLang];
  const modalPickupId = useId();
  const modalReturnId = useId();
  const modalLocationId = useId();

  const getTomorrowDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const getDefaultReturnDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toISOString().split('T')[0];
  };

  const [pickupDate, setPickupDate] = useState(getTomorrowDate());
  const [returnDate, setReturnDate] = useState(getDefaultReturnDate());
  const [location, setLocation] = useState(PICKUP_LOCATIONS[0].label[currentLang]);

  if (!vehicle) return null;

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 4;
    const p = new Date(pickupDate).getTime();
    const r = new Date(returnDate).getTime();
    const diff = Math.ceil((r - p) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const days = calculateDays();
  const totalRate = days * vehicle.dailyRate;

  const handleConfirmReservation = () => {
    const message = buildCarBookingWhatsAppMessage({
      lang: currentLang,
      carName: vehicle.name,
      carYear: vehicle.year,
      dailyRate: vehicle.dailyRate,
      days,
      pickupDate,
      returnDate,
      pickupLocation: location
    });
    const url = `https://wa.me/13058485075?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#120b24] border-2 border-purple-500/40 rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden my-8 neon-border-purple"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-purple-200 hover:text-white hover:bg-black/90 border border-purple-500/40 transition-all cursor-pointer"
          aria-label={t.modal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120b24] via-transparent to-black/40" />

          {/* Badges over image */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-wider text-purple-300 mb-1 flex items-center gap-1.5 neon-glow-purple">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{vehicle.categoryLabel[currentLang]} · {vehicle.year}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {vehicle.name}
              </h3>
            </div>

            <div className="text-right bg-[#0b0616]/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-purple-500/30">
              <span className="text-[11px] text-purple-300 block">{t.fleet.fromRate}</span>
              <span className="text-2xl font-black text-purple-200 tabular-nums font-mono neon-glow-purple">
                ${vehicle.dailyRate}
              </span>
              <span className="text-xs text-purple-300/80"> {t.fleet.perDay}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#1b1033] border border-purple-500/25 text-center">
              <Zap className="w-4 h-4 text-purple-300 mx-auto mb-1" />
              <span className="text-xs text-purple-300/80 block">Potência</span>
              <span className="text-sm font-bold text-white tabular-nums font-mono">{vehicle.specs.horsepower} CV</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1b1033] border border-purple-500/25 text-center">
              <Gauge className="w-4 h-4 text-sky-400 mx-auto mb-1" />
              <span className="text-xs text-purple-300/80 block">0 a 60 mph</span>
              <span className="text-sm font-bold text-white tabular-nums font-mono">{vehicle.specs.acceleration}</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1b1033] border border-purple-500/25 text-center">
              <Users className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
              <span className="text-xs text-purple-300/80 block">{t.fleet.passengers}</span>
              <span className="text-sm font-bold text-white tabular-nums font-mono">{vehicle.specs.passengers} Lugares</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1b1033] border border-purple-500/25 text-center">
              <Briefcase className="w-4 h-4 text-fuchsia-400 mx-auto mb-1" />
              <span className="text-xs text-purple-300/80 block">{t.fleet.luggage}</span>
              <span className="text-sm font-bold text-white tabular-nums font-mono">{vehicle.specs.luggage} Malas</span>
            </div>
          </div>

          {/* Engine & Transmission */}
          <div className="p-4 rounded-2xl bg-[#1b1033] border border-purple-500/20 text-xs sm:text-sm text-purple-100 flex flex-col sm:flex-row justify-between gap-2">
            <div>
              <span className="text-purple-300/80 font-medium">Motorização: </span>
              <span className="text-white font-semibold">{vehicle.specs.engine}</span>
            </div>
            <div>
              <span className="text-purple-300/80 font-medium">{t.fleet.transmission}: </span>
              <span className="text-white font-semibold">{vehicle.specs.transmission[currentLang]}</span>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{t.modal.featuresHeader}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-purple-100">
              {vehicle.features[currentLang].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Rental Simulator inside Modal */}
          <div className="p-5 rounded-2xl bg-[#180e2e] border border-purple-500/30 space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{t.modal.rentalPeriod}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor={modalPickupId} className="block text-xs text-purple-300 mb-1 font-semibold">{t.simulator.pickupDate}</label>
                <input
                  id={modalPickupId}
                  type="date"
                  value={pickupDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-[#120b24] border border-purple-500/30 rounded-xl p-2.5 text-xs text-white [color-scheme:dark]"
                />
              </div>

              <div>
                <label htmlFor={modalReturnId} className="block text-xs text-purple-300 mb-1 font-semibold">{t.simulator.returnDate}</label>
                <input
                  id={modalReturnId}
                  type="date"
                  value={returnDate}
                  min={pickupDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full bg-[#120b24] border border-purple-500/30 rounded-xl p-2.5 text-xs text-white [color-scheme:dark]"
                />
              </div>

              <div>
                <label htmlFor={modalLocationId} className="block text-xs text-purple-300 mb-1 font-semibold">{t.simulator.pickupLocation}</label>
                <select
                  id={modalLocationId}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#120b24] border border-purple-500/30 rounded-xl p-2.5 text-xs text-white truncate"
                >
                  {PICKUP_LOCATIONS.map((loc) => (
                    <option key={loc.id} value={loc.label[currentLang]}>
                      {loc.label[currentLang]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculations inside modal */}
            <div className="pt-3 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-purple-100">
                <span>{days} {days === 1 ? t.simulator.day : t.simulator.days} · </span>
                <span className="font-bold text-white text-sm">
                  {t.modal.estimatedTotal} <span className="text-purple-300 tabular-nums font-mono neon-glow-purple">${totalRate.toLocaleString()}</span>
                </span>
                <p className="text-[11px] text-purple-300/70 mt-0.5">
                  {t.modal.depositLabel} ${vehicle.depositAmount} (pré-autorização estornada na devolução)
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-purple-200">
                <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                <span className="text-[11px]">Entrega VIP no seu terminal</span>
              </div>
            </div>
          </div>

          {/* Guarantee Note */}
          <div className="p-3.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs text-purple-200 flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{t.modal.guaranteeNote}</span>
          </div>

          {/* Glowing Neon Green CTA in modal */}
          <div className="pt-2">
            <button
              onClick={handleConfirmReservation}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-extrabold neon-btn-green cursor-pointer text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.modal.confirmWhatsApp}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
