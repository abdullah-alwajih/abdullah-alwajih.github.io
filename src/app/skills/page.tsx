"use client";

import {usePathname} from "next/navigation";
import Skills from "@/components/Skills/Skills";


export default function SkillsPage() {
  return (<Skills isActive={usePathname() === '/skills/'}/>);
}
