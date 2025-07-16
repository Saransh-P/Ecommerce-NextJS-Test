// Root layout component that wraps all pages in the application
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

// Load Inter font from Google Fonts
const inter = Inter({ subsets: ["latin"] })

// Metadata for SEO and browser display
export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "Modern e-commerce store built with Next.js",
}

// Root layout component that provides cart context to all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap entire app with cart context provider */}
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}


