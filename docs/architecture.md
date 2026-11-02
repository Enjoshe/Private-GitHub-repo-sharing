# Architecture

## Overview

RepoVault separates portfolio presentation, repository access,
administrative operations, and persistent project metadata.

## Components

### Frontend
Next.js App Router renders project pages and approved code content.

### Backend
Server-side routes validate requests and retrieve repository content.

### GitHub Integration
A GitHub App installation will provide narrowly scoped, read-only
access to selected repositories.

### Database
Supabase stores project metadata, approved file paths,
publication settings, and administrator information.

## Request Flow

1. Visitor opens a project-specific URL.
2. Application resolves the project slug.
3. Application checks publication status.
4. Visitor requests an approved file.
5. Server verifies the file against the project's allowlist.
6. Server retrieves content from GitHub.
7. Application returns the approved content.

## Trust Boundaries

- Public browser
- Next.js server
- Supabase database
- GitHub API

Secrets must remain within trusted server-side components.
