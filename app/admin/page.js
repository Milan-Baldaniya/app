'use client'

import { useState, useEffect } from 'react'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats')
      const data = await res.json()
      if (data.success) {
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-gray-200">Manage your products and customer inquiries</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Products</p>
                <p className="text-3xl font-bold text-blue-900">{stats?.productsCount || 0}</p>
              </div>
              <div className="text-4xl">📦</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-amber-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total RFQs</p>
                <p className="text-3xl font-bold text-amber-700">{stats?.rfqsCount || 0}</p>
              </div>
              <div className="text-4xl">📄</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">New RFQs</p>
                <p className="text-3xl font-bold text-green-600">{stats?.newRfqsCount || 0}</p>
              </div>
              <div className="text-4xl">🆕</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Categories</p>
                <p className="text-3xl font-bold text-purple-600">6</p>
              </div>
              <div className="text-4xl">📊</div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="/admin/products"
            className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 hover:shadow-xl transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Manage Products</h2>
                <p className="text-gray-200">Add, edit, or remove products from your catalog</p>
              </div>
              <div className="text-5xl group-hover:scale-110 transition">📦</div>
            </div>
          </a>

          <a
            href="/admin/rfqs"
            className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-8 hover:shadow-xl transition group"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">View RFQs</h2>
                <p className="text-gray-100">Review and respond to customer inquiries</p>
              </div>
              <div className="text-5xl group-hover:scale-110 transition">📈</div>
            </div>
          </a>
        </div>

        {/* Recent RFQs */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Recent RFQs</h2>
          
          {stats?.recentRfqs && stats.recentRfqs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Company</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Quantity</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.recentRfqs.map((rfq) => (
                    <tr key={rfq._id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {new Date(rfq.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-800">{rfq.company}</div>
                        <div className="text-sm text-gray-600">{rfq.name}</div>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-800">{rfq.productName}</td>
                      <td className="py-4 px-4 text-sm text-gray-800">{rfq.quantity}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          rfq.status === 'New' ? 'bg-green-100 text-green-800' :
                          rfq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                          rfq.status === 'Quoted' ? 'bg-amber-100 text-amber-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {rfq.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No RFQs yet</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <a href="/admin/rfqs" className="text-blue-900 hover:underline font-semibold">
              View All RFQs →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}