import { Router } from 'express';
import { getAll, create, remove } from '../controllers/testimonialController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', getAll);
router.post('/', authenticate, create);
router.delete('/:id', authenticate, remove);

export default router;
