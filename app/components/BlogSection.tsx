"use client";

import { useState } from "react";
import type { BlogEntry, SectionData } from "@/lib/content";

interface Props {
    data: SectionData<BlogEntry>;
}

export default function BlogSection({ data }: Props) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section>
            {/* Section Header */}
            <div className="flex items-end justify-between mb-10">
                <h2 className="font-serif text-5xl lg:text-6xl font-bold italic tracking-tight text-foreground">
                    {data.title}
                </h2>
                <span className="text-xs font-mono text-muted tracking-widest uppercase hidden sm:block">
                    {data.label}
                </span>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
                {data.entries.map((post, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                        <article
                            key={index}
                            className="group cursor-pointer"
                            onClick={() =>
                                setExpandedIndex(isExpanded ? null : index)
                            }
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 mb-2">
                                        <time className="text-xs font-mono text-muted">
                                            {post.date}
                                        </time>
                                        <span className="text-xs text-muted">·</span>
                                        <span className="text-xs font-mono text-muted">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs font-mono font-medium text-tag-text bg-tag-bg rounded-full border border-border"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span
                                    className={`text-muted transition-transform duration-300 shrink-0 mt-1 ${isExpanded ? "rotate-90" : ""
                                        }`}
                                >
                                    →
                                </span>
                            </div>

                            {/* Expanded Content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${isExpanded
                                        ? "max-h-96 opacity-100 mt-4"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="pl-0 border-l-2 border-accent pl-4">
                                    <p className="text-sm text-foreground leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                            </div>

                            {/* Divider */}
                            {index < data.entries.length - 1 && (
                                <div className="border-b border-border mt-6" />
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
