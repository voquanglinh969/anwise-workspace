export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  badge?: string;
  slug: string;
}
