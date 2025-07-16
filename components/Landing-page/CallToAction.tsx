'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const CallToActionSection = () => {
  const t = useTranslations('cta')

  return (
    <section className="py-20 border-y border-black bg-primary text-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight tracking-tight"
          >
            {t('title.part1')} <br />
            {t('title.part2')} <span className="underline underline-offset-4">{t('title.highlight')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-background/90 max-w-2xl"
          >
            {t('description')}
          </motion.p>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/contact">
            <Button
              variant="ghost"
              size="lg"
              className="text-foreground bg-background font-bold uppercase border-2 border-black rounded-none shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all duration-300"
            >
              {t('button')}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToActionSection
