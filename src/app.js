const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const errorHandler = require('./middlewares/errorHandler');
const todosRoutes = require('./routes/todos');
const aiSuggest = require('./routes/aiSuggest');

const app = express();

app.use(express.json());
app.use(corsMiddleware);
app.use('/todos', todosRoutes);
app.use(errorHandler);
app.use('/api', aiSuggest);
module.exports = app;
