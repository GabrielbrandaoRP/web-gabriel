"use client";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";


const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#about" },
  { label: "Portifólio", href: "#portifolio" },
  { label: "Contato", href: "#contato" },
];

export default function NavBar() {
 const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  return (
    

    <>
      
 {!menuOpen && (
        <header
          className="h-15 rounded-xl fixed top-4 inset-x-0 z-50
          flex p-4 px-6 md:px-8 justify-between items-center
          mx-3 md:mx-60
          bg-black/10 backdrop-blur-sm dark:bg-black/20"
        >
         
          <Link href="/" className="flex flex-row gap-4 items-center">
            <h1 className="text-black dark:text-white text-2xl font-semibold">
              .gabriel brandão
            </h1>
          </Link>

      
          <nav className="hidden md:flex gap-6 text-black dark:text-white">
            <Link href="#">Home</Link>
            <Link href="#">Sobre</Link>
            <Link href="#">Projetos</Link>
            <Link href="#">Contato</Link>
          </nav>

          
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-black dark:text-white text-2xl"
          >
            <ListIcon size={32} />
          </button>
        </header>
      )}

   
      <div
        className={`
          fixed inset-0 z-50
          bg-black/10 dark:bg-black/20 backdrop-blur-md
          flex flex-col items-center justify-center gap-8
          text-2xl text-black dark:text-white
          transition-all duration-300
          ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
        `}
      >
       
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-10 right-10 text-3xl"
        >
          <XIcon size={32} />
        </button>

        <Link onClick={() => setMenuOpen(false)} href="#">
          Home
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="#">
          Sobre
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="#">
          Projetos
        </Link>
        <Link onClick={() => setMenuOpen(false)} href="#">
          Contato
        </Link>
      </div>
    </>
  );
}
