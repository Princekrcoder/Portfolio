"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const milestones = [
    "January 2021: Made my first contribution to GitLab.",
    "Google Summer of Code 2021: Selected under the Geo Team at GitLab.",
    "By December 2023: Over 25 pull requests merged.",
    "March 2024: Nominated for MVP (Most Valuable Person) for the 16.10 release.",
    "June 2024: 50th pull request merged.",
    "June 2024: Nominated and awarded MVP for the 17.1 release.",
];

const recommendations = [
    {
        quote: `"Prince is super passionate about his work and the technologies he works with. He is curious, always trying so many new things that there is always something new to learn from him. I wholeheartedly endorse Prince for his contributions to the open-source community and his passion for sharing the knowledge he has about tech and open source. Over the years, I have witnessed Prince's growth, and that's 100% a result of his hard work, passion, and curiosity. He is very inspiring, It's always great to work with him!"`,
        author: "Princi Vershwal (JavaScript Engineer @Ghost)",
        link: "https://twitter.com/princi_ya",
    },
    {
        quote: `"Working with Prince as part of GSoC 2021 internship was a pleasure. He was eager to learn and explore the ruby language, always asking questions and replying in a timely manner. During the internship I saw a significant progress on his skills working with our large codebase and getting used to ship in small iterations supported by automated tests. He was able to work async and follow our Remote workflow. His contributions were valuable for our team and our company."`,
        author: "Gabriel Mazetto (Senior Full-Stack Engineer @GitLab)",
        link: "https://gitlab.com/brodock",
    },
    {
        quote: `"I co-mentored Prince for a Google Summer of Code project at GitLab. It was fun working with him. He was good at collaboration and updating us on his progress, asking for help early. He was open to pairing sessions and picking up new tools quickly. His contribution over the summer was valuable for my team. I wish him good luck with his future endeavours!"`,
        author: "Aakriti Gupta(Senior Full-Stack Engineer @GitLab)",
        link: "https://gitlab.com/aakritigupta",
    },
];

const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/imskr" },
    { label: "GitHub", href: "https://github.com/imskr" },
    { label: "GitLab", href: "https://gitlab.com/imskr" },
    { label: "X", href: "https://x.com/imskr_" },
    { label: "YouTube", href: "https://youtube.com/@imskr" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: d } }),
};

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
            <Navbar />
            <main className="mt-24 max-w-3xl">
                {/* Header */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10">
                    <h1 className="text-[3rem] font-bold text-[var(--color-text-primary)] tracking-tight mb-3">
                        About
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base">
                        👋 Hi there! I am Prince. A Full-Stack engineer and an open sourcerer.
                    </p>
                </motion.div>

                {/* Bio */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.1} className="flex flex-col gap-5 text-[var(--color-text-secondary)] text-base leading-relaxed mb-10">
                    <p>
                        I'm a Full-Stack Engineer based in India. I earned my Master's degree in computer Application in 2027. My software engineering journey started in 2022, fueled by a passion for open-source contribution.
                    </p>
                    <p>
                        I've had the privilege of working with prestigious organizations like{" "}
                        <a href="https://mozilla.org" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">Mozilla</a>{" "}
                        and{" "}
                        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">GitLab</a>{" "}
                        through the{" "}
                        <a href="https://summerofcode.withgoogle.com" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">Google Summer of Code</a>{" "}
                        programs. At Mozilla, I participated in the 2020 edition, and the following year, I joined GitLab, where I continued to expand my skills and knowledge.
                    </p>
                    <p>
                        Currently, I am working as a Full-Stack Engineer at{" "}
                        <a href="https://gitlab.com" target="_blank" rel="noopener noreferrer" className="underline text-[var(--color-text-primary)] hover:opacity-75 transition-opacity">GitLab</a>{" "}
                        in the Tenant Scale team.
                    </p>
                    <p>Before joining GitLab, my open-source contributions as a community contributor:</p>
                    <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                        {milestones.map((m, i) => (
                            <li key={i}>{m}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Awards */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.2} className="mb-12">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">Awards</h2>
                    <img
                        src="/cover-1.webp"
                        alt="GitLab MVP Award"
                        className="w-40 h-auto rounded-xl"
                    />
                </motion.div>

                {/* Recommendations */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.3} className="mb-12">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8">Recommendations</h2>
                    <div className="flex flex-col gap-10">
                        {recommendations.map((rec, i) => (
                            <div key={i} className="flex flex-col gap-3">
                                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed italic">
                                    {rec.quote}
                                </p>
                                <ul className="list-disc list-inside pl-2">
                                    <li>
                                        <a
                                            href={rec.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-primary)] transition-colors"
                                        >
                                            {rec.author}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.4} className="mb-20">
                    <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Social links</h2>
                    <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                        {socialLinks.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline text-[var(--color-text-secondary)] text-sm hover:text-[var(--color-text-primary)] transition-colors"
                                >
                                    {s.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
