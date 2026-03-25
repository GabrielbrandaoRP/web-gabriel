"use client"

import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import foto from '@/app/assets/certificado-ada-react.png'
interface PhotoModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  //src: string
  alt: string
}

export function CertificateModal({ open, onOpenChange, alt }: PhotoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border-none bg-transparent p-0 shadow-none [&>button]:rounded-full [&>button]:bg-foreground/80 [&>button]:p-1 [&>button]:text-background [&>button]:opacity-100 [&>button]:hover:bg-foreground">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={foto}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
