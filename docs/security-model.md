# Security Model

## Assets to Protect

- GitHub App private key
- GitHub installation credentials
- Private repository source code
- Supabase service-role key
- Administrative accounts
- Unpublished project metadata

## Threats

1. Unauthorized repository browsing.
2. Path traversal in file requests.
3. Exposure of GitHub credentials.
4. Unauthorized project publication.
5. Broken access control.
6. API abuse and excessive requests.
7. Cross-site scripting through displayed source content.

## Security Controls

| Threat | Planned Control |
|---|---|
| Unauthorized file access | Explicit path allowlists |
| Credential exposure | Server-only secret storage |
| Path traversal | Canonicalization and validation |
| Unauthorized administration | Authentication and authorization |
| Excessive requests | Rate limiting |
| XSS | Safe text rendering and output handling |
| Database exposure | Supabase RLS |

## Security Testing

- Test access to unpublished projects.
- Test requests for unapproved files.
- Test path traversal attempts.
- Verify visitors cannot access admin operations.
- Verify secrets are absent from browser bundles.
- Test API rate limits.

## Limitations

The controls listed above are design requirements.
They must be implemented and tested before the application
is considered secure for production use.
