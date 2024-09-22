import express from 'express';
import { register, login, getMe, updateMe } from '../controllers/userController.js';
import authenticate from '../middlewares/auth.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', authenticate, getMe);
router.patch('/me', updateMe);

export default router;
