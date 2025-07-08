const supabase = require('../supabaseClient');

// Lấy tất cả todos của user
exports.getTodos = async (req, res) => {
  const userId = req.user.id;
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

// Tạo todo mới
exports.createTodo = async (req, res) => {
  const userId = req.user.id;
  const { title, description, deadline_at, priority } = req.body;
  const { data, error } = await supabase
    .from('todos')
    .insert([{ user_id: userId, title, description, deadline_at, priority }])
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

// Cập nhật todo
exports.updateTodo = async (req, res) => {
  const userId = req.user.id;
  const todoId = req.params.id;
  const { title, description, completed, deadline_at, priority } = req.body;
  const { data, error } = await supabase
    .from('todos')
    .update({ title, description, completed, deadline_at, priority })
    .eq('id', todoId)
    .eq('user_id', userId)
    .select();

  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

// Xóa todo
exports.deleteTodo = async (req, res) => {
  const userId = req.user.id;
  const todoId = req.params.id;
  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', todoId)
    .eq('user_id', userId);

  if (error) return res.status(400).json({ error: error.message });
  res.json({ success: true });
};
