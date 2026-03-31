import { Article } from "./article";
import { Product } from "./product";

export type SearchTabType = "all" | "products" | "editorial" | "guides";

export interface SearchRecommendation extends Product {
  badge?: string;
  badgeType?: "editors-choice" | "productivity" | "gaming";
  releasedDate?: string;
}

export interface SearchResult {
  products: Product[];
  articles: Article[];
  recommendations: SearchRecommendation[];
  stats: {
    total: number;
    products: number;
    editorial: number;
    guides: number;
  };
}

export interface TrendingReview {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  href: string;
}
