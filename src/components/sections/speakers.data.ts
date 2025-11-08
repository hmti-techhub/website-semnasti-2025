import type { StaticImageData } from 'next/image';

// Import speaker photos here when available
// import speaker1 from '@/assets/speakers/speaker1.png';
import speaker2 from '@/assets/speakers/speaker2.png';

export type Speaker = {
  id: string;
  name: string;
  title?: string; // Professional title or role
  organization?: string; // Company / institution
  topic?: string; // Talk topic
  image?: StaticImageData; // Optional headshot
  comingSoon?: boolean; // Flag to show placeholder
};

export const SPEAKERS: Speaker[] = [
  {
    id: 'coming-soon-1',
    name: 'Special Speaker 1',
    comingSoon: true,
    organization: 'To Be Announced',
  },
  {
    id: 'coming-soon-2',
    name: 'Marchel Andiran Shevchenko',
    comingSoon: false,
    image: speaker2,
    title: 'Founder Data Sorcerers',
  },
];
