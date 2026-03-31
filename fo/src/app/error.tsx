"use client"

import { useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { StatusState } from "@/components/ui/status-state"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[70vh]">
      <StatusState
        title="Something Went Wrong"
        description="We've encountered an unexpected error. Don't worry, our team has been notified. Let's try to reload the page or head back home."
        icon={AlertCircle}
        action={{
          label: "Try Again",
          onClick: reset
        }}
        secondaryAction={{
          label: "Back to Home",
          href: "/"
        }}
      />
    </div>
  )
}
