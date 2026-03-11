import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mnlveynatalautcnpprw.supabase.co'
const supabaseKey = 'sb_publishable_7BV0D97EspOMXDQEMQydOA_kxPWlA0E'

export const supabase = createClient(supabaseUrl, supabaseKey)
