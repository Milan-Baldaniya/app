'use client'

import { useCallback, useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { getAllCategories } from '@/app/data/products'
import Link from 'next/link'
import { motion } from 'framer-motion'
import DragCursor from './DragCursor'
import Image from 'next/image'

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

const categoryImages = {
  'Fresh Vegetables': '/category-images/fresh-vegetables.png',
  'Fresh Fruits': '/category-images/fresh-fruits.png',
  'Spices': '/category-images/spices.png',
  'Grains': '/category-images/grains.png',
  'Oil Seeds': '/category-images/oil-seeds.png',
  'Pulses': '/category-images/pulses.png',
  'Honey Products': '/category-images/honey-products.png',
  'Dairy Products': '/category-images/dairy-products.png',
  'Ayurvedic Products': '/category-images/ayurvedic-products.png',
  'Dehydrated Products': '/category-images/dehydrated-products.png',
}

export default function TricksSlider() {
  const baseCategories = getAllCategories()
  // Duplicate categories 3 times for smooth infinite loop
  const categories = [...baseCategories, ...baseCategories, ...baseCategories]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Infinite loop enabled
    align: 'center',
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
    // 3D transforms removed for simple smooth scrolling
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

        {/* Curved Frame Slider with Wave Effects */}
        <div className="curved-frame-wrapper" data-drag-cursor="true">
          {/* Top Wave SVG */}
          <div className="wave-top">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 804 50.167"
              enableBackground="new 0 0 804 50.167"
              xmlSpace="preserve"
              preserveAspectRatio="none"
            >
              <path fill="#fbbf24" d="M804,0v16.671c0,0-204.974,33.496-401.995,33.496C204.974,50.167,0,16.671,0,16.671V0H804z" />
            </svg>
          </div>

          {/* The straight slider container */}
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
                        {/* Frame content - Clean images with hover text */}
                        <div className="frame-content">
                          {categoryImages[category] ? (
                            <div className="category-image-wrapper">
                              <Image
                                src={categoryImages[category]}
                                alt={category}
                                fill
                                className="category-image"
                                sizes="(max-width: 768px) 65vw, 30vw"
                              />
                              {/* Hover Overlay with Text */}
                              <div className="hover-overlay">
                                <h3 className="category-name-hover">{category}</h3>
                              </div>
                            </div>
                          ) : (
                            /* Fallback for categories without images */
                            <div className="category-text-content">
                              <div className="category-icon">
                                {categoryIcons[category] || '🌿'}
                              </div>
                              <h3 className="category-name">{category}</h3>
                            </div>
                          )}
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

          {/* Bottom Wave SVG */}
          <div className="wave-bottom">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 804 50.167"
              enableBackground="new 0 0 804 50.167"
              xmlSpace="preserve"
              preserveAspectRatio="none"
            >
              <path fill="#fbbf24" d="M0,50.167v-16.671c0,0,204.974-33.496,401.995-33.496C599.026,0,804,33.496,804,33.496v16.671H0z" />
            </svg>
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

        /* Wave overlays - positioned to align with curved edges */
        .wave-top,
        .wave-bottom {
          position: absolute;
          left: 0;
          right: 0;
          width: 100%;
          height: 70px;
          z-index: 10;
          pointer-events: none;
          filter: drop-shadow(0 4px 12px rgba(251, 146, 60, 0.15));
        }

        .wave-top {
          top: -5px;
        }

        .wave-bottom {
          bottom: -5px;
        }

        .wave-top svg,
        .wave-bottom svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Curved slider container with wave shape */
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
          /* Curved path to match the wave shape */
          clip-path: path('M 0,10% Q 50%,0% 100%,10% L 100%,90% Q 50%,100% 0,90% Z');
          -webkit-clip-path: path('M 0,10% Q 50%,0% 100%,10% L 100%,90% Q 50%,100% 0,90% Z');
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
          gap: 20px; /* Increased gap slightly */
          padding: 0; /* Removed padding to use full width */
          transform-style: preserve-3d;
        }

        /* Individual slide */
        .curved-frame-slide {
          flex: 0 0 auto;
          width: 30%; /* 3 cards (30% * 3 = 90%) + gaps + edges */
          height: 550px;
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
          /* Shadow removed as requested */
          border: 1px solid rgba(251, 191, 36, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .curved-frame-slide:hover .curved-picture-frame {
          transform: scale(1.02);
          /* Shadow removed as requested */
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
          overflow: hidden;
        }

        /* Category Image Wrapper - Clean display */
        .category-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .category-image {
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
        }

        .curved-frame-slide:hover .category-image {
          transform: scale(1.1);
        }

        /* Hover Overlay - Hidden by default, shown on hover */
        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }

        .curved-frame-slide:hover .hover-overlay {
          opacity: 1;
        }

        .category-name-hover {
          font-size: 1.75rem;
          font-weight: 700;
          color: white;
          text-align: center;
          margin-bottom: 0.5rem;
          transform: translateY(20px);
          transition: transform 0.3s ease;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }

        .curved-frame-slide:hover .category-name-hover {
          transform: translateY(0);
        }

        /* Text Content - For fallback only */
        .category-text-content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
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
          bottom: 10px; /* Moved up to sit on the wave */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
          z-index: 20; /* Higher than wave (z-index: 10) */
        }

        /* Navigation buttons */
        .curved-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff; /* Solid white for contrast */
          border: 2px solid #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #d97706;
          position: relative;
          z-index: 100;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Shadow for lift */
        }

        .curved-nav-btn:hover {
          background: #fffbeb; /* Very light amber on hover */
          transform: scale(1.1);
          color: #b45309;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .curved-nav-btn:active {
          transform: scale(0.95);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .curved-frame-wrapper {
            height: 500px;
          }

          .curved-frame-slide {
            width: 65%; /* Show 1 main card + partials on mobile */
            height: 500px;
          }

          .curved-frame-track {
            padding: 0;
            gap: 0;
          }

          .category-icon {
            font-size: 3.5rem;
          }

          .category-name {
            font-size: 1.25rem;
          }

          .curved-nav-container {
            bottom: 5px; /* Adjusted for smaller mobile wave */
          }

          .curved-nav-btn {
            width: 42px;
            height: 42px;
          }

          .wave-top,
          .wave-bottom {
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .curved-frame-wrapper {
            height: 450px;
          }

          .curved-frame-slide {
            width: 55%; /* Reduced width to show adjacent cards (0.6 || 1 || 0.6 layout) */
            height: 450px;
          }

          .category-icon {
            font-size: 3rem;
          }

          .category-name {
            font-size: 1.1rem;
          }

          .wave-top,
          .wave-bottom {
            height: 40px;
          }
        }
      `}</style>
    </section >
  )
}
