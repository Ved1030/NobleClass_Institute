import api from './api';
import type { DashboardStats } from '@/types';

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    const { data } = await api.get('/admin/stats');
    return data;
  },
  getRecentInquiries: async () => {
    const { data } = await api.get('/admin/recent-inquiries');
    return data;
  },
  getMonthlyInquiries: async () => {
    const { data } = await api.get('/admin/monthly-inquiries');
    return data;
  },
};
