import { Router } from 'express';
import { getMembershipsMine, postMemberships, getMemberships, patchMembershipsId } from '../controllers/membershipsController.js';
import { auth, allow, canManage, divisionAccess, eventManager } from '../middlewares/auth.js';
const router = Router();
router.get('/memberships/mine',auth,getMembershipsMine);
router.post('/memberships',auth,postMemberships);
router.get('/memberships',auth,allow('admin','executive'),getMemberships);
router.patch('/memberships/:id',auth,allow('admin','executive'),patchMembershipsId);
export default router;
