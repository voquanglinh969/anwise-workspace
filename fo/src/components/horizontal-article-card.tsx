import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import { Article } from "@/types/article"

interface HorizontalArticleCardProps {
  article: Article
}

export function HorizontalArticleCard({ article }: HorizontalArticleCardProps) {
  return (
    <Link href={`/article/${article.slug}`} className="group block">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Image */}
        <div className="relative aspect-[16/10] md:w-1/3 w-full rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
          <SafeImage
            src={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3 py-1">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
              {article.category}
            </span>
            <span className="text-xs text-gray-400 font-medium">{article.readTime}</span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
            {article.title}
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-1">
            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-black text-blue-600 uppercase">
              {article.author.name.charAt(0)}
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="font-bold text-gray-900">By {article.author.name}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-400">{article.date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
