import express from 'express';
import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import cors from 'cors';
// import User from './models/User.js';
import authenticate from './middlewares/auth.js'
import dotenv from 'dotenv';
import './db.js';
dotenv.config();

const app = express();
// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRoutes);
app.use('/tasks',authenticate, taskRoutes);

export default app;
