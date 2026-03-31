import { SafeImage } from "@/components/ui/safe-image";
import { Product } from "@/types/product";

interface TopPickCardProps {
  product: Product;
}

export function TopPickCard({ product }: TopPickCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 group cursor-pointer transition-all hover:bg-white/10 hover:border-white/20">
      <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-3">
        {product.category}
      </span>
      
      <h3 className="text-lg font-bold text-white mb-6 leading-tight group-hover:text-blue-300 transition-colors">
        {product.name}
      </h3>
      
      <div className="relative aspect-square w-full max-w-[160px] mb-6 overflow-hidden rounded-xl bg-white/5">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover p-2 transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}
