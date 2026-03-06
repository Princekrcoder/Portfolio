"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const projects = [
    {
        title: "Code_Nexus",
        description: "Build Faster Scale Smarter",
        image: "/cover-1.png",
        tags: ["Typescript", "Express.js", "Next.js", "PostgreSql", "Telwind CSS"],
        link: "https://codenexusstudio.vercel.app",
    },
    {
        title: "HelthBridge-AI",
        description: "Healthcare & Early Disease Detection Platform",
        image: "/cover-2.png",
        tags: ["javascript", "Next.js", "Express.js", "Telwind CSS", "PostgreSql"],
        link: "https://health-bridge-ai.vercel.app",
    },
    {
        title: "Bicycle Hub",
        description: "HERO is the largest online bike store, bringing you high-quality & powerful bikes.",
        image: "/cover-3.png",
        tags: ["javascript", "React.js", "Express.js", "Telwind CSS", "PostgreSql"],
        link: "https://bicyclehub-ten.vercel.app/",
    },
    {
        title: "Portfolio",
        description: "My personal portfolio website built with Next.js",
        image: "/portfolio.png",
        tags: ["Next.js", "Typescript", "TailwindCSS", "Framer Motion"],
        link: "https://princekrcoder.vercel.app",
    },
];

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
            <Navbar />
            <main className="mt-24">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <h1 className="text-[3rem] font-bold text-[var(--color-text-primary)] tracking-tight mb-3">
                        Projects
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base">
                        The list of my projects.
                    </p>
                </motion.div>

                {/* Projects List */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
                >
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={{
                                hidden: { opacity: 0, y: 24 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                            }}
                            className="group block"
                        >
                            {/* Card image — zooms on hover */}
                            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] shadow-md transition duration-300 group-hover:border-[var(--color-border-hover)]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                />
                            </div>

                            {/* Info — always visible below card */}
                            <div className="px-1 pt-4 pb-10">
                                <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                                    {project.title}
                                </h2>
                                <p className="text-[var(--color-text-secondary)] text-sm mb-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-border-custom)] text-[var(--color-text-secondary)] bg-[var(--color-bg-card)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}
