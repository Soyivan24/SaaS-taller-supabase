import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://vzwdgxxnjrvnoxxozcrs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6d2RneHhuanJ2bm94eG96Y3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4ODc2MTksImV4cCI6MjA2MzQ2MzYxOX0.ONv_NwyA1C7gOKFrUkh7uj4IG8g33ufVhW-VbON1UEg';

export const supabase = createClient(supabaseUrl, supabaseKey);
