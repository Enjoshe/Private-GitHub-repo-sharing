import type { RepositoryCommit } from "@/types/project";

// Placeholder: minimal read-only commit list.
export default function CommitHistory({ commits }: { commits: RepositoryCommit[] }) {
  return (
    <ul className="space-y-2">
      {commits.map((commit) => (
        <li key={commit.sha} className="text-sm">
          <span className="font-mono">{commit.sha.slice(0, 7)}</span>{" "}
          {commit.message} — {commit.author}
        </li>
      ))}
    </ul>
  );
}
