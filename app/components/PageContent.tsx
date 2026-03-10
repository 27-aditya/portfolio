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

                    <div className="flex items-center gap-8">
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

            {/* Body: 60-40 split, each independently scrollable, no visible scrollbars */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Column — 60% */}
                <main className="w-[70%] overflow-y-auto no-scrollbar px-8 lg:px-14 xl:px-20 py-10 lg:py-14">
                    <div className="max-w-3xl">
                        {activeTab === "experience" && (
                            <ExperienceSection data={experience} />
                        )}
                        {activeTab === "projects" && <ProjectsSection data={projects} />}
                        {activeTab === "blog" && <BlogSection data={blog} />}
                    </div>
                </main>

                {/* Right Column — 40%, independent scroll */}
                <aside className="hidden lg:block w-[30%] shrink-0 overflow-y-auto no-scrollbar px-8 py-10">
                    <Sidebar />
                </aside>
            </div>
        </div>
    );
}
