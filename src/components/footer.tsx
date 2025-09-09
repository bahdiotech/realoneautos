import { Facebook, Instagram, Twitter, Linkedin, Car, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="hover:text-red-400 transition-colors">FAQ</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
              <li><Link href="/press" className="hover:text-red-400 transition-colors">Press</Link></li>
              <li><Link href="/blog" className="hover:text-red-400 transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-red-400 transition-colors">Join the Team</Link></li>
            </ul>
          </div>

          {/* Terms */}
          <div>
            <h3 className="text-white font-semibold mb-4">Terms</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-red-400 transition-colors">Terms of Use</Link></li>
              <li><Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/warranty" className="hover:text-red-400 transition-colors">Consumer Warranty</Link></li>
              <li><Link href="/enterprise-warranty" className="hover:text-red-400 transition-colors">Enterprise Warranty</Link></li>
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h3 className="text-white font-semibold mb-4">What Realone Offers</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link href="/cities" className="hover:text-red-400 transition-colors">Cities</Link></li>
              <li><Link href="/vehicles" className="hover:text-red-400 transition-colors">Vehicles</Link></li>
              <li><Link href="/check-zip" className="hover:text-red-400 transition-colors">Check Your Zip</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect with Realone</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-sm space-y-1">
              <p>Realone Auto, Inc.</p>
              <p>BAR License: ARD304522</p>
              <p>FL License: MV108509</p>
            </div>
          </div>

          {/* Logo and Contact */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center">
              <img src="/logo.svg" alt="REALONE AUTO Logo" className="h-full invert brightness-0 p-0 m-0 w-28" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">REALONE AUTO</span>
            </div>
            <div className="text-sm space-y-2">
              <p>24/7 Mobile Mechanics</p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-400" />
                <a href="tel:08092735348" className="hover:text-red-400 transition-colors">08092735348</a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <a href="https://wa.me/2347010009558" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">WhatsApp: 07010009558</a>
              </div>
              <p>
                <a href="mailto:Yemiiope@gmail.com" className="hover:text-red-400 transition-colors">Yemiiope@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024-2025 Realone Auto, Inc. All rights reserved.</p>
          <p className="mt-2">Plot 4 Ebute Metta, Costain round about Lagos</p>
        </div>
      </div>
    </footer>
  )
}