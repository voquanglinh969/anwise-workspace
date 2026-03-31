import { articleService } from "@/services/article-service";
import { useQuery } from "@tanstack/react-query";

export const useFeaturedArticle = () => {
  return useQuery({
    queryKey: ["featured-article"],
    queryFn: () => articleService.getFeaturedArticle(),
  });
};

export const useTrendingArticles = () => {
  return useQuery({
    queryKey: ["trending-articles"],
    queryFn: () => articleService.getTrendingArticles(),
  });
};

export const useBuyingGuides = () => {
  return useQuery({
    queryKey: ["buying-guides"],
    queryFn: () => articleService.getBuyingGuides(),
  });
};
