import { Request, Response } from 'express';
import { testimonialService } from '../services/testimonialService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const testimonials = await testimonialService.getAll();
    testimonials.sort((a, b) => b.id - a.id);
    res.json(testimonials);
  } catch {
    res.status(500).json({ error: 'Failed to fetch testimonials.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentName, review, role, image, result } = req.body;
    const rating = req.body.rating ? parseInt(req.body.rating) : undefined;

    const testimonial = await testimonialService.create({
      studentName,
      review,
      role,
      rating,
      image,
      result,
    });

    res.status(201).json(testimonial);
  } catch {
    res.status(500).json({ error: 'Failed to create testimonial.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await testimonialService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Testimonial not found.' });
      return;
    }
    res.json({ message: 'Testimonial deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete testimonial.' });
  }
};
