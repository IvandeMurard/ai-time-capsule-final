import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function saveCapsule({ user_input, ai_output, style, email, open_at }: any) {
  const token = crypto.randomUUID().slice(0, 6);

  const { data, error } = await supabase.from("capsules").insert([
    { user_input, ai_output, style, token, email, open_at },
  ]);

  return { token, error };
}