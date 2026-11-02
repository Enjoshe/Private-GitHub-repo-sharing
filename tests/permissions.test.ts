import { describe, expect, it } from "vitest";
import {
  isApprovedFile,
  canManageProjects
} from "../lib/permissions";

const project = {
  id: "1",
  slug: "sample",
  title: "Sample",
  description: "Sample project description",
  technologies: ["TypeScript"],
  githubOwner: "Enjoshe",
  githubRepository: "sample",
  approvedPaths: ["README.md", "src/index.ts"],
  isPublished: true,
  createdAt: new Date().toISOString()
};

describe("Repository file permissions", () => {
  it("allows explicitly approved files", () => {
    expect(
      isApprovedFile(project, "README.md")
    ).toBe(true);
  });

  it("rejects files outside the allowlist", () => {
    expect(
      isApprovedFile(project, "secrets.env")
    ).toBe(false);
  });

  it("rejects path traversal attempts", () => {
    expect(
      isApprovedFile(project, "../secrets.env")
    ).toBe(false);
  });
});

describe("Administrative permissions", () => {
  it("requires authentication and admin status", () => {
    expect(canManageProjects(true, true)).toBe(true);
    expect(canManageProjects(false, true)).toBe(false);
    expect(canManageProjects(true, false)).toBe(false);
  });
});
