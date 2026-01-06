import { CityData } from './types';

export const FALLS_CHURCH_DATA: CityData = {
  name: "Falls Church",
  state: "VA",
  slug: "falls-church-va",
  heroImage: "https://picsum.photos/1200/600?grayscale",
  phoneNumber: "(703) 555-0123",
  responseTime: "45 min",
  establishedYear: 2015,
  officeLocation: "123 Broad St, Falls Church, VA 22046",
  distanceFromCenter: "1.2 miles from City Hall",
  neighborhoods: [
    "Lake Barcroft",
    "Pimmit Hills",
    "Seven Corners",
    "Idylwood",
    "Sleepy Hollow",
    "Jefferson Village"
  ],
  landmarks: [
    "The Eden Center",
    "Cherry Hill Farmhouse",
    "State Theatre",
    "W&OD Trail"
  ],
  zipCodes: ["22040", "22041", "22042", "22043", "22044", "22046"],
  neighboringCities: ["Arlington", "McLean", "Vienna", "Fairfax"],
  services: [
    {
      id: "water-extraction",
      title: "Water Extraction",
      description: "Emergency water removal for flooded basements and burst pipes.",
      iconName: "Droplets",
      responseTime: "Immediate"
    },
    {
      id: "structural-drying",
      title: "Structural Drying",
      description: "Industrial grade dehumidification to prevent mold growth.",
      iconName: "Wind",
      responseTime: "Same Day"
    },
    {
      id: "mold-remediation",
      title: "Mold Remediation",
      description: "Certified mold removal and prevention services.",
      iconName: "ShieldAlert",
      responseTime: "Scheduled"
    },
    {
      id: "sewage-cleanup",
      title: "Sewage Cleanup",
      description: "Hazardous waste removal and sanitation for backups.",
      iconName: "Zap",
      responseTime: "Priority"
    }
  ],
  reviews: [
    {
      id: "r1",
      author: "Sarah Jenkins",
      location: "Falls Church (Pimmit Hills)",
      rating: 5,
      text: "Flood Doctor arrived within 40 minutes when our basement flooded during the storm. Being local to Falls Church made a huge difference.",
      date: "2 months ago"
    },
    {
      id: "r2",
      author: "Michael Tran",
      location: "Falls Church (Seven Corners)",
      rating: 5,
      text: "Professional, fast, and they handled the insurance paperwork. Best restoration team in NoVA.",
      date: "5 months ago"
    },
    {
      id: "r3",
      author: "David Ross",
      location: "Lake Barcroft",
      rating: 4,
      text: "Expensive but worth it for the peace of mind. They saved our hardwood floors.",
      date: "1 year ago"
    }
  ],
  faqs: [
    {
      question: "How quickly can you get to Falls Church?",
      answer: "We have technicians stationed in Falls Church and can typically arrive within 45 minutes of your call."
    },
    {
      question: "Do you work with Falls Church insurance adjusters?",
      answer: "Yes, we have longstanding relationships with all major carriers operating in Northern Virginia and handle the billing directly."
    },
    {
      question: "Are you licensed to work in historic Falls Church homes?",
      answer: "Absolutely. We are certified for restoration in older homes, specifically handling lead and asbestos concerns common in 1950s era constructions."
    }
  ]
};