"use client"

import Link from "next/link"
import { useBuyingGuides } from "@/hooks/use-articles"
import { BuyingGuideCard } from "./buying-guide-card"

export function BuyingGuidesSection() {
  const { data: guides = [], isLoading } = useBuyingGuides()

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
        <h2 className="text-3xl font-black tracking-tight text-gray-900">
          Expert Buying Guides
        </h2>
        <Link 
          href="/guides"
          className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1.5"
        >
          View All Guides <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          Array(3).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col h-[480px] bg-white rounded-2xl border border-gray-100 animate-pulse">
              <div className="aspect-[4/3] w-full bg-gray-200" />
              <div className="p-6 space-y-4">
                <div className="h-2 w-20 rounded bg-gray-200" />
                <div className="h-8 w-full rounded bg-gray-200" />
                <div className="h-20 w-full rounded bg-gray-200" />
              </div>
            </div>
          ))
        ) : (
          guides.map((guide) => (
            <BuyingGuideCard key={guide.id} article={guide} />
          ))
        )}
      </div>
    </section>
  )
}
