const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');
const { validateCreateTodo } = require('../validators/todosValidator');

router.get('/', todosController.getTodos);
router.post('/', validateCreateTodo, todosController.createTodo);
router.patch('/:id', todosController.markCompleted);
router.delete('/:id', todosController.deleteTodo);

module.exports = router;
