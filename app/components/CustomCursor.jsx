'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const isHoveringRef = useRef(false)
  const isMagneticRef = useRef(false)
  const magneticTargetRef = useRef(null)
  const animationFrameRef = useRef(null)
  
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    
    if (isTouchDevice) {
      return // Don't initialize custom cursor on touch devices
    }

    const cursor = cursorRef.current
    
    if (!cursor) return

    // Initialize cursor position
    cursorX.current = 0
    cursorY.current = 0

    // Smooth follow speed (faster response)
    const followSpeed = 0.60

    // Update cursor position with smooth easing
    const updateCursor = () => {
      const dx = mouseX.current - cursorX.current
      const dy = mouseY.current - cursorY.current

      cursorX.current += dx * followSpeed
      cursorY.current += dy * followSpeed

      // Apply magnetic effect if active
      if (isMagneticRef.current && magneticTargetRef.current) {
        const target = magneticTargetRef.current
        const rect = target.getBoundingClientRect()
        const targetX = rect.left + rect.width / 2
        const targetY = rect.top + rect.height / 2
        
        const distanceX = targetX - cursorX.current
        const distanceY = targetY - cursorY.current
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
        
        // Magnetic pull distance: 15-25px
        const magneticDistance = 50
        const magneticStrength = 0.5
        
        if (distance < magneticDistance) {
          const pullX = (distanceX / distance) * (magneticDistance - distance) * magneticStrength
          const pullY = (distanceY / distance) * (magneticDistance - distance) * magneticStrength
          
          cursorX.current += pullX
          cursorY.current += pullY
        }
      }

      cursor.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px)`

      animationFrameRef.current = requestAnimationFrame(updateCursor)
    }

    // Helper function to check if element has attribute (safe for all node types)
    const hasAttribute = (element, attr) => {
      if (!element) return false
      // Check if it's an Element node (not Text, Comment, etc.)
      if (element.nodeType !== 1) return false
      // Check if hasAttribute method exists
      if (typeof element.hasAttribute !== 'function') return false
      return element.hasAttribute(attr)
    }

    // Helper function to get the parent Element (skipping non-Element nodes)
    const getParentElement = (node) => {
      if (!node) return null
      let parent = node.parentNode
      while (parent && parent !== document.body) {
        // Only return Element nodes (nodeType 1)
        if (parent.nodeType === 1) {
          return parent
        }
        parent = parent.parentNode
      }
      return parent === document.body ? document.body : null
    }

    // Track mouse movement and check for hover/magnetic elements
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Check element under cursor - wrap in try-catch for safety
      let elementUnderCursor = null
      try {
        elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      } catch (err) {
        // If elementFromPoint fails, reset states
        if (isHoveringRef.current) {
          isHoveringRef.current = false
          cursor.classList.remove('active')
        }
        if (isMagneticRef.current) {
          isMagneticRef.current = false
          magneticTargetRef.current = null
        }
        return
      }

      // If no element found, reset states
      if (!elementUnderCursor) {
        if (isHoveringRef.current) {
          isHoveringRef.current = false
          cursor.classList.remove('active')
        }
        if (isMagneticRef.current) {
          isMagneticRef.current = false
          magneticTargetRef.current = null
        }
        return
      }

      // If it's not an Element node, get the parent Element
      if (elementUnderCursor.nodeType !== 1) {
        elementUnderCursor = getParentElement(elementUnderCursor)
      }
      
      // Check for hover elements
      let hoverElement = elementUnderCursor
      let foundHover = false
      while (hoverElement && hoverElement !== document.body) {
        if (hasAttribute(hoverElement, 'data-cursor-hover')) {
          if (!isHoveringRef.current) {
            isHoveringRef.current = true
            cursor.classList.add('active')
          }
          foundHover = true
          break
        }
        hoverElement = getParentElement(hoverElement)
      }
      
      if (!foundHover && isHoveringRef.current) {
        isHoveringRef.current = false
        cursor.classList.remove('active')
      }

      // Check for magnetic elements
      let magneticElement = elementUnderCursor
      let foundMagnetic = false
      while (magneticElement && magneticElement !== document.body) {
        if (hasAttribute(magneticElement, 'data-magnetic')) {
          if (!isMagneticRef.current || magneticTargetRef.current !== magneticElement) {
            isMagneticRef.current = true
            magneticTargetRef.current = magneticElement
          }
          foundMagnetic = true
          break
        }
        magneticElement = getParentElement(magneticElement)
      }
      
      if (!foundMagnetic && isMagneticRef.current) {
        isMagneticRef.current = false
        magneticTargetRef.current = null
      }
    }

    // Start animation loop
    updateCursor()

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Check if device is touch-enabled
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          border: '2px solid #ffffff',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          zIndex: 9999,
          left: 0,
          top: 0,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.1s ease-out, width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease-out',
        }}
      />
      <style jsx global>{`
        .custom-cursor {
          will-change: transform;
        }
        
        .custom-cursor.active {
          width: 28px !important;
          height: 28px !important;
          opacity: 0.8;
        }
        
        /* Hide default cursor */
        * {
          cursor: none !important;
        }
        
        /* Show default cursor on input, textarea, and select */
        input,
        textarea,
        select,
        button,
        a {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

