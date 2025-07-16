import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductDetail from "@/components/product-detail"
import { products } from "@/lib/products-data"

// Product detail page component with dynamic routing
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // Await params in Next.js 15
  const { id } = await params

  // Find the product by ID from our mock data
  const product = products.find((p) => p.id === id)

  // Show 404 if product not found
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Product detail component with product data */}
        <ProductDetail product={product} />
      </main>
      <Footer />
    </div>
  )
}

// Generate static params for all products (for better performance)
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}