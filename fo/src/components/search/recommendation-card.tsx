import Image from "next/image"
import { SearchRecommendation } from "@/types/search"
import { Star } from "lucide-react"

interface RecommendationCardProps {
  recommendation: SearchRecommendation
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const badgeColors = {
    "editors-choice": "bg-blue-600 text-white",
    "productivity": "bg-gray-900 text-white",
    "gaming": "bg-black text-white",
  }

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-blue-100 transition-all duration-300">
      {/* Image & Badge */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={recommendation.image}
          alt={recommendation.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {recommendation.badge && (
          <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-wider ${badgeColors[recommendation.badgeType || "editors-choice"]}`}>
            {recommendation.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {recommendation.name}
          </h3>
          <div className="flex items-center gap-1 text-sm font-bold text-gray-900">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {recommendation.rating}
          </div>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {recommendation.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-black text-gray-900">
            ${recommendation.price.toFixed(2)}
          </span>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
            {recommendation.releasedDate}
          </span>
        </div>
      </div>
    </div>
  )
}
