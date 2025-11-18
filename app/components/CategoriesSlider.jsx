'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { getAllCategories } from '@/app/data/products'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import DragCursor from './DragCursor'

const categoryIcons = {
  'Fresh Vegetables': '🥕',
  'Fresh Fruits': '🍎',
  'Spices': '🌶️',
  'Grains': '🌾',
  'Oil Seeds': '🌻',
  'Pulses': '🫘',
  'Honey Products': '🍯',
  'Dairy Products': '🥛',
  'Ayurvedic Products': '🌿',
  'Dehydrated Products': '📦',
}

export default function CategoriesSlider() {
  const categories = getAllCategories()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white">
      <DragCursor />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
              Our Categories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of premium agro products across different categories
          </p>
        </motion.div>

        <div className="relative" data-drag-cursor="true">
          <div className="overflow-hidden" ref={emblaRef} data-drag-cursor="true">
            <div className="flex gap-6" data-drag-cursor="true">
              {categories.map((category, index) => (
                <div
                  key={category}
                  className="flex-[0_0_auto] min-w-0 w-[280px] md:w-[320px]"
                  data-magnetic="true"
                  data-drag-cursor="true"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -8 }}
                    className="h-full"
                  >
                    <Link
                      href={`/products?category=${encodeURIComponent(category)}`}
                      data-cursor-hover="true"
                      className="block group"
                    >
                      <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {categoryIcons[category] || '🌿'}
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                            {category}
                          </h3>
                          <p className="text-gray-600 text-sm mb-6">
                            Explore premium quality products
                          </p>
                          <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                            <span className="text-sm">View Products</span>
                            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-300/30 transition-colors" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/2 group-hover:bg-orange-300/30 transition-colors" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-all group"
            data-cursor-hover="true"
            aria-label="Previous categories"
          >
            <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-amber-600 rotate-180" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 transition-all group"
            data-cursor-hover="true"
            aria-label="Next categories"
          >
            <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-amber-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? 'bg-amber-600 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              data-cursor-hover="true"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

