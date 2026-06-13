import { Request, Response } from 'express';
import { galleryService } from '../services/galleryService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const images = await galleryService.getAll();
    images.sort((a, b) => b.id - a.id);
    res.json(images);
  } catch {
    res.status(500).json({ error: 'Failed to fetch gallery.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { category, alt } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const gallery = await galleryService.create({ image, category, alt });
    res.status(201).json(gallery);
  } catch {
    res.status(500).json({ error: 'Failed to upload image.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await galleryService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Image not found.' });
      return;
    }
    res.json({ message: 'Image deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete image.' });
  }
};
