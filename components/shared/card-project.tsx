"use client";

import Image, { StaticImageData } from "next/image";
import project1 from "../assets/liq-contax.png";
import {
  ArrowSquareOutIcon,
  CaretLeftIcon,
  CaretRightIcon,
} from "@phosphor-icons/react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import useEmblaCarousel from 'embla-carousel-react'
type ImageItem = {
  src: string | StaticImageData;
  alt: string;
}
interface Props {
  images: ImageItem[]
}
export default function CardProject({images} : Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  return (
    <article
      className="flex flex-col rounded-lg 
       border border-gray-300 bg-zinc-200 dark:bg-zinc-800 
        max-w-50 max-h-60
       "
    >
      <Image src={project1} alt="Projeto 1" className="rounded-lg" />
      <div className="py-3 px-5 flex justify-between">
        <h1 className="font-bold">17° vara cível</h1>
        <Dialog>
          <DialogTrigger asChild>
            <ArrowSquareOutIcon size={22} color="#3f3f46" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-180 sm:h-120 bg-white/20 backdrop-blur-sm">
            <div className="border border-black m-8 rounded-lg">
              <div ref={emblaRef} className="overflow-hidden rounded-lg h-100">
                <div className="flex">
                  {images.map((img, index) => (
                    <div key={index}
                      className="min-w-full relative h-100"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />      
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={scrollPrev} className="absolute left-3 top-1/2 
              -translate-y-1/2 z-10">
                <CaretLeftIcon size={28}/>
              </button>
              <button onClick={scrollNext} className="absolute right-3 top-1/2 
              -translate-y-1/2 z-10">
                <CaretRightIcon size={28}/>
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  );
}
