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
      email: 'admin@nobleclasses.in',
      password: adminPassword,
      role: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  ensureFile('courses', [
    { id: 1, title: 'Class VIII', description: 'Foundation building with strong conceptual clarity across all subjects.', class: '8', category: 'School', subjects: 'Mathematics,Science,English,Social Studies', duration: '4 days/week', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, title: 'Class IX', description: 'Advanced curriculum strengthening fundamentals for board preparation.', class: '9', category: 'School', subjects: 'Mathematics,Physics,Chemistry,Biology,English', duration: '5 days/week', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 3, title: 'Class X', description: 'Intensive board exam preparation with mock tests and personalized mentoring.', class: '10', category: 'School', subjects: 'All Subjects,Mock Tests,Revision', duration: '6 days/week', badge: 'Popular', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 4, title: 'Class XI Commerce', description: 'Comprehensive foundation in Accountancy, Economics, and Business Studies.', class: '11', category: 'Commerce', subjects: 'Accountancy,Economics,Business Studies,Mathematics', duration: '5 days/week', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 5, title: 'Class XII Commerce', description: 'Board-focused preparation with practical problem-solving and case studies.', class: '12', category: 'Commerce', subjects: 'Accountancy,Economics,Business Studies,Mathematics', duration: '6 days/week', badge: 'Popular', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 6, title: 'Class XI Science', description: 'Rigorous foundation for PCM/B with early JEE/NEET orientation.', class: '11', category: 'Science', subjects: 'Physics,Chemistry,Mathematics,Biology', duration: '5 days/week', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 7, title: 'Class XII Science', description: 'Advanced preparation for board exams and competitive exams simultaneously.', class: '12', category: 'Science', subjects: 'Physics,Chemistry,Mathematics,Biology', duration: '6 days/week', badge: 'Popular', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 8, title: 'JEE Advanced', description: 'Specialized coaching targeting IIT-JEE with problem-solving and test series.', class: '12', category: 'Competitive', subjects: 'Physics,Chemistry,Mathematics', duration: '6 days/week + Tests', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 9, title: 'NEET UG', description: 'Comprehensive NEET preparation with focus on Biology, Physics, and Chemistry.', class: '12', category: 'Competitive', subjects: 'Physics,Chemistry,Biology,English', duration: '6 days/week + Tests', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ]);

  ensureFile('faculty', [
    { id: 1, name: 'Prof. Rajesh Kumar', qualification: 'M.Sc. Mathematics, IIT Bombay', experience: '15 years', image: '', subject: 'Mathematics', achievements: 'IIT Bombay Alumni,500+ students mentored,Author of 3 textbooks', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 2, name: 'Dr. Sunita Verma', qualification: 'Ph.D. Chemistry, Mumbai University', experience: '12 years', image: '', subject: 'Chemistry', achievements: 'PhD from Mumbai University,NEET specialist,300+ NEET qualifiers', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 3, name: 'Mr. Amit Joshi', qualification: 'M.Sc. Physics, VJTI Mumbai', experience: '10 years', image: '', subject: 'Physics', achievements: 'JEE Advanced qualifier,Physics Olympiad coach,200+ JEE qualifiers', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
    { id: 4, name: 'Prof. Sneha Kulkarni', qualification: 'M.Sc. Biology, Pune University', experience: '11 years', image: '', subject: 'Biology', achievements: 'Gold Medalist,NEET Biology expert,400+ medical seats', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
  ]);

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
