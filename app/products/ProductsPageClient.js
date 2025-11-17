'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Sparkles, MessageSquare, LayoutGrid, Flame, Wheat, Sunflower, Bean, Carrot, Apple } from 'lucide-react'
import { getProductsByCategory, getAllCategories } from '@/app/data/products'
import { Sidebar, SidebarBody, SidebarLink } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export default function ProductsPageClient() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true) // Start expanded on desktop

  const categories = useMemo(() => ['All', ...getAllCategories()], [])

  // Map categories to icons
  const categoryIconMap = {
    'All': LayoutGrid,
    'Spices': Flame,
    'Grains': Wheat,
    'Oil Seeds': Sunflower,
    'Pulses': Bean,
    'Fresh Vegetables': Carrot,
    'Dry Fruits': Apple,
  }

  // Create sidebar links array
  const sidebarLinks = useMemo(() => categories.map((category, idx) => {
    const Icon = categoryIconMap[category] || LayoutGrid
    const isSelected = selectedCategory === category
    return {
      label: category,
      href: '#',
      icon: React.createElement(Icon, {
        className: cn(
          "h-5 w-5 flex-shrink-0",
          isSelected 
            ? "text-white" 
            : "text-neutral-700 dark:text-neutral-200"
        ),
      }),
    }
  }), [categories, selectedCategory])

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    } else {
      setSelectedCategory('All')
    }
  }, [searchParams])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    setSidebarOpen(false) // Close mobile sidebar after selection
  }

  const products = useMemo(() => {
    return getProductsByCategory(selectedCategory)
  }, [selectedCategory])

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-amber-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/60 animate-gradient" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl animate-blob" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 animate-gradient">
                  Our Products
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Explore our wide range of premium agro products
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Sidebar for Categories */}
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}>
            <SidebarBody className="justify-start gap-4" title="Categories">
              <div className="flex flex-col flex-1 min-h-0 w-full">
                {/* Categories heading - visible on mobile, animated on desktop */}
                <h2 className="text-xl font-bold mb-4 md:block hidden">
                  <motion.span 
                    className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500"
                    animate={{
                      opacity: sidebarOpen ? 1 : 0,
                      display: sidebarOpen ? "inline-block" : "none",
                    }}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Categories
                  </motion.span>
                </h2>
                {/* Mobile-only Categories heading */}
                <h2 className="text-2xl font-bold mb-6 block md:hidden">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                    Categories
                  </span>
                </h2>
                <div className="flex flex-col gap-2 w-full">
                  {sidebarLinks.map((link, idx) => (
                    <SidebarLink
                      key={idx}
                      link={link}
                      onClick={() => handleCategoryClick(categories[idx])}
                      className={cn(
                        "py-2 rounded-lg transition-colors",
                        sidebarOpen ? "px-3" : "px-2",
                        selectedCategory === categories[idx]
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                          : "hover:bg-amber-50 dark:hover:bg-neutral-700"
                      )}
                    />
                  ))}
                </div>
              </div>
            </SidebarBody>
          </Sidebar>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Search Bar */}
            <AnimatedSection animation="fade-up">
              <div className="mb-8 mt-0 lg:mt-0">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-6 text-lg border-2 focus:border-amber-500"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Results Count */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-500 text-transparent bg-clip-text">{filteredProducts.length}</span> products
                </p>
              </div>
            </AnimatedSection>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, idx) => (
                  <AnimatedSection key={product.id} animation="fade-scale" delay={idx * 50}>
                    <ProductCard product={product} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <AnimatedSection animation="fade-scale">
                <Card className="text-center py-20">
                  <CardContent>
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-2xl font-bold mb-2">No products found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <Card className="group overflow-hidden border-2 border-transparent hover:border-amber-500/30 transition-all duration-500 bg-gradient-to-br from-card to-card/80 hover-elevate">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-6xl bg-gradient-to-br from-amber-100 to-orange-100">
              {getCategoryIcon(product.category)}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Badge
            variant="secondary"
            className="absolute top-3 right-3 bg-amber-500/90 text-white border-0 backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 mr-1" />
            {product.category}
          </Badge>
        </div>
        <CardHeader className="space-y-2 pb-3">
          <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{product.shortDesc}</p>
        </CardHeader>
        <CardContent className="space-y-3 pb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">MOQ:</span>
            <span className="font-semibold font-mono text-amber-600 dark:text-amber-400">{product.moq}</span>
          </div>
          {product.hsCode && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">HS Code:</span>
              <span className="font-medium">{product.hsCode}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="pt-3">
          <Button
            variant="default"
            className="w-full group/btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-0"
          >
            <MessageSquare className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
            View Details
          </Button>
        </CardFooter>
      </Card>
    </Link>
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
