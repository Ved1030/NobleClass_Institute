import { Request, Response } from 'express';
import { courseService } from '../services/courseService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const courses = await courseService.getAll();
    courses.sort((a, b) => a.id - b.id);
    res.json(courses);
  } catch {
    res.status(500).json({ error: 'Failed to fetch courses.' });
  }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const course = await courseService.getById(id);

    if (!course) {
      res.status(404).json({ error: 'Course not found.' });
      return;
    }

    res.json(course);
  } catch {
    res.status(500).json({ error: 'Failed to fetch course.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const course = await courseService.create(req.body);
    res.status(201).json(course);
  } catch {
    res.status(500).json({ error: 'Failed to create course.' });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const course = await courseService.update(id, req.body);
    if (!course) {
      res.status(404).json({ error: 'Course not found.' });
      return;
    }
    res.json(course);
  } catch {
    res.status(500).json({ error: 'Failed to update course.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await courseService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Course not found.' });
      return;
    }
    res.json({ message: 'Course deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete course.' });
  }
};
