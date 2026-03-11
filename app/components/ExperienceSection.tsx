import type { ExperienceEntry, SectionData } from "@/lib/content";

interface Props {
    data: SectionData<ExperienceEntry>;
}

export default function ExperienceSection({ data }: Props) {
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

            {/* Timeline */}
            <div className="space-y-10">
                {data.entries.map((exp, index) => (
                    <article
                        key={index}
                        className="group grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 sm:gap-10"
                    >
                        {/* Date Column */}
                        <div className="pt-1">
                            <p className="text-base text-muted font-medium whitespace-nowrap">
                                {exp.period}
                            </p>
                            {exp.isCurrent && (
                                <span className="inline-block mt-1.5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent border border-accent rounded-full">
                                    Current
                                </span>
                            )}
                        </div>

                        {/* Content Column */}
                        <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                                {exp.title}
                            </h3>
                            <p className="text-base text-muted mb-3 flex items-center gap-1.5">
                                <span className="text-xs">{exp.icon}</span>
                                {exp.company}
                            </p>
                            <p className="text-base text-muted leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-sm font-mono font-medium text-tag-text bg-tag-bg rounded-full border border-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
