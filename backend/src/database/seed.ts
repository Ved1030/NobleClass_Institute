import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';

const DATA_DIR = path.join(__dirname, '../../data');

function ensureFile(name: string, initialData: any[]): void {
  const filePath = path.join(DATA_DIR, `${name}.json`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2), 'utf-8');
    console.log(`Created ${name}.json with seed data`);
  }
}

async function seed(): Promise<void> {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const adminPassword = await bcrypt.hash('admin123', 10);

  ensureFile('users', [
    {
      id: 1,
      name: 'Admin',
      email: 'admin@labbdhisacademy.in',
      password: adminPassword,
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  ensureFile('courses', [
    { id: 1, title: 'Std 7th Coaching', description: 'Strong foundation building in Mathematics, Science, English, and core academic subjects with concept-based learning.', class: '7', category: 'Programs', subjects: 'Mathematics,Science,English', duration: 'Academic Year', badge: 'Foundation', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, title: 'Std 8th Coaching', description: 'Concept-focused learning with regular assessments, doubt-solving sessions, and performance tracking.', class: '8', category: 'Programs', subjects: 'Mathematics,Science,English', duration: 'Academic Year', badge: 'Popular', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 3, title: 'Std 9th Coaching', description: 'Advanced preparation with detailed subject understanding, exam strategies, and comprehensive curriculum coverage.', class: '9', category: 'Programs', subjects: 'Mathematics,Science,English', duration: 'Academic Year', badge: 'Advanced', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 4, title: 'Std 10th Coaching', description: 'Board exam-focused preparation, revision programs, intensive practice sessions, and mock tests for academic excellence.', class: '10', category: 'Programs', subjects: 'Mathematics,Science,English', duration: 'Academic Year', badge: 'Board Focus', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ]);

  ensureFile('faculty', []);

  ensureFile('results', [
    { id: 1, studentName: 'Aryan Shah', percentage: '98.4%', year: '2025', image: '', exam: 'SSC Board 2025', rank: '1st in School', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, studentName: 'Sneha Kulkarni', percentage: '97.8%', year: '2025', image: '', exam: 'SSC Board 2025', rank: '2nd in School', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 3, studentName: 'Rohan Desai', percentage: '97.2%', year: '2025', image: '', exam: 'SSC Board 2025', rank: '3rd in School', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 4, studentName: 'Kavya Nair', percentage: '96.6%', year: '2025', image: '', exam: 'SSC Board 2025', rank: '4th in School', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ]);

  ensureFile('inquiries', []);
  ensureFile('gallery', []);
  ensureFile('notices', []);
  ensureFile('testimonials', []);

  console.log('Seed completed successfully');
}

seed().catch((e) => {
  console.error('Seed error:', e);
  process.exit(1);
});
