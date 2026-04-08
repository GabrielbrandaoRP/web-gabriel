"use client"
import CardProject from '../_components/card-project'
import img1 from "../assets/face.png"
import img2 from "../assets/logo-santander.png"
import img3 from "../assets/liq-contax.png"

 const imagesVara17 = [
    { src: img1, alt: "Imagem 1" },
    { src: img2, alt: "Imagem 2" },
    { src: img3, alt: "Imagem 3" },
  ]

export default function Projects() {
  return (
    <section className="px-4 py-6 md:px-60 pt-25">
      <div className='flex flex-wrap gap-2'>
        <CardProject  images={imagesVara17}/>
        <CardProject  images={imagesVara17}/>
        <CardProject  images={imagesVara17}/>
        <CardProject  images={imagesVara17}/>
      </div>
    </section>
  )
}
