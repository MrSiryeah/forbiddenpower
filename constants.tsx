
import { Category, GalleryImage } from './types';

// Swap this URL with the one you found online
export const STORE_LOGO_URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJzQx3jzy3a2t0KLzaoD3q7GqKhs6gcKSEZQ&s'; 

export const CATEGORIES: Category[] = [
  {
    id: 'warhammer',
    title: 'Warhammer Systems',
    description: 'Malta\'s premier stockist for the 41st Millennium and Mortal Realms. Extensive range of Age of Sigmar, Warhammer 40,000, Kill Team, and The Old World.',
    imageUrl: 'https://images.unsplash.com/photo-1735016662106-32e81bdeec9f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    brands: ['Warhammer 40,000', 'Age of Sigmar', 'Kill Team', 'The Old World']
  },
  {
    id: 'trading-cards',
    title: 'Trading Card Games',
    description: 'A dedicated hub for card enthusiasts. Official store for Magic: The Gathering, Disney Lorcana, Pokémon TCG, and One Piece.',
    imageUrl: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    brands: ['Magic: The Gathering', 'One Piece', 'Pokémon', 'Disney Lorcana']
  },
  {
    id: 'minifigures',
    title: 'Miniatures & Kits',
    description: 'Expertly curated selection of hero miniatures, scale model kits, and tabletop accessories for every genre.',
    imageUrl: 'https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2022/08/IMG_2988_small.jpg',
    brands: ['The Lord of the Rings', 'Citadel Heroes', 'Scale Models', 'D&D']
  },
  {
    id: 'paints',
    title: 'The Atelier',
    description: 'Professional tools for the artisan. Complete Citadel Color range, modeling tools, and high-performance brushes.',
    imageUrl: 'https://citadelcolour.com/wp-content/uploads/2022/07/v2yLCahxbtO2K6F3-640x640.jpg',
    brands: ['Citadel Color', 'Tools & Glues', 'Spray Paints', 'Brushes']
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800', alt: 'Forbidden Powers Shelves', caption: 'The Collection' },
  { url: 'https://images.unsplash.com/photo-1601987177651-8edfe6c20009?auto=format&fit=crop&q=80&w=800', alt: 'Painted Figures', caption: 'Artisan Detail' },
  { url: 'https://www.shopperlottery.com/dynimage/baddegfage/186232/image.jpg', alt: 'Gaming Tables', caption: 'The Hub' },
  { url: 'https://todaysparent.mblycdn.com/tp/resized/2016/06/1600x1200/pokemon-101-1280x960.jpg', alt: 'TCG Cards', caption: 'Trading Card Games' },
];

export const SHOP_HOURS = [
  { day: 'Monday', hours: '09:30—14:00, 15:00—20:00' },
  { day: 'Tuesday', hours: '09:30—14:00, 15:00—20:00' },
  { day: 'Wednesday', hours: '09:30—14:00, 15:00—20:00' },
  { day: 'Thursday', hours: '09:30—14:00, 15:00—20:00' },
  { day: 'Friday', hours: '09:30—14:00, 15:00—20:00' },
  { day: 'Saturday', hours: '09:30—20:00' },
  { day: 'Sunday', hours: 'Closed' },
];
