"use client"

import About from "../components/shared/about";
import Academy from "../components/shared/academy";
import Footer from "../components/shared/footer";
import Hero from "../components/shared/hero";
import Works from "../components/shared/works";
// import { ReactLenis } from "@lenis/react";

export default function Home() {
  return (
 
      
    <main className="flex flex-col ">
      <div className="flex flex-col 
       bg-linear-to-b from-zinc-300  via-neutral-200  to-zinc-300 
      dark:bg-linear-to-t dark:from-zinc-900  dark:via-neutral-800  dark:to-zinc-900 
      pb-18">
      <Hero/>
      <About/>
      <Works/>
      <Academy/>
      <Footer/>

      </div>
      
    </main>
   
  );
}
