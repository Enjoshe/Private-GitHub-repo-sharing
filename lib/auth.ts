/**
 * Authentication and administrator checks.
 *
 * Not implemented yet. Planned: verify the Supabase session on the
 * server and confirm the user exists in `portfolio_admins`.
 */
export async function requireAdmin(): Promise<never> {
  throw new Error("Authentication is not implemented yet.");
}
