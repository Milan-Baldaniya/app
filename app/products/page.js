import { Suspense } from 'react'
import ProductsPageClient from './ProductsPageClient'

// Force dynamic rendering since we use useSearchParams()
export const dynamic = 'force-dynamic'

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsPageClient />
    </Suspense>
  )
}
