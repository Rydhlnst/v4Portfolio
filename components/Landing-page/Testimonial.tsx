'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

const dataItems = [
  {
    logo: '/logos/spotify.svg',
    alt: 'Spotify',
    background: 'bg-background',
    quote:
      '“Designeer made the impossible feel seamless. From day one, their design precision and code clarity impressed our team.”',
    name: 'Amira Lee',
    position: 'Product Lead, Spotify',
    fallback: 'AL',
    // avatar: '/avatars/avatar-1.jpg',
  },
  {
    logo: '/logos/stripe.svg',
    alt: 'Stripe',
    background: 'bg-secondary',
    quote:
      '“Working with Designeer felt like having an internal team. Fast, bold, and pixel-perfect.”',
    name: 'Jason Roy',
    position: 'CTO, Stripe',
    fallback: 'JR',
    // avatar: '/avatars/avatar-2.jpg',
  },
  {
    logo: '/logos/notion.svg',
    alt: 'Notion',
    background: 'bg-background',
    quote:
      '“The bold visual direction from Designeer helped redefine our app’s personality and user flow.”',
    name: 'Claire Tan',
    position: 'Lead UX, Notion',
    fallback: 'CT',
    // avatar: '/avatars/avatar-3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28 border-t-2 border-black bg-background">
      <div className="mx-auto max-w-6xl px-6 space-y-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter border-4 border-black inline-block px-4 py-2 bg-primary text-background shadow-[6px_6px_0px_black]">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium">
            Real feedback from brands and founders who’ve partnered with Designeer to launch outstanding products.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {dataItems.map((item, index) => (
            <Card
              key={index}
              className={`${item.background} border-4 border-black shadow-[6px_6px_0px_black] p-6 flex flex-col justify-between`}
            >
              <CardHeader className="p-0 mb-4">
                <Image
                  src={item.logo}
                  alt={item.alt}
                  width={0}
                  height={0}
                  className="h-6 w-auto dark:invert"
                />
              </CardHeader>
              <CardContent className="space-y-6 p-0 flex-1 flex flex-col justify-between">
                <p className="text-lg font-semibold">{item.quote}</p>
                <div className="flex items-center gap-3 mt-6">
                  <Avatar className="size-12">
                    {/* <AvatarImage src={item.avatar} alt={item.name} /> */}
                    <AvatarFallback>{item.fallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-bold">{item.name}</cite>
                    <p className="text-sm text-muted-foreground">{item.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
