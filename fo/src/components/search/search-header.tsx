import { ChevronRight, SlidersHorizontal, ChevronDown } from "lucide-react"
import Link from "next/link"

interface SearchHeaderProps {
  query: string
  totalResults: number
}

export function SearchHeader({ query, totalResults }: SearchHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-gray-900">Search</span>
      </nav>

      {/* Main Title & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Search results for <span className="text-blue-600">&apos;{query}&apos;</span>
          </h1>
          <p className="text-sm font-medium text-gray-500">
            {totalResults} relevant results found across products and editorial
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-900 hover:border-blue-100 hover:shadow-sm transition-all">
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-900 hover:border-blue-100 hover:shadow-sm transition-all">
            <span>Sort: Relevance</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
