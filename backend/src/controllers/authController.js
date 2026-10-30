import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

const safe = user => ({ id: user._id, name: user.name, email: user.email, role: user.role, division: user.division, studentId: user.studentId });
const tokenFor = user => jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
export const wrap = fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export const register = wrap(async (req, res) => {
  const { name, email, password, studentId } = req.body;
  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email) || !password || password.length < 8) return res.status(400).json({ message: 'Enter your name, a valid email and a password with at least 8 characters.' });
  if (await User.exists({ email: email.toLowerCase() })) return res.status(409).json({ message: 'An account with this email already exists.' });
  const user = await User.create({ name, email, password: await bcrypt.hash(password, 12), studentId });
  res.status(201).json({ token: tokenFor(user), user: safe(user) });
});
export const login = wrap(async (req, res) => {
  const user = await User.findOne({ email: String(req.body.email || '').toLowerCase() }).select('+password');
  if (!user || !await bcrypt.compare(req.body.password || '', user.password)) return res.status(401).json({ message: 'Email or password is incorrect.' });
  res.json({ token: tokenFor(user), user: safe(user) });
});
export const currentUser = (req, res) => res.json({ user: safe(req.user) });
