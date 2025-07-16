// Detailed product view component for individual product pages
"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Minus, Plus } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import type { Product } from "@/lib/types"

// Props interface for product detail component
interface ProductDetailProps {
  product: Product
}

// Product detail component with quantity selection and add to cart
export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAdded, setShowAdded] = useState(false)

  // Handle quantity increment/decrement
  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change))
  }

  // Handle add to cart with selected quantity
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    setShowAdded(true)
    setTimeout(() => setShowAdded(false), 2000) // Hide confirmation after 2 seconds
  }

  // Render star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  // Mock additional images for carousel
  const images = [product.image, product.image, product.image]

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section - Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square overflow-hidden rounded-lg">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image Thumbnails */}
          <div className="flex space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? "border-blue-600" : "border-gray-200"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="space-y-6">
          {/* Product Title */}
          <h1 className="text-3xl font-bold text-blue-900">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-blue-700">({product.rating} out of 5)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-blue-900">${product.price}</div>

          {/* Category */}
          <div className="text-blue-700">
            <span className="font-semibold">Category:</span> {product.category}
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-semibold text-blue-900">Description</h3>
            <p className="text-blue-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="font-semibold text-blue-900">Quantity</label>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-blue-900"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border border-gray-300 rounded-lg min-w-[60px] text-center text-blue-900">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-blue-900"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="relative">
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Add to Cart
            </button>
            {showAdded && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white text-sm px-3 py-1 rounded whitespace-nowrap">
                Added to cart!
              </div>
            )}
          </div>

          {/* Reviews Section Placeholder */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-blue-900 mb-4">Customer Reviews</h3>
            <p className="text-blue-500">Reviews coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
