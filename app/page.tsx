import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <section className="mx-auto max-w-4xl py-24">
        <p className="text-sm font-semibold tracking-widest uppercase">
          Private GitHub Portfolio Gateway
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Your work. Your access rules.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Explore selected engineering projects, documentation,
          and source code through controlled portfolio access.
        </p>

        <Link
          href="/p/polymorph"
          className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          View sample project
        </Link>
      </section>
    </main>
  );
}
