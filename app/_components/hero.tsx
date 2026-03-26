"use client";
import Image from "next/image";
import perfilPic from "../assets/perfil-pc.jpeg";
import {  MoveDown, MoveRight } from "lucide-react";
import Lottie from "lottie-react";
import code from "../assets/animations/code-animation.json";
import idea from "../assets/animations/idea-lamp.json";
import platform from "../assets/animations/platforms.json";

export default function Hero() {
  return (
    <div className="bg-linear-to-b from-white from-50%  to-gray-600 to-90%
       px-4 pt-24 py-6 md:px-60">
      <section
        className="w-full flex flex-col p-6 bg-radial-[at_50%_50%] from-gray-500 dark:from-zinc-950 to-gray-200 dark:to-zinc-800 
        shadow-lg
         shadow-zinc-400 dark:shadow-zinc-800
     rounded-2xl justify-between items-center"
        id="inicio"
      >
        <div className="flex flex-col justify-between gap-10">
          <div className="not-only:flex justify-center">
            <Image
              src={perfilPic}
              alt="Gabriel Brandão"
              priority
              className="rounded-full size-30"
            />
          </div>
          <div className="gap-2 flex flex-col px-5 pt-2">
            <p className="text-md ">Olá, eu sou o Gabriel Brandão</p>
            <h3 className="font-medium text-2xl">Desenvolvedor de Software</h3>

            <hr className="border-gray-400 my-2" />

            <p className="font-medium ">
              Transformo as ideias do seu negócio em sistemas robustos
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <Lottie
            className="size-14 md:size-22"
            animationData={idea}
            loop={true}
          />
          <MoveRight size={26} />
          <Lottie
            className=" size-16 md:size-26"
            animationData={code}
            loop={true}
          />
          <MoveRight size={26} />
          <Lottie
            className="size-20 md:size-28"
            animationData={platform}
            loop={true}
          />
        </div>
      </section>
    </div>
  );
}
