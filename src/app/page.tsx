"use client"


import Hero from "@/Components/Hero";
// import Image from "next/image";
import Project from "@/Components/Project";
import Contact from "@/Components/Contact";
import About from "@/Components/About";
import Aos from"aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "@/Components/Skills";




export default function Home() {
  useEffect (() =>{
    Aos.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    })
    Aos.refresh()
  },[]);
  return (
   <main>
    <Hero />
    <Project />
    <Contact />
    <Skills />
    <About/>
    
   </main>
  );
}
