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
    thumbnailUrl: '/images/reels/reel1.jpg',
    videoUrl: 'https://www.instagram.com/reel/DSqEeXkE_aP/',
  },
  {
    id: '2',
    title: 'Beauty & Skincare',
    category: 'Beauty Edit',
    thumbnailUrl: '/images/reels/reel2.jpg',
    videoUrl: 'https://www.instagram.com/reel/DSX4UVwgaZv/',
  },
  {
    id: '3',
    title: 'Lifestyle Moments',
    category: 'Vlog',
    thumbnailUrl: '/images/reels/reel3.jpg',
    videoUrl: 'https://www.instagram.com/reel/DSQXVWNE_cL/',
  },
  {
    id: '4',
    title: 'Event Styling',
    category: 'Fashion',
    thumbnailUrl: '/images/reels/reel4.jpg',
    videoUrl: 'https://www.instagram.com/reel/DRd_dvIAdFc/',
  },
  {
    id: '5',
    title: 'Product Review',
    category: 'Collaboration',
    thumbnailUrl: '/images/reels/reel5.jpg',
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
    title: 'Collaboration Reel',
    price: '₹3,000',
    features: ['1 Instagram Reel (30-60s)', 'Story Mention', 'Product Integration', 'Rights: Organic usage'],
  },
  {
    title: 'Non-Collaboration Package',
    price: '₹5,000',
    features: ['One Reel (Non-Collab)', 'One Carousel', 'One Story'],
    isHighlight: true,
    note: 'Deliverables within 5-7 days',
  },
  {
    title: 'Ad Usage Rights',
    price: '₹1,000',
    features: ['Per Month', 'Paid Ad Usage', 'Whitelisting Available'],
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