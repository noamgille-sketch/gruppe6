import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oeevsqfcvldtufefsjad.supabase.co";
const supabaseKey = "sb_publishable_fZlvSfruc6tKk99DEt_KHg_PEfvyLqj";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);