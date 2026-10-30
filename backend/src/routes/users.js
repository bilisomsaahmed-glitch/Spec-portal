import { Router } from 'express';
import { getUsers, patchUsersId } from '../controllers/usersController.js';
import { auth, allow, canManage, divisionAccess, eventManager } from '../middlewares/auth.js';
const router = Router();
router.get('/users',auth,allow('admin','executive','division_leader'),getUsers);
router.patch('/users/:id',auth,allow('admin','executive'),patchUsersId);
export default router;
