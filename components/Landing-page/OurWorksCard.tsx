'use client'

import Image from 'next/image'
import { easeOut, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, easeOut },
  },
}

// 👇 Props interface
export interface OurWorkCardProps {
  title: string
  category: string
  timeTaken: string
  description: string
  technologies: string[]
  teamAvatars: string[]
  imageUrl: string
  liveUrl?: string
}

const OurWorkCard = ({
  title,
  category,
  description,
  technologies,
  teamAvatars,
  imageUrl,
  liveUrl,
}: OurWorkCardProps) => {
  return (
    <section className="pt-6">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-8"
        >
          {/* Gambar Kiri */}
          <motion.div variants={itemVariants} className="lg:w-[55%] w-full flex flex-col">
            <div className="border-2 border-black bg-background shadow-[8px_8px_0px_black] overflow-hidden flex-1">
              <Image
                src={imageUrl}
                alt={title}
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Konten Kanan */}
          <motion.div variants={itemVariants} className="lg:w-[45%] w-full flex flex-col">
            <div className="flex-1 flex flex-col justify-between border-2 border-black bg-muted shadow-[8px_8px_0px_black] p-6 md:p-8 space-y-6">
              {/* Deskripsi Proyek */}
              <div className="space-y-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                  {title}
                </h3>
                <p className="text-base font-medium text-foreground !mt-3">
                  {description}
                </p>

                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-bold text-primary hover:underline underline-offset-4 transition-all group"
                  >
                    View Case Study{' '}
                    <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Teknologi & Tim */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-bold uppercase text-base tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-semibold border-2 border-black px-3 py-1 shadow-[2px_2px_0px_black] bg-background"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold uppercase text-base tracking-wider">Core Team</h4>
                  <div className="flex -space-x-3">
                    {teamAvatars.map((avatar, idx) => (
                      <Image
                        key={idx}
                        src={avatar}
                        alt={`Team member ${idx + 1}`}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-background ring-2 ring-black"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://placehold.co/40x40/e5e5e5/18181b?text=A'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurWorkCard
