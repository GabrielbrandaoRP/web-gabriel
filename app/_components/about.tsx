import { Badge } from "@/components/ui/badge";
import {
  Boxes,
  Code2,
  Lightbulb,
} from "lucide-react";
import React from "react";
import { languages, frameworks, skills } from "../json/infos";





export default function About() {
  return (
    <section data-aos="fade-down" className="w-full p-5 px-10 bg-gray-100 dark:bg-zinc-900 dark:text-black flex flex-col rounded-xl shadow-xl shadow-zinc-300 dark:shadow-zinc-800" id="about">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-cyan-950 dark:text-white">Sobre mim</h1>

        <hr className="border-gray-300 " />
      </div>

      <div className="p-3 py-5" >
        <p className="dark:text-white text-cyan-950">
          Desenvolvo aplicações em ambientes Web e Mobile utilizando das mais
          recente tecnologias do mercado, <br />
          abordando as melhores práticas de código e de negócio. Com foco em
          modernidade e alto desempenho. <br />
          Em busca sempre de aprimorar minhas habilidades encarando novos
          desafios, consigo obter um <br />
          conhecimento contínuo e sólido ideal para quaisquer nichos ao qual
          trabalho. Buscando inovações <br />
          para melhores entregas.
        </p>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-400/30 shadow-lg rounded-lg 
       flex justify-between px-6 py-4 flex-col md:flex-row gap-4">
        <div className="flex gap-6  md:gap-4 p-3 items-center flex-col border-b md:border-0 border-gray-400">
          <div className="flex flex-row items-center gap-3">
            <Code2 size={34} color="#6d28d9"/>
            <p className="dark:text-white ">Linguagens</p>
          </div>
          <div className="flex flex-wrap gap-1">
            {languages.map ((i) => (
               <Badge className="hover:scale-103 cursor-pointer" key={i.id}>{i.label}</Badge>
            ))}
          
          </div>
        </div>

        <div className="flex gap-6  md:gap-4 p-3 items-center flex-col 
          border-b md:border-l md:border-gray-400 max-w-120">
          <div className="flex flex-row items-center gap-3 ">
            <Boxes size={34} color="#1e78d2"/>
            <p className="dark:text-white">FrameWorks/Bibliotecas</p>
          </div>
          <div className="flex flex-wrap gap-1">
              {frameworks.map((item) => (
            <Badge className="hover:scale-103 cursor-pointer" key={item.id}>{item.label}</Badge>
           ))}
          </div>
        </div>

        <div className="flex gap-6  md:gap-4 p-3 items-center flex-col md:border-l border-gray-400">
          <div className="flex flex-row items-center gap-3 ">
            <Lightbulb size={34} color="#eab308"/>
            <p className="dark:text-white">Skills</p>
          </div>

          <div className="flex flex-wrap gap-1">
           {skills.map((item) => (
            <Badge className="hover:scale-103 cursor-pointer" key={item.id}>{item.label}</Badge>
           ))}
          </div>
        </div>
      </div>
    </section>
  );
}
