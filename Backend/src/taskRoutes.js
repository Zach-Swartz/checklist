const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Path to store tasks
const tasksFilePath = path.join(__dirname, 'tasks.json');

// Helper function to read tasks
const readTasks = () => {
  if (!fs.existsSync(tasksFilePath)) {
    console.log('tasks.json file does not exist. Creating a new one...');
    fs.writeFileSync(tasksFilePath, JSON.stringify([])); // Create an empty file if it doesn't exist
    return [];
  }
  try {
    const data = fs.readFileSync(tasksFilePath, 'utf-8');
    console.log('Read tasks from tasks.json:', data); // Debugging log
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading tasks.json:', error);
    return [];
  }
};

// Helper function to write tasks
const writeTasks = (tasks) => {
  try {
    console.log('Writing tasks to tasks.json:', tasks); // Debugging log
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error('Error writing to tasks.json:', error);
  }
};

// Route to get tasks for a user
router.get('/:email', (req, res) => {
  const { email } = req.params;
  const tasks = readTasks();
  const userTasks = tasks.filter((task) => task.email === email);
  console.log(`Tasks retrieved for user ${email}:`, userTasks); // Debugging log
  res.status(200).json(userTasks);
});

// Route to add a task for a user
router.post('/:email', (req, res) => {
  const { email } = req.params;
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Task text is required' });
  }

  const tasks = readTasks();
  const newTask = {
    id: Date.now(),
    email,
    text,
    completed: false,
  };
  tasks.push(newTask);
  writeTasks(tasks);

  console.log(`Task added for user ${email}:`, newTask); // Debugging log
  res.status(201).json({ message: 'Task added successfully', task: newTask });
});

// Route to toggle task completion
router.patch('/:email/:taskId', (req, res) => {
  const { email, taskId } = req.params;

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(
    (task) => task.email === email && task.id === parseInt(taskId, 10)
  );

  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex].completed = !tasks[taskIndex].completed;
  writeTasks(tasks);

  console.log(`Task updated for user ${email}:`, tasks[taskIndex]); // Debugging log
  res.status(200).json({ message: 'Task updated successfully', task: tasks[taskIndex] });
});

module.exports = router;