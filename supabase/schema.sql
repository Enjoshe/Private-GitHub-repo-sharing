CREATE TABLE portfolio_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL,

    github_owner TEXT NOT NULL,
    github_repository TEXT NOT NULL,

    technologies JSONB NOT NULL DEFAULT '[]',
    approved_paths JSONB NOT NULL DEFAULT '[]',

    is_published BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE portfolio_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    user_id UUID NOT NULL UNIQUE,

    created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;

ALTER TABLE portfolio_admins ENABLE ROW LEVEL SECURITY;

-- Public visitors may read published project metadata.
CREATE POLICY "Public can view published projects"
ON portfolio_projects
FOR SELECT
USING (is_published = TRUE);

-- Additional administrative policies and secure server-side
-- authorization checks must be implemented before deployment.
