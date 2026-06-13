import { Request, Response } from 'express';
import { inquiryService } from '../services/inquiryService';
import { createInquirySchema, updateInquirySchema } from '../validators/inquiry';
import { AuthRequest } from '../middleware/auth';

export const getAll = async (_req: Request, res: Response): Promise<void> => {
  try {
    const inquiries = await inquiryService.getAll();
    inquiries.sort((a, b) => b.id - a.id);
    res.json(inquiries);
  } catch {
    res.status(500).json({ error: 'Failed to fetch inquiries.' });
  }
};

export const getById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const inquiry = await inquiryService.getById(id);

    if (!inquiry) {
      res.status(404).json({ error: 'Inquiry not found.' });
      return;
    }

    res.json(inquiry);
  } catch {
    res.status(500).json({ error: 'Failed to fetch inquiry.' });
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = createInquirySchema.parse(req.body);
    const inquiry = await inquiryService.create(data);
    res.status(201).json(inquiry);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to create inquiry.' });
  }
};

export const update = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const data = updateInquirySchema.parse(req.body);

    const existing = await inquiryService.getById(id);
    if (!existing) {
      res.status(404).json({ error: 'Inquiry not found.' });
      return;
    }

    const inquiry = await inquiryService.update(id, data);
    res.json(inquiry);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to update inquiry.' });
  }
};

export const remove = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const existing = await inquiryService.getById(id);

    if (!existing) {
      res.status(404).json({ error: 'Inquiry not found.' });
      return;
    }

    await inquiryService.delete(id);
    res.json({ message: 'Inquiry deleted successfully.' });
  } catch {
    res.status(500).json({ error: 'Failed to delete inquiry.' });
  }
};
