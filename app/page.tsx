"use client"

import About from "./_components/about";
import Academy from "./_components/academy";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import { ToggleModeColor } from "./_components/toggle-mode-color";
import Works from "./_components/works";


export default function Home() {
  return (
    <main className="flex flex-col w-full pb-18">
      <Hero/>
      <About/>
      <Works/>
      <Academy/>
      <Footer/>
      <ToggleModeColor/>
    </main>
  );
}
