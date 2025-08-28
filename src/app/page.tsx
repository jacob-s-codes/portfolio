// import Image from "next/image";

import HomeClient from "./HomeClient";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Jacob Shaul | Home",
  description: "Student | Full Stack Developer | Founder",
  icons: {
    icon: '/favicon.ico'
  }
}


export default function Home() {
  return (
    <HomeClient/>
  );
}
