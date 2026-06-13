import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';
import { config } from './config';
import './database/seed';

import authRoutes from './routes/authRoutes';
import inquiryRoutes from './routes/inquiryRoutes';
import facultyRoutes from './routes/facultyRoutes';
import galleryRoutes from './routes/galleryRoutes';
import resultRoutes from './routes/resultRoutes';
import noticeRoutes from './routes/noticeRoutes';
import courseRoutes from './routes/courseRoutes';
import testimonialRoutes from './routes/testimonialRoutes';
import dashboardRoutes from './routes/dashboardRoutes';

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ origin: config.cors.origin, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/admin', dashboardRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

export default app;
