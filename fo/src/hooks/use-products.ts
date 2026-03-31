import { productService } from "@/services/product-service";
import { useQuery } from "@tanstack/react-query";

export const useFeaturedProducts = () => {
  return useQuery({
    queryKey: ["featured-products"],
    queryFn: () => productService.getFeaturedProducts(),
  });
};

export const useTopPicks = () => {
  return useQuery({
    queryKey: ["top-picks"],
    queryFn: () => productService.getTopPicks(),
  });
};

export const useHotDeals = () => {
  return useQuery({
    queryKey: ["hot-deals"],
    queryFn: () => productService.getHotDeals(),
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  });
};
