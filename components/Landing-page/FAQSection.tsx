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
import { ArrowRight } from 'lucide-react' // Menggunakan lucide-react untuk konsistensi
import { easeOut, motion } from 'framer-motion'

const faqData = [
  {
    question: 'How long does it take to complete a web development project?',
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: 'Can you handle large-scale mobile app development projects?',
    answer:
      'Yes, our team is experienced in building and scaling apps used by thousands of users across platforms.',
  },
  {
    question: 'Can you integrate third-party APIs into our mobile app?',
    answer: 'Absolutely. We frequently work with various APIs, from payment gateways to AI services.',
  },
  {
    question: 'How do you ensure cross-platform compatibility for mobile apps?',
    answer:
      'We follow platform guidelines and use frameworks like React Native to ensure compatibility and performance.',
  },
  {
    question: 'What is your approach to user experience (UX) design?',
    answer:
      'Our UX approach is research-driven, collaborative, and iterative. We prioritize usability and brand consistency.',
  },
]

// Varian animasi untuk efek stagger
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
      easeOut
    },
  },
}

export default function FaqSection() {
  return (
    <section className="py-24 border-t border-b border-black bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {/* Judul Bagian (Dibuat terpusat untuk hierarki yang lebih baik) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter">
            Have Questions?
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-muted-foreground text-lg">
            Find answers to common questions below, or ask your own. We&apos;re here to help.
          </p>
        </motion.div>

        {/* Konten Utama (Grid disesuaikan untuk keseimbangan yang lebih baik) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8"
        >
          {/* Kolom Kiri: Daftar Accordion (Lebih lebar) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((faq, i) => (
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
            <Button variant="outline" className="gap-2 text-base font-bold border-2 border-black shadow-[3px_3px_0px_black] hover:shadow-[4px_4px_0px_black] transition-all">
              View All FAQs <ArrowRight className='w-4 h-4'/>
            </Button>
          </motion.div>

          {/* Kolom Kanan: Formulir Pertanyaan */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 border-2 border-black bg-muted shadow-[4px_4px_0px_black] p-6 md:p-8 space-y-6 h-fit"
          >
            <h3 className="text-2xl font-bold uppercase">Still have a question?</h3>
            <form className="space-y-5">
              {/* Menambahkan Label untuk aksesibilitas dan struktur */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold uppercase">Name</label>
                <Input id="name" placeholder="Enter your name" className='bg-background border-2 border-black'/>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold uppercase">Email</label>
                <Input id="email" placeholder="Enter your email" type="email" className='bg-background border-2 border-black'/>
              </div>
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-bold uppercase">Question</label>
                <Textarea id="question" placeholder="Enter your question here..." rows={5} className='bg-background border-2 border-black'/>
              </div>
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold uppercase shadow-[4px_4px_0px_black] hover:shadow-[5px_5px_0px_black] transition-all py-6 text-base"
              >
                Send Your Message
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
