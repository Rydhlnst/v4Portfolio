'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowRight } from 'lucide-react'
import { easeOut, motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      easeOut,
    },
  },
}

export default function FaqSection() {
  const t = useTranslations('faq')
  const faqList = t.raw('list') as { question: string; answer: string }[]

  return (
    <section className="py-24 border-t border-b border-black bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
            {t('heading')}
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-muted-foreground text-lg">
            {t('subheading')}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {/* Accordion */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqList.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-2 border-black shadow-[4px_4px_0px_black] bg-muted text-foreground transition-transform duration-200 hover:-translate-y-1"
                >
                  <AccordionTrigger className="px-6 py-4 text-left text-base md:text-lg font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button
              variant="outline"
              className="gap-2 text-base font-bold border-2 border-black shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_black] transition-all"
            >
              {t('viewAll')} <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 border-2 border-black bg-muted shadow-[4px_4px_0px_black] p-6 md:p-8 space-y-6 h-fit"
          >
            <h3 className="text-2xl font-bold uppercase">{t('stillQuestion')}</h3>
            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase">
                  {t('form.name')}
                </label>
                <Input
                  id="name"
                  placeholder={t('form.placeholder.name')}
                  className="bg-background border-2 border-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase">
                  {t('form.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('form.placeholder.email')}
                  className="bg-background border-2 border-black"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-bold uppercase">
                  {t('form.question')}
                </label>
                <Textarea
                  id="question"
                  rows={5}
                  placeholder={t('form.placeholder.question')}
                  className="bg-background border-2 border-black"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold uppercase shadow-[4px_4px_0px_black] hover:shadow-[5px_5px_0px_black] transition-all py-6 text-base"
              >
                {t('form.submit')}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
