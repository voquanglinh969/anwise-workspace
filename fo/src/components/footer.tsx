"use client"

import Link from "next/link"
import { Monitor, Camera, Gamepad2, Mail } from "lucide-react"
import { useFooterNavigation } from "@/hooks/use-navigation"

export function Footer() {
  const { data: footerColumns = [] } = useFooterNavigation()

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          {/* Logo & About */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-10 w-10 bg-blue-600 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-white stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-gray-900 tracking-tighter">
                Anwise
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              We independently test and review products to help you make the best purchase decisions. 
              Our writers are experts in their fields, and we buy the products ourselves.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerColumns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="text-sm font-black text-gray-900 tracking-wide uppercase">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <Link 
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social Icons */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-gray-900 tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                <Monitor className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-pink-600 hover:text-white transition-all">
                <Camera className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-red-600 hover:text-white transition-all">
                <Gamepad2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-blue-800 hover:text-white transition-all">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400">
            © 2023 ReviewPoint Platform. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-gray-400">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
