'use client'

import { useState, useEffect } from 'react'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  const categories = ['Spices', 'Grains', 'Oil Seeds', 'Pulses', 'Fresh Vegetables', 'Dry Fruits']

  const [formData, setFormData] = useState({
    name: '',
    category: 'Spices',
    shortDesc: '',
    longDesc: '',
    hsCode: '',
    moq: '1 MT',
    origin: 'India',
    grade: '',
    packaging: '',
    featured: false,
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products')
      const data = await res.json()
      setProducts(data.products || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const payload = {
      ...formData,
      grade: formData.grade ? formData.grade.split(',').map(g => g.trim()) : [],
      packaging: formData.packaging ? formData.packaging.split(',').map(p => p.trim()) : [],
    }

    try {
      const url = editingProduct ? `/api/products/${editingProduct._id}` : '/api/products'
      const method = editingProduct ? 'PUT' : 'POST'
      
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setShowForm(false)
        setEditingProduct(null)
        resetForm()
        fetchProducts()
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      category: product.category,
      shortDesc: product.shortDesc,
      longDesc: product.longDesc || '',
      hsCode: product.hsCode || '',
      moq: product.moq,
      origin: product.origin || 'India',
      grade: product.grade?.join(', ') || '',
      packaging: product.packaging?.join(', ') || '',
      featured: product.featured || false,
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this product?')) return

    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE' })
      fetchProducts()
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      category: 'Spices',
      shortDesc: '',
      longDesc: '',
      hsCode: '',
      moq: '1 MT',
      origin: 'India',
      grade: '',
      packaging: '',
      featured: false,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Manage Products</h1>
              <p className="text-gray-200">Add, edit, or remove products from your catalog</p>
            </div>
            <button
              onClick={() => {
                setShowForm(true)
                setEditingProduct(null)
                resetForm()
              }}
              className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition"
            >
              + Add New Product
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center text-5xl">
                  {getCategoryIcon(product.category)}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        {product.category}
                      </span>
                      {product.featured && (
                        <span className="ml-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{product.shortDesc}</p>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>MOQ: {product.moq}</p>
                    {product.hsCode && <p>HS Code: {product.hsCode}</p>}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="flex-1 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition text-sm font-semibold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No products yet</h3>
            <p className="text-gray-600 mb-6">Add your first product to get started</p>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Add Product
            </button>
          </div>
        )}
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-3xl w-full my-8">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-blue-900">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false)
                    setEditingProduct(null)
                    resetForm()
                  }}
                  className="text-gray-400 hover:text-gray-600 text-3xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Short Description *</label>
                  <input
                    type="text"
                    required
                    value={formData.shortDesc}
                    onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Long Description</label>
                  <textarea
                    rows="4"
                    value={formData.longDesc}
                    onChange={(e) => setFormData({ ...formData, longDesc: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">HS Code</label>
                    <input
                      type="text"
                      value={formData.hsCode}
                      onChange={(e) => setFormData({ ...formData, hsCode: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">MOQ *</label>
                    <input
                      type="text"
                      required
                      value={formData.moq}
                      onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Origin</label>
                    <input
                      type="text"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Grades (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    placeholder="A Grade, B Grade, Premium"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Packaging Options (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.packaging}
                    onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                    placeholder="25kg bags, 50kg bags, Bulk"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5 text-blue-900 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
                    Mark as Featured Product
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition"
                  >
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setEditingProduct(null)
                      resetForm()
                    }}
                    className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
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
    'Dry Fruits': '🥜',
  }
  return icons[category] || '🌿'
}