const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes'); // Add this line

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes); // Add this line

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});