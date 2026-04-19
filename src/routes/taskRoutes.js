import { Router } from 'express';
import {
  getTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = Router();

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getOneTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;