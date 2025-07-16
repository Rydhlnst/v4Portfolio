'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

const LanguageSelector = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()

  const currentLocale = params.locale as 'en' | 'id' || 'en'

  const handleSelect = (newLocale: 'en' | 'id') => {
    setOpen(false)

    // Replace the locale in URL
    const segments = pathname.split('/')
    segments[1] = newLocale // because [locale] is always at index 1
    const newPath = segments.join('/')

    router.push(newPath)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'text-foreground font-bold text-xl px-3 py-2 border border-black shadow-[3px_3px_0px_black] bg-white uppercase',
          'transition duration-200 w-[60px] text-center'
        )}
        aria-label="Toggle Language Dropdown"
      >
        {currentLocale.toUpperCase()}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 mt-2 w-full border border-black bg-white shadow-[3px_3px_0px_black] z-50"
          >
            {['en', 'id'].map((item) => (
              <button
                key={item}
                onClick={() => handleSelect(item as 'en' | 'id')}
                className={cn(
                  'w-full px-3 py-2 text-left text-sm font-semibold uppercase hover:bg-black hover:text-white',
                  item === currentLocale && 'bg-black text-white'
                )}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSelector
