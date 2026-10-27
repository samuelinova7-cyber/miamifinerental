import React, { useState } from 'react';
import { Vehicle, Language, CarCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { FLEET_DATA } from '../data/fleet';
import { VehicleModal } from './VehicleModal';
import { buildCarBookingWhatsAppMessage } from '../utils/whatsapp';
import { Zap, Gauge, Users, MessageCircle, Info, CheckCircle2, Sparkles } from 'lucide-react';

interface FleetSectionProps {
  currentLang: Language;
  activeFilter?: 'all' | CarCategory;
  onFilterChange?: (filter: 'all' | CarCategory) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  currentLang,
  activeFilter = 'all',
  onFilterChange
}) => {
  const t = TRANSLATIONS[currentLang];
  const [internalFilter, setInternalFilter] = useState<'all' | CarCategory>(activeFilter);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const currentCategoryFilter = onFilterChange ? activeFilter : internalFilter;

  const handleSelectFilter = (category: 'all' | CarCategory) => {
    if (onFilterChange) {
      onFilterChange(category);
    } else {
      setInternalFilter(category);
    }
  };

  const filteredVehicles = currentCategoryFilter === 'all'
    ? FLEET_DATA
    : FLEET_DATA.filter((v) => v.category === currentCategoryFilter);

  const handleDirectWhatsAppBook = (vehicle: Vehicle, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = buildCarBookingWhatsAppMessage({
      lang: currentLang,
      carName: vehicle.name,
      carYear: vehicle.year,
      dailyRate: vehicle.dailyRate
    });
    const url = `https://wa.me/13058485075?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="frota" className="py-20 relative bg-[#0b0714] border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{t.fleet.kicker}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {t.fleet.title}
            </h2>
            <p className="text-purple-200/70 text-sm sm:text-base mt-2 max-w-2xl">
              {t.fleet.subtitle}
            </p>
          </div>

          {/* Interactive Filter Tabs in Neon Purple */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#140c26] border border-purple-500/30 rounded-2xl overflow-x-auto max-w-full shadow-lg">
            <button
              onClick={() => handleSelectFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentCategoryFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50'
                  : 'text-purple-200 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {t.fleet.tabs.all}
            </button>
            <button
              onClick={() => handleSelectFilter('supercars')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentCategoryFilter === 'supercars'
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50'
                  : 'text-purple-200 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {t.fleet.tabs.supercars}
            </button>
            <button
              onClick={() => handleSelectFilter('convertibles')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentCategoryFilter === 'convertibles'
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50'
                  : 'text-purple-200 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {t.fleet.tabs.convertibles}
            </button>
            <button
              onClick={() => handleSelectFilter('suvs')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                currentCategoryFilter === 'suvs'
                  ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400/50'
                  : 'text-purple-200 hover:text-white hover:bg-purple-950/40'
              }`}
            >
              {t.fleet.tabs.suvs}
            </button>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              onClick={() => setSelectedVehicle(vehicle)}
              className="group bg-[#130b24] border border-purple-500/25 hover:border-purple-400/60 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-950/70 flex flex-col cursor-pointer neon-border-purple"
            >
              {/* Vehicle Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130b24] via-transparent to-black/30" />

                {/* Tag */}
                {vehicle.tag && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-purple-950/80 backdrop-blur-md border border-purple-400/30 text-[11px] font-extrabold tracking-wide text-purple-200 shadow-md">
                    {vehicle.tag[currentLang]}
                  </div>
                )}

                {/* Price pill over image corner with neon glow */}
                <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-[#0b0616]/85 backdrop-blur-md border border-purple-500/30 text-right">
                  <span className="text-[10px] text-purple-300 uppercase tracking-wider block leading-none font-semibold">
                    {t.fleet.fromRate}
                  </span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl font-black text-purple-300 tabular-nums font-mono neon-glow-purple">
                      ${vehicle.dailyRate}
                    </span>
                    <span className="text-xs text-purple-200/80">{t.fleet.perDay}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata separator */}
                  <div className="flex items-center gap-2 text-xs text-purple-300/80 mb-2">
                    <span>{vehicle.categoryLabel[currentLang]}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-purple-300 font-bold">{vehicle.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{vehicle.brand}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                    {vehicle.name}
                  </h3>

                  {/* Technical Specs Strip */}
                  <div className="grid grid-cols-3 gap-2 my-4 p-2.5 rounded-2xl bg-purple-950/40 border border-purple-500/20 text-center">
                    <div>
                      <div className="flex items-center justify-center gap-1 text-purple-300 text-[11px] mb-0.5 font-semibold">
                        <Zap className="w-3 h-3 text-purple-400" />
                        <span>CV</span>
                      </div>
                      <span className="text-xs font-bold text-white tabular-nums font-mono">
                        {vehicle.specs.horsepower} CV
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1 text-purple-300 text-[11px] mb-0.5 font-semibold">
                        <Gauge className="w-3 h-3 text-sky-400" />
                        <span>0-60</span>
                      </div>
                      <span className="text-xs font-bold text-white tabular-nums font-mono">
                        {vehicle.specs.acceleration}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center justify-center gap-1 text-purple-300 text-[11px] mb-0.5 font-semibold">
                        <Users className="w-3 h-3 text-emerald-400" />
                        <span>Lugares</span>
                      </div>
                      <span className="text-xs font-bold text-white tabular-nums font-mono">
                        {vehicle.specs.passengers}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: Glowing Neon Green WhatsApp Button */}
                <div className="flex items-center gap-2 pt-3 border-t border-purple-500/20 mt-2">
                  <button
                    onClick={(e) => handleDirectWhatsAppBook(vehicle, e)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-extrabold neon-btn-green cursor-pointer whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>{t.fleet.reserveBtn}</span>
                  </button>

                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="px-3 py-3 rounded-xl text-xs font-semibold text-purple-200 hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 transition-colors cursor-pointer"
                    aria-label={t.fleet.detailsBtn}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Included Perks Banner Strip with Neon Purple Accents */}
        <div className="bg-gradient-to-r from-[#140c26] via-[#1d1038] to-[#140c26] border-2 border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span>{t.fleet.includedPerksTitle}</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-purple-100">
                {t.fleet.perksList.map((perk, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 text-left lg:text-right">
              <a
                href="https://wa.me/13058485075?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20a%20frota%20completa%20da%20Miami%20Fine%20Rental."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold neon-btn-green"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Falar com Concierge VIP</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Detail & Booking Modal */}
      <VehicleModal
        vehicle={selectedVehicle}
        currentLang={currentLang}
        onClose={() => setSelectedVehicle(null)}
      />
    </section>
  );
};
