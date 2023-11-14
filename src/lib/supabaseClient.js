import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://yshoijtkskphgmgszidp.supabase.co';
const supabaseToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzaG9panRrc2twaGdtZ3N6aWRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5MzY1OTksImV4cCI6MjAxNTUxMjU5OX0.YU2yJaJtJ8KPitry1F1NOPDwuGy9Z_MVArA1NQz46ik';

export const supabase = createClient(supabaseUrl, supabaseToken);
