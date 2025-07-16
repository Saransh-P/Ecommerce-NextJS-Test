import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductListing from "@/components/product-listing"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className="container mx-auto px-4 py-6">
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductListing />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
