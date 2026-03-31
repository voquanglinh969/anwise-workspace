import { MainNavItem, NavCategory, CategoryWithIcon, FooterColumn } from "@/types/navigation";

export const MAIN_NAV_ITEMS: MainNavItem[] = [
  { label: "News", href: "/news" },
  { label: "Deals Today", href: "/deals" },
  { label: "Reviews", href: "/reviews" },
];

export const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "smartphones",
    title: "Smartphones",
    items: [
      { label: "iPhones", href: "/iphones" },
      { label: "Samsung Galaxy", href: "/samsung" },
      { label: "Google Pixel", href: "/google-pixel" },
      { label: "Phone Accessories", href: "/accessories" },
    ],
  },
  {
    id: "computing",
    title: "Computing",
    items: [
      { label: "MacBooks", href: "/macbooks" },
      { label: "Windows Laptops", href: "/windows-laptops" },
      { label: "iPads & Tablets", href: "/ipads" },
      { label: "Monitors", href: "/monitors" },
    ],
  },
  {
    id: "wearables",
    title: "Wearables",
    items: [
      { label: "Headphones", href: "/headphones" },
      { label: "True Wireless Earbuds", href: "/earbuds" },
      { label: "Apple Watch", href: "/apple-watch" },
      { label: "Fitness Trackers", href: "/fitness-trackers" },
    ],
  },
  {
    id: "gaming",
    title: "Gaming",
    items: [
      { label: "PlayStation 5", href: "/ps5" },
      { label: "Xbox Series X/S", href: "/xbox" },
      { label: "Nintendo Switch", href: "/switch" },
      { label: "PC Gaming Gear", href: "/pc-gaming" },
    ],
  },
];

export const POPULAR_CATEGORIES: CategoryWithIcon[] = [
  { id: "1", label: "Laptops", iconName: "Monitor", href: "/laptops" },
  { id: "2", label: "Audio", iconName: "Headphones", href: "/audio" },
  { id: "3", label: "Smart Home", iconName: "Home", href: "/smart-home" },
  { id: "4", label: "Kitchen", iconName: "Soup", href: "/kitchen" },
  { id: "5", label: "Cameras", iconName: "Camera", href: "/cameras" },
  { id: "6", label: "Phones", iconName: "Smartphone", href: "/phones" },
  { id: "7", label: "Fitness", iconName: "Activity", href: "/fitness" },
  { id: "8", label: "Gaming", iconName: "Gamepad2", href: "/gaming" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Navigation",
    items: [
      { label: "Reviews", href: "/reviews" },
      { label: "Guides", href: "/guides" },
      { label: "Deals", href: "/deals" },
      { label: "Best Of", href: "/best-of" },
    ],
  },
  {
    title: "Categories",
    items: [
      { label: "Home & Garden", href: "/home-garden" },
      { label: "Kitchen", href: "/kitchen" },
      { label: "Electronics", href: "/electronics" },
      { label: "Wellness", href: "/wellness" },
    ],
  },
  {
    title: "About Us",
    items: [
      { label: "Our Mission", href: "/mission" },
      { label: "The Testing Lab", href: "/testing-lab" },
      { label: "Editorial Team", href: "/editorial" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
