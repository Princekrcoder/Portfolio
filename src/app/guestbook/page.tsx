"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const messages = [
    {
        name: "Shubham Kumar",
        avatar: "/avatar.webp",
        date: "2026-01-25 18:12",
        text: "Updated my contributions page, you'll love it :)",
    },
    {
        name: "Shubham Kumar",
        avatar: "/avatar.webp",
        date: "2025-07-01 17:03",
        text: "🚀 Just updated my blog post reflecting on my 1-year milestone at GitLab :)",
    },
    {
        name: "Shubham Kumar",
        avatar: "/avatar.webp",
        date: "2024-07-01 12:40",
        text: "Hello 👋 Welcome to my website. I write about software engineering and open-source :)",
    },
];

export default function GuestbookPage() {
    return (
        <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
            <Navbar />
            <main className="mt-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h1 className="text-[3rem] font-bold text-[var(--color-text-primary)] tracking-tight mb-3">
                        Guestbook
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base">
                        Sign my guestbook and share your idea. You can tell me anything here!
                    </p>
                </motion.div>

                <div className="max-w-xl flex flex-col gap-4 mb-20">
                    {/* Pinned card */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="rounded-2xl p-5 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/10 border border-white/10"
                    >
                        <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            Pinned
                        </div>
                        <p className="text-[var(--color-text-primary)] text-sm leading-relaxed">
                            Hey there! Thanks for visiting my website. If you have a moment, I'd love to hear your thoughts on my work. Please log in with your account to leave a comment. Thanks!
                        </p>
                    </motion.div>

                    {/* Login CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.18 }}
                        className="flex items-center gap-3"
                    >
                        <button className="px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all shadow-md">
                            Login
                        </button>
                        <span className="text-[var(--color-text-secondary)] text-sm">
                            to continue leaving a message
                        </span>
                    </motion.div>

                    {/* Messages */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                        className="flex flex-col"
                    >
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 12 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                                }}
                                className="flex items-start gap-3 py-4 border-b border-[var(--color-border-custom)] last:border-b-0"
                            >
                                {/* Avatar */}
                                <img
                                    src={msg.avatar}
                                    alt={msg.name}
                                    className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-white/10"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(msg.name)}&background=333&color=fff&size=40`;
                                    }}
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-sm font-semibold text-[var(--color-text-primary)]">{msg.name}</span>
                                        <span className="text-xs text-[var(--color-text-muted)]">{msg.date}</span>
                                    </div>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{msg.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
