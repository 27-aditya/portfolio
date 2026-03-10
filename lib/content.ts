import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ExperienceEntry {
    title: string;
    period: string;
    isCurrent: boolean;
    company: string;
    icon: string;
    tags: string[];
    description: string;
}

export interface ProjectEntry {
    title: string;
    tech: string;
    images: string[];
    href: string;
    description: string;
}

export interface BlogEntry {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
    description: string;
}

export interface SectionData<T> {
    title: string;
    label: string;
    entries: T[];
}

function parseEntries(content: string) {
    // Split by --- separator (not the frontmatter one)
    const blocks = content.split(/\n---\n/).filter((b) => b.trim());
    return blocks.map((block) => {
        const lines = block.trim().split("\n");
        const titleLine = lines.find((l) => l.startsWith("## "));
        const title = titleLine ? titleLine.replace("## ", "") : "";

        const metadata: Record<string, string> = {};
        const metadataArrays: Record<string, string[]> = {};
        const descriptionLines: string[] = [];
        let pastMetadata = false;

        for (const line of lines) {
            if (line.startsWith("## ")) continue;
            if (!pastMetadata && line.startsWith("- ")) {
                const match = line.match(/^- (\w+):\s*(.+)$/);
                if (match) {
                    const key = match[1];
                    const value = match[2];
                    metadata[key] = value;
                    if (!metadataArrays[key]) metadataArrays[key] = [];
                    metadataArrays[key].push(value);
                }
            } else if (line.trim() !== "") {
                pastMetadata = true;
                descriptionLines.push(line);
            }
        }

        return { title, metadata, metadataArrays, description: descriptionLines.join(" ").trim() };
    });
}

export function getExperience(): SectionData<ExperienceEntry> {
    const filePath = path.join(contentDirectory, "experience.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const entries = parseEntries(content).map((entry) => ({
        title: entry.title,
        period: entry.metadata.period || "",
        isCurrent: entry.metadata.current === "true",
        company: entry.metadata.company || "",
        icon: entry.metadata.icon || "💼",
        tags: entry.metadata.tags ? entry.metadata.tags.split(", ") : [],
        description: entry.description,
    }));

    return {
        title: data.title || "Experience",
        label: data.label || "01 // WORK",
        entries,
    };
}

export function getProjects(): SectionData<ProjectEntry> {
    const filePath = path.join(contentDirectory, "projects.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const entries = parseEntries(content).map((entry) => ({
        title: entry.title,
        tech: entry.metadata.tech || "",
        images: entry.metadataArrays.image || [],
        href: entry.metadata.href || "#",
        description: entry.description,
    }));

    return {
        title: data.title || "Selected Projects",
        label: data.label || "02 // BUILD",
        entries,
    };
}

export function getBlog(): SectionData<BlogEntry> {
    const filePath = path.join(contentDirectory, "blog.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const entries = parseEntries(content).map((entry) => ({
        title: entry.title,
        date: entry.metadata.date || "",
        readTime: entry.metadata.readTime || "",
        tags: entry.metadata.tags ? entry.metadata.tags.split(", ") : [],
        description: entry.description,
    }));

    return {
        title: data.title || "Blog",
        label: data.label || "03 // WRITE",
        entries,
    };
}
