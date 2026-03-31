"use client"

import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import { useFeaturedArticle } from "@/hooks/use-articles"
import { Badge } from "@/components/ui/badge"

export function HeroArticle() {
  const { data: article, isLoading } = useFeaturedArticle()

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="aspect-[16/9] w-full rounded-2xl bg-gray-200" />
        <div className="space-y-4">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-10 w-full rounded bg-gray-200" />
          <div className="h-20 w-full rounded bg-gray-200" />
        </div>
      </div>
    )
  }

  if (!article) return null

  return (
    <Link href={`/article/${article.slug}`} className="block group">
      <article className="space-y-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-sm bg-gray-100">
          <SafeImage
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {article.badge && (
            <div className="absolute left-6 top-6">
              <Badge variant="choice" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl">
                {article.badge}
              </Badge>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] group-hover:text-blue-600 transition-colors">
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl line-clamp-3">
            {article.excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
            <span>By <span className="text-gray-900 font-bold">{article.author.name}</span></span>
            <span className="opacity-30">•</span>
            <span>Updated {article.date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
