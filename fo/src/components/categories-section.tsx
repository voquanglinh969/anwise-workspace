"use client"

import Link from "next/link"
import * as Icons from "lucide-react"
import { usePopularCategories } from "@/hooks/use-navigation"

const ICON_MAP: Record<string, Icons.LucideIcon> = {
  Monitor: Icons.Monitor,
  Headphones: Icons.Headphones,
  Home: Icons.Home,
  Soup: Icons.Soup,
  Camera: Icons.Camera,
  Smartphone: Icons.Smartphone,
  Activity: Icons.Activity,
  Gamepad2: Icons.Gamepad2,
}

export function CategoriesSection() {
  const { data: categories = [], isLoading } = usePopularCategories()

  return (
    <section className="mt-24 mb-32">
      <h2 className="text-3xl font-black tracking-tight text-gray-900 mb-12">
        Popular Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
        {isLoading ? (
          Array(8).fill(0).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-4 animate-pulse">
              <div className="h-20 w-20 rounded-full bg-gray-100" />
              <div className="h-3 w-16 rounded bg-gray-100" />
            </div>
          ))
        ) : (
          categories.map((category) => {
            const IconComponent = ICON_MAP[category.iconName] || Icons.HelpCircle
            
            return (
              <Link 
                key={category.id} 
                href={category.href}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="h-20 w-20 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors uppercase tracking-wider">
                  {category.label}
                </span>
              </Link>
            )
          })
        )}
      </div>
    </section>
  )
}
