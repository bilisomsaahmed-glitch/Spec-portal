import { Router } from 'express';
import { getDashboard } from '../controllers/dashboardController.js';
import { auth, allow, canManage, divisionAccess, eventManager } from '../middlewares/auth.js';
const router = Router();
router.get('/dashboard',auth,getDashboard);
export default router;
