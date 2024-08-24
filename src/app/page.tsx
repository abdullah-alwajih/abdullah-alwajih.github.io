"use client";

import About from "@/components/About/About";
import {usePathname} from "next/navigation";

export default function Home() {
  return (<About isActive={usePathname() === '/'}/>);
}
