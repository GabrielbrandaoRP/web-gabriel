"use client";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { coursesItems } from "../json/infos";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState } from "react";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
const INITIAL_VISIBLE_COUNT = 4;
export default function Academy() {
  const [open, setOpen] = useState(false)

   const visibleItems = coursesItems.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenItems = coursesItems.slice(INITIAL_VISIBLE_COUNT);
  const hasHiddenItems = hiddenItems.length > 0;
  return (

    <section className="px-4 py-6 md:px-60">
    <div
      // data-aos="fade-right"
      // data-aos-duration="10000"
      className="w-full py-8 px-10 bg-gray-100 dark:bg-zinc-900  dark:text-black 
                  flex flex-col items-center  gap-7 rounded-xl shadow-xl shadow-zinc-300 dark:shadow-zinc-800"
    >
      <div className=" flex items-center gap-4  border-gray-400 ">
        <GraduationCap size={38} className="dark:text-white" />
        <h1 className="text-black dark:text-white text-xl">
          Formação acadêmica
        </h1>
      </div>
        {/* Box cursos in col */}
        
        <Collapsible open={open} onOpenChange={setOpen} className="w-full">
          <div className="flex flex-col gap-5">
            {visibleItems.map(({ id, icon, alt, title, description }) => (
              <div key={id} className="flex items-center flex-row gap-4">
                <div className="size-15 rounded-full flex items-center justify-center shrink-0">
                  <Image
                    src={icon}
                    alt={alt}
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-black dark:text-gray-400">
                    {title}
                  </h2>
                  <p className="text-black dark:text-gray-200">{description}</p>
                </div>
              </div>
            ))}

             <CollapsibleContent className="flex flex-col gap-5">
              {hiddenItems.map(({ id, icon, alt, title, description }) => (
                <div key={id} className="flex items-center flex-row gap-4">
                  <div className="size-15 rounded-full flex items-center justify-center shrink-0">
                    <Image
                      src={icon}
                      alt={alt}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-black dark:text-gray-400">
                      {title}
                    </h2>
                    <p className="text-black dark:text-gray-200">{description}</p>
                  </div>
                </div>
              ))}
            </CollapsibleContent>                
          </div>
          {hasHiddenItems && (
            <CollapsibleTrigger asChild>
              <button
                className="w-full mt-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground"
              >
                {open ? (
                  <>
                    <CaretUpIcon className="size-4" />
                    <span className="font-semibold">Ver menos</span>
                  </>
                ) : (
                  <>
                    <CaretDownIcon className="size-4" />
                    <span className="font-semibold">Ver mais ({hiddenItems.length})</span>
                  </>
                )}
              </button>
            </CollapsibleTrigger>
          )}
        </Collapsible>
      
    </div>
    </section>
  );
}

function CourseItem({
  i,
}: {
    i: {
        id: number;
    icon: string;
    alt: string;
    title: string;
    description: string;
  }
  }) {
  return (
    <div key={i.id} className="flex items-center  flex-row gap-4">
              <div className="size-15 rounded-full flex items-center justify-center">
                <Image
                  src={i.icon}
                  alt={i.alt}
                  height={50}
                  width={50}
                  
                  className="rounded-full"

                />
              </div>
              <div>
                <h1 className="dark:text-white font-bold">{i.title}</h1>
                <p className="dark:text-white">{i.description}</p>
              </div>
            </div>
  )
}
