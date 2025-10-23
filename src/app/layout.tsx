import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/StarBackground";
// import Navbar from "@/components/Navbar";
import { Navbar } from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import { Toaster } from "react-hot-toast";
import { LightRays } from "@/components/LightRays";
import TransitionOverlay from "@/components/TransitionOverlay";
import ShaderLikeBackground from "@/components/ShaderLikeBackground";
import { CustomCursor } from "@/components/CustomCursor";

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
        className={`${inter.className} bg-[#0f0f10] dark:bg-[#0f0f10] overflow-x-hidden transition-colors duration-300`}
      >
          <CustomCursor />
          <ShaderLikeBackground />
          <TransitionOverlay />
          <LightRays />
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