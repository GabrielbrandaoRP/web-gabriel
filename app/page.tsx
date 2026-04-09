"use client"

import About from "./_components/about";
import Academy from "./_components/academy";
import Footer from "./_components/footer";
import Hero from "./_components/hero";

import Works from "./_components/works";


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
