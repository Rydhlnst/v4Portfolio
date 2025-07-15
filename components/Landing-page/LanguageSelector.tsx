'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const LanguageSelector = () => {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState<'EN' | 'ID'>('EN') // Default EN

  const handleSelect = (newLang: 'EN' | 'ID') => {
    setLang(newLang)
    setOpen(false)
    // opsional: localStorage.setItem('lang', newLang)
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
        {lang}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 mt-2 w-full border border-black bg-white shadow-[3px_3px_0px_black] z-50"
        >
          {['EN', 'ID'].map((item) => (
            <button
              key={item}
              onClick={() => handleSelect(item as 'EN' | 'ID')}
              className={cn(
                'w-full px-3 py-2 text-left text-sm font-semibold uppercase hover:bg-black hover:text-white',
                item === lang && 'bg-black text-white'
              )}
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSelector
