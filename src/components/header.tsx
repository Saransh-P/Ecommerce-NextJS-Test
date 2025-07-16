"use client"

import type React from "react"
import { Search, ShoppingCart, User } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const { items } = useCart()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const query = searchParams.get("search") || ""
    setSearchQuery(query)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())

    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim())
    } else {
      params.delete("search")
    }

    router.push(`/?${params.toString()}`)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
              Logo
            </h1>
          </div>

          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 text-gray-900 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="relative p-2 hover:bg-blue-700 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}