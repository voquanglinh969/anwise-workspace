import { MAIN_NAV_ITEMS, NAV_CATEGORIES, POPULAR_CATEGORIES, FOOTER_COLUMNS } from "@/data/nav-data";
import { MainNavItem, NavCategory, CategoryWithIcon, FooterColumn } from "@/types/navigation";
import { delay } from "./api-client";

export const navService = {
  getMainNav: async (): Promise<MainNavItem[]> => {
    await delay(500); // Simulate network latency
    return MAIN_NAV_ITEMS;
  },

  getCategories: async (): Promise<NavCategory[]> => {
    await delay(800); // Simulate network latency
    return NAV_CATEGORIES;
  },

  getPopularCategories: async (): Promise<CategoryWithIcon[]> => {
    await delay(600); // Simulate network latency
    return POPULAR_CATEGORIES;
  },

  getFooterNavigation: async (): Promise<FooterColumn[]> => {
    await delay(1000); // Simulate network latency
    return FOOTER_COLUMNS;
  },
};
