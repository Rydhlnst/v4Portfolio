'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

import AboutSection from '@/components/Landing-page/AboutSection'
import HeroSection from '@/components/Landing-page/HeroSection'
import OurWorksSection from '@/components/Landing-page/OurWorksSection'
import Testimonials from '@/components/Landing-page/Testimonial'
import FeaturesSection from '@/components/Landing-page/FeaturesSection'
import CallToActionSection from '@/components/Landing-page/CallToAction'
import FaqSection from '@/components/Landing-page/FAQSection'

export default function Home() {
  const [, setActiveSection] = useState('hero')

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.5 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.4 })
  const { ref: worksRef, inView: worksInView } = useInView({ threshold: 0.3 })
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ threshold: 0.3 })
  const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.3 })
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.3 })
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (ctaInView) {
      setActiveSection('cta')
      window.history.replaceState(null, '', '#cta')
    } else if (faqInView) {
      setActiveSection('faq')
      window.history.replaceState(null, '', '#faq')
    } else if (featuresInView) {
      setActiveSection('features')
      window.history.replaceState(null, '', '#features')
    } else if (testimonialsInView) {
      setActiveSection('testimonials')
      window.history.replaceState(null, '', '#testimonials')
    } else if (worksInView) {
      setActiveSection('works')
      window.history.replaceState(null, '', '#works')
    } else if (aboutInView) {
      setActiveSection('about')
      window.history.replaceState(null, '', '#about')
    } else if (heroInView) {
      setActiveSection('hero')
      window.history.replaceState(null, '', '#hero')
    }
  }, [heroInView, aboutInView, worksInView, testimonialsInView, featuresInView, faqInView, ctaInView])

  return (
    <main className="overflow-hidden">

      <section id="hero" ref={heroRef}>
        <HeroSection />
      </section>

      <section id="about" ref={aboutRef}>
        <AboutSection />
      </section>

      <section id="works" ref={worksRef}>
        <OurWorksSection />
      </section>

      <section id="testimonials" ref={testimonialsRef}>
        <Testimonials />
      </section>

      <section id="features" ref={featuresRef}>
        <FeaturesSection />
      </section>

      <section id="faq" ref={faqRef}>
        <FaqSection />
      </section>

      <section id="cta" ref={ctaRef}>
        <CallToActionSection />
      </section>
    </main>
  )
}
