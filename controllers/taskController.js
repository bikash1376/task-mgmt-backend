import Task from '../models/Task.js';

const createTask = async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.send({ message: 'Task created successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to create task' });
  }
};

const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user._id });
  res.send(tasks);
};

const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).send({ error: 'Task not found' });
  res.send(task);
};

const updateTask = async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send({ message: 'Task updated successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to update task' });
  }
};


const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send({ error: 'Task not found' });
    }
    res.send({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to delete task' });
    console.log(err);
  }
};


export { createTask, getTasks, getTaskById, updateTask, deleteTask };
