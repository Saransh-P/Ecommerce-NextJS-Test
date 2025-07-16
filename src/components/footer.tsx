import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white p-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-300 transition-colors">All</Link></li>
              <li><Link href="#" className="hover:text-blue-300 transition-colors">ElecTronik</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-3 pt-6 text-left text-blue-200">
          <p>© 2025 Ecommerce</p>
        </div>
      </div>
    </footer>
  )
}
