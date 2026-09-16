export interface Persona {
  id: string;
  name: string;
  role: string;
  segment: string;
  age: string;
  badgeColor: string;
  readingInterests: string;
  purchasingBehavior: string;
  channels: string[];
  ltv: string;
  quote: string;
  favoriteGenre: string;
  typicalBasket: string[];
}

export interface KeywordItem {
  id: string;
  query: string;
  volume: number;
  kd: number;
  intent: 'High Footfall Intent' | 'Niche High-AOV' | 'Experiential' | 'Event Driver' | 'Family Audience' | 'Student Budget' | 'Social Viral' | 'Conscious Shopper' | 'AOV Expansion' | 'Collector Prestige';
  category: 'footfall' | 'collector' | 'events' | 'students' | 'experience';
}

export interface SocialPillar {
  platform: 'Instagram' | 'Facebook' | 'WhatsApp';
  handle: string;
  badge: string;
  schedule: string;
  kpiHighlight: string;
  kpiDetail: string;
  contentPillars: string[];
  previewContent: {
    title: string;
    caption: string;
    timestamp: string;
    metrics: string;
  };
}

export interface RoadmapPhase {
  phase: string;
  months: string;
  title: string;
  focus: string;
  milestones: string[];
  expectedGain: string;
}
