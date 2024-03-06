import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lrrlcmnujjvtmbsjrsar.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycmxjbW51amp2dG1ic2pyc2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2NDg0ODQsImV4cCI6MjAyNTIyNDQ4NH0.SHj9mpwXvx2Qxo_7oWUDo4mfeeq5yfkUhNABO_53Wp4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
