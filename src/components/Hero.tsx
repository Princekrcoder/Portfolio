export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-10 mt-12 md:mt-24">
            <div className="flex-1 max-w-2xl animate-scale-in">
                <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.2] tracking-tight mb-4 text-[var(--color-text-primary)]">
                    I'm Prince, a <span className="text-[var(--color-text-primary)]">Full-Stack Engineer</span> and an open-source contributor at{" "}
                    <span className="inline-block align-bottom overflow-hidden h-[1.2em] relative w-44 md:w-64">
                        <span className="absolute left-0 flex flex-col w-full text-left animate-vertical-slide">
                            <span className="flex items-center h-[1.2em] font-bold text-gradient-gitlab">GitLab</span>
                            <span className="flex items-center h-[1.2em] font-bold text-gradient-mozilla">Mozilla</span>
                            <span className="flex items-center h-[1.2em] font-bold text-gradient-facebook">Facebook</span>
                            <span className="flex items-center h-[1.2em] font-bold text-gradient-gitlab">GitLab</span>
                        </span>
                    </span>
                </h1>
                <div className="text-[var(--color-text-secondary)] text-lg">India • IN +91</div>
            </div>
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8 md:mb-0 animate-scale-in group">
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-[var(--color-bg-card)]">
                    <img src="/avatar.png" alt="Prince" className="w-full h-full object-cover scale-[1.02] grayscale transition duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-tl from-purple-500 to-orange-600 opacity-50 blur-2xl rounded-full"></div>
            </div>
        </section>
    );
}
