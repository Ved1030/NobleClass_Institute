import api from './api';
import type { Result } from '@/types';

export const resultService = {
  getAll: async (): Promise<Result[]> => {
    const { data } = await api.get('/results');
    return data;
  },
  create: async (formData: FormData): Promise<Result> => {
    const { data } = await api.post('/results', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/results/${id}`);
  },
};
