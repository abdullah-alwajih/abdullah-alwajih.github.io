"use client";

import {usePathname} from "next/navigation";
import Experiences from "@/app/experiences/components/Experiences/Experiences";


export default function ExperiencesPage() {
  return (<Experiences isActive={usePathname() === '/experiences/'}/>);
}
