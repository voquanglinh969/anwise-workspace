"use client"

import * as React from "react"
import Link from "next/link"
import { LayoutGrid, Search, ChevronDown, CircleUser } from "lucide-react"

import { useRouter } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import { useMainNav, useNavCategories } from "@/hooks/use-navigation"

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = React.useState("")
  
  const { data: mainNav = [] } = useMainNav()
  const { data: categories = [], isLoading: isCategoriesLoading } = useNavCategories()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900 font-heading">Anwise</span>
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600 font-heading"
            >
              {item.label}
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-gray-600 transition-colors hover:text-blue-600 focus:outline-none font-heading">
              Categories <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="center" 
              className="w-[calc(100vw-2rem)] max-w-5xl p-6 shadow-xl border-gray-100"
            >
              {isCategoriesLoading ? (
                <div className="flex h-40 items-center justify-center">
                  <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-8">
                  {categories.map((category) => (
                    <div key={category.id} className="space-y-4">
                      <h4 className="text-sm font-black text-gray-900 border-b pb-2 uppercase tracking-widest font-heading">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className="text-sm text-gray-600 hover:text-blue-600">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <p className="text-xs text-gray-500 italic">Latest updates: March 2026</p>
                <Link href="/categories" className="text-xs font-bold text-blue-600 hover:underline">View All Categories →</Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        {/* Search & Profile */}
        <div className="flex items-center gap-4">
          <form 
            onSubmit={handleSearch}
            className="relative hidden sm:block w-64 lg:w-80"
          >
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech..."
              className="w-full bg-gray-50 pl-9 border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-gray-100 transition-colors"
            />
          </form>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-100">
            <CircleUser className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
