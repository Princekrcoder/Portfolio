"use client";
import { motion } from "framer-motion";

export default function Newsletter() {
    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-24 w-full flex justify-center"
        >
            <div className="w-[400px] max-w-full bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">

                {/* Header with Icon */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-white to-[#a1a1aa] rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.15)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" x2="11" y1="2" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] tracking-tight">Newsletter</h2>
                </div>

                {/* Subtitle */}
                <div className="mb-8">
                    <p className="text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed font-medium mb-1">
                        "I thought the blog was good.
                    </p>
                    <p className="text-[var(--color-text-secondary)] text-[0.95rem] leading-relaxed font-medium">
                        But the newsletter? <span className="text-[var(--color-text-primary)] font-semibold">Even better!</span>"
                    </p>
                </div>

                {/* Input form */}
                <form className="flex flex-col gap-4 mb-8" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-[#1e1e21] border border-[#333] text-[var(--color-text-primary)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#555] transition-colors placeholder:text-[#666] text-sm font-medium"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3] hover:from-white hover:to-[#b3b3b3] text-[#1a1a1a] font-bold rounded-xl px-4 py-3.5 transition-all shadow-[0_2px_10px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" x2="11" y1="2" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Subscribe Now
                    </button>
                </form>

                {/* Subscribers Face Pile */}
                <div className="flex items-center gap-3">
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-card)] bg-[#7C5D58] flex items-center justify-center overflow-hidden z-30">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Subscriber" className="w-[120%] h-[120%] object-cover scale-150 transform translate-y-1" />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-card)] bg-[#F8E2C6] flex items-center justify-center overflow-hidden z-20">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Aneka&backgroundColor=ffdfbf" alt="Subscriber" className="w-[120%] h-[120%] object-cover scale-150 transform translate-y-1" />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 border-[var(--color-bg-card)] bg-[#7B6187] flex items-center justify-center overflow-hidden z-10">
                            <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Leo&backgroundColor=c0aede" alt="Subscriber" className="w-[120%] h-[120%] object-cover scale-150 transform translate-y-1" />
                        </div>
                    </div>
                    <span className="text-[var(--color-text-secondary)] text-xs font-medium">
                        Join <span className="text-[var(--color-text-primary)] font-bold">13</span> subscribers
                    </span>
                </div>

            </div>
        </motion.section>
    );
}
