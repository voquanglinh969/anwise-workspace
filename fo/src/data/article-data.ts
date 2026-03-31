import { Article } from "@/types/article";

export const FEATURED_ARTICLE: Article = {
  id: "featured-1",
  title: "The Best Gear for Your Home Office, Tested and Approved",
  excerpt: "After 200 hours of testing 40 different productivity tools, we've found the essentials that actually make a difference in your daily workflow.",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200",
  category: "Gear",
  author: {
    name: "Võ Quang Linh",
  },
  date: "Oct 24, 2023",
  readTime: "15 min read",
  badge: "OUR'S CHOICE TOPIC THIS WEEK",
  slug: "best-home-office-gear",
};

export const TRENDING_ARTICLES: Article[] = [
  {
    id: "trending-1",
    title: "The Best Stainless Steel Skillets of 2023",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=400",
    category: "Kitchen",
    author: { name: "Anwise Team" },
    date: "Sep 12, 2023",
    readTime: "8 min read",
    slug: "best-stainless-steel-skillets-2023",
  },
  {
    id: "trending-2",
    title: "Why These Headphones Won Our Top Pick for Travel",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    category: "Tech",
    author: { name: "Anwise Team" },
    date: "Aug 20, 2023",
    readTime: "12 min read",
    slug: "travel-headphones-top-pick",
  },
  {
    id: "trending-3",
    title: "Our Favorite Air Fryer Is Currently 30% Off",
    excerpt: "",
    image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=400",
    category: "Deals",
    author: { name: "Anwise Team" },
    date: "Oct 05, 2023",
    readTime: "5 min read",
    slug: "air-fryer-deal-30-off",
  },
];

export const BUYING_GUIDES_DATA: Article[] = [
  {
    id: "guide-1",
    title: "The Best Sofas for Living Rooms of Every Size",
    excerpt: "We spent 12 months lounging on 25 sofas to find the perfect balance of comfort, durability, and style for any living space.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
    category: "Home & Garden",
    author: { name: "Anwise Team" },
    date: "Oct 20, 2023",
    readTime: "12 min read",
    slug: "best-sofas-guide",
  },
  {
    id: "guide-2",
    title: "The Best Kitchen Scales for Precision Baking",
    excerpt: "Consistent results start with weight. These scales are the most accurate for home bakers and professionals alike.",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?auto=format&fit=crop&q=80&w=600",
    category: "Kitchen",
    author: { name: "Anwise Team" },
    date: "Oct 18, 2023",
    readTime: "7 min read",
    slug: "best-kitchen-scales-2023",
  },
  {
    id: "guide-3",
    title: "Smartphone Guide: The Best Choice for Every Budget",
    excerpt: "From premium flagships to the best budget alternatives, here is what we recommend right now for your next upgrade.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
    category: "Tech",
    author: { name: "Anwise Team" },
    date: "Oct 15, 2023",
    readTime: "10 min read",
    slug: "smartphone-buying-guide-2023",
  },
];
