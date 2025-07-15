'use client'

import React from 'react'
import { motion } from 'framer-motion'
import OurWorkCarousel from './OurWorkCarousel'

const OurWorksSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-background border-t-2 border-black">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Heading */}
        

        {/* Work Card */}
        <OurWorkCarousel />
      </div>
    </section>
  )
}

export default OurWorksSection
