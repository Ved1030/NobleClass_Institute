import { Router } from 'express';
import { getAll, create, remove } from '../controllers/galleryController';
import { authenticate } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = Router();

router.get('/', getAll);
router.post('/', authenticate, upload.single('image'), create);
router.delete('/:id', authenticate, remove);

export default router;
