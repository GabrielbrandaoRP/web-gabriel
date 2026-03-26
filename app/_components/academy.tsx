"use client";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import uniesp from "@/app/assets/uniespcentrouniversitario_logo.jpeg";
import adatech from "@/app/assets/logo-ada.png";
import santander from "@/app/assets/logo-santander.png";
import gran from "@/app/assets/logo-gran.svg";
  

export default function Academy() {

  return (

    <div className="bg-linear-to-b from-gray-600 from-50%  to-white to-90%
      px-4 py-6">

    <section
      // data-aos="fade-right"
      // data-aos-duration="10000"
      className="w-full py-8 px-10 bg-gray-100 dark:bg-zinc-900  dark:text-black 
                  flex flex-col items-center  gap-7 rounded-xl shadow-xl shadow-zinc-300 dark:shadow-zinc-800"
    >
      <div className=" flex items-center gap-4 md:border-r border-gray-400 ">
        <GraduationCap size={38} className="dark:text-white" />
        <h1 className="text-black dark:text-white text-xl">
          Formação acadêmica
        </h1>
      </div>
      {/* Box cursos in col */}
      <div className="flex flex-col gap-5">
        {/* Container curso */}
        <div className="flex items-center  flex-row gap-4">
          <div className="size-15 bg-[#091e42] rounded-full flex items-center justify-center">
            <Image
              src={gran}
              alt="Gran Centro Universitário"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-black dark:text-gray-400">
              Gran Centro Universitário - Pós Graduação
            </h1>
            <p className="text-black dark:text-gray-200">
              Desenvolvimento Fullstack e Cloud Computing | Em andamento
            </p>
          </div>
          {/* Container modal
          <button
            onClick={() => setOpenModal(true)}
            className=" gap-1 rounded-lg border border-gray-300 flex flex-col items-center justify-center p-2"
          >
            <h2 className="text-sm text-black">Certificado</h2>
            <CertificateIcon size={28} color="#000" />
          </button>
          <CertificateModal
            open={openModal}
            onOpenChange={setOpenModal}
            alt="Certificado de conclusão do curso de Desenvolvimento Fullstack e Cloud Computing do Gran Centro Universitário"
          /> */}
        </div>
        {/* Container curso */}
        <div className="flex items-center gap-4">
          <Image
            src={uniesp}
            alt="UNIESP Centro Universitário"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold text-lg text-black dark:text-gray-400">
              UNIESP Centro Universitário
            </h1>
            <p className="text-black dark:text-gray-200">
              Curso Superior de Tecnologia | Sistemas para Internet
            </p>
          </div>
        </div>
        {/* Container curso */}
        <div className="flex items-center gap-4">
          <Image
            src={adatech}
            alt="ada Tech"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="font-bold text-lg text-black dark:text-gray-400">
              ada Tech
            </h1>
            <p className="text-black dark:text-gray-200">
              Formação em Front-end | ReactJS
            </p>
          </div>
        </div>
        {/* Container curso */}
        <div className="flex items-center gap-4">
          <Image
            src={santander}
            alt="ada Tech"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="">
            <h1 className="font-bold text-lg text-black dark:text-gray-400">
              Santander Open Academy | ada Tech
            </h1>
            <p className="text-black dark:text-gray-200">
              Bootcamp Santander Coders Tecnologia para Back-end com Java
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
    </section>
    </div>
  );
}
