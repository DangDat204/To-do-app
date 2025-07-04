exports.validateCreateTodo = (req, res, next) => {
  const { title, description, deadlineAt, priority } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ success: false, message: 'Title là bắt buộc và phải là chuỗi' });
  }
  // Validate priority
  const validPriorities = ['low', 'medium', 'high'];
  if (priority && !validPriorities.includes(priority)) {
    return res.status(400).json({ success: false, message: 'Priority phải là một trong: low, medium, high' });
  }
  // Validate deadlineAt
  if (deadlineAt) {
    const date = new Date(deadlineAt);
    if (isNaN(date.getTime())) {
      return res.status(400).json({ success: false, message: 'deadlineAt phải là ngày hợp lệ (ISO string)' });
    }
  }
  next();
};
