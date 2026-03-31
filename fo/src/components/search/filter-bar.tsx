"use client"

import { SearchTabType } from "@/types/search"

interface FilterBarProps {
  activeTab: SearchTabType
  onTabChange: (tab: SearchTabType) => void
  stats: {
    products: number
    editorial: number
    guides: number
  }
}

export function FilterBar({ activeTab, onTabChange, stats }: FilterBarProps) {
  const tabs = [
    { id: "all", label: "All Results", count: stats.products + stats.editorial + stats.guides },
    { id: "products", label: "Products", count: stats.products },
    { id: "editorial", label: "Editorial Reviews", count: stats.editorial },
    { id: "guides", label: "Buying Guides", count: stats.guides },
  ] as const

  return (
    <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as SearchTabType)}
            className={`px-6 py-4 text-sm font-black transition-all border-b-2 whitespace-nowrap
              ${isActive 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-400 hover:text-gray-900"}`}
          >
            {tab.label}
            {tab.count > 0 && <span className="ml-2 font-bold opacity-60">({tab.count})</span>}
          </button>
        )
      })}
    </div>
  )
}
