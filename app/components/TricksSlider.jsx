'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
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

export default function TricksSlider() {
  const baseCategories = getAllCategories()
  // Duplicate categories 3 times for smooth infinite loop
  const categories = [...baseCategories, ...baseCategories, ...baseCategories]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Infinite loop enabled
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const slideRefs = useRef([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    // Update 3D transforms for each slide based on position
    const slides = emblaApi.slideNodes()
    const scrollSnap = emblaApi.selectedScrollSnap()

    slides.forEach((slideNode, index) => {
      const slideElement = slideRefs.current[index]
      if (!slideElement) return

      // Calculate distance from center
      const distanceFromCenter = index - scrollSnap

      // Very subtle rotation (Y-axis)
      const rotationY = distanceFromCenter * 6 // 6 degrees per slide

      // Very subtle depth
      const translateZ = -Math.abs(distanceFromCenter) * 25

      // Apply transforms
      slideElement.style.transform = `
        translateZ(${translateZ}px)
        rotateY(${rotationY}deg)
      `
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', onScroll)
    onSelect()
    onScroll()

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', onScroll)
    }
  }, [emblaApi, onSelect, onScroll])

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white">
      <DragCursor />

      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
              Our Categories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium product categories in curved frames
          </p>
        </motion.div>

        {/* Curved Frame Slider */}
        <div className="curved-frame-wrapper" data-drag-cursor="true">
          {/* The curved strip container */}
          <div className="curved-frame-container">
            <div
              className="curved-frame-slider"
              ref={emblaRef}
              data-drag-cursor="true"
            >
              <div className="curved-frame-track">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="curved-frame-slide"
                    ref={(el) => (slideRefs.current[index] = el)}
                    data-drag-cursor="true"
                  >
                    <Link
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className="curved-frame-link"
                    >
                      {/* Curved Frame */}
                      <div className="curved-picture-frame">
                        {/* Frame content */}
                        <div className="frame-content">
                          <div className="category-icon">
                            {categoryIcons[category] || '🌿'}
                          </div>
                          <h3 className="category-name">{category}</h3>
                          <p className="category-desc">Explore Products</p>
                        </div>

                        {/* Frame border with curve */}
                        <div className="frame-border"></div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="curved-nav-container">
            <button
              onClick={scrollPrev}
              className="curved-nav-btn"
              aria-label="Previous"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              className="curved-nav-btn"
              aria-label="Next"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Main wrapper */
        .curved-frame-wrapper {
          position: relative;
          width: 100%;
          height: 550px;
          margin: 2rem auto;
        }

        /* Curved strip container */
        .curved-frame-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          background: linear-gradient(180deg, 
            rgba(251, 191, 36, 0.05) 0%, 
            rgba(251, 146, 60, 0.08) 50%, 
            rgba(251, 191, 36, 0.05) 100%
          );
          /* Curved path */
          clip-path: path('M 0,20% Q 50%,5% 100%,20% L 100%,80% Q 50%,95% 0,80% Z');
          -webkit-clip-path: path('M 0,20% Q 50%,5% 100%,20% L 100%,80% Q 50%,95% 0,80% Z');
        }

        /* Slider with subtle 3D perspective */
        .curved-frame-slider {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          perspective-origin: center center;
          overflow: hidden;
          cursor: grab;
        }

        .curved-frame-slider:active {
          cursor: grabbing;
        }

        /* Frame track */
        .curved-frame-track {
          display: flex;
          height: 100%;
          align-items: center;
          gap: 16px;
          padding: 0 10%;
          transform-style: preserve-3d;
        }

        /* Individual slide */
        .curved-frame-slide {
          flex: 0 0 auto;
          width: 300px;
          height: 450px;
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Frame link */
        .curved-frame-link {
          display: block;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }

        /* Curved Picture Frame */
        .curved-picture-frame {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fff 0%, #fef3e2 100%);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 10px 40px rgba(0, 0, 0, 0.15),
            inset 0 0 0 1px rgba(251, 191, 36, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .curved-frame-slide:hover .curved-picture-frame {
          transform: translateZ(20px) scale(1.02);
          box-shadow: 
            0 20px 60px rgba(251, 146, 60, 0.25),
            inset 0 0 0 2px rgba(251, 146, 60, 0.4);
        }

        /* Frame content */
        .frame-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          z-index: 2;
        }

        .category-icon {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          transition: transform 0.3s ease;
        }

        .curved-frame-slide:hover .category-icon {
          transform: scale(1.15);
        }

        .category-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #92400e;
          text-align: center;
          margin-bottom: 0.5rem;
          transition: color 0.3s ease;
        }

        .curved-frame-slide:hover .category-name {
          color: #d97706;
        }

        .category-desc {
          font-size: 0.875rem;
          color: #78350f;
          text-align: center;
        }

        /* Frame border (decorative) */
        .frame-border {
          position: absolute;
          inset: 8px;
          border: 3px solid;
          border-image: linear-gradient(135deg, 
            rgba(251, 191, 36, 0.4), 
            rgba(251, 146, 60, 0.6),
            rgba(251, 191, 36, 0.4)
          ) 1;
          border-radius: 16px;
          pointer-events: none;
          z-index: 1;
        }

        /* Navigation container */
        .curved-nav-container {
          position: absolute;
          bottom: -70px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 10;
        }

        /* Navigation buttons */
        .curved-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(251, 191, 36, 0.1);
          backdrop-filter: blur(8px);
          border: 1.5px solid rgba(251, 146, 60, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #d97706;
          position: relative;
          z-index: 100;
        }

        .curved-nav-btn:hover {
          background: rgba(251, 146, 60, 0.2);
          border-color: rgba(251, 146, 60, 0.5);
          transform: scale(1.05);
        }

        .curved-nav-btn:active {
          transform: scale(0.95);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .curved-frame-wrapper {
            height: 450px;
          }

          .curved-frame-slide {
            width: 240px;
            height: 360px;
          }

          .curved-frame-track {
            padding: 0 5%;
            gap: 12px;
          }

          .category-icon {
            font-size: 3.5rem;
          }

          .category-name {
            font-size: 1.25rem;
          }

          .curved-nav-container {
            bottom: -60px;
          }

          .curved-nav-btn {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .curved-frame-wrapper {
            height: 380px;
          }

          .curved-frame-slide {
            width: 200px;
            height: 300px;
          }

          .category-icon {
            font-size: 3rem;
          }

          .category-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}
