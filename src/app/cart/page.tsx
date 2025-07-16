import { Suspense } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartPage from "@/components/cart-page"

// Cart page component
export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className="container mx-auto px-4 py-6">
        <CartPage />
      </main>
      <Footer />
    </div>
  )
}
