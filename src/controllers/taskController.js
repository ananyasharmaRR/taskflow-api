// In-memory store (like a temporary list in RAM)
let tasks = [];
let currentId = 1;

// Get all tasks
export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// Get single task
export const getOneTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(200).json(task);
};

// Create new task
export const createTask = (req, res) => {
  const { text } = req.body;
  if (!text || text.trim() === '') {
    return res.status(400).json({ error: 'Task text is required' });
  }
  const newTask = {
    id: currentId++,
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// Update task
export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  const { text, completed } = req.body;
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    text: text || tasks[taskIndex].text,
    completed: completed !== undefined ? completed : tasks[taskIndex].completed
  };
  res.status(200).json(tasks[taskIndex]);
};

// Delete task
export const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: 'Task not found' });
  }
  res.status(204).end();
};