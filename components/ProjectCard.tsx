import type { PortfolioProject } from "@/types/project";

// Placeholder: minimal card. Styling and linking pending.
export default function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="rounded-lg border p-6">
      <h2 className="text-xl font-semibold">{project.title}</h2>
      <p className="mt-2 text-gray-600">{project.description}</p>
    </article>
  );
}
