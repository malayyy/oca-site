
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Prevent crash if keys are missing
export const supabase = (supabaseUrl && supabaseAnonKey)
    ? createClient(supabaseUrl, supabaseAnonKey)
    : {
        from: () => ({
            select: () => ({ data: [], error: null }),
            insert: () => ({ data: [], error: null }),
            update: () => ({ data: [], error: null }),
            delete: () => ({ data: [], error: null })
        }),
        auth: { onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => { } } } }) }
    }

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase keys missing. App running in offline/demo mode.')
}
