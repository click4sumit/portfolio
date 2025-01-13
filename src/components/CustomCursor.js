'use client'

import { useState, useEffect } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorHover = (e) => {
      const target = e.target
      setIsHovered(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button'))
    }

    window.addEventListener('mousemove', updateCursorPosition)
    window.addEventListener('mouseover', updateCursorHover)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      window.removeEventListener('mouseover', updateCursorHover)
    }
  }, [])

  return (
    <div 
      className={`custom-cursor ${isHovered ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default CustomCursor

