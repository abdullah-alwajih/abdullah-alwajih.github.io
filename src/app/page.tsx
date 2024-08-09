"use client";

import {useState} from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experiences from "@/components/Experiences/Experiences";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  const [activePage, setActivePage] = useState<string>("about");

  return (<main>
      <Sidebar/>
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        <Experiences isActive={activePage === 'experiences'}/>
        <Skills isActive={activePage === 'skills'}/>
        <Contact isActive={activePage === 'contact'}/>
        <About isActive={activePage === 'about'}/>
      </div>
    </main>);
}
