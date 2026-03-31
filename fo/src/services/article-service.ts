import { FEATURED_ARTICLE, TRENDING_ARTICLES, BUYING_GUIDES_DATA } from "@/data/article-data";
import { Article } from "@/types/article";
import { delay } from "./api-client";

export const articleService = {
  getFeaturedArticle: async (): Promise<Article> => {
    await delay(1000); // Simulate network latency
    return FEATURED_ARTICLE;
  },

  getTrendingArticles: async (): Promise<Article[]> => {
    await delay(1500); // Simulate network latency
    return TRENDING_ARTICLES;
  },

  getBuyingGuides: async (): Promise<Article[]> => {
    await delay(1200); // Simulate network latency
    return BUYING_GUIDES_DATA;
  },
};
