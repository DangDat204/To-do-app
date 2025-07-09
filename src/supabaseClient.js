require('dotenv').config();

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // hoặc ANON_KEY nếu chỉ dùng cho client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

// https://ybvmkqxjcqqxvsauzwxm.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlidm1rcXhqY3FxeHZzYXV6d3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE5NTgyOTAsImV4cCI6MjA2NzUzNDI5MH0.BE4bgDwsdols37sSs3ljAvxOYiOvu_Z1rnlGhiMfn4I