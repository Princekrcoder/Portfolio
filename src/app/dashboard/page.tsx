"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const stats = [
    {
        label: "Coding Hours",
        value: "324 hrs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        valueClass: "text-blue-400",
        link: null,
        linkLabel: null,
    },
    {
        label: "YouTube Subscribers",
        value: "228",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
        ),
        valueClass: "text-red-500",
        link: "https://youtube.com/@imskr",
        linkLabel: "YouTube",
    },
    {
        label: "YouTube Views",
        value: "2822",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.03 0 12 0 12s0 3.97.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.45 20.5 12 20.5 12 20.5s7.55 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.97 24 12 24 12s0-3.97-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
        ),
        valueClass: "text-red-500",
        link: "https://youtube.com/@imskr",
        linkLabel: "YouTube",
    },
    {
        label: "GitHub Followers",
        value: "39",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.17c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
        valueClass: "text-gray-300",
        link: "https://github.com/imskr",
        linkLabel: "GitHub",
    },
    {
        label: "Blog Total Views",
        value: "1685",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
            </svg>
        ),
        valueClass: "text-pink-400",
        link: "/blog",
        linkLabel: "Blog",
    },
    {
        label: "Blog Total Likes",
        value: "180",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
            </svg>
        ),
        valueClass: "text-pink-400",
        link: "/blog",
        linkLabel: "Blog",
    },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.95, y: 16 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: index * 0.07 } },
            }}
            className="group relative"
        >
            {stat.link ? (
                <a
                    href={stat.link}
                    target={stat.link.startsWith("http") ? "_blank" : undefined}
                    rel={stat.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md min-h-[110px] block"
                >
                    {/* Default content */}
                    <div className={`flex items-center gap-2 text-2xl font-bold ${stat.valueClass} group-hover:hidden`}>
                        {stat.icon}
                        <span>{stat.value}</span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm font-medium text-center group-hover:hidden">
                        {stat.label}
                    </p>

                    {/* Hover content */}
                    <div className="hidden group-hover:flex items-center gap-2 text-xl font-bold text-[var(--color-text-primary)]">
                        <span>{stat.linkLabel} →</span>
                    </div>
                </a>
            ) : (
                <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-[var(--color-bg-card-hover)] transition duration-300 shadow-md min-h-[110px]">
                    <div className={`flex items-center gap-2 text-2xl font-bold ${stat.valueClass}`}>
                        {stat.icon}
                        <span>{stat.value}</span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-sm font-medium text-center">
                        {stat.label}
                    </p>
                </div>
            )}
        </motion.div>
    );
}

export default function DashboardPage() {
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
                        Dashboard
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base max-w-2xl leading-relaxed">
                        This is my personal dashboard, I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more.
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-[var(--color-border-custom)] mb-10" />

                {/* Stats Grid */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16"
                >
                    {stats.map((stat, i) => (
                        <StatCard key={stat.label} stat={stat} index={i} />
                    ))}
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}
