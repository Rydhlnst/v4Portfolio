'use client'

import * as React from 'react'
import { useState } from 'react'
import {
  ChatCircleDots,
  Sparkle,
  PaperPlaneRight,
  X,
} from 'phosphor-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { useTranslations } from 'next-intl'

const BotButtonWithDialog = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const isMobile = useMediaQuery('(max-width: 767px)')
  const t = useTranslations('bot')

  const brutalistStyle =
    'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_black] rounded-none'

  const handleQuickReply = (text: string) => {
    setInput(text)
  }

  const quickReplies = t.raw('quickReplies') as string[] || []

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-[999]"
        >
          <Button
            variant="outline"
            size="icon"
            className={`${brutalistStyle} h-14 w-14 p-0 hover:bg-foreground hover:text-background`}
            aria-label="Open Bot Assistant"
          >
            <ChatCircleDots size={28} weight="bold" />
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" />
        <div
          className={`z-[9999] p-0 ${
            isMobile
              ? 'fixed inset-0 flex flex-col bg-background text-foreground'
              : `fixed bottom-[100px] right-6 flex h-[500px] w-[380px] flex-col ${brutalistStyle}`
          }`}
        >
          <DialogHeader className="flex flex-row items-center justify-between border-b-2 border-foreground p-4">
            <DialogTitle className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <Sparkle weight="bold" />
              {t('title')}
            </DialogTitle>
            <DialogClose asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none hover:bg-foreground/10"
              >
                <X size={20} />
              </Button>
            </DialogClose>
          </DialogHeader>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            <div className="flex">
              <div className="max-w-[80%] rounded-b-lg rounded-tr-lg bg-muted p-3 text-sm">
                <p>{t('welcome')}</p>
              </div>
            </div>
          </div>

          {/* Quick Replies */}
          <div className="px-4 pt-2 flex overflow-x-auto gap-2 border-t border-dashed border-foreground/30 pb-2">
            {quickReplies.map((reply, index) => (
              <Button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="text-xs rounded-none border-2 border-foreground shadow-[2px_2px_0_black] hover:bg-foreground hover:text-background"
                variant="outline"
              >
                {reply}
              </Button>
            ))}
          </div>

          {/* Input & Send */}
          <div className="flex items-center gap-2 border-t-2 border-foreground p-4">
            <Input
              placeholder={t('placeholder')}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-none border-2 border-foreground focus-visible:ring-0"
            />
            <Button
              size="icon"
              className={`${brutalistStyle} h-10 w-10 flex-shrink-0`}
              aria-label={t('send')}
            >
              <PaperPlaneRight weight="bold" />
            </Button>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  )
}

export default BotButtonWithDialog
