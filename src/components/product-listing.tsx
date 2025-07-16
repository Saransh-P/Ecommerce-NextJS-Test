"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import ProductCard from "./product-card"
import ProductFilters from "./product-filters"
import { products } from "@/lib/products-data"
import type { Product } from "@/lib/types"

// Main product listing component with filtering and search
export default function ProductListing() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [searchQuery, setSearchQuery] = useState("")

  // Get unique categories from products
  const categories = useMemo(() => {
    const categorySet = new Set(products.map((product) => product.category))
    return Array.from(categorySet)
  }, [])

  // Get max price from products
  const maxPrice = useMemo(() => {
    return Math.max(...products.map((product) => product.price))
  }, [])

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category") || "All"
    const minPrice = parseInt(searchParams.get("minPrice") || "0")
    const maxPriceParam = searchParams.get("maxPrice")
    const search = searchParams.get("search") || ""

    setSelectedCategory(category)
    setPriceRange([
      minPrice,
      maxPriceParam ? parseInt(maxPriceParam) : maxPrice,
    ])
    setSearchQuery(search)
  }, [searchParams, maxPrice])

  // Update URL when filters change
  const updateURL = useCallback(
    (category: string, range: [number, number], search: string) => {
      const params = new URLSearchParams()

      if (category !== "All") params.set("category", category)
      if (range[0] !== 0) params.set("minPrice", range[0].toString())
      if (range[1] !== maxPrice) params.set("maxPrice", range[1].toString())
      if (search) params.set("search", search)

      router.push(`/?${params.toString()}`)
    },
    [router, maxPrice]
  )

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by category
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false
      }

      // Filter by price range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false
      }

      // Filter by search query (from header)
      if (
        searchQuery &&
        !product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      return true
    })
  }, [selectedCategory, priceRange, searchQuery])

  // Handle filter changes from sidebar
  const handleFilterChange = useCallback(
    (filters: {
      category: string
      priceRange: [number, number]
    }) => {
      setSelectedCategory(filters.category)
      setPriceRange(filters.priceRange)
      updateURL(filters.category, filters.priceRange, searchQuery)
    },
    [updateURL, searchQuery]
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters sidebar */}
      <div className="lg:col-span-1">
        <ProductFilters
          categories={categories}
          maxPrice={maxPrice}
          onFilterChange={handleFilterChange}
          selectedCategory={selectedCategory}
          priceRange={priceRange as [number, number]}
        />
      </div>

      {/* Product grid */}
      <div className="lg:col-span-3">
        {/* Results count */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Products</h1>
          <p className="text-blue-900">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Featured product (first product) */}
        {filteredProducts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Featured Product</h2>
            <ProductCard product={filteredProducts[0]} featured={true} />
          </div>
        )}

        {/* Product grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-900">All Products</h2>
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-lg font-semibold mb-2 text-blue-900">No products found</h3>
              <p className="text-blue-700">
                Try adjusting your filters or search query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}