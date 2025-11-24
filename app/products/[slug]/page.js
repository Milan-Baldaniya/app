import { Suspense } from 'react'
import ProductDetailPageClient from './ProductDetailPageClient'
import { products } from '../../data/products'

// Force dynamic rendering since we use useParams()
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: 'Product Not Found | Krushi World Export',
      description: 'The requested product could not be found.',
    }
  }

  return {
    title: `${product.name} Exporter from India | Buy ${product.name} Online`,
    description: `Premium quality ${product.name} exporter from India. ${product.shortDesc}. Bulk supplier of ${product.category}.`,
    keywords: `${product.name}, ${product.name} export, buy ${product.name}, ${product.category} exporter, Indian ${product.name}, bulk ${product.name} supplier`,
    openGraph: {
      title: `${product.name} - Premium Export Quality | Krushi World Export`,
      description: product.longDesc,
      images: product.images ? product.images : [],
    },
  }
}

export default function ProductDetailPage({ params }) {
  const product = products.find((p) => p.slug === params.slug)

  const jsonLd = product ? {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images ? product.images.map(img => `https://www.krushiworld.com${img}`) : [],
    description: product.longDesc,
    brand: {
      '@type': 'Brand',
      name: 'Krushi World'
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.krushiworld.com/products/${product.slug}`,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Krushi World'
      }
    }
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
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
    </>
  )
}
