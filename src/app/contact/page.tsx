"use client";


import {usePathname} from "next/navigation";
import Contact from "@/app/contact/components/Contact/Contact";

export default function ContactPage() {
  return (<Contact isActive={usePathname() === '/contact/'}/>);
}
