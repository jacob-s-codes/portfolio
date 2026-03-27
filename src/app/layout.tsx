import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Courier_Prime } from "next/font/google";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Jacob Shaul | Home",
  description: "My personal software portfolio.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${courierPrime.variable} antialiased w-full bg-darkbg`}
      >
        <div className="xl:px-0 px-6">
          <Analytics />
          <Navbar />
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
