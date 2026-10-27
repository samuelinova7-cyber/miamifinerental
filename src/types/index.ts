export type Language = 'pt' | 'en' | 'es';

export type CarCategory = 'supercars' | 'convertibles' | 'suvs';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  category: CarCategory;
  categoryLabel: {
    pt: string;
    en: string;
    es: string;
  };
  dailyRate: number;
  featured?: boolean;
  tag?: {
    pt: string;
    en: string;
    es: string;
  };
  image: string;
  specs: {
    horsepower: number; // CV / HP
    acceleration: string; // 0-60 mph (ex: 2.9s)
    passengers: number;
    luggage: number; // bags
    transmission: {
      pt: string;
      en: string;
      es: string;
    };
    engine: string;
    topSpeed?: string;
  };
  features: {
    pt: string[];
    en: string[];
    es: string[];
  };
  depositAmount: number;
  includedMilesPerDay: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  origin: string;
  rating: number;
  date: string;
  carRented: string;
  comment: {
    pt: string;
    en: string;
    es: string;
  };
  avatarInitial: string;
}

export interface FaqItem {
  id: string;
  question: {
    pt: string;
    en: string;
    es: string;
  };
  answer: {
    pt: string;
    en: string;
    es: string;
  };
}

export interface SimulatorState {
  pickupDate: string;
  returnDate: string;
  pickupLocation: string;
  category: 'all' | CarCategory;
  selectedVehicleId?: string;
}
