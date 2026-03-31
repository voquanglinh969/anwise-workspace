import { SafeImage } from "@/components/ui/safe-image";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";

interface DealCardProps {
  product: Product;
}

export function DealCard({ product }: DealCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer transition-all hover:shadow-md relative">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-3 right-3 z-10 bg-[#ef4444] text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-sm">
          -{product.discount}%
        </div>
      )}
      
      {/* Image Container */}
      <div className="p-3">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
          <SafeImage
            src={product.image}
            alt={product.name}
            fill
            className="object-cover p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="flex flex-col flex-1 px-4 pb-4 space-y-2">
        <h3 className="text-[13px] font-bold text-gray-900 leading-snug line-clamp-2 h-9 group-hover:text-[#ef4444] transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-black text-[#ef4444]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through font-medium">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        <div className="pt-2 mt-auto flex items-center justify-between border-t border-gray-50">
          <span className="text-[10px] font-bold text-gray-400 tracking-wider">
            {product.platform}
          </span>
          <button className="text-gray-300 hover:text-[#ef4444] transition-colors">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
