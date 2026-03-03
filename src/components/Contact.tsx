"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const tags = [
    { id: 0, label: 'Open Source', top: 12, left: 30 },
    { id: 1, label: 'Ruby', top: 40, left: 10 },
    { id: 2, label: 'Ruby on Rails', top: 75, left: 25 },
    { id: 3, label: 'Career', top: 60, left: 70 },
];

export default function Contact() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % tags.length);
        }, 2000); // reduced from 2500ms to 2000ms for a slightly faster flow
        return () => clearInterval(interval);
    }, []);

    const activeTag = tags[activeIndex];

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-24 w-full"
        >
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">

                {/* Left Side: Animated floating elements */}
                <div className="relative w-full md:w-1/2 h-64 md:h-80 flex items-center justify-center">

                    {/* Center Avatar */}
                    <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[var(--color-border-custom)] shadow-lg transition-transform hover:scale-105">
                        <img src="/avatar.jpg" alt="Shubham Kumar" className="w-[124%] h-[124%] max-w-none -ml-[12%] -mt-[5%] object-cover" />
                    </div>

                    {/* Tags */}
                    {tags.map((tag, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={tag.id}
                                className={`absolute z-10 transition-all duration-1000 ease-in-out cursor-pointer ${index % 2 === 0 ? 'animate-[float_5s_ease-in-out_infinite]' : 'animate-[float_6s_ease-in-out_infinite_reverse]'}`}
                                style={{ top: `${tag.top}%`, left: `${tag.left}%` }}
                                onMouseEnter={() => setActiveIndex(index)}
                            >
                                <span className={`px-4 py-1.5 text-sm rounded-full border shadow-sm whitespace-nowrap transition-colors duration-500 ${isActive
                                    ? 'bg-[#2a2a2a] text-[var(--color-text-primary)] border-[#555]'
                                    : 'bg-[#1a1a1a] text-[#a1a1aa] border-[#333]'
                                    }`}>
                                    {tag.label}
                                </span>
                            </div>
                        );
                    })}

                    {/* The cursor & active tag interaction */}
                    <div
                        className="absolute z-20 flex flex-col items-start transition-all duration-1000 ease-in-out pointer-events-none"
                        style={{
                            top: `calc(${activeTag.top}% + 1.25rem)`,
                            left: `calc(${activeTag.left}% + 1.5rem)`,
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e53935" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="-ml-3 -mb-1 z-30 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                            <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
                        </svg>
                        <span className="px-3 py-1 bg-[#ff4a4a] text-[var(--color-text-primary)] text-[0.8rem] font-medium rounded-full shadow-[0_0_15px_rgba(255,74,74,0.4)] whitespace-nowrap relative z-20">
                            Shubham
                        </span>
                    </div>

                </div>

                {/* Right Side: Text & CTA */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight mb-4">
                        Any questions about open source?
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg mb-8">
                        Feel free to reach out to me! <span className="text-[var(--color-text-primary)]">I'm available for collaboration.</span>
                    </p>
                    <a
                        href="mailto:hello@shubham-kumar.com"
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#e53935] hover:bg-[#ff4a4a] text-[var(--color-text-primary)] font-medium rounded-full transition-colors shadow-[0_0_20px_rgba(229,57,53,0.3)] hover:shadow-[0_0_25px_rgba(255,74,74,0.5)]"
                    >
                        hello@shubham-kumar.com
                    </a>
                </div>
            </div>
        </motion.section>
    );
}
