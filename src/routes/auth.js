const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// Đăng ký
router.post('/register', async (req, res) => {
  const { email, password, "re-enterPassword": reEnterPassword, username } = req.body;
  if (password !== reEnterPassword) {
    return res.status(400).json({ error: 'passwords do not match' });
  }
  // Đăng ký với Supabase
  const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { username } } });
  if (error) return res.status(400).json({ error: error.message });
  res.json({ user: data.user });
});

// Đăng nhập
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return res.status(400).json({ error: error.message });
  // Lấy username từ user_metadata nếu có
  const username = data.user?.user_metadata?.username || null;
  res.json({ session: data.session, user: { ...data.user, username } });
});

module.exports = router;