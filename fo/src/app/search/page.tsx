"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { SearchHeader } from "@/components/search/search-header"
import { FilterBar } from "@/components/search/filter-bar"
import { RecommendationCard } from "@/components/search/recommendation-card"
import { HorizontalArticleCard } from "@/components/horizontal-article-card"
import { SearchSidebar } from "@/components/search/search-sidebar"
import { useSearch } from "@/hooks/use-search"
import { SearchTabType } from "@/types/search"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || "Mechanical Keyboards"
  const [activeTab, setActiveTab] = useState<SearchTabType>("all")
  
  const { data, isLoading } = useSearch(query)

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-12 flex items-center justify-center min-vh-50">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-sm font-bold text-gray-500">Searching for results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header & Breadcrumbs */}
      <SearchHeader query={query} totalResults={data?.stats.total || 0} />

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Content Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Tabs */}
          <FilterBar 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            stats={data?.stats || { products: 0, editorial: 0, guides: 0 }} 
          />

          {/* Top Recommendations */}
          <section className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-gray-900 tracking-tight">
                Our Top Product Recommendations
              </h2>
              <button className="text-xs font-bold text-blue-600 hover:underline">
                View all keyboards
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data?.recommendations.map((rec) => (
                <RecommendationCard key={rec.id} recommendation={rec} />
              ))}
            </div>
          </section>

          {/* Editorial & Guides */}
          <section className="space-y-8">
            <h2 className="text-xl font-black text-gray-900 tracking-tight border-l-4 border-blue-600 pl-4 py-1">
              Editorial & Guides
            </h2>
            <div className="space-y-10">
              {data?.articles.map((article) => (
                <HorizontalArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load More */}
            <div className="pt-8 flex justify-center">
              <button className="px-10 py-3.5 border-2 border-blue-600/10 text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-all text-sm">
                Load More Articles
              </button>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4">
          <SearchSidebar />
        </div>
      </div>
    </div>
  )
}
