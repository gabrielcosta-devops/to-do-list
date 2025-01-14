require('dotenv').config();
const express = require('express');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use('/api/tasks', taskRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.send('API is running...');
});

module.exports = app;