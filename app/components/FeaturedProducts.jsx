'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react'

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([])

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const res = await fetch('/api/products/featured')
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
      }
      const data = await res.json()
      if (data.success && data.products) {
        setFeaturedProducts(data.products)
      } else {
        throw new Error('Invalid API response')
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      // Fallback products
      setFeaturedProducts([
        {
          _id: '1',
          name: 'Turmeric Finger',
          slug: 'turmeric-finger',
          category: 'Spices',
          grade: 'Grade A',
          moq: '5 MT',
          shortDesc: 'Premium quality turmeric fingers with high curcumin content from Kerala farms.',
          origin: 'India',
          images: [],
        },
        {
          _id: '2',
          name: 'Red Chili',
          slug: 'red-chili',
          category: 'Spices',
          grade: 'Grade A',
          moq: '3 MT',
          shortDesc: 'Vibrant red chilies with excellent heat and color retention for export markets.',
          origin: 'India',
          images: [],
        },
        {
          _id: '3',
          name: 'Green Cardamom',
          slug: 'green-cardamom',
          category: 'Spices',
          grade: 'Premium',
          moq: '2 MT',
          shortDesc: 'Aromatic green cardamom pods, hand-picked for superior quality and flavor.',
          origin: 'India',
          images: [],
        },
      ])
    }
  }

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                Featured Products
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our premium selection of export-quality spices
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.length > 0 ? (
            featuredProducts.slice(0, 3).map((product, index) => (
              <AnimatedSection
                key={product._id || product.id}
                animation="fade-scale"
                delay={index * 150}
              >
                <ProductCard product={product} />
              </AnimatedSection>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <p>Loading featured products...</p>
            </div>
          )}
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="mt-16 text-center">
            <Link href="/products">
              <Button
                size="lg"
                className="group text-lg h-14 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden border-2 border-transparent hover:border-amber-500/30 transition-all duration-500 bg-gradient-to-br from-card to-card/80">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {product.images?.[0] ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-6xl bg-gradient-to-br from-amber-100 to-orange-100">
            {product.category === 'Spices' ? '🌶️' : product.category === 'Grains' ? '🌾' : '🥜'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-amber-500/90 text-white border-0 backdrop-blur-sm"
        >
          <Sparkles className="h-3 w-3 mr-1" />
          {product.grade || product.category}
        </Badge>
      </div>
      <CardHeader className="space-y-2 pb-3">
        <h3 className="font-bold text-xl line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDesc}</p>
      </CardHeader>
      <CardContent className="space-y-3 pb-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Minimum Order:</span>
          <span className="font-semibold font-mono text-amber-600 dark:text-amber-400">{product.moq || 'N/A'}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Origin:</span>
          <span className="font-medium">{product.origin || 'India'}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-3">
        <Link href={`/products/${product.slug || product._id}`} className="w-full">
          <Button
            variant="default"
            className="w-full group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
          >
            <MessageSquare className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
            Send Inquiry
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

