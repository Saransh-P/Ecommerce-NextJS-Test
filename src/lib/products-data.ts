import { Product } from "./types"

// Mock product data with local images
export const products: Product[] = [
  {
    id: "1",
    title: "Smartphone X",
    price: 799,
    description: "Latest smartphone with advanced camera system and all-day battery life.",
    category: "Electronics",
    image: "/images/products/smartphone.jpg",
    rating: 4.5
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 199,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    image: "/images/products/headphones.jpg",
    rating: 4.8
  },
  {
    id: "3",
    title: "Running Shoes",
    price: 129,
    description: "Lightweight running shoes with responsive cushioning for maximum comfort.",
    category: "Fashion",
    image: "/images/products/shoes.jpg",
    rating: 4.2
  },
  {
    id: "4",
    title: "Coffee Maker",
    price: 89,
    description: "Programmable coffee maker with thermal carafe to keep your coffee hot for hours.",
    category: "Home",
    image: "/images/products/coffee-maker.jpg",
    rating: 4.0
  },
  {
    id: "5",
    title: "Fitness Tracker",
    price: 129,
    description: "Track your activity, sleep, and heart rate with this water-resistant fitness band.",
    category: "Electronics",
    image: "/images/products/fitness-tracker.jpg",
    rating: 4.6
  },
  {
    id: "6",
    title: "Backpack",
    price: 59,
    description: "Durable backpack with laptop compartment and multiple pockets for organization.",
    category: "Fashion",
    image: "/images/products/backpack.jpg",
    rating: 4.3
  }
]