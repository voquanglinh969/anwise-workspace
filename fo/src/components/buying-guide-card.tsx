import Link from "next/link";
import { SafeImage } from "@/components/ui/safe-image";
import { Article } from "@/types/article";

interface BuyingGuideCardProps {
  article: Article;
}

export function BuyingGuideCard({ article }: BuyingGuideCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 group cursor-pointer transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col flex-1 p-6 space-y-3">
        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {article.category}
        </span>
        
        <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="pt-4 mt-auto flex items-center justify-between border-t border-gray-50">
          <span className="text-xs text-gray-400 font-medium">
            {article.date}
          </span>
          <Link 
            href={`/guides/${article.id}`}
            className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline"
          >
            Read Post
          </Link>
        </div>
      </div>
    </div>
  );
}
