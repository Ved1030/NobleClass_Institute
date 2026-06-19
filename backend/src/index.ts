import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
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
import chatRoutes from './routes/chat';

const app = express();

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' },
});
app.use('/api', limiter);

app.use(cors({
  origin: config.cors.origin,
  credentials: true,
}));

if (config.nodeEnv === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.get('/', (_req, res) => {
  res.json({ success: true, message: 'Labbdis Academy API Running' });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/admin', dashboardRoutes);
app.use('/api/chat', chatRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port} in ${config.nodeEnv} mode`);
});

export default app;
