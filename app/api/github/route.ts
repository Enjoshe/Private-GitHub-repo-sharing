import { NextResponse } from "next/server";

// Planned: GET /api/github?project={slug}&path={path}
// Must resolve the project, verify it is published, validate the path,
// check the explicit allowlist, then fetch through the GitHub integration.
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented yet." },
    { status: 501 }
  );
}
