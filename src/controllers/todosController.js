let todos = [];
let idCounter = 1;

exports.getTodos = (req, res) => {
  res.json({ success: true, data: todos, message: "Lấy danh sách to-do thành công" });
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: idCounter++,
    title,
    description,
    completed: false,
    createdAt: new Date()
  };
  todos.push(newTodo);
  res.status(201).json({ success: true, data: newTodo, message: "Tạo to-do mới thành công" });
};

exports.markCompleted = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ success: false, message: 'Không tìm thấy to-do' });

  todo.completed = true;
  res.json({ success: true, data: todo, message: 'Cập nhật to-do thành công' });
};

exports.deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Không tìm thấy to-do' });

  todos.splice(index, 1);
  res.json({ success: true, message: 'Xoá to-do thành công' });
};
