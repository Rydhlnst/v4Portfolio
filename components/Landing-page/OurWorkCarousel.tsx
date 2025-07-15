'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import OurWorkCard from './OurWorksCard'

// Dummy project list — nanti bisa di-*map* dari prop
const projects = [
  {
    title: 'Zenith Fitness App',
    category: 'Mobile App Development',
    timeTaken: '6 months',
    description:
      'An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.',
    technologies: ['React Native', 'Firebase', 'Redux', 'REST API', 'MongoDB'],
    teamAvatars: ['/avatars/avatar-1.jpg', '/avatars/avatar-2.jpg', '/avatars/avatar-3.jpg', '/avatars/avatar-4.jpg'],
    imageUrl: '/images/work-zenith.jpg',
  },
  {
    title: 'Glowy Skin Tracker',
    category: 'Web App Development',
    timeTaken: '4 months',
    description:
      'A skincare tracking app that helps users log routines, monitor changes, and get AI-based suggestions.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'OpenAI', 'Supabase'],
    teamAvatars: ['/avatars/avatar-2.jpg', '/avatars/avatar-4.jpg'],
    imageUrl: '/images/work-glowy.jpg',
  },
  // Add more projects as needed
]

const OurWorkCarousel = () => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length)
  }

  return (
    <section className="relative w-full pb-6 border-foreground">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
            <motion.h2
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-center"
                    >
                      Our <span className="border border-black px-2 bg-primary text-background shadow-[4px_4px_0px_black]">Works</span>
            </motion.h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handlePrev}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full"
            >
                <OurWorkCard {...projects[index]} />
            </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default OurWorkCarousel
