import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/courseController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', authenticate, create);
router.put('/:id', authenticate, update);
router.delete('/:id', authenticate, remove);

export default router;
