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

const BotButtonWithDialog = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width: 767px)')

  const brutalistStyle =
    'border-2 border-foreground bg-background text-foreground shadow-[4px_4px_0px_black] rounded-none'

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Floating Button */}
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
            className={`${brutalistStyle} h-14 w-14 p-0 transition-all duration-200 hover:bg-foreground hover:text-background`}
            aria-label="Open Bot Assistant"
          >
            <ChatCircleDots size={28} weight="bold" />
          </Button>
        </motion.div>
      </DialogTrigger>

      {/* Custom Dialog Content via Portal */}
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" />

        <div
          className={`z-[9999] p-0 ${
            isMobile
              ? 'fixed inset-0 flex flex-col border-none bg-background text-foreground rounded-none'
              : `fixed bottom-[100px] right-6 flex h-[500px] w-[380px] flex-col ${brutalistStyle}`
          }`}
        >
          {/* Header */}
          <DialogHeader className="flex flex-row items-center justify-between border-b-2 border-foreground p-4">
            <DialogTitle className="flex items-center gap-2 text-lg font-bold tracking-tight">
              <Sparkle weight="bold" />
              DesigneerBot
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

          {/* Chat Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex">
              <div className="max-w-[80%] rounded-b-lg rounded-tr-lg bg-muted p-3 text-sm">
                <p>
                  Hai! Ada yang bisa kami bantu seputar layanan desain dan
                  pengembangan kami hari ini?
                </p>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t-2 border-foreground p-4">
            <Input
              placeholder="Ketik pesanmu..."
              className="flex-1 rounded-none border-2 border-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              size="icon"
              className={`${brutalistStyle} h-10 w-10 flex-shrink-0 shadow-[2px_2px_0px_black] transition-all hover:bg-foreground hover:text-background`}
              aria-label="Kirim Pesan"
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
