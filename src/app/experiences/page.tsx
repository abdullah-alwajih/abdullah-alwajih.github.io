"use client";

import {usePathname} from "next/navigation";
import Experiences from "@/components/Experiences/Experiences";


export default function ExperiencesPage() {
  return (<Experiences isActive={usePathname() === '/experiences'}/>);
}
