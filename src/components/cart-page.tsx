"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10 // Free shipping over $100
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  // Handle quantity update
  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  // Handle checkout (placeholder)
  const handleCheckout = () => {
    setIsLoading(true)
    // Simulate checkout process
    setTimeout(() => {
      setIsLoading(false)
      alert("Checkout functionality coming soon!")
    }, 1000)
  }

  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
        <h2 className="text-2xl font-bold text-blue-900 mb-4">Your cart is empty</h2>
        <p className="text-blue-700 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link
          href="/"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-900">Shopping Cart</h1>
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Continue Shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-blue-900">
                Cart Items ({items.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 transition-colors text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>

            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 p-4 border border-gray-200 rounded-lg">
                  {/* Product Image and Info - Mobile: stacked, Desktop: side by side */}
                  <div className="flex items-center space-x-4 flex-1">
                    <Link href={`/product/${item.product.id}`}>
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.title}
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.product.id}`}>
                        <h3 className="font-semibold text-blue-900 hover:text-blue-600 transition-colors truncate text-sm sm:text-base">
                          {item.product.title}
                        </h3>
                      </Link>
                      <p className="text-blue-700 text-xs sm:text-sm">{item.product.category}</p>
                      <p className="text-lg font-bold text-blue-900">${item.product.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls and Total - Mobile: full width row, Desktop: inline */}
                  <div className="flex items-center justify-between sm:justify-end sm:space-x-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-50 text-blue-900"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 border border-gray-300 rounded min-w-[50px] text-center text-blue-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        className="p-1 border border-gray-300 rounded hover:bg-gray-50 text-blue-900"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Item Total and Remove Button */}
                    <div className="flex items-center space-x-3">
                      <p className="font-bold text-blue-900">${(item.product.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-6">
            <h2 className="text-xl font-semibold text-blue-900 mb-6">Order Summary</h2>

            <div className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span className="text-blue-700">Subtotal</span>
                <span className="font-semibold text-blue-900">${subtotal.toFixed(2)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between">
                <span className="text-blue-700">Shipping</span>
                <span className="font-semibold text-blue-900">
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {/* Tax */}
              <div className="flex justify-between">
                <span className="text-blue-700">Tax</span>
                <span className="font-semibold text-blue-900">${tax.toFixed(2)}</span>
              </div>

              {/* Free shipping notice */}
              {subtotal < 100 && (
                <div className="text-sm text-blue-600 bg-blue-50 p-3 rounded-lg">
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                </div>
              )}

              <hr className="border-gray-200" />

              {/* Total */}
              <div className="flex justify-between text-lg">
                <span className="font-bold text-blue-900">Total</span>
                <span className="font-bold text-blue-900">${total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processing..." : "Proceed to Checkout"}
              </button>

              {/* Security Notice */}
              <p className="text-xs text-blue-600 text-center">
                🔒 Secure checkout with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
