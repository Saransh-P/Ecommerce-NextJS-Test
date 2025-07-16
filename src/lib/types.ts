export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: number
}

export interface CartItem extends Product {
  quantity: number
}