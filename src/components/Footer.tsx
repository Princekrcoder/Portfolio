"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 px-4 mb-8"
        >
            <div className="relative max-w-7xl mx-auto pt-24 px-8 md:px-16 pb-12">
                {/* Background, Blur, and Border with Gradient Fade Mask */}
                <div
                    className="absolute inset-0 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-[10px] border border-white/10 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)',
                    }}
                />

                {/* Footer content */}
                <div className="relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 mb-20 max-w-3xl">
                        <div className="flex flex-col gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
                            <Link href="/" className="hover:text-[var(--color-text-primary)] transition-colors">Home</Link>
                            <Link href="/blog" className="hover:text-[var(--color-text-primary)] transition-colors">Blog</Link>
                            <Link href="/about" className="hover:text-[var(--color-text-primary)] transition-colors">About</Link>
                            <Link href="/dashboard" className="hover:text-[var(--color-text-primary)] transition-colors">Dashboard</Link>
                        </div>
                        <div className="flex flex-col gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
                            <Link href="/guestbook" className="hover:text-[var(--color-text-primary)] transition-colors">Guestbook</Link>
                            <Link href="/contributions" className="hover:text-[var(--color-text-primary)] transition-colors">Contributions</Link>
                            <Link href="/projects" className="hover:text-[var(--color-text-primary)] transition-colors">Projects</Link>
                            <Link href="/links" className="hover:text-[var(--color-text-primary)] transition-colors">Links</Link>
                        </div>
                        <div className="flex flex-col gap-6 text-sm font-medium text-[var(--color-text-secondary)] col-span-2 md:col-span-1">
                            <a href="https://github.com/shubham-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">GitHub</a>
                            <a href="https://gitlab.com/shubham-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">GitLab</a>
                            <a href="https://twitter.com/shubham-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">Twitter</a>
                            <a href="https://youtube.com/shubham-kumar" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-text-primary)] transition-colors">YouTube</a>
                        </div>
                    </div>

                    <p className="text-sm text-[var(--color-text-secondary)] font-semibold">© 2026 Shubham Kumar. All Rights Reserved.</p>
                </div>
            </div>
        </motion.footer>
    );
}
