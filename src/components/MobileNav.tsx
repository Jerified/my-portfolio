import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";

export default function MobileNav() {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <header className="sticky top-0 inset-x-0 p-6">
            <nav className="container mx-auto ">
                <motion.button
                    initial="hide"
                    animate={mobileNav ? "show" : "hide"}
                    onClick={toggleMobileNav}
                    className="flex flex-col space-y-1 relative z-10 lg:hidden"
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
                        <MotionConfig
                            transition={{
                                type: "spring",
                                bounce: 0.1,
                            }}
                        >
                            <motion.div
                                key="mobile-nav"
                                variants={{
                                    hide: {
                                        x: "-100%",
                                        transition: {
                                            type: "spring",
                                            bounce: 0.1,
                                            when: "afterChildren",
                                            staggerChildren: 0.25,
                                        },
                                    },
                                    show: {
                                        x: "0%",
                                        transition: {
                                            type: "spring",
                                            bounce: 0.1,
                                            when: "beforeChildren",
                                            staggerChildren: 0.25,
                                        },
                                    },
                                }}
                                initial="hide"
                                animate="show"
                                exit="hide"
                                className="fixed inset-0 bg-[#7FBF89] h-screen p-6 flex flex-col justify-center space-y-10 lg:hidden"
                            >
                                <motion.ul
                                    variants={{
                                        hide: {
                                            y: "25%",
                                            opacity: 0,
                                        },
                                        show: {
                                            y: "0%",
                                            opacity: 1,
                                        },
                                    }}
                                    className="list-none flex flex-col items-center text-xl gap-8 w-full h-auto text-gray-200 uppercase"
                                >
                                    <a href="#about" className="cursor-pointer">
                                        About
                                    </a>
                                    <a href="#projects" className="cursor-pointer">
                                        Projects
                                    </a>
                                    <a href="#contact" className="cursor-pointer">
                                        Contact
                                    </a>
                                    
                                </motion.ul>
                                <motion.div
                                    variants={{
                                        hide: {
                                            y: "25%",
                                            opacity: 0,
                                        },
                                        show: {
                                            y: "0%",
                                            opacity: 1,
                                        },
                                    }}
                                    className="w-full h-px bg-white/30"
                                ></motion.div>
                                <motion.ul
                                    variants={{
                                        hide: {
                                            y: "25%",
                                            opacity: 0,
                                        },
                                        show: {
                                            y: "0%",
                                            opacity: 1,
                                        },
                                    }}
                                    className=" flex justify-center"
                                >
                                    <li className="px-4 py-2 text-white bg-[#2c5282]/70 hover:bg-[#2c5282]/100 transition ease-in rounded-sm text-md ">
                                        <Link href="/Oyedele-resume.pdf" target='_blank'>Resume</Link>
                                    </li>
                                </motion.ul>
                            </motion.div>
                        </MotionConfig>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}