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



// 'use client'

// import { useState, useEffect, useCallback } from 'react'
// import { motion, useSpring, useMotionValue } from 'framer-motion'

// const CustomCursor = () => {
//   const cursorX = useMotionValue(0)
//   const cursorY = useMotionValue(0)

//   const springConfig = { damping: 25, stiffness: 700 }
//   const cursorXSpring = useSpring(cursorX, springConfig)
//   const cursorYSpring = useSpring(cursorY, springConfig)

//   const [isHovered, setIsHovered] = useState(false)
//   const [isOverText, setIsOverText] = useState(false)

//   const updateCursorPosition = useCallback((e) => {
//     cursorX.set(e.clientX)
//     cursorY.set(e.clientY)
//   }, [cursorX, cursorY])

//   const updateCursorState = useCallback((e) => {
//     const target = e.target
//     setIsHovered(target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button'))
    
//     const isText = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI'].includes(target.tagName)
//     setIsOverText(isText)

//     if (isText) {
//       target.style.transition = 'transform 5s cubic-bezier(0.34, 1.56, 0.64, 1)'
//       target.style.transform = 'scale(1.1)'
//       target.style.transformOrigin = `${e.clientX}px ${e.clientY}px`
//     } else {
//       document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, li').forEach((el) => {
//         (el).style.transform = 'scale(1)'
//       })
//     }
//   }, [])

//   useEffect(() => {
//     window.addEventListener('mousemove', updateCursorPosition)
//     window.addEventListener('mouseover', updateCursorState)

//     return () => {
//       window.removeEventListener('mousemove', updateCursorPosition)
//       window.removeEventListener('mouseover', updateCursorState)
//     }
//   }, [updateCursorPosition, updateCursorState])

//   return (
//     <motion.div 
//       className={`custom-cursor ${isHovered ? 'hover' : ''} ${isOverText ? 'over-text' : ''}`}
//       style={{
//         left: cursorXSpring,
//         top: cursorYSpring,
//       }}
//     />
//   )
// }

// export default CustomCursor;