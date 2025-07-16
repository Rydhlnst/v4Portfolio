'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BrainCircuit, MessageSquare, Wrench } from "lucide-react"
import Link from "next/link"

export default function ContactSection() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="text-center border-b border-black pb-6 mb-6">
        <h1 className="text-4xl font-extrabold uppercase tracking-tight">
            <span className="inline-block border-2 border-black bg-secondary px-4 py-1 text-background shadow-[6px_4px_0_rgba(0,0,0,1)]">
                Contact
            </span>
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-3">
          Tell us what you need — design, code, or a crazy idea.
        </p>
      </div>

      {/* Contact Form */}
      <div className="grid md:grid-cols-2 gap-10">
        <Card className="border-2 border-black bg-background rounded-none">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 uppercase">Get in touch</h2>
            <form className="grid gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first">First Name</Label>
                  <Input id="first" placeholder="Ada" className="border-black" />
                </div>
                <div>
                  <Label htmlFor="last">Last Name</Label>
                  <Input id="last" placeholder="Lovelace" className="border-black" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ada@designeer.dev" className="border-black" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+62..." className="border-black" />
                </div>
              </div>

              <div>
                <Label htmlFor="message">What’s your idea?</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Sketch your idea here..."
                  className="border-black"
                />
              </div>

              <Button size="lg" className="w-full hover:bg-secondary">
                SEND IT
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">We usually respond in under 24 hours.</p>
          </CardContent>
        </Card>

        {/* Options */}
        <div className="grid gap-4 h-fit">
          <FeatureCard
            icon={<BrainCircuit className="size-6" />}
            title="Designeer Knowledgebase"
            description="Read guides, get started, or dive into our philosophy."
            linkText="Explore Now"
          />
          <FeatureCard
            icon={<MessageSquare className="size-6" />}
            title="Still Got Questions?"
            description="Check our FAQ section or just shout at us."
            linkText="Go to FAQ"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  linkText,
}: {
  icon: React.ReactNode
  title: string
  description: string
  linkText: string
}) {
  return (
    <Link
      href="#"
      className="border-2 border-black rounded-md p-6 hover:bg-primary hover:text-white group transition-colors"
    >
      <div className="flex items-center gap-3">
        <div className="text-black group-hover:text-white">{icon}</div>
        <h3 className="text-lg font-bold uppercase">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground group-hover:text-white">
        {description}
      </p>
      <p className="mt-4 text-xs font-semibold group-hover:underline">{linkText} →</p>
    </Link>
  )
}
