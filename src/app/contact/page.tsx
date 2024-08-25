"use client";


import {usePathname} from "next/navigation";
import Contact from "@/components/Contact/Contact";

export default function ContactPage() {
  return (<Contact isActive={usePathname() === '/contact/'}/>);
}
