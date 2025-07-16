"use client"

import { useState } from "react"
import { Sliders, X } from "lucide-react"

interface ProductFiltersProps {
  categories: string[]
  maxPrice: number
  onFilterChange: (filters: {
    category: string
    priceRange: [number, number]
  }) => void
  selectedCategory: string
  priceRange: [number, number]
}

export default function ProductFilters({
  categories,
  maxPrice,
  onFilterChange,
  selectedCategory,
  priceRange,
}: ProductFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Handle category change - automatically apply filter
  const handleCategoryChange = (category: string) => {
    onFilterChange({
      category,
      priceRange,
    })
  }

  // Handle price range change
  const handlePriceChange = (index: number, value: number) => {
    const newRange = [...priceRange] as [number, number]
    newRange[index] = value
    
    // Ensure min doesn't exceed max and vice versa
    if (index === 0 && value > priceRange[1]) {
      newRange[1] = value
    }
    if (index === 1 && value < priceRange[0]) {
      newRange[0] = value
    }
    
    onFilterChange({
      category: selectedCategory,
      priceRange: newRange,
    })
  }

  // Reset all filters
  const resetFilters = () => {
    onFilterChange({
      category: "All",
      priceRange: [0, maxPrice],
    })
  }

  return (
    <div className="mb-8">
      {/* Mobile filter toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center justify-center w-full bg-white p-3 rounded-lg shadow text-blue-900"
        >
          <Sliders className="w-5 h-5 mr-2" />
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filter container */}
      <div className={`bg-white rounded-lg shadow-md p-4 md:p-6 ${isFilterOpen ? "block" : "hidden md:block"}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-900">Filters</h2>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
          >
            <X className="w-4 h-4 mr-1" />
            Reset
          </button>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-3 text-blue-900">Categories</h3>
          <div className="space-y-2">
            {["All", ...categories].map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="radio"
                  id={category}
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor={category} className="cursor-pointer text-blue-900 hover:text-blue-700">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-3 text-blue-900">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-blue-900">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
            
            {/* Dual Range Slider */}
            <div className="relative">
              <div className="relative h-2 bg-gray-200 rounded-lg">
                {/* Track highlight */}
                <div 
                  className="absolute h-2 bg-blue-600 rounded-lg"
                  style={{
                    left: `${(priceRange[0] / maxPrice) * 100}%`,
                    width: `${((priceRange[1] - priceRange[0]) / maxPrice) * 100}%`
                  }}
                />
                
                {/* Min range slider */}
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
                
                {/* Max range slider */}
                <input
                  type="range"
                  min={0}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                  className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                />
              </div>
            </div>
            
            {/* Manual input fields */}
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-xs text-blue-900 mb-1">Min Price</label>
                <input
                  type="number"
                  min={0}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => handlePriceChange(0, parseInt(e.target.value) || 0)}
                  className="w-full p-2 border border-gray-300 rounded text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-blue-900 mb-1">Max Price</label>
                <input
                  type="number"
                  min={0}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(1, parseInt(e.target.value) || maxPrice)}
                  className="w-full p-2 border border-gray-300 rounded text-blue-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}