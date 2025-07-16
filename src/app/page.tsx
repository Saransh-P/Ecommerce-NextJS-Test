import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products-data"

export default function Home() {
  // Get the first product for testing
  const sampleProduct = products[0]
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8">Product Card Test</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Regular Product Card:</h2>
          <div className="max-w-xs mx-auto">
            <ProductCard product={sampleProduct} />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Featured Product Card:</h2>
          <ProductCard product={sampleProduct} featured={true} />
        </div>
      </main>
      <Footer />
    </div>
  )
}