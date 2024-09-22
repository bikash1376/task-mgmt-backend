import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const register = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to create user' });
  }
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(401).send({ error: 'Invalid email or password' });

  const isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send({ error: 'Invalid email or password' });

  const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, { expiresIn: '30d' });
  res.send({ token });
};

const getMe = (req, res) => {
  res.send(req.user);
};

const updateMe = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
    res.send({ message: 'User updated successfully' });
  } catch (err) {
    res.status(400).send({ error: 'Failed to update user' });
  }
};






export { register, login, getMe, updateMe };
