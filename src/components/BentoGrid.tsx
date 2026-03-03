"use client";
import { motion } from "framer-motion";

export default function BentoGrid() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center mb-8 mt-16"
            >
                <h2 className="text-[2.5rem] font-bold text-[var(--color-text-primary)] tracking-tight">About Me</h2>
            </motion.div>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-16"
            >
                {/* About Me Card */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="col-span-1 md:col-span-2 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md flex flex-col overflow-hidden relative min-h-[16rem]"
                >
                    <div className="flex items-center gap-2 mb-4 relative z-10 w-full text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <h2 className="text-sm text-[var(--color-text-primary)]">Berlin, Germany</h2>
                    </div>
                    {/* The Globe representation */}
                    <div className="absolute inset-x-0 bottom-0 top-16 w-full flex justify-center items-end opacity-90 z-0 pointer-events-none">
                        <img src="/globe.png" alt="" className="w-full max-w-[28rem] h-auto object-contain object-bottom translate-y-[20%]" />
                    </div>
                </motion.div>

                {/* Connect */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="col-span-1 md:col-span-2 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md p-6"
                >
                    <div className="flex items-center gap-2 mb-6 text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        <h2 className="text-sm text-[var(--color-text-primary)]">Connect</h2>
                    </div>
                    <div className="flex flex-col gap-4 mt-4 font-medium">
                        <a href="#" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition group/link">
                            <img src="https://cdn.simpleicons.org/github/a1a1aa" className="w-[1.125rem] h-[1.125rem] group-hover/link:brightness-200 transition" alt="" aria-hidden="true" />
                            GitHub
                        </a>
                        <a href="#" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition group/link">
                            <img src="https://cdn.simpleicons.org/gitlab/a1a1aa" className="w-[1.125rem] h-[1.125rem] group-hover/link:brightness-200 transition" alt="" aria-hidden="true" />
                            GitLab
                        </a>
                        <a href="#" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition group/link">
                            <img src="https://cdn.simpleicons.org/x/a1a1aa" className="w-[1.125rem] h-[1.125rem] group-hover/link:brightness-200 transition" alt="" aria-hidden="true" />
                            Twitter
                        </a>
                        <a href="#" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition group/link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a1a1aa] group-hover/link:text-white transition"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            LinkedIn
                        </a>
                        <a href="#" className="flex items-center gap-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition group/link">
                            <img src="https://cdn.simpleicons.org/youtube/a1a1aa" className="w-[1.125rem] h-[1.125rem] group-hover/link:brightness-200 transition" alt="" aria-hidden="true" />
                            YouTube
                        </a>
                    </div>
                </motion.div>

                {/* Stacks */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="col-span-1 md:col-span-2 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md p-6 overflow-hidden flex flex-col justify-between"
                >
                    <div className="flex items-center gap-2 mb-6 text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                        <h2 className="text-sm text-[var(--color-text-primary)]">Stacks</h2>
                    </div>
                    <div className="mask-linear py-2">
                        <div className="flex w-max gap-8 mb-6 animate-[scroll-left_20s_linear_infinite] group-hover:[animation-play-state:paused]">
                            <div className="flex gap-8 items-center justify-around">
                                <img src="https://cdn.simpleicons.org/javascript/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="JS" />
                                <img src="https://cdn.simpleicons.org/typescript/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="TS" />
                                <img src="https://cdn.simpleicons.org/postgresql/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="PostgreSQL" />
                                <img src="https://cdn.simpleicons.org/prisma/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Prisma" />
                                <img src="https://cdn.simpleicons.org/deno/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Deno" />
                                <img src="https://cdn.simpleicons.org/go/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Go" />
                            </div>
                            <div className="flex gap-8 items-center justify-around" aria-hidden="true">
                                <img src="https://cdn.simpleicons.org/javascript/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="JS" />
                                <img src="https://cdn.simpleicons.org/typescript/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="TS" />
                                <img src="https://cdn.simpleicons.org/postgresql/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="PostgreSQL" />
                                <img src="https://cdn.simpleicons.org/prisma/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Prisma" />
                                <img src="https://cdn.simpleicons.org/deno/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Deno" />
                                <img src="https://cdn.simpleicons.org/go/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Go" />
                            </div>
                        </div>
                        <div className="flex w-max gap-8 flex-row-reverse animate-[scroll-right_20s_linear_infinite] group-hover:[animation-play-state:paused]">
                            <div className="flex gap-8 items-center justify-around">
                                <img src="https://cdn.simpleicons.org/react/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="React" />
                                <img src="https://cdn.simpleicons.org/markdown/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Markdown" />
                                <img src="https://cdn.simpleicons.org/prisma/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Prisma" />
                                <img src="https://cdn.simpleicons.org/mysql/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="MySQL" />
                                <img src="https://cdn.simpleicons.org/git/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Git" />
                            </div>
                            <div className="flex gap-8 items-center justify-around" aria-hidden="true">
                                <img src="https://cdn.simpleicons.org/react/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="React" />
                                <img src="https://cdn.simpleicons.org/markdown/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Markdown" />
                                <img src="https://cdn.simpleicons.org/prisma/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Prisma" />
                                <img src="https://cdn.simpleicons.org/mysql/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="MySQL" />
                                <img src="https://cdn.simpleicons.org/git/white" className="h-[2.25rem] w-auto object-contain opacity-95" alt="Git" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats 1 */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="col-span-1 md:col-span-1 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md p-6 flex flex-col justify-between"
                >
                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <h2 className="text-sm text-[var(--color-text-primary)]">Coding hours</h2>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <span className="text-5xl font-bold tracking-tighter text-[var(--color-text-primary)]">324 hrs</span>
                    </div>
                </motion.div>

                {/* Stats 2 */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="col-span-1 md:col-span-1 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md p-6 flex flex-col justify-between"
                >
                    <div className="flex items-center gap-2 mb-4 text-[var(--color-text-secondary)] font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                        <h2 className="text-sm text-[var(--color-text-primary)]">Fav. framework</h2>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src="https://cdn.simpleicons.org/railway/white" className="h-20 object-contain" alt="Railway" />
                    </div>
                </motion.div>

            </motion.section>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center mb-24"
            >
                <a href="/about" className="px-6 py-2.5 bg-transparent border border-[var(--color-border-custom)] rounded-full text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-bg-card-hover)] transition-colors inline-block">
                    Know more about me
                </a>
            </motion.div>
        </>
    );
}
