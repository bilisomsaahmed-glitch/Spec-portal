import { Router } from 'express';
import { getDevelopmentProjects, postDevelopmentProjects, patchDevelopmentProjectsId, postDevelopmentProjectsIdTasks } from '../controllers/developmentController.js';
import { auth, allow, canManage, divisionAccess, eventManager } from '../middlewares/auth.js';
const router = Router();
router.get('/development/projects',auth,getDevelopmentProjects);
router.post('/development/projects',auth,divisionAccess('Development'),postDevelopmentProjects);
router.patch('/development/projects/:id',auth,divisionAccess('Development'),patchDevelopmentProjectsId);
router.post('/development/projects/:id/tasks',auth,divisionAccess('Development'),postDevelopmentProjectsIdTasks);
export default router;
