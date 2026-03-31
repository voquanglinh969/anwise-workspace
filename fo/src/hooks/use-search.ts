"use client"

import { useQuery } from "@tanstack/react-query";
import { 
  SEARCH_RECOMMENDATIONS, 
  SEARCH_EDITORIAL_RESULTS, 
  RELATED_CATEGORIES, 
  TRENDING_REVIEWS 
} from "@/data/search-data";
import { SearchResult } from "@/types/search";
import { delay } from "@/services/api-client";

export function useSearch(query: string) {
  return useQuery<SearchResult>({
    queryKey: ["search", query],
    queryFn: async () => {
      await delay(1200); // Simulate network latency
      
      return {
        products: [], // Generic results if needed
        articles: SEARCH_EDITORIAL_RESULTS,
        recommendations: SEARCH_RECOMMENDATIONS,
        stats: {
          total: 128,
          products: 42,
          editorial: 28,
          guides: 12,
        },
      };
    },
    enabled: !!query,
  });
}

export function useSearchSidebar() {
  return useQuery({
    queryKey: ["search-sidebar"],
    queryFn: async () => {
      await delay(800);
      return {
        relatedCategories: RELATED_CATEGORIES,
        trendingReviews: TRENDING_REVIEWS,
      };
    },
  });
}
