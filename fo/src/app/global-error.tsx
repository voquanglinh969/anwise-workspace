"use client"

import { Inter, Outfit, Bricolage_Grotesque } from "next/font/google"
import { AlertCircle } from "lucide-react"
import { StatusState } from "@/components/ui/status-state"
import "@/app/globals.css"

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
})

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-gray-50 flex flex-col`}>
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[100vh]">
          <StatusState
            title="Critical System Error"
            description="Our app encountered a critical error. We apologize for the inconvenience. Our technical team is working on a fix."
            icon={AlertCircle}
            action={{
              label: "Reload Application",
              onClick: reset
            }}
            secondaryAction={{
              label: "Back to Home",
              href: "/"
            }}
          />
        </div>
      </body>
    </html>
  )
}
