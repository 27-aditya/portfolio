import { getExperience, getProjects, getBlog } from "@/lib/content";
import PageContent from "./components/PageContent";

export default function Home() {
  const experience = getExperience();
  const projects = getProjects();
  const blog = getBlog();

  return (
    <PageContent
      experience={experience}
      projects={projects}
      blog={blog}
    />
  );
}
