'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'phosphor-react'
import Link from 'next/link'

const featuredProjects = [
  {
    title: 'Fullstack POS System',
    category: 'Fullstack',
    description: 'Built a scalable multi-tenant Point of Sale system using Next.js, Prisma, PostgreSQL, and Stripe.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind'],
    image: '/images/featured-pos.jpg',
  },
  {
    title: 'AI-Powered Docs Generator',
    category: 'Frontend',
    description: 'Created an AI documentation assistant that generates inline and block comments for dev teams.',
    tech: ['Next.js', 'OpenAI', 'Framer Motion', 'Shadcn UI'],
    image: '/images/featured-ai.jpg',
  },
]

export default function FeaturedProjects() {
  return (
    <div className="mb-16">
      <div className=" mb-8 flex w-full flex-col items-start ">
        <h2 className="text-4xl font-semibold tracking-tight">
          Featured 
          <span className="inline-block border-2 border-black bg-secondary px-4 py-1 ml-3 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
            Projects
            </span>
        </h2>
        <p className="text-muted-foreground max-w-xl text-sm md:text-base">
          A selection of my most impactful and polished work.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-border rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-52 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <Badge className="absolute top-2 left-2 text-xs font-semibold bg-primary text-background">
                Featured
              </Badge>
              <Badge
                variant="outline"
                className="absolute top-2 right-2 text-xs font-semibold"
              >
                {project.category}
              </Badge>
            </div>

            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs hover:bg-primary">
                    {t}
                  </Badge>
                ))}
              </div>
              <Link href="#">
                <Button size="sm" variant="outline" className="mt-3">
                  View details <ArrowRight className="ml-1 -rotate-45" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
