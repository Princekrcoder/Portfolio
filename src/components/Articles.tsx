"use client";
import { motion } from "framer-motion";

export default function Articles() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-8 mt-24"
            >
                <h2 className="text-[2.5rem] font-bold text-[var(--color-text-primary)] tracking-tight">Latest Articles</h2>
            </motion.div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                {/* Article 1 */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="col-span-1 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md flex flex-col no-underline"
                >
                    <div className="flex items-center gap-2 mb-6 text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                        <h2 className="text-sm">Blog</h2>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden mb-6 flex justify-center items-center">
                        <img src="/cover.webp" alt="The Git Commands You'll Ever Need" className="w-full h-auto object-contain group-hover:scale-105 transition duration-500 ease-out" />
                    </div>
                    <div className="flex justify-between items-center text-xs text-[var(--color-text-secondary)] mb-4">
                        <span>July 12, 2024</span>
                        <span className="flex gap-2"><span>51 likes</span><span>•</span><span>398 views</span></span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-blue-400 transition-colors">The Git Commands You'll Ever Need</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.</p>
                </motion.a>

                {/* Article 2 */}
                <motion.a
                    href="#"
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="col-span-1 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md flex flex-col no-underline relative"
                >
                    <div className="flex items-center justify-between gap-2 mb-6 text-[var(--color-text-secondary)] font-medium w-full">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path></svg>
                            <h2 className="text-sm">Blog</h2>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </div>
                    <div className="w-full rounded-xl overflow-hidden mb-6 flex justify-center items-center">
                        <img src="/cover-1.webp" alt="My Open Source Journey at GitLab" className="w-full h-auto object-contain group-hover:scale-105 transition duration-500 ease-out" />
                    </div>
                    <div className="flex justify-between items-center text-xs text-[var(--color-text-secondary)] mb-4">
                        <span>June 29, 2024</span>
                        <span className="flex gap-2"><span>129 likes</span><span>•</span><span>1285 views</span></span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-orange-500 transition-colors">My Open Source Journey at GitLab</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">My journey from open-source contributor to a core team member at gitlab.</p>
                </motion.a>
            </section>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex justify-center mb-16"
            >
                <a href="/blog" className="px-6 py-2 bg-transparent border border-[var(--color-border-custom)] rounded-full text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-bg-card-hover)] transition-colors inline-block">
                    See all articles
                </a>
            </motion.div>
        </>
    );
}
