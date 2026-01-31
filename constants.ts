import { Brand, Project, RatePackage, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Brands', href: '#brands' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fashion Transition',
    category: 'Fashion Reel',
    thumbnailUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DSqEeXkE_aP/',
  },
  {
    id: '2',
    title: 'Beauty & Skincare',
    category: 'Beauty Edit',
    thumbnailUrl: 'https://images.unsplash.com/photo-1522335208411-2f33907bed26?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DSX4UVwgaZv/',
  },
  {
    id: '3',
    title: 'Lifestyle Moments',
    category: 'Vlog',
    thumbnailUrl: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DSQXVWNE_cL/',
  },
  {
    id: '4',
    title: 'Event Styling',
    category: 'Fashion',
    thumbnailUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DRd_dvIAdFc/',
  },
  {
    id: '5',
    title: 'Product Review',
    category: 'Collaboration',
    thumbnailUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop',
    videoUrl: 'https://www.instagram.com/reel/DT0xMhfk427/',
  },
];

export const BRANDS: Brand[] = [
  { name: 'Dot & Key', type: 'Domestic' },
  { name: 'Plum', type: 'Domestic' },
  { name: 'Medicube', type: 'International' },
  { name: 'Aqualogica', type: 'Domestic' },
  { name: 'Lakmé', type: 'Domestic' },
  { name: 'd’Alba', type: 'International' },
  { name: 'Dr. Sheth’s', type: 'Domestic' },
  { name: 'Elle 18', type: 'Domestic' },
  { name: 'The Derma Co.', type: 'Domestic' },
  { name: 'Be Bodywise', type: 'Domestic' },
  { name: 'Mila Beauty', type: 'Domestic' },
  { name: 'Mars', type: 'Domestic' },
  { name: 'Bella Vita', type: 'Domestic' },
  { name: 'Hilary Rhoda', type: 'Domestic' },
  { name: 'Oyela', type: 'Domestic' },
];

export const RATES: RatePackage[] = [
  {
    title: 'Instagram Reel',
    price: 'Contact',
    features: ['30-60 Seconds', 'Product Integration', 'Story Share', 'Organic Usage'],
  },
  {
    title: 'YouTube Integration',
    price: 'Contact',
    features: ['Dedicated Segment', 'Link in Bio', 'Community Post', 'Organic Usage'],
    isHighlight: true,
  },
  {
    title: 'Story Set',
    price: 'Contact',
    features: ['3-5 Frames', 'Link Sticker', 'Interactive Polls', '24h Duration'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Brand Manager',
    platform: 'Instagram',
    text: 'Sameera has an incredible eye for aesthetics. The content fit our brand perfectly.',
  },
  {
    id: '2',
    author: 'Marketing Lead',
    platform: 'WhatsApp',
    text: 'High engagement and very professional to work with. Highly recommend!',
  },
];