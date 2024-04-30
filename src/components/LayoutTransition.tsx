"use client";
import {AnimatePresence, motion} from "framer-motion";
import Transition from "@/components/Transition";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import {usePathname} from "next/navigation";
import React from "react";
import {Sora} from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});
export default function LayoutTransition({children,}: Readonly<{ children: React.ReactNode; }>) {
  const key = usePathname();
  return <div className={`page bg-site text-white bg-cover bg-no-repeat  ${sora.variable} font-sora relative`}>
    <TopLeftImg/>
    <Nav/>
    <AnimatePresence mode='wait'>
      <motion.div key={key} className='h-full'>
        <Transition/>
        {children}
      </motion.div>
    </AnimatePresence>
  </div>
}