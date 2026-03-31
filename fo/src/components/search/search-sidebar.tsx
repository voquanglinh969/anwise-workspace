"use client"

import Link from "next/link"
import Image from "next/image"
import { useSearchSidebar } from "@/hooks/use-search"

export function SearchSidebar() {
  const { data } = useSearchSidebar()

  return (
    <div className="space-y-12 h-fit">
      {/* Related Categories */}
      <div className="bg-white rounded-2xl border border-gray-50 p-8 space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 border-b pb-4 border-gray-100">
          Related Categories
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {data?.relatedCategories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="px-4 py-2 bg-gray-50 text-[11px] font-black text-gray-500 uppercase tracking-tight rounded-lg hover:bg-blue-600 hover:text-white transition-all border border-transparent hover:border-blue-100"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Reviews */}
      <div className="bg-white rounded-2xl border border-gray-50 p-8 space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-gray-900 border-b pb-4 border-gray-100">
          Trending Reviews
        </h3>
        <div className="space-y-6">
          {data?.trendingReviews.map((review) => (
            <Link key={review.id} href={review.href} className="flex gap-4 group">
              <div className="relative h-14 w-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={review.imageUrl}
                  alt={review.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-1">
                <h4 className="text-[13px] font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-1">
                  {review.title}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  {review.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Blue Theme Newsletter Signup */}
      <div className="bg-blue-600 rounded-2xl p-8 space-y-6 text-white shadow-xl shadow-blue-200">
        <div className="h-12 w-12 bg-blue-500 rounded-xl flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-black">Get the weekly digest</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Our best reviews and tech guides delivered to your inbox every Friday.
          </p>
        </div>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full bg-blue-500 text-white placeholder:text-blue-200 px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-white/20 outline-none text-sm font-medium"
          />
          <button className="w-full bg-white text-blue-600 font-black h-12 rounded-xl hover:bg-white/90 transition-all active:scale-[0.98] text-sm">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
