"use client"

import Link from "next/link"
import { SafeImage } from "@/components/ui/safe-image"
import { useTrendingArticles } from "@/hooks/use-articles"
import { NewsletterSignup } from "@/components/newsletter-signup"

export function TrendingSidebar() {
  const { data: articles = [], isLoading } = useTrendingArticles()

  return (
    <aside className="space-y-12">
      <section className="space-y-6">
        <h2 className="text-xl font-black text-gray-900 border-b pb-4">Trending Now</h2>

        <div className="space-y-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="flex gap-4 animate-pulse">
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-gray-200" />
                <div className="flex-1 space-y-2 py-2">
                  <div className="h-4 w-full rounded bg-gray-200" />
                  <div className="h-3 w-2/3 rounded bg-gray-200" />
                </div>
              </div>
            ))
          ) : (
            articles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="flex gap-4 group"
              >
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <SafeImage
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-center gap-1">
                  <h3 className="text-sm font-bold leading-snug text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="font-medium text-blue-600 uppercase tracking-tighter text-[10px]">{article.category}</span>
                    <span className="opacity-30">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>

      <NewsletterSignup />
    </aside>
  )
}
