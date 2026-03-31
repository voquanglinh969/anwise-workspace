import { HeroArticle } from "@/components/hero-article"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { BuyingGuidesSection } from "@/components/buying-guides-section"
import { TopPicksSection } from "@/components/top-picks-section"
import { HotDealsSection } from "@/components/hot-deals-section"
import { CategoriesSection } from "@/components/categories-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Section: Hero + Trending Sidebar */}
        <div className="lg:col-span-8">
          <HeroArticle />
        </div>

        <div className="lg:col-span-4">
          <TrendingSidebar />
        </div>
      </div>

      {/* Expert Buying Guides Section */}
      <BuyingGuidesSection />

      {/* Top Picks Section - Dark Theme */}
      <TopPicksSection />

      {/* Hot Deals / Price Drops Section */}
      <HotDealsSection />

      {/* Popular Categories Section */}
      <CategoriesSection />

    </div>
  )
}
