import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/facultyController';
import { authenticate } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', authenticate, upload.single('image'), create);
router.put('/:id', authenticate, upload.single('image'), update);
router.delete('/:id', authenticate, remove);

export default router;
