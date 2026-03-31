import { navService } from "@/services/nav-service";
import { useQuery } from "@tanstack/react-query";

export const useMainNav = () => {
  return useQuery({
    queryKey: ["main-nav"],
    queryFn: () => navService.getMainNav(),
  });
};

export const useNavCategories = () => {
  return useQuery({
    queryKey: ["nav-categories"],
    queryFn: () => navService.getCategories(),
  });
};

export const usePopularCategories = () => {
  return useQuery({
    queryKey: ["popular-categories"],
    queryFn: () => navService.getPopularCategories(),
  });
};

export const useFooterNavigation = () => {
  return useQuery({
    queryKey: ["footer-navigation"],
    queryFn: () => navService.getFooterNavigation(),
  });
};
