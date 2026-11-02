import "server-only";

const GITHUB_API = "https://api.github.com";

// NOTE: GITHUB_ACCESS_TOKEN is a temporary development placeholder.
// The intended production design is a GitHub App with narrowly scoped,
// read-only installation permissions, not a long-lived personal access token.
function getToken(): string {
  const token = process.env.GITHUB_ACCESS_TOKEN;

  if (!token) {
    throw new Error("GitHub access token is not configured.");
  }

  return token;
}

export async function getRepositoryFile(
  owner: string,
  repository: string,
  path: string
) {
  const url = new URL(
    `${GITHUB_API}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/contents/${path
      .split("/")
      .map(encodeURIComponent)
      .join("/")}`
  );

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json();
}

export async function getRepositoryCommits(
  owner: string,
  repository: string
) {
  const url = new URL(
    `${GITHUB_API}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository)}/commits`
  );

  url.searchParams.set("per_page", "10");

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
      Accept: "application/vnd.github+json"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.status}`);
  }

  return response.json();
}
