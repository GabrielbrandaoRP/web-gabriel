"use client"

import About from "./_components/about";
import Academy from "./_components/academy";
import Hero from "./_components/hero";
import { ToggleModeColor } from "./_components/toggle-mode-color";
import Works from "./_components/works";


export default function Home() {
  return (
    <main className="flex flex-col gap-15 pt-5 w-full px-4">
      
      <Hero/>
      <About/>
      <Works/>
      <Academy/>
      <ToggleModeColor/>
    </main>
  );
}
