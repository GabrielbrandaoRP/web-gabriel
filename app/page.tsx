"use client"

import About from "./_components/about";
import Academy from "./_components/academy";
import Footer from "./_components/footer";
import Hero from "./_components/hero";

import Works from "./_components/works";


export default function Home() {
  return (
    <main className="flex flex-col ">
      <div className="flex flex-col bg-linear-to-b from-cyan-50 from-25% via-zinc-300 via-75% to-zinc-500 to-100% 
      dark:bg-linear-to-b dark:from-gray-900 dark:from-25% dark:via-zinc-500 dark:via-75% dark:to-zinc-700 dark:to-100%
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
