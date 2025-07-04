const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const errorHandler = require('./middlewares/errorHandler');
const todosRoutes = require('./routes/todos');

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/todos', todosRoutes);
app.use(errorHandler);

module.exports = app;
