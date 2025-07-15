'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }} 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background text-foreground border-b-4 border-black"
        >
          <div className="text-3xl font-extrabold uppercase tracking-wide shadow-[4px_4px_0px_black] px-6 py-4 border-2 border-black bg-white">
            Loading...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen