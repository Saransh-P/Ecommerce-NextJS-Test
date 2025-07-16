// Product interface definition
export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: number
}

// Cart item interface (product with quantity)
export interface CartItem {
  product: Product
  quantity: number
}

// Filter interface for URL parameters
export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  search?: string
}