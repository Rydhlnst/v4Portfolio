'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'

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
          {/* Testimonial 1 */}
          <Card className="bg-background border-4 border-black shadow-[6px_6px_0px_black] p-6 flex flex-col justify-between">
            <CardHeader className="p-0 mb-4">
              <Image
              width={0}
              height={0}
                src="/logos/spotify.svg"
                alt="Spotify"
                className="h-6 w-auto dark:invert"
              />
            </CardHeader>
            <CardContent className="space-y-6 p-0 flex-1 flex flex-col justify-between">
              <p className="text-lg font-semibold">
                “Designeer made the impossible feel seamless. From day one, their design precision and code clarity impressed our team.”
              </p>
              <div className="flex items-center gap-3 mt-6">
                <Avatar className="size-12">
                  {/* <AvatarImage src="/avatars/avatar-1.jpg" alt="Amira Lee" /> */}
                  <AvatarFallback>AL</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-bold">Amira Lee</cite>
                  <p className="text-sm text-muted-foreground">Product Lead, Spotify</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card className="bg-secondary border-4 border-black shadow-[6px_6px_0px_black] p-6 flex flex-col justify-between">
            <CardHeader className="p-0 mb-4">
              <Image
              width={0}
              height={0}
                src="/logos/stripe.svg"
                alt="Stripe"
                className="h-6 w-auto dark:invert"
              />
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="text-lg font-semibold">
                “Working with Designeer felt like having an internal team. Fast, bold, and pixel-perfect.”
              </p>
              <div className="flex items-center gap-3 mt-6">
                <Avatar className="size-12">
                  {/* <AvatarImage src="/avatars/avatar-2.jpg" alt="Jason Roy" /> */}
                  <AvatarFallback>JR</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-bold">Jason Roy</cite>
                  <p className="text-sm text-muted-foreground">CTO, Stripe</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card className="bg-background border-4 border-black shadow-[6px_6px_0px_black] p-6 flex flex-col justify-between">
            <CardHeader className="p-0 mb-4">
              <Image
              width={0}
              height={0}
                src="/logos/notion.svg"
                alt="Notion"
                className="h-6 w-auto dark:invert"
              />
            </CardHeader>
            <CardContent className="space-y-6 p-0">
              <p className="text-lg font-semibold">
                “The bold visual direction from Designeer helped redefine our app’s personality and user flow.”
              </p>
              <div className="flex items-center gap-3 mt-6">
                <Avatar className="size-12">
                  {/* <AvatarImage src="/avatars/avatar-3.jpg" alt="Claire Tan" /> */}
                  <AvatarFallback>CT</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-bold">Claire Tan</cite>
                  <p className="text-sm text-muted-foreground">Lead UX, Notion</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
