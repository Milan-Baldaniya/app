'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import DragCursor from './DragCursor'

const featuredSlides = [
  {
    title: 'Estate Pepper',
    category: 'Spices',
    region: 'Idukki, Kerala',
    image: encodeURI('/productimage/spices/black pepper.jpeg'),
  },
  {
    title: 'Golden Turmeric',
    category: 'Spices',
    region: 'Erode, Tamil Nadu',
    image: encodeURI('/productimage/spices/Turmeric.jpeg'),
  },
  {
    title: 'Sun Orchard Mango',
    category: 'Fresh Fruits',
    region: 'Ratnagiri, Maharashtra',
    image: encodeURI('/productimage/fresh fruits/mango.jpeg'),
  },
  {
    title: 'Pineapple Crest',
    category: 'Fresh Fruits',
    region: 'Golaghat, Assam',
    image: encodeURI('/productimage/fresh fruits/pineapple.jpeg'),
  },
  {
    title: 'Ruby Pomegranate',
    category: 'Fresh Fruits',
    region: 'Solapur, Maharashtra',
    image: encodeURI('/productimage/fresh fruits/Pomegranate.jpeg'),
  },
  {
    title: 'Estate Maize',
    category: 'Grains',
    region: 'Malwa Plateau',
    image: '/productimage/Grains/Maize.jpeg',
  },
  {
    title: 'Pearl Rice',
    category: 'Grains',
    region: 'Kuttanad, Kerala',
    image: '/productimage/Grains/Rice.jpeg',
  },
  {
    title: 'Glasshouse Tomato',
    category: 'Vegetables',
    region: 'Nashik, Maharashtra',
    image: '/productimage/vegetables/tomato.jpeg',
  },
]

const baseTransform = {
  rotationY: 0,
  translateZ: 150,
  translateY: 0,
  opacity: 1,
}

export default function CurvedSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    dragFree: true,
    containScroll: 'trimSnaps',
  })
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [slideTransforms, setSlideTransforms] = useState(
    featuredSlides.map(() => ({ ...baseTransform }))
  )
  const [visibleSlides, setVisibleSlides] = useState(
    featuredSlides.map(() => false)
  )
  const slideRefs = useRef([])

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const updateVisibility = useCallback(
    (index) => {
      setVisibleSlides((prev) => {
        if (prev[index]) return prev
        const next = [...prev]
        next[index] = true
        return next
      })
    },
    [setVisibleSlides]
  )

  const calculateTransforms = useCallback(() => {
    if (!emblaApi) return
    const viewport = emblaApi.rootNode()
    if (!viewport) return

    const bounds = viewport.getBoundingClientRect()
    const originX = bounds.left + bounds.width / 2
    const nodes = Array.from(emblaApi.slideNodes())

    if (!nodes.length) return

    const transforms = nodes.map((node) => {
      const rect = node.getBoundingClientRect()
      const slideCenter = rect.left + rect.width / 2
      const rawDistance = (slideCenter - originX) / (bounds.width / 2)
      const clamped = Math.max(Math.min(rawDistance, 1.35), -1.35)
      const rotationY = clamped * -32
      const translateZ = 240 - Math.abs(clamped) * 140
      const curveFactor =
        (1 - Math.cos(Math.min(Math.abs(clamped), 1) * Math.PI)) / 2
      const translateY = (1 - curveFactor) * 150 - 75
      const opacity = 1 - Math.min(Math.abs(clamped) * 0.45, 0.55)

      return {
        rotationY,
        translateZ,
        translateY,
        opacity,
      }
    })

    setSlideTransforms(transforms)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    let rafId = null
    const schedule = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        calculateTransforms()
        rafId = null
      })
    }

    schedule()
    emblaApi.on('scroll', schedule)
    emblaApi.on('resize', schedule)
    emblaApi.on('select', schedule)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      emblaApi.off('scroll', schedule)
      emblaApi.off('resize', schedule)
      emblaApi.off('select', schedule)
    }
  }, [emblaApi, calculateTransforms])

  useEffect(() => {
    if (!slideRefs.current.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.slideindex)
            if (!Number.isNaN(index)) {
              updateVisibility(index)
            }
          }
        })
      },
      {
        root: emblaApi?.rootNode() ?? null,
        threshold: 0.35,
      }
    )

    slideRefs.current.forEach((node) => node && observer.observe(node))

    return () => observer.disconnect()
  }, [emblaApi, updateVisibility])

  const getSlideStyle = (index) => {
    const base = slideTransforms[index] ?? baseTransform
    const isHovered = hoveredIndex === index
    const isVisible = visibleSlides[index]
    const hoverBoost = isHovered ? 70 : 0
    const entryBoost = isVisible ? 0 : -180

    return {
      transform: `translateY(${base.translateY}px) translateZ(${
        base.translateZ + hoverBoost + entryBoost
      }px) rotateY(${base.rotationY}deg)`,
      opacity: Math.min(1, base.opacity + (isHovered ? 0.1 : 0)),
    }
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white">
      <DragCursor />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-600">
            Antigravity Prompt · Tricks Style
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Tall, curved, true 3D tilt gallery
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Drag across the arc—every frame bends into depth, matching the
            reference TRICKS slider with real perspective, curvature, and hover
            lift.
          </p>
        </div>

        <div
          className="antigravity-shell"
          data-drag-cursor="true"
          role="region"
          aria-label="3D curved image slider"
        >
          <div className="antigravity-rail" data-drag-cursor="true">
            <div
              className="antigravity-viewport"
              ref={emblaRef}
              data-drag-cursor="true"
            >
              <div className="antigravity-track">
                {featuredSlides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className="antigravity-slide"
                    data-slideindex={index}
                    ref={(node) => {
                      slideRefs.current[index] = node
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    data-cursor-hover="true"
                  >
                    <div
                      className={`antigravity-slide-inner${
                        visibleSlides[index] ? ' is-visible' : ''
                      }`}
                      style={getSlideStyle(index)}
                    >
                      <div
                        className="antigravity-slide-media"
                        style={{ backgroundImage: `url(${slide.image})` }}
                      />
                      <div className="antigravity-slide-meta">
                        <span className="antigravity-tag">{slide.category}</span>
                        <h3>{slide.title}</h3>
                        <p>{slide.region}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="antigravity-controls">
            <button
              type="button"
              className="antigravity-arrow"
              onClick={scrollPrev}
              aria-label="Previous slide"
              data-cursor-hover="true"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M15.5 4.5 8 12l7.5 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="antigravity-arrow"
              onClick={scrollNext}
              aria-label="Next slide"
              data-cursor-hover="true"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="m8.5 4.5 7.5 7.5-7.5 7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .antigravity-shell {
          position: relative;
          margin-top: 4rem;
          padding-bottom: 4rem;
          perspective: 1800px;
          perspective-origin: 50% 35%;
        }

        .antigravity-rail {
          position: relative;
          height: 520px;
          clip-path: path('M0 28% Q50% 0 100% 28% L100% 72% Q50% 100% 0 72% Z');
          -webkit-clip-path: path('M0 28% Q50% 0 100% 28% L100% 72% Q50% 100% 0 72% Z');
          background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.65),
              rgba(255, 255, 255, 0.4)
            ),
            radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.35), transparent);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6),
            inset 0 -12px 30px rgba(217, 153, 42, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 0;
        }

        .antigravity-rail::after {
          content: '';
          position: absolute;
          inset: 6% 4%;
          border: 1px dashed rgba(255, 255, 255, 0.25);
          border-radius: 999px;
          pointer-events: none;
          opacity: 0.4;
        }

        .antigravity-viewport {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: visible;
          transform-style: preserve-3d;
        }

        .antigravity-track {
          display: flex;
          gap: 1.5rem;
          height: 100%;
          padding: 3.5rem 10vw;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .antigravity-slide {
          flex: 0 0 260px;
          height: 100%;
          transform-style: preserve-3d;
          display: flex;
        }

        .antigravity-slide-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.19, 1, 0.22, 1),
            opacity 0.45s ease;
          will-change: transform, opacity;
          filter: drop-shadow(0 40px 55px rgba(0, 0, 0, 0.25));
        }

        .antigravity-slide-media {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 0;
          transform: translateZ(0);
        }

        .antigravity-slide-media::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05) 0%,
            rgba(0, 0, 0, 0.4) 100%
          );
          mix-blend-mode: multiply;
          pointer-events: none;
        }

        .antigravity-slide-meta {
          position: relative;
          padding: 1.75rem 1.25rem 1.5rem;
          color: white;
          z-index: 2;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .antigravity-tag {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .antigravity-slide-meta h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 0.35rem;
          letter-spacing: 0.04em;
        }

        .antigravity-slide-meta p {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          opacity: 0.7;
        }

        .antigravity-slide-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }

        .antigravity-slide-inner:hover::before {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .antigravity-shell::before {
          content: '';
          position: absolute;
          inset: auto 12% -4rem;
          height: 160px;
          background: radial-gradient(
            circle,
            rgba(0, 0, 0, 0.25) 0%,
            rgba(0, 0, 0, 0.02) 55%,
            transparent 70%
          );
          filter: blur(30px);
          opacity: 0.7;
          pointer-events: none;
        }

        .antigravity-controls {
          position: absolute;
          inset: auto 0 0;
          display: flex;
          justify-content: center;
          gap: 1rem;
          transform: translateY(60%);
        }

        .antigravity-arrow {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          border: 1px solid rgba(17, 24, 39, 0.15);
          background: white;
          color: #111827;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(17, 24, 39, 0.12);
          transition: transform 0.3s ease, box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .antigravity-arrow svg {
          width: 22px;
          height: 22px;
        }

        .antigravity-arrow:hover {
          transform: translateY(-4px);
          border-color: rgba(249, 115, 22, 0.8);
          box-shadow: 0 18px 35px rgba(249, 115, 22, 0.25);
          color: #f97316;
        }

        @media (max-width: 1024px) {
          .antigravity-rail {
            height: 460px;
          }

          .antigravity-track {
            padding: 3rem 8vw;
          }

          .antigravity-slide {
            flex-basis: 220px;
          }
        }

        @media (max-width: 768px) {
          .antigravity-shell {
            margin-top: 2rem;
            padding-bottom: 5rem;
          }

          .antigravity-rail {
            height: 420px;
            clip-path: path('M0 25% Q50% 2% 100% 25% L100% 75% Q50% 100% 0 75% Z');
          }

          .antigravity-track {
            padding: 2.5rem 3rem;
            gap: 1rem;
          }

          .antigravity-slide {
            flex-basis: 180px;
          }

          .antigravity-controls {
            transform: translateY(70%);
          }
        }

        @media (max-width: 480px) {
          .antigravity-track {
            padding: 2rem;
          }

          .antigravity-slide {
            flex-basis: 160px;
          }
        }
      `}</style>
    </section>
  )
}
