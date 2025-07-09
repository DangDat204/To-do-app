const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const todosController = require('../controllers/todosController');

router.use(authMiddleware);

router.get('/', todosController.getTodos);
router.post('/', todosController.createTodo);
router.patch('/:id', todosController.updateTodo);
router.delete('/:id', todosController.deleteTodo);


module.exports = router;
