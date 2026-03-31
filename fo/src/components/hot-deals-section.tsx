"use client"

import Link from "next/link"
import { Flame } from "lucide-react"
import { useHotDeals } from "@/hooks/use-products"
import { DealCard } from "./deal-card"

export function HotDealsSection() {
  const { data: deals = [], isLoading } = useHotDeals()

  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-[#ef4444]">
            <Flame className="h-6 w-6 fill-current" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-gray-900">
            Hot Deals / Price Drops
          </h2>
        </div>
        <Link 
          href="/deals"
          className="text-sm font-bold text-[#ef4444] hover:underline flex items-center gap-1.5 transition-all"
        >
          View All Deals <span className="text-lg">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {isLoading ? (
          Array(6).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col h-[320px] bg-white rounded-2xl border border-gray-100 animate-pulse">
              <div className="p-3">
                <div className="aspect-square w-full rounded-xl bg-gray-100" />
              </div>
              <div className="px-4 pb-4 space-y-3">
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="h-6 w-24 rounded bg-gray-100" />
                <div className="h-2 w-16 rounded bg-gray-100" />
              </div>
            </div>
          ))
        ) : (
          deals.map((deal) => (
            <DealCard key={deal.id} product={deal} />
          ))
        )}
      </div>
    </section>
  )
}
