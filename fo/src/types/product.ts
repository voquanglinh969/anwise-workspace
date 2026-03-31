export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  platform?: string;
}
