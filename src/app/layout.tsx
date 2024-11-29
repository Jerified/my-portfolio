import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/StarBackground";
// import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { Toaster } from "react-hot-toast";
// import Footer from "@/components/main/Footer";

const inter = Inter({ 
subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Jerrified Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.className}  bg-[#030014] overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <div className="w-full lg:flex items-center lg:gap-20 justify-between">
          <div className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          <div className="mx-auto p-4">
            {children}
          </div>
          <div className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0">
            <RightSide />
          </div>
        </div>
        <Toaster position="bottom-right" />
        {/* <Footer /> */}
      </body>
    </html>
  );
}