"use client";


import Projects from "@/components/Projects/Projects";
import {usePathname} from "next/navigation";

export default function Portfolio() {

  return (
    <article className={`portfolio ${usePathname() === '/portfolio/' ? "active" : ""}`}>

      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>


      <Projects/>




    </article>
  );
}
