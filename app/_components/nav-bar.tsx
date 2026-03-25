"use client";


import { ChevronsUp } from "lucide-react";
import Link from "next/link";


const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#about" },
  { label: "Portifólio", href: "#portifolio" },
  { label: "Contato", href: "#contato" },
];

export default function NavBar() {

  return (
    <header className="h-15 rounded-xl fixed top-4 inset-x-0 z-50
    flex p-4 px-8 justify-between items-center
    mx-3
    bg-black/10 backdrop-blur-sm dark:bg-black/20 
     
     ">
      <div>
        <Link href="/" className="flex flex-row gap-4 items-center">
          <h1 className="text-black dark:text-white text-2xl font-semibold">
            Gabriel Brandão
          </h1>
          <div className="mx-auto bg-black rounded-lg dark:bg-gray-100">
            <ChevronsUp size={34} className="text-gray-100 dark:text-black" />
          </div>
        </Link>
      </div>

    
      <nav
        className="hidden items-center gap-1 "
        aria-label="Menu principal"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-black dark:text-gray-100 transition-colors
              hover:scale-105 hover:bg-gray-200 dark:hover:bg-zinc-800"
          >
            {link.label}
          </Link>
        ))}
      </nav>

     

    </header>
  );
}
