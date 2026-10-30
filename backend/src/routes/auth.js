import { Router } from 'express';
import { register, login, currentUser } from '../controllers/authController.js';
import { auth } from '../middlewares/auth.js';

const router = Router();
router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, currentUser);
export default router;
