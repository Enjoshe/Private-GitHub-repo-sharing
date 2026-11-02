import { z } from "zod";

export const projectSchema = z.object({
  slug: z.string()
    .min(3)
    .max(60)
    .regex(/^[a-z0-9-]+$/),

  title: z.string().min(2).max(100),

  description: z.string().min(10).max(1000),

  technologies: z.array(z.string().max(40)).max(20),

  githubOwner: z.string().min(1).max(39),

  githubRepository: z.string().min(1).max(100),

  approvedPaths: z.array(z.string().min(1)).max(100)
});

export type ProjectInput = z.infer<typeof projectSchema>;
