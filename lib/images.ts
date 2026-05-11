import manifest from './manifest.json';

export interface InstagramImage {
  filename: string;
  src: string;
  index: number;
  category: 'food' | 'drinks' | 'ambiance' | 'people';
}

export function getInstagramImages(): InstagramImage[] {
  return manifest as InstagramImage[];
}

export function getImagesByCategory(category: InstagramImage['category']): InstagramImage[] {
  return getInstagramImages().filter(img => img.category === category);
}
