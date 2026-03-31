"use client"

import * as React from "react"
import NextImage, { ImageProps } from "next/image"
import { LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackClassName?: string
}

export function SafeImage({ src, alt, className, fallbackClassName, ...props }: SafeImageProps) {
  const [error, setError] = React.useState(false)

  // Use a ref to track if the current src has already been tried and failed
  // to avoid infinite loops if the fallback itself was somehow problematic 
  // (though here the fallback is a div, not an image)
  
  const handleImageError = () => {
    setError(true)
  }

  // Reset error state if src changes
  React.useEffect(() => {
    setError(false)
  }, [src])

  if (error || !src) {
    return (
      <div 
        className={cn(
          "flex h-full w-full flex-col items-center justify-center bg-gray-50",
          className,
          fallbackClassName
        )}
      >
        <div className="flex flex-col items-center justify-center opacity-20 transform scale-75 md:scale-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white mb-2 shadow-sm">
            <LayoutGrid className="h-7 w-7" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-gray-900">Anwise</span>
        </div>
      </div>
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      onError={handleImageError}
      {...props}
    />
  )
}
