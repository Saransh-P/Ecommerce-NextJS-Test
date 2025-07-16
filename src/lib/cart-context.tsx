// Shopping cart context provider for global cart state management
"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import type { Product } from "./types"

// Cart item type definition (product with quantity)
interface CartItem {
  product: Product
  quantity: number
}

// Cart context type definition with all available methods
interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

// Create cart context with default empty values
const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
})

// Custom hook to access cart context
export const useCart = () => useContext(CartContext)

// Cart provider component that manages cart state and localStorage persistence
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  
  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])
  
  // Save cart to localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  // Add item to cart or increment quantity if item already exists
  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      )
      
      if (existingItem) {
        // Increment quantity if item already exists
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        // Add new item with quantity 1
        return [...prevItems, { product, quantity: 1 }]
      }
    })
  }

  // Remove item completely from cart
  const removeItem = (productId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    )
  }

  // Update quantity of specific item in cart
  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }

  // Clear all items from cart
  const clearCart = () => {
    setItems([])
  }

  // Calculate total number of items in cart
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  
  // Calculate total price of all items in cart
  const totalPrice = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  // Provide cart state and methods to child components
  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
