// import Image from "next/image";

import HomeClient from "./HomeClient";

export const metadata = { 
  title: "Jacob Shaul | Home",
  description: "Hi! My name is Jacob Shaul, a full-stack high school developer.",
}

export default function Home() {
  return (
    <HomeClient/>
  );
}
