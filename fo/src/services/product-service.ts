import { FEATURED_PRODUCTS, TOP_PICKS_DATA, HOT_DEALS_DATA } from "@/data/product-data";
import { Product } from "@/types/product";
import { delay } from "./api-client";

export const productService = {
  getFeaturedProducts: async (): Promise<Product[]> => {
    await delay(1200); // Simulate network latency
    return FEATURED_PRODUCTS;
  },

  getTopPicks: async (): Promise<Product[]> => {
    await delay(1000); // Simulate network latency
    return TOP_PICKS_DATA;
  },

  getHotDeals: async (): Promise<Product[]> => {
    await delay(800); // Simulate network latency
    return HOT_DEALS_DATA;
  },

  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(600); // Simulate network latency
    return FEATURED_PRODUCTS.find((p) => p.id === id);
  },
};
