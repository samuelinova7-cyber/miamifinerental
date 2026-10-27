import React, { useState, useId } from 'react';
import { Language, CarCategory } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PICKUP_LOCATIONS } from '../data/fleet';
import { buildSimulatorWhatsAppMessage } from '../utils/whatsapp';
import { Calendar, MapPin, Car, MessageCircle, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

interface BookingSimulatorProps {
  currentLang: Language;
  onFilterFleetCategory?: (category: 'all' | CarCategory) => void;
}

export const BookingSimulator: React.FC<BookingSimulatorProps> = ({
  currentLang,
  onFilterFleetCategory
}) => {
  const t = TRANSLATIONS[currentLang];
  const pickupId = useId();
  const returnId = useId();
  const locationId = useId();
  const categoryId = useId();

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
  const [pickupLocation, setPickupLocation] = useState(PICKUP_LOCATIONS[0].label[currentLang]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | CarCategory>('all');

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 3;
    const p = new Date(pickupDate).getTime();
    const r = new Date(returnDate).getTime();
    const diff = Math.ceil((r - p) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const days = calculateDays();

  const baseRates: Record<string, number> = {
    all: 210,
    supercars: 390,
    convertibles: 210,
    suvs: 420
  };

  const currentBaseRate = baseRates[selectedCategory] || 210;
  const estimatedTotal = currentBaseRate * days;

  const categoryName =
    selectedCategory === 'all'
      ? t.simulator.allCategories
      : selectedCategory === 'supercars'
      ? t.simulator.supercars
      : selectedCategory === 'convertibles'
      ? t.simulator.convertibles
      : t.simulator.suvs;

  const handleWhatsAppConsultation = () => {
    const message = buildSimulatorWhatsAppMessage({
      lang: currentLang,
      pickupDate,
      returnDate,
      pickupLocation,
      category: categoryName,
      estimatedTotal,
      days
    });
    const url = `https://wa.me/13058485075?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCategoryChange = (cat: 'all' | CarCategory) => {
    setSelectedCategory(cat);
    if (onFilterFleetCategory) {
      onFilterFleetCategory(cat);
    }
  };

  return (
    <section className="relative -mt-8 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#120b24]/95 border-2 border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/70 backdrop-blur-xl neon-border-purple">
        {/* Header inside simulator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-5 border-b border-purple-500/20">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
              <span>{t.simulator.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/70 mt-1">
              {t.simulator.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-xl shrink-0 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.simulator.instantReply}</span>
          </div>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Pickup Date */}
          <div className="bg-[#1a0f33] border border-purple-500/30 rounded-2xl p-4 focus-within:border-purple-400 transition-colors">
            <label htmlFor={pickupId} className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {t.simulator.pickupDate}
            </label>
            <input
              id={pickupId}
              type="date"
              value={pickupDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          {/* Return Date */}
          <div className="bg-[#1a0f33] border border-purple-500/30 rounded-2xl p-4 focus-within:border-purple-400 transition-colors">
            <label htmlFor={returnId} className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {t.simulator.returnDate}
            </label>
            <input
              id={returnId}
              type="date"
              value={returnDate}
              min={pickupDate || new Date().toISOString().split('T')[0]}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full bg-transparent text-white font-medium text-sm focus:outline-none cursor-pointer [color-scheme:dark]"
            />
          </div>

          {/* Delivery Location */}
          <div className="bg-[#1a0f33] border border-purple-500/30 rounded-2xl p-4 focus-within:border-purple-400 transition-colors">
            <label htmlFor={locationId} className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              {t.simulator.pickupLocation}
            </label>
            <select
              id={locationId}
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full bg-[#1a0f33] text-white font-medium text-xs sm:text-sm focus:outline-none cursor-pointer truncate"
            >
              {PICKUP_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.label[currentLang]} className="bg-[#1a0f33] text-white py-1">
                  {loc.label[currentLang]}
                </option>
              ))}
            </select>
          </div>

          {/* Desired Category */}
          <div className="bg-[#1a0f33] border border-purple-500/30 rounded-2xl p-4 focus-within:border-purple-400 transition-colors">
            <label htmlFor={categoryId} className="flex items-center gap-1.5 text-xs font-bold text-purple-300 uppercase tracking-wider mb-2">
              <Car className="w-3.5 h-3.5 text-purple-400" />
              {t.simulator.category}
            </label>
            <select
              id={categoryId}
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value as 'all' | CarCategory)}
              className="w-full bg-[#1a0f33] text-white font-medium text-xs sm:text-sm focus:outline-none cursor-pointer truncate"
            >
              <option value="all" className="bg-[#1a0f33] text-white">{t.simulator.allCategories}</option>
              <option value="supercars" className="bg-[#1a0f33] text-white">{t.simulator.supercars}</option>
              <option value="convertibles" className="bg-[#1a0f33] text-white">{t.simulator.convertibles}</option>
              <option value="suvs" className="bg-[#1a0f33] text-white">{t.simulator.suvs}</option>
            </select>
          </div>
        </div>

        {/* Calculation summary bar and Glowing Neon Green CTA */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-4 border-t border-purple-500/20">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-purple-200">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tabular-nums font-mono text-base">{days}</span>
              <span className="text-purple-300/80">{days === 1 ? t.simulator.day : t.simulator.days}</span>
            </div>
            <span className="text-purple-600">·</span>
            <div>
              <span className="text-purple-300/80">{t.simulator.estTotal}: </span>
              <span className="font-extrabold text-purple-300 text-lg sm:text-xl tabular-nums font-mono neon-glow-purple">
                ${estimatedTotal.toLocaleString()}
              </span>
            </div>
            <span className="text-purple-600 hidden sm:inline">·</span>
            <div className="text-purple-300/80 text-xs hidden sm:flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sem taxas ocultas</span>
            </div>
          </div>

          {/* Neon Green Button */}
          <button
            onClick={handleWhatsAppConsultation}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-extrabold neon-btn-green cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.simulator.whatsappBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
