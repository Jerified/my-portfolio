import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/StarBackground";
// import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
// import Footer from "@/components/main/Footer";

const inter = Montserrat({ 
subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en">
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
        {/* <Footer /> */}
      </body>
    </html>
  );
}