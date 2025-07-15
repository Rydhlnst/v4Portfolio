'use client'

import { easeInOut, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { AnimatedList } from '../magicui/animated-list'

// Daftar prinsip tetap sama
const principles = [
  'Function First',
  'Design with Grit',
  'Code that Scales',
  'Details Matter',
  'Built to Last',
]

// Varian animasi untuk container dan item (untuk efek stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jeda antara animasi setiap item
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easeInOut
    },
  },
}

const AboutSection = () => {
  return (
    <section className="w-full border-t-2 border-black bg-background py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 space-y-20 md:space-y-28">
        {/* --- Bagian Intro & Paragraf --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* HEADLINE KIRI (lebih lebar) */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="lg:col-span-7 space-y-4"
            >
                <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight tracking-tighter">
                We&apos;re not just building{" "}
                <span className="inline-block border-2 border-black bg-secondary px-4 py-1 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
                    websites.
                </span>
                <br />
                <span className="text-primary">
                    We&apos;re building digital{" "}
                    <span className="inline-block border-2 border-black bg-secondary px-4 py-1 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
                    legacies.
                    </span>
                </span>
                </h2>
            </motion.div>

            {/* PARAGRAF KANAN */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                className="lg:col-span-5 text-lg/relaxed font-medium text-muted-foreground"
            >
                <p className="leading-relaxed">
                <span className="font-bold text-foreground">Designeer</span> adalah studio kreatif berbasis digital yang
                berfokus pada desain antarmuka dan pengembangan web. Kami percaya bahwa
                desain yang berani dan fungsional adalah fondasi dari pengalaman digital
                yang hebat.
                </p>
                <p className="mt-4 leading-relaxed">
                Setiap proyek kami dirancang untuk meninggalkan kesan — baik secara
                visual, logis, maupun emosional.
                </p>
            </motion.div>
            </div>


        {/* --- Bagian Prinsip --- */}
        <div className="space-y-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold uppercase text-center"
          >
            Our Core Principles
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 hidden"
          >
           {principles.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                    key={index}
                    variants={itemVariants}
                    className={cn(
                        'group relative overflow-hidden p-6 border-2 border-black shadow-[4px_4px_0px_black] text-lg font-bold uppercase tracking-wide transition-all duration-300 bg-white',
                        'hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 hover:-translate-x-1 hover:text-primary-foreground',
                        isEven ? 'hover:bg-primary' : 'hover:bg-secondary'
                    )}
                    >
                    {/* Elemen dekoratif nomor di background */}
                    <span className="absolute -bottom-2 -right-2 text-7xl font-black text-gray-200/60 z-0">
                        0{index + 1}
                    </span>
                    <span className="relative z-10">{item}</span>
                    </motion.div>
                );
                })}

          </motion.div>

            <AnimatedList className='lg:hidden'>
                {principles.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                        key={index}
                        variants={itemVariants}
                        className={cn(
                            'group relative overflow-hidden p-6 border-2 border-black shadow-[4px_4px_0px_black] text-lg font-bold uppercase tracking-wide transition-all duration-300 bg-white',
                            'hover:shadow-[6px_6px_0px_black] hover:-translate-y-1 hover:-translate-x-1 hover:text-primary-foreground',
                            isEven ? 'hover:bg-primary' : 'hover:bg-secondary'
                        )}
                        >
                        {/* Elemen dekoratif nomor di background */}
                        <span className="absolute -bottom-2 -right-2 text-7xl font-black text-gray-200/60 z-0">
                            0{index + 1}
                        </span>
                        <span className="relative z-10">{item}</span>
                        </motion.div>
                    );
                    })}

            </AnimatedList>

        </div>
      </div>
    </section>
  )
}

export default AboutSection