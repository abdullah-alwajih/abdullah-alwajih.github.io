"use client";
import {AnimatePresence, motion} from "framer-motion";
import Transition from "@/components/Transition";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import {usePathname} from "next/navigation";
import React from "react";

export default function LayoutTransition({children,}: Readonly<{ children: React.ReactNode; }>) {
  const key = usePathname();
  return <AnimatePresence mode='wait'>
    <motion.div key={key} className='h-full'>
      <Transition/>
      <TopLeftImg/>
      <Nav/>
      <Header/>
      {children}
    </motion.div>
  </AnimatePresence>
}