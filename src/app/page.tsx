import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-4 max-w-2xl">
          <h1 className="text-8xl text-right">Jacob Shaul</h1>
          <div className="flex items-center justify-between text-2xl w-full">
            <h2>Student</h2>
            <h2>|</h2>
            <h2>Full-stack developer</h2>
            <h2>|</h2>
            <h2>Founder</h2>
          </div>
          <h3 className="text-xl">Hi there! My name is Jacob and I'm currently a high school student at San Francisco University High School. I'm passionate about technology and software. You can email me at: <a href="mailto:jacobbshaul@gmail.com" className="hover:text-gray-400">jacobbshaul@gmail.com</a></h3>
        </div>
        <img src="/jacobpic.png" alt="Jacob's Avatar" className="w-96 h-96 rounded-full" />
      </div>
      <p className="mt-[150vh]">hi</p>
    </div>
  );
}
