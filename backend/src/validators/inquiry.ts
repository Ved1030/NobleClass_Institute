import { z } from 'zod';

export const createInquirySchema = z.object({
  studentName: z.string().min(2, 'Student name must be at least 2 characters'),
  parentName: z.string().min(2, 'Parent name must be at least 2 characters'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email: z.string().email('Enter a valid email address'),
  class: z.string().min(1, 'Please select a class'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().optional(),
});

export const updateInquirySchema = z.object({
  status: z.enum(['New', 'Contacted', 'Enrolled', 'Closed']).optional(),
  studentName: z.string().min(2).optional(),
  parentName: z.string().min(2).optional(),
  mobile: z.string().regex(/^[6-9]\d{9}$/).optional(),
  email: z.string().email().optional(),
  class: z.string().min(1).optional(),
  course: z.string().min(1).optional(),
  message: z.string().optional(),
});
