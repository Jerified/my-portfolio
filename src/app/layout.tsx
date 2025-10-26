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
import StructuredData from "@/components/StructuredData";

const inter = Inter({ 
subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Jeremiah Oyedele - Full Stack Developer | React, Next.js, Node.js Expert",
  description: "Jeremiah Oyedele is a skilled Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Lagos, Nigeria. Available for remote work globally. 5+ years experience in web development.",
  keywords: [
    "Jeremiah Oyedele",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer", 
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Web Developer Nigeria",
    "Remote Developer",
    "Frontend Developer",
    "Backend Developer",
    "Lagos Developer",
    "Portfolio",
    "Web Development Services",
    "React Expert",
    "Next.js Expert",
    "Node.js Expert"
  ],
  authors: [{ name: "Jeremiah Oyedele" }],
  creator: "Jeremiah Oyedele",
  publisher: "Jeremiah Oyedele",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://findjerrified.vercel.app',
    siteName: 'Jeremiah Oyedele Portfolio',
    title: 'Jeremiah Oyedele - Full Stack Developer | React, Next.js, Node.js Expert',
    description: 'Jeremiah Oyedele is a skilled Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Lagos, Nigeria. Available for remote work globally.',
    images: [
      {
        url: '/profile.png',
        width: 1200,
        height: 630,
        alt: 'Jeremiah Oyedele - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremiah Oyedele - Full Stack Developer',
    description: 'Skilled Full Stack Developer specializing in React, Next.js, Node.js, TypeScript. Available for remote work globally.',
    creator: '@Jeremiah4life11',
    images: ['/profile.png'],
  },
  alternates: {
    canonical: 'https://findjerrified.vercel.app',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'google-site-verification': 'PrFeO_OfwCmkQFeWysrqm2RugqrOFz8O_qkVqRgbydg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) { 
  return (
    <html lang="en" className='!scroll-smooth'>
      <head>
        <StructuredData />
      </head>
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