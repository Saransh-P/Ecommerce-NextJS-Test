// Dynamic product detail page component
import { Suspense } from "react"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"
import { products } from "@/lib/products-data"

// Product detail page with dynamic routing based on product ID
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await params in Next.js 15 (required for async params)
  const { id } = await params

  // Find the product by ID from our mock data
  const product = products.find((p) => p.id === id)

  // Show 404 page if product not found
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header component */}
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      
      {/* Main content with product details */}
      <main className="container mx-auto px-4 py-6">
        <ProductDetail product={product} />
      </main>
      
      {/* Footer component */}
      <Footer />
    </div>
  )
}

// Generate static params for all products at build time (for better performance)
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}
