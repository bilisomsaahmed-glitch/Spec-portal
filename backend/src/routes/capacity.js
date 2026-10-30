import { Router } from 'express';
import { getCapacityTrainings, postCapacityTrainings, postCapacityTrainingsIdEnroll, postCapacityTrainingsIdAttendance } from '../controllers/capacityController.js';
import { auth, allow, canManage, divisionAccess, eventManager } from '../middlewares/auth.js';
const router = Router();
router.get('/capacity/trainings',auth,getCapacityTrainings);
router.post('/capacity/trainings',auth,divisionAccess('Capacity Building'),postCapacityTrainings);
router.post('/capacity/trainings/:id/enroll',auth,postCapacityTrainingsIdEnroll);
router.post('/capacity/trainings/:id/attendance',auth,allow('admin','executive','division_leader'),postCapacityTrainingsIdAttendance);
export default router;
