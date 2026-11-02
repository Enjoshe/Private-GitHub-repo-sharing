import type { RepositoryFile } from "@/types/project";

// Placeholder: renders file content as plain text only.
// Never use dangerouslySetInnerHTML for repository content (XSS risk).
export default function CodeViewer({ file }: { file: RepositoryFile }) {
  return (
    <section>
      <h3 className="font-mono text-sm">{file.path}</h3>
      <pre className="mt-2 overflow-x-auto rounded bg-gray-100 p-4 text-sm">
        <code>{file.content}</code>
      </pre>
    </section>
  );
}
