# API Design

## Planned Endpoints

### GET /api/projects

Returns published portfolio project metadata.

### GET /api/github?project={slug}&path={path}

Returns the contents of an approved repository file.

The server must:
- Resolve the project from the database.
- Verify that it is published.
- Validate the requested path.
- Check the explicit file allowlist.
- Retrieve content through the GitHub integration.

### GET /api/projects/{slug}/commits

Returns a limited, read-only commit history for a published project.

### POST /api/projects

Creates a project.

Requires administrator authentication and authorization.

### PATCH /api/projects/{id}

Updates project metadata and approved file paths.

Requires administrator authentication and authorization.

## General Requirements

- Validate all user-controlled input.
- Use appropriate HTTP status codes.
- Avoid returning secrets or raw provider errors.
- Apply rate limits to public endpoints.
