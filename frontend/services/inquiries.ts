import api from './api';
import type { Inquiry } from '@/types';

export const inquiryService = {
  getAll: async (): Promise<Inquiry[]> => {
    const { data } = await api.get('/inquiries');
    return data;
  },
  getById: async (id: number): Promise<Inquiry> => {
    const { data } = await api.get(`/inquiries/${id}`);
    return data;
  },
  create: async (inquiry: Omit<Inquiry, 'id' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Inquiry> => {
    const { data } = await api.post('/inquiries', inquiry);
    return data;
  },
  update: async (id: number, inquiry: Partial<Inquiry>): Promise<Inquiry> => {
    const { data } = await api.put(`/inquiries/${id}`, inquiry);
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/inquiries/${id}`);
  },
};
