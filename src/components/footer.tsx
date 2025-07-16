import { Facebook, Twitter, Instagram } from "lucide-react"

// Footer component with links and social media
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Filters</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" mt-4 pt-8 text-left">
          <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}