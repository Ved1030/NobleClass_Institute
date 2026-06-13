import { Request, Response } from 'express';
import { noticeService } from '../services/noticeService';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const notices = await noticeService.getAll();
    notices.sort((a, b) => b.id - a.id);
    res.json(notices);
  } catch {
    res.status(500).json({ error: 'Failed to fetch notices.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, category } = req.body;
    const isNew = req.body.isNew === true || req.body.isNew === 'true';
    const notice = await noticeService.create({ title, content, category, isNew });
    res.status(201).json(notice);
  } catch {
    res.status(500).json({ error: 'Failed to create notice.' });
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const data: any = { ...req.body };
    if (data.isNew !== undefined) data.isNew = data.isNew === true || data.isNew === 'true';

    const notice = await noticeService.update(id, data);
    if (!notice) {
      res.status(404).json({ error: 'Notice not found.' });
      return;
    }
    res.json(notice);
  } catch {
    res.status(500).json({ error: 'Failed to update notice.' });
  }
};

export const remove = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await noticeService.delete(id);
    if (!deleted) {
      res.status(404).json({ error: 'Notice not found.' });
      return;
    }
    res.json({ message: 'Notice deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete notice.' });
  }
};
