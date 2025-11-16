'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const res = await fetch('/api/products/featured')
      const data = await res.json()
      setFeaturedProducts(data.products || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Indian Agro Products for <span className="text-amber-400">Global Markets</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Your trusted partner in exporting high-quality spices, grains, pulses, and more from India to worldwide destinations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/products" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-lg shadow-lg">
                Explore Products
              </a>
              <a href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg shadow-lg">
                Request Quote
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-600 text-lg">Discover our wide range of premium agro products</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Spices', icon: '🌶️', color: 'from-red-500 to-orange-500' },
              { name: 'Grains', icon: '🌾', color: 'from-yellow-500 to-amber-500' },
              { name: 'Oil Seeds', icon: '🌻', color: 'from-green-500 to-emerald-500' },
              { name: 'Pulses', icon: '🫘', color: 'from-amber-600 to-yellow-600' },
              { name: 'Fresh Vegetables', icon: '🥕', color: 'from-lime-500 to-green-500' },
              { name: 'Dry Fruits', icon: '🥜', color: 'from-purple-500 to-pink-500' },
            ].map((category) => (
              <a
                key={category.name}
                href={`/products?category=${encodeURIComponent(category.name)}`}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-amber-400"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-center font-semibold text-gray-800 group-hover:text-blue-900 transition">
                  {category.name}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Explore our premium selection of export-quality products</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12 text-gray-500">
                <p>Loading featured products...</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <a href="/products" className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition text-lg">
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Krushi World Export?</h2>
            <p className="text-gray-600 text-lg">Your reliable partner for premium agro exports</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Premium Quality', icon: '⭐', desc: 'Stringent quality checks at every stage' },
              { title: 'Global Reach', icon: '🌍', desc: 'Exporting to 50+ countries worldwide' },
              { title: 'Certifications', icon: '✅', desc: 'ISO, FSSAI, and organic certifications' },
              { title: 'Timely Delivery', icon: '🚢', desc: 'Reliable logistics and on-time shipments' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Certifications</h2>
            <p className="text-gray-600 text-lg">Certified for quality and excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {['ISO 22000', 'FSSAI', 'Organic India', 'APEDA'].map((cert, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center">
                <div className="text-4xl mb-3">🏆</div>
                <p className="font-semibold text-gray-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Export Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with us today to discuss your requirements and receive a customized quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition text-lg">
              Contact Us
            </a>
            <a href="/products" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <a
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-amber-400"
    >
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-amber-100 relative overflow-hidden">
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {product.category === 'Spices' ? '🌶️' : product.category === 'Grains' ? '🌾' : '🥜'}
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-gray-800 mt-2 mb-1 group-hover:text-blue-900 transition">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{product.shortDesc}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">MOQ: {product.moq}</span>
          <span className="text-blue-900 font-semibold group-hover:text-amber-500 transition">View Details →</span>
        </div>
      </div>
    </a>
  )
}