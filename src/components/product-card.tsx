"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export default function ProductCard({ product, featured = false }: ProductCardProps) {
  const { addItem } = useCart()
  const [imageError, setImageError] = useState(false)

  // Handle add to cart button click
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation when clicking add to cart
    addItem(product)
  }

  // Handle image error
  const handleImageError = () => {
    setImageError(true)
  }

  // Get image source with fallback
  const imageSrc = imageError ? "/images/placeholder.jpg" : product.image

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  // Featured product card (larger version)
  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link href={`/product/${product.id}`}>
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src={imageSrc}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:opacity-90 transition-opacity"
                onError={handleImageError}
                priority
              />
            </div>
          </Link>
          <div className="p-6">
            <div className="mb-2 text-sm text-blue-600 font-semibold uppercase tracking-wide">
              {product.category}
            </div>
            <Link href={`/product/${product.id}`}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                {product.title}
              </h2>
            </Link>
            <div className="flex items-center mb-3">{renderStars(product.rating)}</div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <button
                onClick={handleAddToCart}
                className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Regular product card
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={imageSrc}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-cover hover:opacity-90 transition-opacity"
            onError={handleImageError}
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">{product.title}</h3>
        </Link>
        <div className="flex items-center mb-2">{renderStars(product.rating)}</div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}