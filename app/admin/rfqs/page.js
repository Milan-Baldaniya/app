'use client'

import { useState, useEffect } from 'react'

export default function AdminRFQsPage() {
  const [rfqs, setRfqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRFQ, setSelectedRFQ] = useState(null)

  useEffect(() => {
    fetchRFQs()
  }, [])

  const fetchRFQs = async () => {
    try {
      const res = await fetch('/api/rfq')
      const data = await res.json()
      setRfqs(data.rfqs || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/rfq/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })
      fetchRFQs()
      if (selectedRFQ?._id === id) {
        setSelectedRFQ({ ...selectedRFQ, status })
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Quote Requests (RFQs)</h1>
          <p className="text-gray-200">Manage customer inquiries and quotation requests</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : rfqs.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* RFQ List */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Company</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Product</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rfqs.map((rfq) => (
                        <tr
                          key={rfq._id}
                          className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedRFQ(rfq)}
                        >
                          <td className="py-4 px-6 text-sm text-gray-600">
                            {new Date(rfq.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6">
                            <div className="font-semibold text-gray-800">{rfq.company}</div>
                            <div className="text-sm text-gray-600">{rfq.name}</div>
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-800">{rfq.productName}</td>
                          <td className="py-4 px-6">
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                                rfq.status === 'New'
                                  ? 'bg-green-100 text-green-800'
                                  : rfq.status === 'Contacted'
                                  ? 'bg-blue-100 text-blue-800'
                                  : rfq.status === 'Quoted'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {rfq.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedRFQ(rfq)
                              }}
                              className="text-blue-900 hover:underline text-sm font-semibold"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RFQ Details */}
            <div className="lg:col-span-1">
              {selectedRFQ ? (
                <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">RFQ Details</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-600">Status</label>
                      <select
                        value={selectedRFQ.status}
                        onChange={(e) => updateStatus(selectedRFQ._id, e.target.value)}
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Quoted">Quoted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-3">Customer Information</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Name:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.name}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Company:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.company}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Email:</span>
                          <p className="font-semibold text-blue-900">{selectedRFQ.email}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Phone:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-800 mb-3">Product Details</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Product:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.productName}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Quantity:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.quantity}</p>
                        </div>
                        {selectedRFQ.packaging && (
                          <div>
                            <span className="text-gray-600">Packaging:</span>
                            <p className="font-semibold text-gray-800">{selectedRFQ.packaging}</p>
                          </div>
                        )}
                        <div>
                          <span className="text-gray-600">Destination:</span>
                          <p className="font-semibold text-gray-800">{selectedRFQ.destination}</p>
                        </div>
                      </div>
                    </div>

                    {selectedRFQ.message && (
                      <div className="pt-4 border-t border-gray-200">
                        <h3 className="font-semibold text-gray-800 mb-2">Message</h3>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                          {selectedRFQ.message}
                        </p>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500">
                        Submitted on {new Date(selectedRFQ.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <div className="pt-4 space-y-2">
                      <a
                        href={`mailto:${selectedRFQ.email}`}
                        className="block w-full bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition text-center"
                      >
                        📧 Send Email
                      </a>
                      <a
                        href={`https://wa.me/${selectedRFQ.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-center"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <p className="text-gray-600">Select an RFQ to view details</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No RFQs yet</h3>
            <p className="text-gray-600">Customer quote requests will appear here</p>
          </div>
        )}
      </div>
    </div>
  )
}
