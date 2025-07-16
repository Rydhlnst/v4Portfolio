'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { ArrowRight } from 'phosphor-react'
import { usePortfolioStore } from '@/store/portfolio'
import FeaturedProjects from '@/components/Project/FeaturedProject'

const categories = ['All', 'Backend', 'Frontend', 'Mobile', 'Data', 'DevOps'] as const

const projects = [
  {
    title: 'REST API Development',
    category: 'Backend',
    description:
      'Designed and developed a scalable REST API using Node.js and Express for a healthcare provider.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    image: '/images/api.jpg',
  },
  {
    title: 'React Dashboard',
    category: 'Frontend',
    description:
      'Built a customizable analytics dashboard with real-time data visualization using React and D3.js.',
    tech: ['React', 'TypeScript', 'D3.js', 'Material UI'],
    image: '/images/dashboard.jpg',
  },
  {
    title: 'Cross-platform Mobile App',
    category: 'Mobile',
    description:
      'Developed a cross-platform mobile application for event management with offline capabilities.',
    tech: ['React Native', 'Redux', 'Firebase', 'Expo'],
    image: '/images/mobile.jpg',
  },
]

export default function PortfolioPage() {
  const {selectedCategory, searchQuery, setCategory, setSearch} = usePortfolioStore()

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section className="max-w-7xl mx-auto px-4 py-32 flex flex-col">
      {/* Header */}
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Designeer Portfolio
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Browse through my portfolio of software development projects spanning web, mobile, and data technologies.
        </p>
      </div>

      <FeaturedProjects/>
        <div className=" mb-8 flex w-full flex-col items-start ">
            <h2 className="text-4xl font-semibold tracking-tight">
            All 
            <span className="inline-block border-2 border-black bg-secondary px-4 py-1 ml-3 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
                Projects
                </span>
            </h2>
        </div>
        {/* Filter and Search */}
        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
            {/* Search Bar */}
            <div className="w-full max-w-lg relative mb-6">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((cat) => (
                <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    onClick={() => setCategory(cat)}
                    className="text-sm"
                >
                    {cat}
                </Button>
                ))}
            </div>
        </div>

      {/* Count */}
      <p className="text-sm text-center mb-6 text-muted-foreground">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden shadow-md border border-border">
              {/* Header Image */}
              <CardHeader className="p-0 relative h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <Badge
                  variant="default"
                  className="absolute top-2 right-2 text-xs font-semibold"
                >
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent className="p-4 space-y-2">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Link href="#">
                  <Button variant="secondary" size="sm">
                    View details <ArrowRight className='-rotate-45'/>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
