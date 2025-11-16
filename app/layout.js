import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Krushi World Export - Premium Indian Agro Products Exporter',
  description: 'Leading exporter of premium quality spices, grains, oil seeds, pulses, vegetables, and dry fruits from India to worldwide markets.',
  keywords: 'agro export, spices export, turmeric, grains, pulses, Indian spices',
  openGraph: {
    title: 'Krushi World Export - Premium Indian Agro Products',
    description: 'Leading exporter of premium quality spices, grains, oil seeds, pulses, vegetables, and dry fruits from India.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-400">KW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Krushi World Export</h1>
              <p className="text-xs text-gray-600">Premium Agro Products</p>
            </div>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition">About</a>
            <a href="/products" className="text-gray-700 hover:text-blue-900 font-medium transition">Products</a>
            <a href="/infrastructure" className="text-gray-700 hover:text-blue-900 font-medium transition">Infrastructure</a>
            <a href="/export-documentation" className="text-gray-700 hover:text-blue-900 font-medium transition">Export Docs</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">Contact</a>
            <a href="/admin" className="text-sm bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">Admin</a>
          </nav>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-amber-400">KW</span>
              </div>
              <span className="font-bold text-lg">Krushi World Export</span>
            </div>
            <p className="text-gray-400 text-sm">Your trusted partner for premium quality agro products from India to global markets.</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/products" className="hover:text-white transition">Products</a></li>
              <li><a href="/infrastructure" className="hover:text-white transition">Infrastructure</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Product Categories</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products?category=Spices" className="hover:text-white transition">Spices</a></li>
              <li><a href="/products?category=Grains" className="hover:text-white transition">Grains</a></li>
              <li><a href="/products?category=Pulses" className="hover:text-white transition">Pulses</a></li>
              <li><a href="/products?category=Dry Fruits" className="hover:text-white transition">Dry Fruits</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Contact Info</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Gujarat, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@krushiworldexport.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-amber-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Krushi World Export. All rights reserved. | <a href="/privacy" className="hover:text-white">Privacy Policy</a> | <a href="/terms" className="hover:text-white">Terms of Service</a></p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  )
}