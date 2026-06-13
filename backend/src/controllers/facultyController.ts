import { Request, Response } from 'express';
import { facultyService } from '../services/facultyService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const faculty = await facultyService.getAll();
    faculty.sort((a, b) => b.id - a.id);
    res.json(faculty);
  } catch {
    res.status(500).json({ error: 'Failed to fetch faculty.' });
  }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const faculty = await facultyService.getById(id);

    if (!faculty) {
      res.status(404).json({ error: 'Faculty member not found.' });
      return;
    }

    res.json(faculty);
  } catch {
    res.status(500).json({ error: 'Failed to fetch faculty member.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, qualification, experience, subject, achievements, bio, students } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const faculty = await facultyService.create({
      name,
      qualification,
      experience,
      image,
      subject,
      achievements,
      bio,
      rating: req.body.rating ? parseFloat(req.body.rating) : undefined,
      students,
    });

    res.status(201).json(faculty);
  } catch {
    res.status(500).json({ error: 'Failed to create faculty member.' });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const data: any = { ...req.body };

    if (req.file) {
      data.image = `/uploads/${req.file.filename}`;
    }
    if (data.rating) data.rating = parseFloat(data.rating);

    const faculty = await facultyService.update(id, data);
    if (!faculty) {
      res.status(404).json({ error: 'Faculty member not found.' });
      return;
    }
    res.json(faculty);
  } catch {
    res.status(500).json({ error: 'Failed to update faculty member.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await facultyService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Faculty member not found.' });
      return;
    }
    res.json({ message: 'Faculty member deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete faculty member.' });
  }
};
