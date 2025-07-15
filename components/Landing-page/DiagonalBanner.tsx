'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type DiagonalBannerProps = {
  items?: string[]
  className?: string
  degree?: number
  left?: string | number
  top?: string | number
}

const DiagonalBanner = ({
  items = ['WEB', 'UI/UX', 'DESIGN', 'DEVELOPMENT', 'BRANDING'],
  className = '',
  degree = -15,
  left = '50%',
  top = '50%',
}: DiagonalBannerProps) => {
  const text = items.join(' • ')

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-[60] overflow-hidden',
        className
      )}
    >
      <div className="relative w-full h-full">
        <div
          style={{
            position: 'absolute',
            left,
            top,
            transform: `translate(-50%, -50%) rotate(${degree}deg)`,
          }}
          className="w-[300%] overflow-hidden"
        >
          <motion.div
            className="flex whitespace-nowrap text-sm font-extrabold md:text-lg"
            animate={{ x: ['0%', '-25%'] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            {[...Array(10)].map((_, i) => {
              const isEven = i % 2 === 0
              const isSecond = i === 1

              return (
                <span
                  key={i}
                  className={cn(
                    'mx-4 inline-block uppercase tracking-wide px-10 py-3 lg:py-4',
                    'shadow-[8px_4px_0_rgba(0,0,0,1)] border border-black',
                    // Style brutalist: hard edges, thick font, harsh contrast
                    isSecond
                      ? 'bg-white text-black'
                      : isEven
                      ? 'bg-primary text-white'
                      : 'bg-secondary text-primary-foreground'
                  )}
                >
                  {text}
                </span>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DiagonalBanner
