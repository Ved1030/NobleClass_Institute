import api from './api';
import type { Testimonial } from '@/types';

export const testimonialService = {
  getAll: async (): Promise<Testimonial[]> => {
    const { data } = await api.get('/testimonials');
    return data;
  },
  create: async (testimonial: Omit<Testimonial, 'id'>): Promise<Testimonial> => {
    const { data } = await api.post('/testimonials', testimonial);
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/testimonials/${id}`);
  },
};
