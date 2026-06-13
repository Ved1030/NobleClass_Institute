import { Router, Request, Response } from 'express';
import { authenticate } from '../middleware/auth';
import { inquiryService } from '../services/inquiryService';
import { facultyService } from '../services/facultyService';
import { courseService } from '../services/courseService';
import { resultService } from '../services/resultService';

const router = Router();

router.get('/stats', authenticate, async (_req: Request, res: Response) => {
  try {
    const [inquiryCount, facultyCount, courseCount, resultCount] = await Promise.all([
      inquiryService.count(),
      facultyService.count(),
      courseService.count(),
      resultService.count(),
    ]);

    res.json({
      totalInquiries: inquiryCount,
      totalFaculty: facultyCount,
      totalCourses: courseCount,
      totalResults: resultCount,
    });
  } catch {
    res.status(500).json({ error: 'Failed to fetch dashboard stats.' });
  }
});

router.get('/recent-inquiries', authenticate, async (_req: Request, res: Response) => {
  try {
    const inquiries = await inquiryService.getAll();
    inquiries.sort((a, b) => b.id - a.id);
    res.json(inquiries.slice(0, 5));
  } catch {
    res.status(500).json({ error: 'Failed to fetch recent inquiries.' });
  }
});

router.get('/monthly-inquiries', authenticate, async (_req: Request, res: Response) => {
  try {
    const inquiries = await inquiryService.getAll();

    const monthlyMap: Record<string, number> = {};
    inquiries.forEach((i) => {
      const month = new Date(i.createdAt).toLocaleString('default', { month: 'short' });
      monthlyMap[month] = (monthlyMap[month] || 0) + 1;
    });

    const result = Object.entries(monthlyMap).map(([month, inquiries]) => ({
      month,
      inquiries,
    }));

    res.json(result);
  } catch {
    res.status(500).json({ error: 'Failed to fetch monthly data.' });
  }
});

export default router;
