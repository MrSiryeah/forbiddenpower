
export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  brands: string[];
}

export interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface HobbyTip {
  title: string;
  content: string;
}
