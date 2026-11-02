interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params
}: ProjectPageProps) {
  const { slug } = await params;

  return (
    <main className="mx-auto max-w-5xl p-10">
      <p className="text-sm text-gray-500">
        PORTFOLIO PROJECT
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        {slug}
      </h1>

      <p className="mt-4 text-gray-600">
        Project information and approved repository
        content will appear here.
      </p>

      <p className="mt-8 text-sm">
        Repository browsing is not yet connected.
      </p>
    </main>
  );
}
