'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DiagonalBanner from './DiagonalBanner'

// Membuat komponen Button yang bisa dianimasikan oleh Framer Motion
const MotionButton = motion(Button)

const HeroSection = () => {
  return (
    <section className="relative w-full border-t border-b border-foreground bg-background text-foreground">
      {/* Background solid dengan kesan tegas (tanpa blur atau glow) */}
      {/* <div className="absolute inset-0 -z-10 bg-background" /> */}

      {/* <div className='-rotate-90 absolute top-1/2 left-1/10 z-50'>
        <p>Designeer</p>
      </div> */}
      <DiagonalBanner textOverride="DESIGNEER STUDIO" degree={93} top="260%" left="12.3%" className='hidden lg:block'/>
        
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-20 text-center sm:text-left md:px-8">
        <div className="space-y-10">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-extrabold uppercase leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-[6rem]"
          >
            Design. Code. <br />
            <span className="border border-black bg-secondary px-4 text-background shadow-[8px_4px_0_rgba(0,0,0,1)]">
              Experience.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:mx-0 md:text-xl"
          >
            Kami membangun website yang{' '}
            <strong className="text-foreground">berfungsi dan berkesan</strong> — desain
            tajam, UX kuat, dan performa maksimal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center sm:justify-start"
          >
            <Link href="/portfolio">
              {/* Tombol kini menggunakan MotionButton dengan animasi hover dan tap */}
              <MotionButton
                size="lg"
                className="text-base font-bold uppercase border border-foreground shadow-[4px_4px_0px_black] rounded-none text-white"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                Lihat Portofolio
              </MotionButton>
            </Link>
            <Link href="/contact">
              {/* Tombol kini menggunakan MotionButton dengan animasi hover dan tap */}
              <MotionButton
                variant="secondary"
                size="lg"
                className="text-base font-bold uppercase border border-foreground shadow-[4px_4px_0px_black] rounded-none"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                Mari Berkolaborasi
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection