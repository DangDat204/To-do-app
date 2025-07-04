exports.validateCreateTodo = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ success: false, message: 'Title là bắt buộc và phải là chuỗi' });
  }
  next();
};
