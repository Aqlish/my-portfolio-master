"use client";

import Hero from "@/Components/Hero";
import Project from "@/Components/Project";
import Contact from "@/Components/Contact";
import About from "@/Components/About";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main>
      <h1 className="pl-[200px]">Hello Aqsa</h1>
      <Hero />
      <Project />
      <Contact />
      <Skills />
      <About />
    </main>
  );
}
