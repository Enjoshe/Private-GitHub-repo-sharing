import type { PortfolioProject } from "@/types/project";

// Placeholder: title, description and technology list.
export default function ProjectHeader({ project }: { project: PortfolioProject }) {
  return (
    <header>
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="mt-4 text-gray-600">{project.description}</p>
      <p className="mt-2 text-sm text-gray-500">
        {project.technologies.join(" · ")}
      </p>
    </header>
  );
}
