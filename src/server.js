require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 3000;
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
