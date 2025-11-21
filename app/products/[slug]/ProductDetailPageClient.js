'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { getProductBySlug } from '@/app/data/products'

export default function ProductDetailPageClient() {
  const params = useParams()
  const [showRFQForm, setShowRFQForm] = useState(false)
  
  const product = getProductBySlug(params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product not found</h2>
          <a href="/products" className="text-blue-900 hover:underline">Back to products</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-900">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-blue-900">Products</a>
            <span>/</span>
            <span className="text-blue-900 font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="relative aspect-square bg-gradient-to-br from-blue-100 to-amber-100 rounded-xl overflow-hidden mb-4">
                {product.images?.[0] ? (
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={95}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-8xl">
                    {getCategoryIcon(product.category)}
                  </div>
                )}
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1, 5).map((img, idx) => (
                    <div key={idx} className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`${product.name} ${idx + 2}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                        quality={90}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <span className="inline-block text-sm font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-bold text-blue-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.shortDesc}</p>

              {/* Key Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Minimum Order Quantity</p>
                  <p className="text-xl font-bold text-blue-900">{product.moq}</p>
                </div>
                {product.hsCode && (
                  <div className="bg-amber-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">HS Code</p>
                    <p className="text-base sm:text-xl font-bold text-amber-700 break-words">{product.hsCode}</p>
                  </div>
                )}
                {product.origin && (
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Origin</p>
                    <p className="text-xl font-bold text-green-700">{product.origin}</p>
                  </div>
                )}
                {product.grade && product.grade.length > 0 && (
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Available Grades</p>
                    <div className="flex flex-wrap gap-2">
                      {product.grade.map((gradeOption, idx) => (
                        <span
                          key={`${gradeOption}-${idx}`}
                          className="text-sm font-semibold text-purple-800 bg-white/70 border border-purple-200 px-3 py-1 rounded-full"
                        >
                          {gradeOption}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => setShowRFQForm(true)}
                  className="flex-1 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition text-lg shadow-lg"
                >
                  Request Quote
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-600 transition flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Long Description */}
              {product.longDesc && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Product Description</h2>
                  <p className="text-gray-700 leading-relaxed">{product.longDesc}</p>
                </div>
              )}

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Specifications</h2>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <table className="w-full">
                      <tbody>
                        {product.specifications.map((spec, idx) => (
                          <tr key={idx} className="border-b border-gray-200 last:border-0">
                            <td className="py-3 font-semibold text-gray-700">{spec.key}</td>
                            <td className="py-3 text-right text-gray-800">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Product Benefits */}
              {product.productBenefits && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Product Benefits</h2>
                  <div className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-500">
                    <p className="text-gray-700 leading-relaxed">{product.productBenefits}</p>
                  </div>
                </div>
              )}

              {/* Health Benefits */}
              {product.healthBenefits && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Health Benefits</h2>
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="text-gray-700 leading-relaxed">{product.healthBenefits}</p>
                  </div>
                </div>
              )}

              {/* Packaging */}
              {product.packaging && product.packaging.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3">Packaging Options</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pack, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-900 px-4 py-2 rounded-lg text-sm font-medium">
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* RFQ Modal */}
      {showRFQForm && <RFQModal product={product} onClose={() => setShowRFQForm(false)} />}
    </div>
  )
}

function RFQModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    productId: product.id,
    productName: product.name,
    name: '',
    company: '',
    email: '',
    phone: '',
    quantity: '',
    packaging: '',
    destination: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate API call delay
    setTimeout(() => {
      setSuccess(true)
      setSubmitting(false)
      setTimeout(() => {
        onClose()
        // Reset form
        setFormData({
          productId: product.id,
          productName: product.name,
          name: '',
          company: '',
          email: '',
          phone: '',
          quantity: '',
          packaging: '',
          destination: '',
          message: '',
        })
        setSuccess(false)
      }, 2000)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-blue-900">Request Quote</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-3xl">
              &times;
            </button>
          </div>

          {success ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Quote Request Submitted!</h3>
              <p className="text-gray-600">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Product</p>
                <p className="font-bold text-blue-900">{product.name}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity Required *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., 20 MT"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Packaging Preference</label>
                  <input
                    type="text"
                    placeholder="e.g., 25kg bags"
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Destination Country *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., United States"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message</label>
                <textarea
                  rows="4"
                  placeholder="Any specific requirements or questions?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition text-lg disabled:bg-gray-400"
              >
                {submitting ? 'Submitting...' : 'Submit Quote Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function getCategoryIcon(category) {
  const icons = {
    'Spices': '🌶️',
    'Grains': '🌾',
    'Oil Seeds': '🌻',
    'Pulses': '🫘',
    'Fresh Vegetables': '🥕',
    'Fresh Fruits': '🍎',
    'Dry Fruits': '🥜',
    'Honey Products': '🍯',
    'Dairy Products': '🥛',
    'Ayurvedic Products': '🌿',
    'Dehydrated Products': '📦',
  }
  return icons[category] || '🌿'
}

