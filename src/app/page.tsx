import { Suspense } from "react"
import Header from "@/components/header"
import ProductListing from "@/components/product-listing"
import Footer from "@/components/footer"

// Home page component - main product listing page
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with logo, search, and cart */}
      <Header />

      {/* Main content area with suspense for loading states */}
      <main className="container mx-auto px-4 py-6">
        <Suspense fallback={<div className="text-center py-8">Loading products...</div>}>
          <ProductListing />
        </Suspense>
      </main>

      {/* Footer with links and social media */}
      <Footer />
    </div>
  )
}