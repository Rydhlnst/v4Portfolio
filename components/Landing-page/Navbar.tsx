'use client'

import React from 'react'
import { MagnifyingGlass } from "phosphor-react"
import Link from 'next/link'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='w-full fixed top-0 left-0 z-50 bg-background border-b border-black'
    >
      <div className='container mx-auto flex h-20 items-center justify-between px-4'>
        
        {/* Left Side: Logo */} 
        <LanguageSelector/>

        {/* Center: Brand Title */}
        <motion.h1
          className='text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-foreground'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          designeer
        </motion.h1>

        {/* Right Side: Actions */}
        <div className='flex items-center gap-3'>
          {/* Search Button */}
          <Button 
            type="button" 
            aria-label="Search"
            variant="outline"
            className='rounded-none border-2 border-black text-foreground font-bold shadow-[2px_2px_0px_black] hover:bg-black hover:text-background transition'
          >
            <MagnifyingGlass size={18} weight="bold" />
          </Button>

          {/* Menu Button */}
          <Button 
            type="button" 
            variant="outline"
            aria-label="Open menu"
            className='rounded-none px-4 py-2 border-2 group border-black text-sm font-bold text-foreground shadow-[2px_2px_0px_black] hover:bg-black hover:text-white transition'
          >
            <div className='flex items-center gap-2'>
              <span className='hidden sm:inline uppercase tracking-wide'>Menu</span>
              <div className='flex flex-col justify-center gap-[4px]'>
                <div className='w-5 h-[2px] bg-foreground group-hover:bg-background' />
                <div className='w-3 h-[2px] bg-foreground group-hover:bg-background' />
              </div>
            </div>
          </Button>
        </div>

      </div>
    </motion.header>
  )
}

export default Navbar
