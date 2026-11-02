import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Basic client. Later: separate browser and server clients,
// configure authentication, and enforce Row Level Security (RLS).
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
