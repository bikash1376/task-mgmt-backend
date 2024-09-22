import jwt from 'jsonwebtoken'; 
// const User = require('../models/User');
import User from '../models/User.js';

const authenticate = async (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decoded._id);
    next();
  } catch (err) {
    res.status(401).send({ error: 'Invalid token' });
  }
};

export default authenticate;
