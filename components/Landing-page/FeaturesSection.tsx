'use client'

import { motion } from 'framer-motion'
import { Code, DeviceMobile, Monitor, Palette, Repeat, Rocket } from 'phosphor-react'
import { useTranslations } from 'next-intl'

const FeaturesSection = () => {
  const t = useTranslations('features')
  const featureList = t.raw('list') as {
    icon: keyof typeof icons
    title: string
    description: string
  }[]

  const icons = {
    Palette,
    Code,
    DeviceMobile,
    Rocket,
    Repeat,
    Monitor,
  }

  return (
    <section className="py-24 border-y border-black bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-center mb-16"
        >
          {t('heading.part1')}{' '}
          <span className="border border-black px-2 bg-primary text-background shadow-[4px_4px_0px_black]">
            {t('heading.part2')}
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, i) => {
            const Icon = icons[feature.icon]

            let bgColor = 'bg-background'
            let textColor = 'text-foreground'

            if (i === 0 || i === 5) {
              bgColor = 'bg-primary'
              textColor = 'text-background'
            } else if (i === 1) {
              bgColor = 'bg-white'
            } else if (i === 2 || i === 3) {
              bgColor = 'bg-secondary'
              textColor = 'text-background'
            }

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
                className={`border-2 border-black shadow-[6px_6px_0px_black] p-6 flex flex-col gap-4 ${bgColor} ${textColor}`}
              >
                <Icon className="w-8 h-8" />
                <h3 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
                <p className="text-base leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
