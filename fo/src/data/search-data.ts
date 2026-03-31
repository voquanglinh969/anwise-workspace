import { SearchRecommendation, TrendingReview } from "@/types/search";
import { Article } from "@/types/article";
import { NavItem } from "@/types/navigation";

export const SEARCH_RECOMMENDATIONS: SearchRecommendation[] = [
  {
    id: "r1",
    name: "Keychron Q1 Pro",
    price: 199.00,
    rating: 4.9,
    reviewsCount: 128,
    image: "https://images.unsplash.com/photo-1626958011223-4355e10be69b?auto=format&fit=crop&q=80&w=800",
    description: "The ultimate balance of build quality, features, and wireless connectivity for enthusiasts.",
    badge: "Editor's Choice",
    badgeType: "editors-choice",
    releasedDate: "Released May 2023",
    category: "Keyboards",
  },
  {
    id: "r2",
    name: "Logitech MX Mechanical",
    price: 169.99,
    rating: 4.7,
    reviewsCount: 85,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    description: "A low-profile tactile typing experience designed specifically for professional workflows.",
    badge: "Best for Productivity",
    badgeType: "productivity",
    releasedDate: "Released Oct 2022",
    category: "Keyboards",
  },
  {
    id: "r3",
    name: "Razer Huntsman V3 Pro",
    price: 249.99,
    rating: 4.8,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
    description: "Analog optical switches provide unparalleled precision for competitive gaming.",
    badge: "Best for Gaming",
    badgeType: "gaming",
    releasedDate: "Released Nov 2023",
    category: "Keyboards",
  },
];

export const SEARCH_EDITORIAL_RESULTS: Article[] = [
  {
    id: "e1",
    title: "How to Choose Your First Mechanical Keyboard in 2024",
    excerpt: "Everything you need to know about switches, layouts, and keycaps before making your first major purchase.",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
    category: "Buying Guide",
    readTime: "15 min read",
    author: { name: "Marcus Thorne" },
    date: "Feb 12, 2024",
    slug: "choose-mechanical-keyboard",
  },
  {
    id: "e2",
    title: "The Rise of Gasket Mounts: Why Enthusiasts Are Obsessed",
    excerpt: "We explore the acoustics and feel of gasket-mounted keyboards and why they've become the gold standard.",
    image: "https://images.unsplash.com/photo-1595225396526-0cd9358277d5?auto=format&fit=crop&q=80&w=800",
    category: "Deep Dive",
    readTime: "12 min read",
    author: { name: "Elena Vance" },
    date: "Jan 28, 2024",
    slug: "gasket-mounts-deep-dive",
  },
  {
    id: "e3",
    title: "Mode Envoy Review: 65% Perfection?",
    excerpt: "Mode's latest entry-level enthusiast board promises high-end customization at a mid-range price point.",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=800",
    category: "Review",
    readTime: "8 min read",
    author: { name: "Marcus Thorne" },
    date: "Jan 15, 2024",
    slug: "mode-envoy-review",
  },
];

export const RELATED_CATEGORIES: NavItem[] = [
  { label: "Keycaps", href: "/categories/keycaps" },
  { label: "Switches", href: "/categories/switches" },
  { label: "Custom Builds", href: "/categories/custom-builds" },
  { label: "Gaming Mice", href: "/categories/mice" },
  { label: "Desk Mats", href: "/categories/desk-mats" },
  { label: "Ergonomic Gear", href: "/categories/ergonomic" },
];

export const TRENDING_REVIEWS: TrendingReview[] = [
  {
    id: "t1",
    title: "Alienware AW3423DWF OLED",
    category: "Monitor Review",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=200",
    href: "/reviews/alienware-oled",
  },
  {
    id: "t2",
    title: "iPad Pro M2 (2024) Deep Dive",
    category: "Tablet Review",
    imageUrl: "https://images.unsplash.com/photo-1544244015-0cd4b3ff2091?auto=format&fit=crop&q=80&w=200",
    href: "/reviews/ipad-pro-m2",
  },
  {
    id: "t3",
    title: "Sennheiser HD 660S2",
    category: "Audio Review",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200",
    href: "/reviews/sennheiser-660s2",
  },
];
