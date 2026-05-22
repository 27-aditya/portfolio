"use client";

import { useState } from "react";
import type {
    ExperienceEntry,
    ProjectEntry,
    BlogEntry,
    SectionData,
} from "@/lib/content";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import Sidebar from "./Sidebar";

const tabs = [
    { key: "experience", label: "Experience" },
    { key: "projects", label: "Projects" },
    { key: "blog", label: "Blog" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

interface Props {
    experience: SectionData<ExperienceEntry>;
    projects: SectionData<ProjectEntry>;
    blog: SectionData<BlogEntry>;
}

export default function PageContent({ experience, projects, blog }: Props) {
    const [activeTab, setActiveTab] = useState<TabKey>("experience");
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <header className="shrink-0 bg-white/80 backdrop-blur-md border-b border-border z-50">
                <nav className="px-6 lg:px-10 flex items-center justify-between h-14">
                    <a
                        href="/"
                        className="text-lg font-bold tracking-tight text-foreground"
                    >
                        AK.
                    </a>

                    <div className="flex items-center gap-5 md:gap-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`text-sm font-medium transition-colors relative pb-0.5 cursor-pointer ${activeTab === tab.key
                                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-foreground"
                                    : "text-muted hover:text-foreground"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            {/* Body: Responsive layout */}
            <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
                {/* Main Content */}
                <main className="w-full lg:w-[65%] overflow-y-auto no-scrollbar px-6 lg:pl-14 lg:pr-6 xl:pl-20 xl:pr-8 py-5 lg:py-7">
                    <div className="max-w-4xl mx-auto lg:mx-0">
                        {/* Mobile Collapsible Sidebar */}
                        <div className="block lg:hidden mb-8">
                            <button
                                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                                className="w-full flex items-center justify-between p-4 bg-gray-500/5 rounded-2xl border border-border text-foreground hover:bg-gray-500/10 transition-colors"
                            >
                                <span className="font-semibold text-sm">
                                    {isMobileSidebarOpen ? "Hide Profile" : "View Profile"}
                                </span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${isMobileSidebarOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {isMobileSidebarOpen && (
                                <div className="mt-6">
                                    <Sidebar />
                                </div>
                            )}
                        </div>

                        {activeTab === "experience" && (
                            <ExperienceSection data={experience} />
                        )}
                        {activeTab === "projects" && <ProjectsSection data={projects} />}
                        {activeTab === "blog" && <BlogSection data={blog} />}
                    </div>
                </main>

                {/* Desktop Sidebar Column */}
                <aside className="hidden lg:block lg:w-[35%] shrink-0 overflow-y-auto no-scrollbar px-8 py-10">
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
