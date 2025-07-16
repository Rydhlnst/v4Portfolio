'use client'

import React from 'react'
import OurWorkCarousel from './OurWorkCarousel'

const OurWorksSection = () => {
  return (
    <section className="w-full py-24  bg-background border-t-2 border-black">
      <div className="max-w-6xl px-4 mx-auto space-y-16">
        <OurWorkCarousel />
      </div>
    </section>
  )
}

export default OurWorksSection
