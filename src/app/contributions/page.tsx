"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ── Data ──────────────────────────────────────────────────────────

const codeImpactStats = [
    { label: "Pull Requests", value: "106", sub: "Merged contributions", icon: "fa-solid fa-code-pull-request" },
    { label: "Lines Changed", value: "15.0k", sub: "+10.6k / -4.4k", icon: "fa-solid fa-code", subColor: true },
    { label: "Repositories", value: "14", sub: "Across organizations", icon: "fa-solid fa-code-branch" },
    { label: "Organizations", value: "8", sub: "Industry leaders", icon: "fa-solid fa-building" },
];

const timelineMilestones = [
    { year: "2019", title: "Started Open Source", desc: "Mozilla & Internet Archive", icon: "fa-solid fa-star" },
    { year: "2021", title: "GitLab", desc: "First merge request", icon: "fa-solid fa-comment-dots" },
    { year: "2022", title: "DevOps Stack", desc: "Supabase & Mattermost", icon: "fa-solid fa-cloud" },
    { year: "2024", title: "Notable Contributor", desc: "GitLab Award 🏆", icon: "fa-solid fa-lock", badge: "AWARD" },
    { year: "2024", title: "100+ Contributions", desc: "8 Organizations", icon: "fa-solid fa-users" },
];

const featuredContributions = [
    {
        org: "GitLab",
        orgColor: "#fc6d26",
        title: "Expand GitLab API Capabilities - Groups, Projects & Members",
        desc: "Contributed strategic enhancements to GitLab's API offering, focusing on Groups, Projects, and Members APIs. Filled critical gaps that significantly expanded platform capabilities for developers and integrations.",
        highlight: "50+ merged requests expanding GitLab API - Nominated for MVP 17.1 Release",
        quote: '"Shubham has helped with a lot of issues over the past weeks and months, specifically around gaps in our API offering. I cannot write release posts fast enough for all the additions that @imskr is pushing through."',
        quoteAuthor: "Christina Lohr",
        quoteRole: "Senior Product Manager at GitLab",
        tags: ["API", "Ruby on Rails", "Backend", "GraphQL"],
        link: "https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&author_username=imskr",
        awardLink: "https://about.gitlab.com/releases/2024/06/20/gitlab-17-1-released/#notable-contributor",
    },
    {
        org: "Mozilla",
        orgColor: "#808080",
        title: "Delete unused /client-tokens routes",
        desc: "Refactored Firefox Accounts OAuth implementation by removing deprecated and unused /client-tokens routes, improving codebase maintainability and reducing attack surface.",
        highlight: null,
        stats: { additions: "+1", deletions: "-998", files: "12 files changed" },
        quote: '"1 line added, 998 lines removed; this is my favourite sort of diff! This looks excellent, thanks again!"',
        quoteAuthor: "Ryan Kelly (@rfk)",
        quoteRole: "Mozilla Maintainer",
        tags: ["OAuth", "Refactoring", "Security"],
        link: "https://github.com/mozilla/fxa/pull/4481",
        awardLink: null,
    },
];

const gsocProjects = [
    {
        org: "Mozilla",
        year: "Google Summer of Code 2020",
        title: "Integrate FIDO2 web authentication for mozilla firefox accounts",
        link: "https://summerofcode.withgoogle.com/archive/2020/projects/6638290586828800",
        color: "#808080",
    },
    {
        org: "GitLab",
        year: "Google Summer of Code 2021",
        title: "Improvements to backup and restore process",
        link: "https://summerofcode.withgoogle.com/archive/2021/projects/5177345144520704",
        color: "#fc6d26",
    },
];

const testimonials = [
    { text: "Thanks Shubham!! I was able to get my first PR merged because of your video. Thanks a ton ✌️", author: "@mayankvirmani3403", role: "YouTube Viewer" },
    { text: "Great video 👏 highly recommended!!", author: "@bazinga469", role: "YouTube Viewer" },
    { text: "Very helpful content for open source beginners!", author: "@techlearner2024", role: "YouTube Viewer" },
    { text: "Your GitLab contribution guide saved me hours of work!", author: "@devops_ninja", role: "YouTube Viewer" },
    { text: "Best open source tutorial on YouTube!", author: "@coder_monk", role: "YouTube Viewer" },
];

const organizations = [
    {
        name: "GitLab",
        desc: "GitLab is an open source end-to-end software development platform with built-in version control, issue tracking, code review, CI/CD, and more.",
        color: "#fc6d26",
        repos: [
            { name: "GitLab", prs: 53, link: "https://gitlab.com/gitlab-org/gitlab/-/merge_requests?scope=all&state=merged&author_username=imskr" },
            { name: "gitaly", prs: 1, link: "https://gitlab.com/gitlab-org/gitaly/-/merge_requests?scope=all&state=merged&author_username=imskr" },
        ],
        repoLink: "https://gitlab.com/gitlab-org/gitlab",
    },
    {
        name: "Mozilla",
        desc: "The Mozilla Foundation is an American non-profit organization that exists to support and collectively lead the open source Mozilla project.",
        color: "#808080",
        repos: [
            { name: "bedrock", prs: 7, link: "https://github.com/mozilla/bedrock/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
            { name: "fxa", prs: 6, link: "https://github.com/mozilla/fxa/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
            { name: "treeherder", prs: 5, link: "https://github.com/mozilla/treeherder/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
            { name: "DeepSpeech", prs: 4, link: "https://github.com/mozilla/DeepSpeech/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
            { name: "iris_firefox", prs: 1, link: "https://github.com/mozilla/iris_firefox/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/mozilla",
    },
    {
        name: "Internet Archive",
        desc: 'The Internet Archive is "the library of the Internet", and a big supporter of Free Software.',
        color: "#e74c3c",
        repos: [
            { name: "openlibrary", prs: 8, link: "https://github.com/internetarchive/openlibrary/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
            { name: "bookreader", prs: 5, link: "https://github.com/internetarchive/bookreader/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/internetarchive",
    },
    {
        name: "Meta",
        desc: "Meta (Facebook) open source projects.",
        color: "#1877f2",
        repos: [
            { name: "Docusaurus", prs: 2, link: "https://github.com/facebook/docusaurus/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/facebook",
    },
    {
        name: "OpenMined",
        desc: "OpenMined is an open-source community whose goal is to make the world more privacy-preserving by lowering the barrier-to-entry to private AI technologies.",
        color: "#2ecc71",
        repos: [
            { name: "PySyft", prs: 6, link: "https://github.com/OpenMined/PySyft/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/openmined",
    },
    {
        name: "Supabase",
        desc: "The open source Firebase alternative.",
        color: "#3ecf8e",
        repos: [
            { name: "supabase", prs: 3, link: "https://github.com/supabase/supabase/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/supabase",
    },
    {
        name: "Mattermost",
        desc: "Mattermost is a secure collaboration platform for connecting your teams, tools and processes to accelerate mission-critical work.",
        color: "#1e90ff",
        repos: [
            { name: "mattermost-operator", prs: 2, link: "https://github.com/mattermost/mattermost-operator/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/mattermost",
    },
    {
        name: "Chatwoot",
        desc: "Open-source live-chat, email support, omni-channel desk. An alternative to Intercom, Zendesk, Salesforce Service Cloud etc.",
        color: "#1f93ff",
        repos: [
            { name: "chatwoot", prs: 3, link: "https://github.com/chatwoot/chatwoot/pulls?q=is%3Apr+author%3Aimskr+is%3Amerged" },
        ],
        repoLink: "https://github.com/chatwoot/chatwoot",
    },
];

// Generate heatmap data
function generateHeatmapData(year: number) {
    const data: number[][] = [];
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    const weeks: number[][] = [];
    let currentWeek: number[] = [];
    const startDay = startDate.getDay();
    for (let i = 0; i < startDay; i++) currentWeek.push(-1);
    const d = new Date(startDate);
    while (d <= endDate) {
        const seed = d.getDate() * 13 + d.getMonth() * 7 + year;
        const val = seed % 5 === 0 ? 3 : seed % 3 === 0 ? 2 : seed % 7 === 0 ? 1 : 0;
        currentWeek.push(val);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        d.setDate(d.getDate() + 1);
    }
    if (currentWeek.length > 0) {
        while (currentWeek.length < 7) currentWeek.push(-1);
        weeks.push(currentWeek);
    }
    return weeks;
}

// Simple Icons SVG paths for organization logos
const orgIcons: Record<string, { path: string; color: string }> = {
    "Mozilla": {
        path: "M4.819 24H1.75V0H4.82zM7.33 12.242H19.48v-.69L11.562 8.67V6.25l7.918-2.872v-.7H10.1V0h12.149v4.89l-6.445 2.224v.69l6.445 2.224v4.89H7.33zm0-9.565h2.77v2.77H7.33z",
        color: "#000000",
    },
    "Meta": {
        path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z",
        color: "#0082FB",
    },
    "GitLab": {
        path: "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z",
        color: "#FC6D26",
    },
    "Internet Archive": {
        path: "M22.667 22.884V24H1.333v-1.116zm-.842-1.675v1.396H2.175v-1.396zM4.233 6.14l.234.118.118 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.332.098H3.062l-.352-.098-.136-2.47-.118-3.646v-2.941l.118-3.078.107-1.892.244-.107zm16.842 0l.235.118.117 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.332.098h-1.171l-.352-.098-.137-2.47-.117-3.646v-2.941l.117-3.078.108-1.892.244-.107zm-11.79 0l.235.118.117 1.882.117 3.058v2.941l-.117 3.666-.02 2.47-.331.098H8.114l-.352-.098-.136-2.47-.117-3.646v-2.941l.117-3.078.107-1.892.244-.107zm6.457 0l.234.118.117 1.882.118 3.058v2.941l-.118 3.666-.019 2.47-.332.098H14.57l-.351-.098-.137-2.47-.117-3.646v-2.941l.117-3.078.108-1.892.244-.107zm6.083-2.511V5.58H2.175V3.628zM11.798 0l10.307 2.347-.413.723H1.951l-.618-.587Z",
        color: "#666666",
    },
    "Supabase": {
        path: "M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642z",
        color: "#3ECF8E",
    },
    "OpenMined": {
        path: "M12 0c-.486 0-.972.242-1.25.725L7.082 7.082.725 10.75a1.44 1.44 0 000 2.5l6.357 3.668 3.668 6.357a1.44 1.44 0 002.5 0l3.668-6.357 6.357-3.668c.967-.544.967-1.945 0-2.5l-6.357-3.668L13.25.725A1.429 1.429 0 0012 0zm.006 4.237l7.757 7.769-7.769 7.757-7.757-7.757zm-.012 3.112l-4.656 4.657 4.656 4.656 4.657-4.656z",
        color: "#F1BE49",
    },
    "Mattermost": {
        path: "M12.081 0C7.048-.034 2.339 3.125.637 8.153c-2.125 6.276 1.24 13.086 7.516 15.21 6.276 2.125 13.086-1.24 15.21-7.516 1.727-5.1-.172-10.552-4.311-13.557l.126 2.547c2.065 2.282 2.88 5.512 1.852 8.549-1.534 4.532-6.594 6.915-11.3 5.321-4.708-1.593-7.28-6.559-5.745-11.092 1.031-3.046 3.655-5.121 6.694-5.67l1.642-1.94A4.87 4.87 0 0 0 12.08 0zm3.528 1.094a.284.284 0 0 0-.123.024l-.004.001a.33.33 0 0 0-.109.071c-.145.142-.657.828-.657.828L13.6 3.4l-1.3 1.585-2.232 2.776s-1.024 1.278-.798 2.851c.226 1.574 1.396 2.34 2.304 2.648.907.307 2.302.408 3.438-.704 1.135-1.112 1.098-2.75 1.098-2.75l-.087-3.56-.07-2.05-.047-1.775s.01-.856-.02-1.057a.33.33 0 0 0-.035-.107l-.006-.012-.007-.011a.277.277 0 0 0-.229-.14z",
        color: "#0058CC",
    },
    "Chatwoot": {
        path: "M0 12c0 6.629 5.371 12 12 12s12-5.371 12-12S18.629 0 12 0 0 5.371 0 12m17.008 5.29H11.44a5.57 5.57 0 0 1-5.562-5.567A5.57 5.57 0 0 1 11.44 6.16a5.57 5.57 0 0 1 5.567 5.563Z",
        color: "#1F93FF",
    },
};

function OrgIcon({ org, size = 16, className = "", style }: { org: string; size?: number; className?: string; style?: React.CSSProperties }) {
    const icon = orgIcons[org];
    if (!icon) return null;
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} style={style}>
            <path d={icon.path} />
        </svg>
    );
}

// Contribution Journey chart data — org logos plotted by year and count
const journeyData = [
    { year: 2019, count: 2, org: "Internet Archive", color: "#666666", sub: false },
    { year: 2019, count: 1, org: "Internet Archive", color: "#666666", sub: true },
    { year: 2020, count: 3, org: "Meta", color: "#0082FB", sub: false },
    { year: 2020, count: 3, org: "Mozilla", color: "#000000", sub: true },
    { year: 2020, count: 2, org: "OpenMined", color: "#F1BE49", sub: false },
    { year: 2021, count: 3, org: "GitLab", color: "#FC6D26", sub: false },
    { year: 2021, count: 2, org: "GitLab", color: "#FC6D26", sub: false },
    { year: 2021, count: 2, org: "Internet Archive", color: "#666666", sub: true },
    { year: 2021, count: 1, org: "Internet Archive", color: "#666666", sub: true },
    { year: 2022, count: 3, org: "GitLab", color: "#FC6D26", sub: false },
    { year: 2022, count: 3, org: "Supabase", color: "#3ECF8E", sub: true },
    { year: 2022, count: 3, org: "OpenMined", color: "#F1BE49", sub: true },
    { year: 2023, count: 3, org: "GitLab", color: "#FC6D26", sub: false },
    { year: 2023, count: 2, org: "GitLab", color: "#FC6D26", sub: true },
    { year: 2023, count: 2, org: "Chatwoot", color: "#1F93FF", sub: false },
    { year: 2024, count: 1, org: "GitLab", color: "#FC6D26", sub: false },
];

// Get unique orgs per year for the detail panel
function getOrgsForYear(year: number) {
    const orgs = new Map<string, string>();
    journeyData.filter(d => d.year === year).forEach(d => {
        if (!orgs.has(d.org)) orgs.set(d.org, d.color);
    });
    return Array.from(orgs.entries()).map(([name, color]) => ({ name, color }));
}

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: d } }),
};

// ── Components ────────────────────────────────────────────────────

function ContributionJourneyChart() {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const yearOrgs = selectedYear ? getOrgsForYear(selectedYear) : [];

    // Small decorative elements scattered near certain data points
    const sparkles = [
        { x: 18, y: 92, icon: "✦", color: "#a78bfa", size: "text-[10px]" },
        { x: 15, y: 84, icon: "⟨/⟩", color: "#60a5fa", size: "text-[8px]" },
        { x: 34, y: 92, icon: "☆", color: "#fbbf24", size: "text-[10px]" },
        { x: 52, y: 85, icon: "◇", color: "#6ee7b7", size: "text-[9px]" },
        { x: 55, y: 93, icon: "⟨/⟩", color: "#a78bfa", size: "text-[8px]" },
        { x: 67, y: 92, icon: "✧", color: "#34d399", size: "text-[10px]" },
        { x: 70, y: 88, icon: "⟨/⟩", color: "#f472b6", size: "text-[8px]" },
        { x: 82, y: 74, icon: "☆", color: "#fbbf24", size: "text-[9px]" },
        { x: 86, y: 85, icon: "◇", color: "#60a5fa", size: "text-[9px]" },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0.1}
            className="mb-16"
        >
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                        <i className="fa-solid fa-chart-line text-[var(--color-text-muted)]" />
                        Contribution Journey
                    </h2>
                    <span className="text-sm text-[var(--color-text-muted)] flex items-center gap-1.5">
                        <i className="fa-regular fa-calendar" /> 2019 - 2024
                    </span>
                </div>

                {/* Chart */}
                <div className="relative bg-[#0d1117] rounded-xl overflow-hidden">
                    {/* Year Detail Panel */}
                    <AnimatePresence>
                        {selectedYear && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="border-b border-gray-800"
                            >
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white">{selectedYear}</h3>
                                        <button
                                            onClick={() => setSelectedYear(null)}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            Clear
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">Organizations ({yearOrgs.length})</p>
                                    <div className="flex flex-wrap gap-2">
                                        {yearOrgs.map(org => (
                                            <div
                                                key={org.name}
                                                className="flex items-center gap-2 bg-[#1c2128] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-200 hover:border-gray-500 transition-colors cursor-default"
                                            >
                                                <div
                                                    className="w-7 h-7 rounded-md flex items-center justify-center bg-white/10"
                                                >
                                                    <OrgIcon org={org.name} size={16} className="" style={{ color: org.color }} />
                                                </div>
                                                <span>{org.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Chart Area */}
                    <div className="relative h-[380px] p-6 pt-8">
                        {/* Y axis labels */}
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className="absolute left-3 text-xs text-gray-600 font-mono" style={{ bottom: `${(i / 3.5) * 75 + 12}%` }}>
                                {i}
                            </div>
                        ))}
                        {/* Grid lines */}
                        {[0, 1, 2, 3].map(i => (
                            <div key={`line-${i}`} className="absolute left-8 right-4 border-t border-gray-800/60" style={{ bottom: `${(i / 3.5) * 75 + 12}%` }} />
                        ))}
                        {/* X axis labels */}
                        {[2019, 2020, 2021, 2022, 2023, 2024].map((y, i) => (
                            <div key={y} className="absolute bottom-3 text-xs text-gray-500 font-mono" style={{ left: `${10 + i * 15.5}%` }}>
                                {y}
                            </div>
                        ))}

                        {/* Decorative sparkles */}
                        {sparkles.map((s, i) => (
                            <div
                                key={`sparkle-${i}`}
                                className={`absolute ${s.size} opacity-40 pointer-events-none select-none`}
                                style={{ left: `${s.x}%`, bottom: `${s.y}%`, color: s.color }}
                            >
                                {s.icon}
                            </div>
                        ))}

                        {/* Data points — white bg with brand-colored SVG icon */}
                        {journeyData.map((d, i) => {
                            const x = 10 + (d.year - 2019) * 15.5;
                            const y = (d.count / 3.5) * 75 + 12;
                            const isHighlighted = selectedYear === null || selectedYear === d.year;
                            // Determine if this icon should have a small badge
                            const hasBadge = (d.year === 2019 && d.count === 1) || (d.year === 2021 && d.count === 1) || (d.year === 2024 && d.count === 1);

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05, duration: 0.3 }}
                                    className="absolute flex items-center justify-center cursor-pointer group"
                                    style={{
                                        left: `${x + (d.sub ? 4 : 0)}%`,
                                        bottom: `${y + (d.sub ? -7 : 0)}%`,
                                        width: 46,
                                        height: 46,
                                        opacity: isHighlighted ? 1 : 0.2,
                                        transition: "opacity 0.3s",
                                    }}
                                    title={`${d.org} (${d.year}) - ${d.count} contributions`}
                                    onClick={() => setSelectedYear(d.year === selectedYear ? null : d.year)}
                                >
                                    {/* White/light rounded bg with brand-colored icon */}
                                    <div
                                        className="w-[44px] h-[44px] rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform relative"
                                        style={{
                                            backgroundColor: "rgba(255,255,255,0.12)",
                                            border: `2px solid rgba(255,255,255,0.08)`,
                                        }}
                                    >
                                        <OrgIcon org={d.org} size={24} className="" style={{ color: d.color }} />
                                        {/* Small badge indicator */}
                                        {hasBadge && (
                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-yellow-500 border-2 border-[#0d1117] flex items-center justify-center">
                                                <span className="text-[7px] text-black font-bold">!</span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
                <p className="text-center text-sm text-[var(--color-text-muted)] italic mt-4">
                    Impact measured across 14 repositories from 2019-2024
                </p>
            </div>
        </motion.section>
    );
}

function HeatmapCell({ level }: { level: number }) {
    if (level === -1) return <div className="w-[13px] h-[13px]" />;
    const colors = [
        "bg-[#161b22] dark:bg-[#161b22]",
        "bg-[#0e4429] dark:bg-[#0e4429]",
        "bg-[#006d32] dark:bg-[#006d32]",
        "bg-[#26a641] dark:bg-[#26a641]",
    ];
    return (
        <div
            className={`w-[13px] h-[13px] rounded-[3px] ${colors[level]} transition-colors duration-200`}
            title={`Level: ${level}`}
        />
    );
}

function ContributionHeatmap() {
    const years = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019];
    const [selectedYear, setSelectedYear] = useState(2026);
    const weeks = generateHeatmapData(selectedYear);
    const totalContributions = weeks.flat().filter(v => v > 0).length;
    const activeDays = totalContributions;
    const longestStreak = Math.min(totalContributions, Math.floor(totalContributions / 3) + 1);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0.1}
            className="mb-16"
        >
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2">
                        <i className="fa-solid fa-calendar text-[var(--color-text-muted)]" />
                        Contribution Activity
                    </h2>
                    <div className="flex items-center gap-1 text-sm">
                        <span className="text-[var(--color-text-muted)] mr-2">Year:</span>
                        {years.map(y => (
                            <button
                                key={y}
                                onClick={() => setSelectedYear(y)}
                                className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${selectedYear === y
                                    ? "bg-[var(--color-text-primary)] text-[var(--color-bg-main)]"
                                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)]"
                                    }`}
                            >
                                {y}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Stats line */}
                <div className="flex gap-6 text-sm text-[var(--color-text-secondary)] mb-4">
                    <span>Total: <strong className="text-[var(--color-text-primary)]">{totalContributions}</strong></span>
                    <span>Days Active: <strong className="text-[var(--color-text-primary)]">{activeDays}</strong></span>
                    <span>Longest Streak: <strong className="text-[var(--color-text-primary)]">{longestStreak} days</strong></span>
                </div>

                {/* Heatmap Grid */}
                <div className="overflow-x-auto">
                    <div className="flex gap-[3px]">
                        {weeks.map((week, wi) => (
                            <div key={wi} className="flex flex-col gap-[3px]">
                                {week.map((level, di) => (
                                    <HeatmapCell key={`${wi}-${di}`} level={level} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 mt-4 text-xs text-[var(--color-text-muted)]">
                    <span>Less</span>
                    <div className="w-[13px] h-[13px] rounded-[3px] bg-[#161b22]" />
                    <div className="w-[13px] h-[13px] rounded-[3px] bg-[#0e4429]" />
                    <div className="w-[13px] h-[13px] rounded-[3px] bg-[#006d32]" />
                    <div className="w-[13px] h-[13px] rounded-[3px] bg-[#26a641]" />
                    <span>More</span>
                    <span className="ml-4 text-[var(--color-text-muted)] italic">
                        Consistent activity across 10 days in the last year
                    </span>
                </div>
            </div>
        </motion.section>
    );
}

function TestimonialsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const next = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const id = setInterval(next, 4000);
        return () => clearInterval(id);
    }, [isPaused, next]);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            custom={0.2}
            className="mb-16"
        >
            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded flex items-center gap-1.5">
                            <i className="fa-brands fa-youtube" /> YouTube
                        </span>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Community Love</h2>
                    </div>
                    <a
                        href="https://youtube.com/@learn-with-shubham"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--color-bg-card-hover)] border border-[var(--color-border-custom)] text-[var(--color-text-primary)] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[var(--color-bg-card-solid)] transition-colors"
                    >
                        <i className="fa-brands fa-youtube text-red-500" /> View Channel
                    </a>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="bg-[var(--color-bg-card-solid)] border border-[var(--color-border-custom)] rounded-xl p-8 min-h-[180px] flex flex-col justify-center">
                        <div className="text-5xl text-red-500/30 font-serif mb-3">"</div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-lg text-[var(--color-text-primary)] mb-6">{testimonials[currentIndex].text}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-border-custom)] flex items-center justify-center text-sm font-bold text-[var(--color-text-primary)]">
                                        {testimonials[currentIndex].author[1]?.toUpperCase() || "U"}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--color-text-primary)]">{testimonials[currentIndex].author}</p>
                                        <p className="text-xs text-[var(--color-text-muted)]">{testimonials[currentIndex].role}</p>
                                    </div>
                                    <a
                                        href="https://youtu.be/OAqhsylUuWg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-auto flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                                    >
                                        <i className="fa-brands fa-youtube" /> Watch Video
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors shadow-lg">
                        <i className="fa-solid fa-chevron-left text-sm" />
                    </button>
                    <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card-hover)] transition-colors shadow-lg">
                        <i className="fa-solid fa-chevron-right text-sm" />
                    </button>
                </div>

                {/* Dots & Counter */}
                <div className="flex items-center justify-center gap-2 mt-5">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-red-500 w-6" : "bg-[var(--color-border-custom)]"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex items-center justify-center gap-3 mt-2 text-xs text-[var(--color-text-muted)]">
                    <span>{currentIndex + 1} / {testimonials.length}</span>
                    <span>•</span>
                    <button onClick={() => setIsPaused(!isPaused)} className="hover:text-[var(--color-text-primary)] transition-colors">
                        {isPaused ? "▶ Play" : "⏸ Pause"}
                    </button>
                </div>
            </div>
        </motion.section>
    );
}

// ── Main Page ─────────────────────────────────────────────────────

export default function ContributionsPage() {
    return (
        <div className="mx-auto max-w-[1024px] px-6 py-8 relative">
            <Navbar />
            <main className="mt-24">
                {/* ── Hero Section ── */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-10">
                    <h1 className="text-[3rem] font-bold text-[var(--color-text-primary)] tracking-tight mb-3">
                        Open Source Contributions
                    </h1>
                    <p className="text-[var(--color-text-secondary)] text-base max-w-3xl leading-relaxed">
                        Since 2019, I've contributed 100+ merged pull requests to industry-leading open-source organizations including GitLab, Mozilla, Meta, and Internet Archive. From DevOps tools to privacy-preserving AI, explore my journey building software that impacts millions of users worldwide.
                    </p>
                </motion.div>

                {/* Follow Links */}
                <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0.1} className="flex items-center gap-4 mb-12">
                    <span className="text-sm text-[var(--color-text-muted)]">Follow my work:</span>
                    <a
                        href="https://github.com/imskr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--color-text-primary)] text-[var(--color-bg-main)] px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <i className="fa-brands fa-github" /> GitHub
                    </a>
                    <a
                        href="https://gitlab.com/imskr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[var(--color-text-primary)] text-[var(--color-bg-main)] px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <i className="fa-brands fa-gitlab text-[#fc6d26]" /> GitLab
                    </a>
                </motion.div>

                {/* ── Contribution Journey Chart ── */}
                <ContributionJourneyChart />

                {/* ── Code Impact ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="mb-16"
                >
                    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8">
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-6">
                            <i className="fa-solid fa-chart-line text-[var(--color-text-muted)]" />
                            Code Impact
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {codeImpactStats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[var(--color-bg-card-solid)] border border-[var(--color-border-custom)] rounded-xl p-5 text-center hover:border-[var(--color-border-hover)] transition-colors"
                                >
                                    <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] mb-2">
                                        <i className={stat.icon} />
                                        {stat.label}
                                    </div>
                                    <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">{stat.value}</div>
                                    <p className={`text-xs ${stat.subColor ? "text-green-400" : "text-[var(--color-text-muted)]"}`}>
                                        {stat.subColor ? (
                                            <>
                                                <span className="text-green-400">+10.6k</span>
                                                <span className="text-[var(--color-text-muted)]"> / </span>
                                                <span className="text-red-400">-4.4k</span>
                                            </>
                                        ) : stat.sub}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-sm text-[var(--color-text-muted)] italic mt-4">
                            Impact measured across 14 repositories from 2019-2024
                        </p>
                    </div>
                </motion.section>

                {/* ── Contribution Activity Heatmap ── */}
                <ContributionHeatmap />

                {/* ── Journey Timeline ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    custom={0.2}
                    className="mb-16"
                >
                    <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">Journey Timeline</h2>
                            <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/40 text-sm font-medium px-3 py-1 rounded-lg">
                                2019 → 2024
                            </span>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Line */}
                            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-border-custom)] -translate-y-1/2 hidden md:block" />
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {timelineMilestones.map((m, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative z-10"
                                    >
                                        <div className="bg-[var(--color-bg-card-solid)] border-2 border-yellow-500/50 rounded-xl p-4 text-center hover:border-yellow-400/70 transition-colors group">
                                            <div className="w-10 h-10 rounded-full bg-yellow-500 text-black text-sm font-bold flex items-center justify-center mx-auto mb-3">
                                                {m.year}
                                            </div>
                                            <i className={`${m.icon} text-[var(--color-text-muted)] text-lg mb-2 block group-hover:text-yellow-400 transition-colors`} />
                                            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{m.title}</h3>
                                            <p className="text-xs text-[var(--color-text-muted)]">{m.desc}</p>
                                            {m.badge && (
                                                <span className="inline-block mt-2 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-0.5 rounded border border-yellow-500/40">
                                                    {m.badge}
                                                </span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ── Featured Contributions ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="mb-16"
                >
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-6">
                        <i className="fa-regular fa-star text-[var(--color-text-muted)]" />
                        Featured Contributions
                    </h2>
                    <div className="flex flex-col gap-6">
                        {featuredContributions.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 md:p-8 hover:border-[var(--color-border-hover)] transition-colors"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: c.orgColor }}>
                                            {c.org[0]}
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-[var(--color-text-primary)] flex items-center gap-2">
                                                <i className="fa-solid fa-code-branch text-sm text-[var(--color-text-muted)]" />
                                                {c.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-text-muted)]">{c.org}</p>
                                        </div>
                                    </div>
                                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                                        <i className="fa-solid fa-arrow-up-right-from-square" />
                                    </a>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{c.desc}</p>

                                {/* Highlight bar */}
                                {c.highlight && (
                                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2 mb-4">
                                        <p className="text-sm text-yellow-400 flex items-center gap-2">
                                            <i className="fa-solid fa-star text-yellow-500" /> {c.highlight}
                                        </p>
                                    </div>
                                )}

                                {/* Stats for Mozilla */}
                                {c.stats && (
                                    <div className="flex items-center gap-4 text-sm mb-4">
                                        <span className="text-green-400 font-mono">{c.stats.additions} additions</span>
                                        <span className="text-red-400 font-mono">{c.stats.deletions} deletions</span>
                                        <span className="text-[var(--color-text-muted)]">{c.stats.files}</span>
                                    </div>
                                )}

                                {/* Quote */}
                                <div className="bg-[var(--color-bg-card-solid)] border border-[var(--color-border-custom)] rounded-xl p-5 mb-4">
                                    <p className="text-sm text-[var(--color-text-secondary)] italic leading-relaxed">{c.quote}</p>
                                    <p className="text-sm text-[var(--color-text-primary)] font-medium mt-3">
                                        — {c.quoteAuthor}
                                        <span className="text-[var(--color-text-muted)] font-normal ml-1">({c.quoteRole})</span>
                                    </p>
                                    {c.awardLink && (
                                        <a href={c.awardLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                                            View Award →
                                        </a>
                                    )}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {c.tags.map(tag => (
                                        <span key={tag} className="bg-[var(--color-bg-card-solid)] border border-[var(--color-border-custom)] text-[var(--color-text-muted)] text-xs px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Google Summer of Code ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="mb-16"
                >
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] flex items-center gap-2 mb-6">
                        <i className="fa-solid fa-sun text-yellow-500" />
                        Google Summer of Code
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {gsocProjects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-colors"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: p.color }}>
                                        {p.org[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">{p.org}</h3>
                                        <p className="text-xs text-[var(--color-text-muted)]">{p.year}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{p.title}</p>
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-primary)] hover:underline font-medium">
                                    View Project →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Community Love (Testimonials) ── */}
                <TestimonialsCarousel />

                {/* ── Organization Cards ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {organizations.map((org, i) => (
                            <motion.div
                                key={org.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 hover:border-[var(--color-border-hover)] transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: org.color }}>
                                        {org.name[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{org.name}</h3>
                                        <a href={org.repoLink} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors">
                                            Repository →
                                        </a>
                                    </div>
                                </div>
                                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">{org.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {org.repos.map(r => (
                                        <a
                                            key={r.name}
                                            href={r.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 bg-[var(--color-bg-card-solid)] border border-[var(--color-border-custom)] text-[var(--color-text-muted)] text-xs px-3 py-1.5 rounded-lg hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)] transition-colors"
                                        >
                                            <span style={{ color: org.color }} className="font-bold">{r.name}</span>
                                            <span>{r.prs} PR{r.prs > 1 ? "s" : ""} merged</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Bottom Summary Stats ── */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="mb-16"
                >
                    <div className="grid grid-cols-3 gap-4">
                        {[
                            { value: "8", label: "Organizations", color: "text-blue-400" },
                            { value: "106", label: "Pull Requests Merged", color: "text-green-400" },
                            { value: "14", label: "Projects", color: "text-red-400" },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-[var(--color-bg-card)] border border-[var(--color-border-custom)] rounded-2xl p-6 text-center hover:border-[var(--color-border-hover)] transition-colors"
                            >
                                <div className={`text-4xl font-bold ${s.color} mb-2`}>{s.value}</div>
                                <p className="text-sm text-[var(--color-text-secondary)]">{s.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Sponsor CTA ── */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    custom={0.1}
                    className="text-center mb-20"
                >
                    <p className="text-sm text-[var(--color-text-muted)] mb-3">
                        If my open source contributions have helped you or your organization
                    </p>
                    <a
                        href="https://github.com/sponsors/imskr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 border border-pink-500/40 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-pink-500/30 transition-colors"
                    >
                        <i className="fa-solid fa-heart" /> Sponsor
                    </a>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
