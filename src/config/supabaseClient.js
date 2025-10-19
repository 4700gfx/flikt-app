/**
 * Supabase Client Configuration
 * 
 * This file initializes and exports the Supabase client for use throughout
 * the Flikt application. It handles authentication, database operations,
 * and real-time subscriptions.
 */

import { createClient } from '@supabase/supabase-js'

// Retrieve Supabase credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate environment variables are present
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase URL and Anon Key are required. Please check your .env.local file.'
  )
}

// Initialize Supabase client with credentials
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Optional: Export client for debugging (remove in production)
if (import.meta.env.DEV) {
  console.log('Supabase client initialized for:', supabaseUrl)
}