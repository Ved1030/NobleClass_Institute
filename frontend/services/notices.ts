import api from './api';
import type { Notice } from '@/types';

export const noticeService = {
  getAll: async (): Promise<Notice[]> => {
    const { data } = await api.get('/notices');
    return data;
  },
  create: async (notice: Omit<Notice, 'id' | 'createdAt'>): Promise<Notice> => {
    const { data } = await api.post('/notices', notice);
    return data;
  },
  update: async (id: number, notice: Partial<Notice>): Promise<Notice> => {
    const { data } = await api.put(`/notices/${id}`, notice);
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/notices/${id}`);
  },
};
