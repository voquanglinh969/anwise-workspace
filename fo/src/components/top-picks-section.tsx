"use client"

import { Star } from "lucide-react"
import { useTopPicks } from "@/hooks/use-products"
import { TopPickCard } from "./top-pick-card"

export function TopPicksSection() {
  const { data: topPicks = [], isLoading } = useTopPicks()

  return (
    <section className="mt-24 rounded-3xl bg-[#020617] p-8 md:p-12 border border-slate-800/50">
      <div className="flex items-center gap-3 mb-12">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
          <Star className="h-6 w-6 fill-current" />
        </div>
        <h2 className="text-3xl font-black tracking-tight text-white">
          Top Picks This Week
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-2xl bg-white/5 border border-white/10 animate-pulse">
              <div className="h-2 w-24 rounded bg-white/10 mb-4" />
              <div className="h-6 w-full rounded bg-white/10 mb-6" />
              <div className="aspect-square w-full max-w-[140px] rounded bg-white/10 mb-6" />
              <div className="h-16 w-full rounded bg-white/10" />
            </div>
          ))
        ) : (
          topPicks.map((pick) => (
            <TopPickCard key={pick.id} product={pick} />
          ))
        )}
      </div>
    </section>
  )
}
