import Header from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center">Header Test Page</h1>
        <p className="text-center mt-4">If you can see the header above, it's working!</p>
      </main>
    </div>
  )
}