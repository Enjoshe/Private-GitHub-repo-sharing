export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];

  githubOwner: string;
  githubRepository: string;

  approvedPaths: string[];

  isPublished: boolean;
  createdAt: string;
}

export interface RepositoryFile {
  path: string;
  name: string;
  content: string;
  language: string | null;
}

export interface RepositoryCommit {
  sha: string;
  message: string;
  author: string;
  date: string;
}
