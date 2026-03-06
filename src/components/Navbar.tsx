"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { href: "/", label: "Homepage" },
        { href: "/blog", label: "Blog" },
        { href: "/guestbook", label: "Guestbook" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/projects", label: "Projects" },
        { href: "/about", label: "About" },
        //{ href: "/contributions", label: "Contributions" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 inset-x-0 z-50 pt-6 pb-4 px-4 bg-gradient-to-b from-[var(--color-bg-base)] to-transparent"
        >
            <div className="flex flex-col mx-auto max-w-5xl rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/5 shadow-sm overflow-hidden transition-all duration-300">
                <div className="flex items-center justify-between px-6 py-4">
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center text-black dark:text-white mr-8 group" onClick={() => setIsOpen(false)}>
                        <div className="w-8 h-8 flex items-center justify-center">
                            <span className="text-xl font-bold font-mono tracking-tighter">P</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-6 text-[0.95rem] font-medium text-gray-500 dark:text-gray-400">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className="relative flex flex-col items-center">
                                    <Link
                                        href={link.href}
                                        className={isActive
                                            ? "text-black dark:text-white"
                                            : "hover:text-black dark:hover:text-white transition-colors"
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                    {isActive && (
                                        <span className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-6 h-[3px] rounded-full bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.7)]" />
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Side Icons */}
                    <div className="hidden md:flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <ThemeToggle />
                        <button className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-black dark:text-white flex items-center justify-center p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden border-t border-gray-200 dark:border-white/5"
                        >
                            <ul className="flex flex-col px-6 py-4 gap-4 text-[0.95rem] font-medium text-gray-500 dark:text-gray-400">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`block ${link.href === "/" ? "text-black dark:text-white" : "hover:text-black dark:hover:text-white transition-colors"}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                                {/* Mobile Right Side Icons */}
                                <li className="flex items-center gap-4 pt-4 mt-2 border-t border-gray-200 dark:border-white/5">
                                    <ThemeToggle />
                                    <button className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav >
    );
}

// Separate component for the toggle to handle hydration
function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-8 h-8 rounded-lg"></div>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-transparent border border-gray-200 dark:border-transparent text-black dark:text-white hover:bg-gray-50 dark:hover:text-white transition-colors drop-shadow-sm dark:drop-shadow-none"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                // Sun Icon for Dark Mode (click to go light)
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            ) : (
                // Moon/Sun active state icon for Light Mode
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            )}
        </button>
    );
}
