import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { Alex_Brush } from "next/font/google";

const alexBrush = Alex_Brush({ 
    subsets: ["latin"],
    weight: "400"
});

export default function MobileNav() {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm px-4">
            <nav className="flex items-center justify-between px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20">
                {/* Logo */}
                <a href="/" className="flex flex-row items-center">
                    <span className={`${alexBrush.className} text-lg font-bold text-gray-300 hover:text-white transition-colors duration-200`}>
                        Jerrified<span className='text-[#d4a574]'>Dev</span>
                    </span>
                </a>

                {/* Hamburger Menu */}
                <motion.button
                    initial="hide"
                    animate={mobileNav ? "show" : "hide"}
                    onClick={toggleMobileNav}
                    className="flex flex-col space-y-1 relative z-10 p-2"
                >
                    <motion.span
                        variants={{
                            hide: {
                                rotate: 0,
                            },
                            show: {
                                rotate: 45,
                                y: 5,
                            },
                        }}
                        className="w-6 bg-white h-px block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            hide: {
                                opacity: 1,
                            },
                            show: {
                                opacity: 0,
                            },
                        }}
                        className="w-6 bg-white h-px block"
                    ></motion.span>
                    <motion.span
                        variants={{
                            hide: {
                                rotate: 0,
                            },
                            show: {
                                rotate: -45,
                                y: -5,
                            },
                        }}
                        className="w-6 bg-white h-px block"
                    ></motion.span>
                </motion.button>
                <AnimatePresence>
                    {mobileNav && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg shadow-black/20 overflow-hidden"
                        >
                            <div className="p-4 space-y-3">
                                <motion.a
                                    href="#about"
                                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                                    whileHover={{ x: 4 }}
                                    onClick={() => setMobileNav(false)}
                                >
                                    About
                                </motion.a>
                                <motion.a
                                    href="#projects"
                                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                                    whileHover={{ x: 4 }}
                                    onClick={() => setMobileNav(false)}
                                >
                                    Projects
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="block px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 cursor-pointer"
                                    whileHover={{ x: 4 }}
                                    onClick={() => setMobileNav(false)}
                                >
                                    Contact
                                </motion.a>
                                <div className="border-t border-white/20 my-3"></div>
                                <motion.div
                                    whileHover={{ x: 4 }}
                                    className="px-4 py-3"
                                >
                                    <Link 
                                        href="https://docs.google.com/document/d/130tyY-dbYOi8gxirFpIrufPzmBWdSVHpnUP-qsyjsRI/edit?usp=sharing" 
                                        target='_blank'
                                        className="block w-full px-4 py-2 text-center text-black bg-gradient-to-r from-[#d4a574] to-[#c49b6a] hover:from-[#c49b6a] hover:to-[#d4a574] transition-all duration-300 rounded-lg text-sm font-semibold"
                                        onClick={() => setMobileNav(false)}
                                    >
                                        Resume
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}