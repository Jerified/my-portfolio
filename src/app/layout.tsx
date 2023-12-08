import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/StarBackground";
// import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
// import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        className={`${inter.className}  bg-[#030014] overflow-y-scrol overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        <div className="w-full h-[88vh] lg:flex items-center gap- justify-between">
          <div className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0">
            <LeftSide />
          </div>
          {children}
          <div className=""></div>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}