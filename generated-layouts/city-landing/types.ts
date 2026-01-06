export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'Droplets' | 'Wind' | 'Home' | 'Zap' | 'ShieldAlert' | 'Waves';
  responseTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CityData {
  name: string;
  state: string;
  slug: string;
  heroImage: string;
  phoneNumber: string;
  responseTime: string;
  establishedYear: number;
  officeLocation: string;
  distanceFromCenter: string;
  neighborhoods: string[];
  landmarks: string[];
  zipCodes: string[];
  neighboringCities: string[];
  services: Service[];
  reviews: Review[];
  faqs: FAQ[];
}