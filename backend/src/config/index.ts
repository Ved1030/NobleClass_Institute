import dotenv from 'dotenv';
dotenv.config();

const parseCorsOrigins = (val: string | undefined): string | string[] | undefined => {
  if (!val) return undefined;
  const origins = val.split(',').map(s => s.trim()).filter(Boolean);
  if (origins.length === 1) return origins[0];
  return origins;
};

export const config = {
  port: parseInt(process.env.PORT || '5000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET || 'fallback-secret-change-me',
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  cors: {
    origin: parseCorsOrigins(process.env.CORS_ORIGIN) || parseCorsOrigins(process.env.FRONTEND_URL) || 'http://localhost:3000',
  },
  sarvam: {
    apiKey: process.env.SARVAM_API_KEY || '',
    model: process.env.SARVAM_MODEL || 'sarvam-30b',
  },
};
