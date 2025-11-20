'use client'

import { useEffect, useRef } from 'react'

export default function DragCursor() {
  const cursorRef = useRef(null)
  const bubble1Ref = useRef(null)
  const bubble2Ref = useRef(null)
  const bubble3Ref = useRef(null)
  const dragTextRef = useRef(null)

  const isActiveRef = useRef(false)
  const isDraggingRef = useRef(false)
  const dragDirectionRef = useRef(0) // -1 for left, 1 for right, 0 for none

  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const cursorX = useRef(0)
  const cursorY = useRef(0)
  const bubble1X = useRef(0)
  const bubble1Y = useRef(0)
  const bubble2X = useRef(0)
  const bubble2Y = useRef(0)
  const bubble3X = useRef(0)
  const bubble3Y = useRef(0)

  const lastMouseX = useRef(0)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    if (isTouchDevice) {
      return // Don't initialize on touch devices
    }

    const cursor = cursorRef.current
    const bubble1 = bubble1Ref.current
    const bubble2 = bubble2Ref.current
    const bubble3 = bubble3Ref.current
    const dragText = dragTextRef.current

    if (!cursor || !bubble1 || !bubble2 || !bubble3 || !dragText) return

    // Initialize positions
    cursorX.current = 0
    cursorY.current = 0
    bubble1X.current = 0
    bubble1Y.current = 0
    bubble2X.current = 0
    bubble2Y.current = 0
    bubble3X.current = 0
    bubble3Y.current = 0

    // Smooth follow speed (faster response)
    const followSpeed = 0.25
    const bubbleFollowSpeed = 0.12 // Slower for bubbles

    // Update cursor position with smooth easing
    const updateCursor = () => {
      // Main cursor follow
      const dx = mouseX.current - cursorX.current
      const dy = mouseY.current - cursorY.current

      cursorX.current += dx * followSpeed
      cursorY.current += dy * followSpeed

      // Bubble 1 follow (with offset)
      const bubble1Dx = (mouseX.current - 15) - bubble1X.current
      const bubble1Dy = (mouseY.current - 10) - bubble1Y.current
      bubble1X.current += bubble1Dx * bubbleFollowSpeed
      bubble1Y.current += bubble1Dy * bubbleFollowSpeed

      // Bubble 2 follow (with offset)
      const bubble2Dx = (mouseX.current + 20) - bubble2X.current
      const bubble2Dy = (mouseY.current + 15) - bubble2Y.current
      bubble2X.current += bubble2Dx * bubbleFollowSpeed
      bubble2Y.current += bubble2Dy * bubbleFollowSpeed

      // Bubble 3 follow (with offset)
      const bubble3Dx = (mouseX.current - 10) - bubble3X.current
      const bubble3Dy = (mouseY.current + 20) - bubble3Y.current
      bubble3X.current += bubble3Dx * bubbleFollowSpeed
      bubble3Y.current += bubble3Dy * bubbleFollowSpeed

      // Apply rotation based on drag direction
      let rotation = 0
      if (isDraggingRef.current) {
        rotation = dragDirectionRef.current * 6 // ±6 degrees
      }

      // Apply scale based on drag state (1.2x when dragging)
      const scale = isDraggingRef.current ? 1.2 : 1

      // Update cursor position and transform
      cursor.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px) translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`

      // Update bubble positions (move opposite to drag direction)
      const bubbleOffsetX = isDraggingRef.current ? -dragDirectionRef.current * 8 : 0
      const bubbleOffsetY = isDraggingRef.current ? -dragDirectionRef.current * 5 : 0

      bubble1.style.transform = `translate(${bubble1X.current + bubbleOffsetX}px, ${bubble1Y.current + bubbleOffsetY}px) translate(-50%, -50%)`
      bubble2.style.transform = `translate(${bubble2X.current - bubbleOffsetX}px, ${bubble2Y.current - bubbleOffsetY}px) translate(-50%, -50%)`
      bubble3.style.transform = `translate(${bubble3X.current + bubbleOffsetX * 0.5}px, ${bubble3Y.current + bubbleOffsetY * 0.5}px) translate(-50%, -50%)`

      animationFrameRef.current = requestAnimationFrame(updateCursor)
    }

    // Helper function to check if element has drag cursor attribute
    const hasDragCursor = (element) => {
      if (!element) return false
      if (element.nodeType !== 1) return false
      if (typeof element.hasAttribute !== 'function') return false
      return element.hasAttribute('data-drag-cursor')
    }

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY

      // Calculate drag direction
      if (isDraggingRef.current) {
        const deltaX = e.clientX - lastMouseX.current
        if (Math.abs(deltaX) > 2) {
          dragDirectionRef.current = deltaX > 0 ? 1 : -1
        }
        lastMouseX.current = e.clientX
      }

      // Check element under cursor
      let elementUnderCursor = null
      try {
        elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      } catch (err) {
        if (isActiveRef.current) {
          isActiveRef.current = false
          cursor.style.opacity = '0'
          cursor.style.pointerEvents = 'none'
        }
        return
      }

      if (!elementUnderCursor) {
        if (isActiveRef.current) {
          isActiveRef.current = false
          cursor.style.opacity = '0'
          cursor.style.pointerEvents = 'none'
        }
        return
      }

      // If it's not an Element node, get the parent Element
      if (elementUnderCursor.nodeType !== 1) {
        let parent = elementUnderCursor.parentNode
        while (parent && parent !== document.body) {
          if (parent.nodeType === 1) {
            elementUnderCursor = parent
            break
          }
          parent = parent.parentNode
        }
      }

      // Check for drag cursor elements
      let dragElement = elementUnderCursor
      let foundDrag = false
      while (dragElement && dragElement !== document.body) {
        // If we're over a button, hide the cursor
        if (dragElement.tagName === 'BUTTON' || dragElement.closest('button')) {
          if (isActiveRef.current) {
            isActiveRef.current = false
            cursor.style.opacity = '0'
            cursor.style.pointerEvents = 'none'
          }
          return
        }

        if (hasDragCursor(dragElement)) {
          if (!isActiveRef.current) {
            isActiveRef.current = true
            cursor.style.opacity = '1'
            cursor.style.pointerEvents = 'auto'
          }
          foundDrag = true
          break
        }
        dragElement = dragElement.parentElement
      }

      if (!foundDrag && isActiveRef.current) {
        isActiveRef.current = false
        cursor.style.opacity = '0'
        cursor.style.pointerEvents = 'none'
      }
    }

    // Handle mouse down (start drag)
    const handleMouseDown = (e) => {
      if (!isActiveRef.current) return

      // Check if clicking on drag cursor element
      let elementUnderCursor = null
      try {
        elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY)
      } catch (err) {
        return
      }

      if (!elementUnderCursor) return

      if (elementUnderCursor.nodeType !== 1) {
        let parent = elementUnderCursor.parentNode
        while (parent && parent !== document.body) {
          if (parent.nodeType === 1) {
            elementUnderCursor = parent
            break
          }
          parent = parent.parentNode
        }
      }

      let dragElement = elementUnderCursor
      while (dragElement && dragElement !== document.body) {
        if (hasDragCursor(dragElement)) {
          // Don't start drag if clicking on a link or button
          if (dragElement.tagName === 'A' || dragElement.tagName === 'BUTTON' || dragElement.closest('a, button')) {
            return
          }
          isDraggingRef.current = true
          lastMouseX.current = e.clientX
          dragDirectionRef.current = 0
          e.preventDefault() // Allow dragging
          return
        }
        dragElement = dragElement.parentElement
      }
    }


    // Handle mouse up (end drag)
    const handleMouseUp = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false
        dragDirectionRef.current = 0
      }
    }

    // Also detect drag from mouse leave during drag
    const handleMouseLeave = () => {
      if (isDraggingRef.current) {
        isDraggingRef.current = false
        dragDirectionRef.current = 0
      }
    }

    // Start animation loop
    updateCursor()

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
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
      <div className="drag-cursor-container">
        {/* Magnetic Bubbles */}
        <div
          ref={bubble1Ref}
          className="drag-cursor-bubble bubble-1"
        />
        <div
          ref={bubble2Ref}
          className="drag-cursor-bubble bubble-2"
        />
        <div
          ref={bubble3Ref}
          className="drag-cursor-bubble bubble-3"
        />

        {/* Main Cursor */}
        <div
          ref={cursorRef}
          className="drag-cursor"
        >
          <span ref={dragTextRef} className="drag-cursor-text">DRAG</span>
        </div>
      </div>
      <style jsx global>{`
        .drag-cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 10000;
        }

        .drag-cursor {
          position: fixed;
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: #1A0835;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease-out, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
          box-shadow: 0 4px 20px rgba(26, 8, 53, 0.3);
        }

        .drag-cursor-text {
          color: #F2EAF5;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          user-select: none;
          pointer-events: none;
        }

        .drag-cursor-bubble {
          position: fixed;
          border-radius: 50%;
          background: #1A0835;
          pointer-events: none;
          opacity: 0.25;
          will-change: transform;
          filter: blur(20px);
        }

        .bubble-1 {
          width: 35px;
          height: 35px;
        }

        .bubble-2 {
          width: 40px;
          height: 40px;
        }

        .bubble-3 {
          width: 30px;
          height: 30px;
        }

        /* Hide default cursor on drag cursor elements */
        [data-drag-cursor="true"] {
          cursor: none !important;
        }

        [data-drag-cursor="true"] * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

