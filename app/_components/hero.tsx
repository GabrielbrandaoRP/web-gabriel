'use client'
import Image from "next/image";
import perfilPic from "../assets/face-edited.png";
import { ChevronDown, MoveDown } from "lucide-react";
import Lottie from "lottie-react";
import code from '../assets/animations/code-animation.json'
import idea from '../assets/animations/idea-lamp.json'
import platform from '../assets/animations/platforms.json'

export default function Hero() {
  return (
    <section  className="w-full flex flex-col-reverse p-5 mt-20 
     
     bg-radial-[at_50%_50%] from-gray-500 dark:from-zinc-950 to-gray-200 dark:to-zinc-800
      shadow-xl shadow-zinc-300 dark:shadow-zinc-800
     rounded-2xl justify-between items-center" id="inicio">
      <div className="flex flex-row gap-4 items-center">
      <Lottie
        className="size-22"
        animationData={idea}
        loop={true}
        />
         <MoveDown size={32}/>
      <Lottie
        className="size-26"
        animationData={code}
        loop={true}
        />
          <MoveDown size={32}/>
      <Lottie
        className="size-28"
        animationData={platform}
        loop={true}
        />


      </div>
        
      <div className="flex flex-col justify-between gap-10">
        <div className="gap-2 flex flex-col px-5 pt-2">
        <p className="text-lg">Olá, eu sou o Gabriel Brandão</p>
        <h3 className="font-semibold text-2xl">Desenvolvedor de Software</h3>

        <hr className="border-gray-400 my-2" />

        <p className="font-medium ">
          Transformo as ideias do seu negócio em sistemas robustos
        </p>

        </div>
      </div>

      <div
        className="rounded-full size-35 
             shadow-2xl" 
      >
        <Image
          src={perfilPic}
          alt="Gabriel Brandão"
          priority
          width={100}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
