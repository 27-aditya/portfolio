"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectEntry, SectionData } from "@/lib/content";

interface Props {
    data: SectionData<ProjectEntry>;
}

export default function ProjectsSection({ data }: Props) {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>(
        {}
    );

    const goToSlide = (projectIndex: number, direction: "prev" | "next", total: number) => {
        setCarouselIndices((prev) => {
            const current = prev[projectIndex] || 0;
            const next =
                direction === "next"
                    ? (current + 1) % total
                    : (current - 1 + total) % total;
            return { ...prev, [projectIndex]: next };
        });
    };

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

            {/* Project Entries — timeline style */}
            <div className="space-y-6">
                {data.entries.map((project, index) => {
                    const isExpanded = expandedIndex === index;
                    const currentSlide = carouselIndices[index] || 0;
                    const hasImages = project.images.length > 0;
                    const hasMultipleImages = project.images.length > 1;

                    return (
                        <article key={index} className="group">
                            <div
                                className="flex items-start justify-between gap-4 cursor-pointer"
                                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs font-mono text-muted mb-3">
                                        {project.tech}
                                    </p>
                                    <p className="text-sm text-muted leading-relaxed max-w-lg">
                                        {project.description}
                                    </p>
                                </div>
                                {hasImages && (
                                    <span
                                        className={`text-muted transition-transform duration-300 shrink-0 mt-1 ${isExpanded ? "rotate-90" : ""
                                            }`}
                                    >
                                        →
                                    </span>
                                )}
                            </div>

                            {/* Expanded Content — Image Carousel */}
                            {hasImages && (
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isExpanded
                                            ? "max-h-[500px] opacity-100 mt-4"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-tag-bg">
                                        <Image
                                            src={project.images[currentSlide]}
                                            alt={`${project.title} - image ${currentSlide + 1}`}
                                            fill
                                            className="object-cover transition-opacity duration-300"
                                        />

                                        {/* Carousel Controls */}
                                        {hasMultipleImages && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        goToSlide(index, "prev", project.images.length);
                                                    }}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors cursor-pointer"
                                                    aria-label="Previous image"
                                                >
                                                    ‹
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        goToSlide(index, "next", project.images.length);
                                                    }}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors cursor-pointer"
                                                    aria-label="Next image"
                                                >
                                                    ›
                                                </button>

                                                {/* Dots */}
                                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                    {project.images.map((_, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCarouselIndices((prev) => ({
                                                                    ...prev,
                                                                    [index]: i,
                                                                }));
                                                            }}
                                                            className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${i === currentSlide
                                                                    ? "bg-white"
                                                                    : "bg-white/50"
                                                                }`}
                                                            aria-label={`Go to image ${i + 1}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

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
