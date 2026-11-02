import { describe, expect, it } from "vitest";
import { projectSchema } from "../lib/validation";

describe("Project validation", () => {
  it("accepts a valid project", () => {
    const result = projectSchema.safeParse({
      slug: "polymorph",
      title: "Polymorph",
      description: "Static PE malware analysis project.",
      technologies: ["Python", "Scikit-learn"],
      githubOwner: "Enjoshe",
      githubRepository: "Polymorph",
      approvedPaths: ["README.md", "src/detect.py"]
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid project slugs", () => {
    const result = projectSchema.safeParse({
      slug: "../private",
      title: "Test",
      description: "A sufficiently long description.",
      technologies: [],
      githubOwner: "Enjoshe",
      githubRepository: "Test",
      approvedPaths: []
    });

    expect(result.success).toBe(false);
  });
});
