import { Request, Response } from 'express';
import { resultService } from '../services/resultService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const results = await resultService.getAll();
    results.sort((a, b) => b.year.localeCompare(a.year));
    res.json(results);
  } catch {
    res.status(500).json({ error: 'Failed to fetch results.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { studentName, percentage, year, exam, rank, subject } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;

    const result = await resultService.create({ studentName, percentage, year, image, exam, rank, subject });
    res.status(201).json(result);
  } catch {
    res.status(500).json({ error: 'Failed to create result.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await resultService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Result not found.' });
      return;
    }
    res.json({ message: 'Result deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete result.' });
  }
};
