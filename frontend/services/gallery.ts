import api from './api';
import type { Gallery } from '@/types';

export const galleryService = {
  getAll: async (): Promise<Gallery[]> => {
    const { data } = await api.get('/gallery');
    return data;
  },
  create: async (formData: FormData): Promise<Gallery> => {
    const { data } = await api.post('/gallery', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/gallery/${id}`);
  },
};
