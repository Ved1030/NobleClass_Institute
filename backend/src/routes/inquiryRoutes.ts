import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/inquiryController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', authenticate, getAll);
router.get('/:id', authenticate, getById);
router.post('/', create);
router.put('/:id', authenticate, update);
router.delete('/:id', authenticate, remove);

export default router;
