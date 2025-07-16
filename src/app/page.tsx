// Home page component - displays the main product listing
import { Suspense } from "react"
import Header from "@/components/header"
import ProductListing from "@/components/product-listing"
import Footer from "@/components/footer"

// Main home page component with product listing
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with navigation, search, and cart */}
      <Header />

      {/* Main content area with product listing */}
      <main className="container mx-auto px-4 py-6">
        {/* Suspense boundary for loading states */}
        <Suspense fallback={<div className="text-center py-8">Loading products...</div>}>
          <ProductListing />
        </Suspense>
      </main>

      {/* Footer with links and information */}
      <Footer />
    </div>
  )
}
