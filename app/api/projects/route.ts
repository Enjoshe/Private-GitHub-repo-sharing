import { NextResponse } from "next/server";

// Planned: return published portfolio project metadata (GET),
// and create projects for authenticated administrators (POST).
export async function GET() {
  return NextResponse.json(
    { error: "Not implemented yet." },
    { status: 501 }
  );
}
