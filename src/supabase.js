import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cmmsqfobigdwuzvnuvar.supabase.co";
const supabaseKey = "sb_publishable_ZnFfPLkZw7e3q_JZzIa-NA_078k9T6U";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
