"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const articles = [
    {
        slug: "git-commands",
        title: "The Git Commands You'll Ever Need",
        excerpt: "Say goodbye to Git confusion and hello to a smoother development experience. Become a 10x developer at work.",
        cover: "/cover.webp",
        date: "July 12, 2024",
        likes: 51,
        views: 398,
        tag: "Blog",
    },
    {
        slug: "open-source-gitlab",
        title: "My Open Source Journey at GitLab",
        excerpt: "My journey from open-source contributor to a core team member at gitlab.",
        cover: "/cover-1.webp",
        date: "June 29, 2024",
        likes: 129,
        views: 1285,
        tag: "Blog",
    },
    {
        slug: "Full-Stack-engineer-tips",
        title: "Full-Stack Engineering Best Practices",
        excerpt: "Key patterns and practices I've learned while building scalable Full-Stack systems in production.",
        cover: "/cover.webp",
        date: "May 14, 2024",
        likes: 84,
        views: 720,
        tag: "Blog",
    },
    {
        slug: "open-source-contributing",
        title: "How to Start Contributing to Open Source",
        excerpt: "A practical guide to making your first open-source contribution and getting involved in the community.",
        cover: "/cover-1.webp",
        date: "April 3, 2024",
        likes: 67,
        views: 540,
        tag: "Blog",
    },
];

export default function BlogPage() {
    const [search, setSearch] = useState("");

    const filtered = articles.filter(
        (a) =>
            a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.excerpt.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
            <Navbar />
            <main className="mt-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h1 className="text-[3rem] font-bold text-[var(--color-text-primary)] tracking-tight mb-4">
                        Blog
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base max-w-2xl leading-relaxed">
                        I'm excited to share my years of experience in building open-source projects, creating scalable
                        systems, and so much more. Subscribe to my newsletter to stay updated on all the latest
                        insights, tips, and stories from my journey. Don't miss out!
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-[var(--color-border-custom)] mb-8" />

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="relative mb-10"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search articles"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] text-sm focus:outline-none focus:border-[var(--color-border-hover)] transition"
                    />
                </motion.div>

                {/* Articles Grid */}
                {filtered.length === 0 ? (
                    <p className="text-[var(--color-text-muted)] text-center py-16">No articles found.</p>
                ) : (
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
                        {filtered.map((article, i) => (
                            <motion.a
                                key={article.slug}
                                href={`/blog/${article.slug}`}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="col-span-1 group bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md flex flex-col no-underline"
                            >
                                {/* Tag Row */}
                                <div className="flex items-center justify-between gap-2 mb-6 text-[var(--color-text-secondary)] font-medium w-full">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                            <path d="m15 5 4 4" />
                                        </svg>
                                        <span className="text-sm">{article.tag}</span>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </div>

                                {/* Cover Image */}
                                <div className="w-full rounded-xl overflow-hidden mb-6 flex justify-center items-center">
                                    <img
                                        src={article.cover}
                                        alt={article.title}
                                        className="w-full h-auto object-contain group-hover:scale-105 transition duration-500 ease-out"
                                    />
                                </div>

                                {/* Meta */}
                                <div className="flex justify-between items-center text-xs text-[var(--color-text-secondary)] mb-4">
                                    <span>{article.date}</span>
                                    <span className="flex gap-2">
                                        <span>{article.likes} likes</span>
                                        <span>•</span>
                                        <span>{article.views} views</span>
                                    </span>
                                </div>

                                {/* Title & Excerpt */}
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-orange-400 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </motion.a>
                        ))}
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
