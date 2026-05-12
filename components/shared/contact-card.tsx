import { EnvelopeSimpleIcon, GlobeHemisphereEastIcon, WhatsappLogoIcon } from '@phosphor-icons/react'
import React from 'react'
import { Badge } from '../ui/badge'

export default function ContactCard() {
  return (
    <div className="flex flex-col gap-3 px-10 py-5 rounded-l-md">
      <Badge variant="outline" className="gap-2 max-w-60">
        <div className="rounded-full bg-green-400 size-2.5"></div>
        <p className="font-normal text-md">Disponivel para novos projetos</p>
      </Badge>

      <h1 className="text-4xl font-bold">
        <span className="text-transparent bg-clip-text bg-linear-to-br from-slate-300 to-slate-500">
          Contate-me para projetos, colaborações e oportunidades.
        </span>
      </h1>

      <p>Trabalho de forma remota em quais quer fuso-horarios.</p>

      <div className="flex gap-3 items-center mt-5">
        <article className="flex p-1.5 bg-gray-200 items-center justify-center w-10 rounded-sm">
         <GlobeHemisphereEastIcon size={32} />
          </article>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500">LOCATION</p>
            <p className="text-sm">JOAO PESSOA | REMOTE</p>
          </div>
      </div>
      
      <div className='flex  items-center gap-2'>
      <article className="flex p-1.5 bg-gray-200 items-center justify-center w-10 rounded-sm">
        🇧🇷
        </article>
      <span className="text-md   text-gray-700 font-semibold font-inter-custom">  +55 83986162904</span>
        <WhatsappLogoIcon size={25} color='gray'/>
      </div>

      
      <article className='flex gap-2'>
        <EnvelopeSimpleIcon size={32} />
        <span className="text-md text-gray-700 font-semibold">gabrielhand15@gmail.com</span>
      </article>
    </div>
  )
}
