"use client"

import { FileSearch } from "lucide-react"
import { StatusState } from "@/components/ui/status-state"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[70vh]">
      <StatusState
        title="Oops! Page Not Found"
        description="The page you are looking for doesn't exist or has been moved to another URL. Let's get you back on track."
        icon={FileSearch}
        action={{
          label: "Browse Latest Deals",
          href: "/"
        }}
        secondaryAction={{
          label: "Back to Home",
          href: "/"
        }}
      />
    </div>
  )
}
