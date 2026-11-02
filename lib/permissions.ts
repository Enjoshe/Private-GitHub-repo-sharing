import type { PortfolioProject } from "@/types/project";

/**
 * Determines whether a requested repository file
 * is explicitly approved for public portfolio viewing.
 */
export function isApprovedFile(
  project: PortfolioProject,
  requestedPath: string
): boolean {
  const normalizedPath = requestedPath
    .replaceAll("\\", "/")
    .replace(/^\/+/, "");

  if (
    normalizedPath.includes("..") ||
    normalizedPath.includes("\0")
  ) {
    return false;
  }

  return project.approvedPaths.includes(normalizedPath);
}

/**
 * Public portfolio visitors must never receive
 * administrative permissions.
 */
export function canManageProjects(
  isAuthenticated: boolean,
  isAdmin: boolean
): boolean {
  return isAuthenticated && isAdmin;
}
