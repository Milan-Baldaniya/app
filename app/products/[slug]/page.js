import { Suspense } from 'react'
import ProductDetailPageClient from './ProductDetailPageClient'

// Force dynamic rendering since we use useParams()
export const dynamic = 'force-dynamic'

export default function ProductDetailPage() {
    return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    }>
      <ProductDetailPageClient />
    </Suspense>
  )
}
