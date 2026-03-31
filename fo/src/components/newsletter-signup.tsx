"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  return (
    <div className="rounded-2xl bg-blue-50/50 p-8 space-y-4 border border-blue-100">
      <div className="space-y-2">
        <h3 className="text-xl font-black text-gray-900">Weekly Digest</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Get our most rigorously tested recommendations delivered every Saturday.
        </p>
      </div>
      
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <Input
          type="email"
          placeholder="email@example.com"
          className="bg-white border-blue-100 focus-visible:ring-blue-600 h-12"
        />
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-xl transition-all active:scale-[0.98]">
          Sign Up
        </Button>
      </form>
    </div>
  )
}
