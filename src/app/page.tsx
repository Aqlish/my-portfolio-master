"use client";

import Hero from "@/Components/Hero";
import Project from "@/Components/Project";
import Contact from "@/Components/Contact";
import About from "@/Components/About";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Project />
      <Contact />
      <Skills />
      <About />
    </main>
  );
}
