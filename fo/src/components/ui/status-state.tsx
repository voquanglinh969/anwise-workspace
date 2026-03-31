"use client"

import * as React from "react"
import Link from "next/link"
import { LucideIcon, Home, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface StatusStateProps {
  title: string
  description?: string
  icon?: LucideIcon
  action?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryAction?: {
    label: string
    href: string
  }
  className?: string
}

export function StatusState({
  title,
  description,
  icon: Icon,
  action,
  secondaryAction,
  className,
}: StatusStateProps) {
  return (
    <div className={cn("flex min-h-[400px] flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500", className)}>
      <div className="relative mb-8">
        <div className="absolute inset-0 -z-10 animate-pulse bg-blue-100/50 blur-3xl rounded-full" />
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-xl border border-gray-100">
          {Icon ? (
            <Icon className="h-10 w-10 text-blue-600" />
          ) : (
            <div className="h-10 w-10 rounded bg-blue-600" />
          )}
        </div>
      </div>

      <div className="max-w-md space-y-3">
        <h2 className="text-3xl font-black tracking-tight text-gray-900 font-heading">
          {title}
        </h2>
        {description && (
          <p className="text-gray-500 leading-relaxed text-lg">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
        {action && (
          action.href ? (
            <Link href={action.href} className={buttonVariants({ size: "lg", className: "bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-200 border-none" })}>
              {action.label}
            </Link>
          ) : (
            <button
              onClick={action.onClick}
              className={buttonVariants({ size: "lg", className: "bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-blue-200 border-none" })}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              {action.label}
            </button>
          )
        )}
        
        {secondaryAction && (
          <Link href={secondaryAction.href} className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-8 rounded-xl border-gray-200 font-bold hover:bg-gray-50 transition-all" })}>
            <Home className="mr-2 h-4 w-4" />
            {secondaryAction.label}
          </Link>
        )}
      </div>
    </div>
  )
}
