import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey);

// Keep the site renderable even when public env vars are not configured in GitHub Actions.
export const supabase = hasSupabaseConfig
	? createClient(supabaseUrl, supabaseAnonKey)
	: null;

export const isSupabaseConfigured = hasSupabaseConfig;
