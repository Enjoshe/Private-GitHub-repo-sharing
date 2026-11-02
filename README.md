# RepoVault
### Private GitHub Portfolio Gateway

**Status: Project scaffold — implementation in progress**

RepoVault is a secure, read-only portfolio platform designed to showcase selected content from private GitHub repositories without exposing entire repositories or requiring them to be made public.

The application provides controlled access to approved project documentation, source files, and commit history through shareable portfolio links.

## Problem

Developers often maintain private repositories containing coursework, research, prototypes, and other work that they may want to demonstrate to recruiters.

Making an entire repository public is not always desirable.

RepoVault explores a controlled alternative: selectively exposing approved repository content through a dedicated web application.

## Core Features

- Private GitHub repository integration.
- Selective source-code and documentation access.
- Shareable project-specific portfolio links.
- Read-only commit history.
- Project metadata and technology stack presentation.
- Server-side GitHub API integration.
- Role-based administrative access.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack web application |
| TypeScript | Type safety |
| GitHub API | Repository content and commit retrieval |
| Supabase | Database and authentication |
| Tailwind CSS | User interface |
| Vitest | Unit testing |

## Security Design

- GitHub credentials remain server-side.
- Repository access is restricted to explicitly approved repositories.
- File access is restricted through an allowlist.
- Public portfolio visitors receive read-only access.
- Administrative operations require authentication.
- API responses are validated before being displayed.

## Architecture

1. Portfolio visitor requests a project link.
2. Next.js resolves the project metadata.
3. The server verifies the requested resource against access rules.
4. The server retrieves approved content through the GitHub API.
5. The application returns a sanitized, read-only response.

## Current Progress

- [x] Project requirements and architecture
- [x] Repository structure
- [x] Initial security model
- [ ] Next.js application setup
- [ ] Supabase database integration
- [ ] GitHub App integration
- [ ] Repository allowlisting
- [ ] Source-code viewer
- [ ] Commit history viewer
- [ ] Administrative dashboard
- [ ] Authorization tests
- [ ] Deployment and security review

## Important

This repository currently contains a project scaffold and design documentation. Features marked as pending have not yet been implemented or security-tested.
