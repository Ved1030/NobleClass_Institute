import api from './api';
import type { Course } from '@/types';

export const courseService = {
  getAll: async (): Promise<Course[]> => {
    const { data } = await api.get('/courses');
    return data;
  },
  getById: async (id: number): Promise<Course> => {
    const { data } = await api.get(`/courses/${id}`);
    return data;
  },
  create: async (course: Omit<Course, 'id'>): Promise<Course> => {
    const { data } = await api.post('/courses', course);
    return data;
  },
  update: async (id: number, course: Partial<Course>): Promise<Course> => {
    const { data } = await api.put(`/courses/${id}`, course);
    return data;
  },
  remove: async (id: number): Promise<void> => {
    await api.delete(`/courses/${id}`);
  },
};
