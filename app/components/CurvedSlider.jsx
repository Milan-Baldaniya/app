'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { getAllCategories } from '@/app/data/products'
import Link from 'next/link'
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

export default function CurvedSlider() {
  const categories = getAllCategories()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 'auto',
    containScroll: 'trimSnaps',
    dragFree: true,
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

        {/* Curved Slider Container with SVG Mask */}
        <div className="curved-slider-wrapper" data-drag-cursor="true">
          {/* SVG for Curved Mask */}
          <svg className="curved-mask-svg" viewBox="0 0 1200 500" preserveAspectRatio="none">
            <defs>
              <clipPath id="curved-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.12 Q 0.5,0 1,0.12 L 1,0.88 Q 0.5,1 0,0.88 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Slider Container */}
          <div className="curved-slider-container" data-drag-cursor="true">
            <div
              className="curved-slider overflow-hidden"
              ref={emblaRef}
              data-drag-cursor="true"
            >
              <div className="curved-slider-track flex gap-6">
                {categories.map((category, index) => (
                  <div
                    key={category}
                    className="curved-slide flex-[0_0_auto] min-w-0 w-[280px] md:w-[320px]"
                    data-drag-cursor="true"
                    data-cursor-hover="true"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="curved-slide-inner h-full"
                    >
                      <Link
                        href={`/products?category=${encodeURIComponent(category)}`}
                        className="block group h-full"
                        data-drag-cursor="true"
                        data-cursor-hover="true"
                      >
                        <div className="curved-card relative h-full p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-amber-300 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden">
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Content */}
                          <div className="relative z-10 h-full flex flex-col">
                            <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                              {categoryIcons[category] || '🌿'}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                              {category}
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                              Explore premium quality products
                            </p>
                            <div className="mt-auto flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                              <span className="text-sm">View Products</span>
                              <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
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
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="curved-nav-btn curved-nav-prev"
            data-cursor-hover="true"
            aria-label="Previous categories"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="curved-nav-btn curved-nav-next"
            data-cursor-hover="true"
            aria-label="Next categories"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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

      <style jsx global>{`
        /* Curved Slider Wrapper */
        .curved-slider-wrapper {
          position: relative;
          width: 100%;
          height: 500px;
          margin: 3rem 0;
          padding: 0 2rem;
        }

        /* SVG Mask */
        .curved-mask-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          opacity: 0;
        }

        /* Curved Slider Container with Clip Path */
        .curved-slider-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(180deg, #FEF3E2 0%, #FFF8F0 50%, #FEF3E2 100%);
          clip-path: path('M 0,12% Q 50%,0 100%,12% L 100%,88% Q 50%,100% 0,88% Z');
          -webkit-clip-path: path('M 0,12% Q 50%,0 100%,12% L 100%,88% Q 50%,100% 0,88% Z');
          border-radius: 0;
        }

        /* Slider with 3D Perspective */
        .curved-slider {
          width: 100%;
          height: 100%;
          position: relative;
          perspective: 1200px;
          perspective-origin: center center;
        }

        .curved-slider-track {
          height: 100%;
          padding: 3rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Individual Slide */
        .curved-slide {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .curved-slide-inner {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        /* Curved Card with 3D Tilt */
        .curved-card {
          height: 100%;
          min-height: 420px;
          transform: rotateX(5deg) translateZ(0);
          transform-style: preserve-3d;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backface-visibility: hidden;
        }

        .curved-card:hover {
          transform: rotateX(5deg) translateY(-12px) translateZ(20px) scale(1.02);
        }

        /* Navigation Buttons */
        .curved-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: none;
          transition: all 0.3s ease;
          color: #4b5563;
        }

        .curved-nav-btn:hover {
          background: #fef3c7;
          border-color: #f59e0b;
          color: #f59e0b;
          box-shadow: 0 6px 25px rgba(245, 158, 11, 0.2);
        }

        .curved-nav-prev {
          left: -1rem;
        }

        .curved-nav-next {
          right: -1rem;
        }

        @media (max-width: 768px) {
          .curved-slider-wrapper {
            height: 400px;
            padding: 0 1rem;
          }
          
          .curved-card {
            min-height: 320px;
          }

          .curved-nav-prev {
            left: 0.5rem;
          }

          .curved-nav-next {
            right: 0.5rem;
          }
        }

        /* Ensure proper spacing */
        .curved-slider-track > * {
          margin-right: 1.5rem;
        }

        .curved-slider-track > *:last-child {
          margin-right: 0;
        }
      `}</style>
    </section>
  )
}
