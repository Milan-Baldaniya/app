'use client'

import { useEffect, useRef, useState } from 'react'

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const animationClass = {
    'fade-up': 'animate-fade-in-up',
    'fade-scale': 'animate-fade-in-scale',
    'slide-left': 'animate-slide-in-left',
    'slide-right': 'animate-slide-in-right',
  }[animation]

  return (
    <div
      ref={ref}
      className={`${inView ? animationClass : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
