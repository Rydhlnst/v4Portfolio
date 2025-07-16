'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import DiagonalBanner from './DiagonalBanner'
import { useTranslations } from 'next-intl'

const MotionButton = motion(Button)

const HeroSection = () => {
  const t = useTranslations('hero')

  return (
    <section className="relative w-full border-t border-b border-foreground bg-background text-foreground">
      <DiagonalBanner textOverride="DESIGNEER — UI/UX, Web, and Mobile Product Studio" degree={93} top="170%" left="12.3%" className='hidden lg:block'/>
      <DiagonalBanner degree={30} left={"95%"} top={"35%"}/>
      <DiagonalBanner degree={-10} top={"90%"} className=""/>
        
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-20 text-center sm:text-left md:px-8">
        <div className="space-y-10">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl font-extrabold uppercase leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-[6rem]"
          >
            {t('title.part1')} <br />
            <span className="border border-black bg-secondary px-4 text-background shadow-[8px_4px_0_rgba(0,0,0,1)]">
              {t('title.part2')}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground sm:mx-0 md:text-xl"
          >
            {t('subheading')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center sm:justify-start"
          >
            <Link href="#our-works">
              <MotionButton
                size="lg"
                className="text-base font-bold uppercase border border-foreground shadow-[4px_4px_0px_black] rounded-none text-white"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {t('cta.portfolio')}
              </MotionButton>
            </Link>
            <Link href="/contact">
              <MotionButton
                variant="secondary"
                size="lg"
                className="text-base font-bold uppercase border border-foreground shadow-[4px_4px_0px_black] rounded-none"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {t('cta.contact')}
              </MotionButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
