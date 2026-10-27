import React, { useState } from 'react';
import { Language, CarCategory } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookingSimulator } from './components/BookingSimulator';
import { FleetSection } from './components/FleetSection';
import { MidPageVideoSection } from './components/MidPageVideoSection';
import { PerksSection } from './components/PerksSection';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveRentalNotifications } from './components/LiveRentalNotifications';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [activeFleetFilter, setActiveFleetFilter] = useState<'all' | CarCategory>('all');

  const scrollToFleet = () => {
    const el = document.getElementById('frota');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterFromSimulator = (category: 'all' | CarCategory) => {
    setActiveFleetFilter(category);
    const el = document.getElementById('frota');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0714] text-[#f3e8ff] flex flex-col selection:bg-purple-600/30 selection:text-purple-200">
      {/* 1. Header with Running Marquee & Mirrored Logo */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Section with Video Background */}
        <Hero
          currentLang={currentLang}
          onExploreFleet={scrollToFleet}
        />

        {/* 3. Fast Rental Simulator / Quick Quote Widget */}
        <BookingSimulator
          currentLang={currentLang}
          onFilterFleetCategory={handleFilterFromSimulator}
        />

        {/* 4. Fleet Showroom (Nossa Frota) */}
        <FleetSection
          currentLang={currentLang}
          activeFilter={activeFleetFilter}
          onFilterChange={setActiveFleetFilter}
        />

        {/* 5. Mid-Page Video Feature: White Sports Car with Direct WhatsApp Callout */}
        <MidPageVideoSection
          currentLang={currentLang}
        />

        {/* 6. Por Que Escolher a Miami Fine Rental? (Diferenciais) */}
        <PerksSection
          currentLang={currentLang}
        />

        {/* 7. Como Funciona (3 Passos Simples) */}
        <HowItWorks
          currentLang={currentLang}
        />

        {/* 8. Prova Social: Reviews with Neon Skyline Video & Google Evaluation Button */}
        <TestimonialsSection
          currentLang={currentLang}
        />

        {/* 9. Perguntas Frequentes (FAQ) */}
        <FaqSection
          currentLang={currentLang}
        />

        {/* 10. Contato Direto & Regiões Atendidas */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* 11. Footer with Glowing Logo & Mirror Reflection */}
      <Footer
        currentLang={currentLang}
      />

      {/* 12. Real-Time Live Toast Notifications (Bottom-Left) */}
      <LiveRentalNotifications
        currentLang={currentLang}
      />

      {/* 13. Floating WhatsApp in Glowing Neon Green with Speech Bubble (Bottom-Right) */}
      <FloatingWhatsApp
        currentLang={currentLang}
      />
    </div>
  );
}
