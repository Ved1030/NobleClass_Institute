import api from './api';
import type { Faculty } from '@/types';

export const facultyService = {
  getAll: async (): Promise<Faculty[]> => {
    const { data } = await api.get('/faculty');
    return data;
  },
  create: async (formData: FormData): Promise<Faculty> => {
    const { data } = await api.post('/faculty', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  update: async (id: number, formData: FormData): Promise<Faculty> => {
    const { data } = await api.put(`/faculty/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/faculty/${id}`);
  },
};
