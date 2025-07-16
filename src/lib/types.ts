// TypeScript type definitions for the e-commerce application

// Product interface - defines the structure of a product object
export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: number
}

// Cart item interface - product with quantity information
export interface CartItem {
  product: Product
  quantity: number
}

// Filter interface for product filtering and search
export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  search?: string
}
