"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const allCourses = [
  { id: 'jee-main', title: 'JEE Main Program', category: 'JEE', subtitle: 'IIT-JEE Foundation', description: 'Comprehensive preparation for JEE Main with conceptual clarity, problem-solving techniques, and extensive mock tests covering Physics, Chemistry and Mathematics.', subjects: ['Physics', 'Chemistry', 'Mathematics'], duration: '12 months', students: '200+ enrolled', rating: 4.9, fee: '₹4,000/month', batchSize: 'Max 25 students', timings: ['6:00 AM – 8:00 AM', '4:00 PM – 6:00 PM', '6:00 PM – 8:00 PM'], highlights: ['Conceptual teaching', 'Weekly tests', 'Doubt sessions', 'PYQ practice'], badge: 'Popular', color: 'bg-noble-blue' },
  { id: 'jee-advanced', title: 'JEE Advanced Program', category: 'JEE', subtitle: 'IIT-JEE Excellence', description: 'Rigorous IIT-JEE Advanced coaching with advanced problem-solving, PYQ analysis, mock tests, and personalized mentoring for top ranks.', subjects: ['Physics', 'Chemistry', 'Mathematics'], duration: '12 months', students: '100+ enrolled', rating: 4.9, fee: '₹5,000/month', batchSize: 'Max 20 students', timings: ['6:00 AM – 8:00 AM', '4:00 PM – 6:00 PM'], highlights: ['Advanced problem sets', 'Mock test series', 'IIT Alumni faculty', 'Rank improvement program'], badge: 'Top Pick', color: 'bg-noble-navy' },
  { id: 'neet-ug', title: 'NEET UG Program', category: 'NEET', subtitle: 'Medical Entrance', description: 'Comprehensive NEET coaching with focus on Biology, Physics and Chemistry. Includes lab sessions, mock tests, and dedicated doubt-clearing sessions.', subjects: ['Biology', 'Physics', 'Chemistry'], duration: '12 months', students: '150+ enrolled', rating: 4.9, fee: '₹4,500/month', batchSize: 'Max 25 students', timings: ['6:00 AM – 8:00 AM', '4:00 PM – 6:00 PM', '6:00 PM – 8:00 PM'], highlights: ['NEET Q. Bank', 'Diagram-based Bio', 'Mock test series', 'Medical experts faculty'], badge: 'Popular', color: 'bg-noble-blue' },
  { id: 'mht-cet', title: 'MHT-CET Program', category: 'MHT-CET', subtitle: 'State CET Prep', description: 'Focused preparation for MHT-CET with state board syllabus alignment, topic-wise tests, and comprehensive study material.', subjects: ['Physics', 'Chemistry', 'Mathematics'], duration: '10 months', students: '120+ enrolled', rating: 4.8, fee: '₹3,500/month', batchSize: 'Max 25 students', timings: ['7:00 AM – 9:00 AM', '5:00 PM – 7:00 PM'], highlights: ['CET syllabus focus', 'Topic-wise tests', 'Speed building', 'Previous year papers'], badge: 'Best Results', color: 'bg-noble-sky' },
  { id: 'xi-science', title: 'XI Science', category: 'Science', subtitle: 'Board + Competitive', description: 'PCB/PCM streams with lab-based learning for board exams and simultaneous competitive exam preparation for JEE/NEET/MHT-CET.', subjects: ['Physics', 'Chemistry', 'Biology/Maths', 'English'], duration: '12 months', students: '80+ enrolled', rating: 4.8, fee: '₹3,500/month', batchSize: 'Max 25 students', timings: ['7:00 AM – 9:00 AM', '2:00 PM – 4:00 PM', '5:00 PM – 7:00 PM'], highlights: ['Board + JEE/NEET', 'Lab sessions', 'Expert faculty', 'Study material'], color: 'bg-noble-navy' },
  { id: 'xii-science', title: 'XII Science', category: 'Science', subtitle: 'Board Excellence', description: 'Board-aligned curriculum with simultaneous competitive exam preparation. Comprehensive coverage of Physics, Chemistry, and Biology/Mathematics.', subjects: ['Physics', 'Chemistry', 'Biology/Maths', 'English'], duration: '12 months', students: '100+ enrolled', rating: 4.9, fee: '₹4,000/month', batchSize: 'Max 25 students', timings: ['6:00 AM – 8:00 AM', '4:00 PM – 6:00 PM', '6:00 PM – 8:00 PM'], highlights: ['Board + JEE/NEET', 'Mock test series', 'PYQ practice', 'Doubt sessions'], badge: 'Popular', color: 'bg-noble-blue' },
  { id: 'foundation', title: 'Foundation Program', category: 'Foundation', subtitle: 'Early Excellence', description: 'Early preparation program for students aiming for JEE/NEET/MHT-CET with strong fundamentals in Mathematics and Science.', subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'], duration: '8 months', students: '60+ enrolled', rating: 4.8, fee: '₹2,500/month', batchSize: 'Max 25 students', timings: ['4:00 PM – 6:00 PM', '5:00 PM – 7:00 PM'], highlights: ['Concept building', 'Olympiad prep', 'Early JEE/NEET exposure', 'Regular assessments'], badge: 'New Batch', color: 'bg-noble-sky' },
];

const categories = ['All', 'JEE', 'NEET', 'MHT-CET', 'Science', 'Foundation'];

const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);
  const filtered = activeCategory === 'All' ? allCourses : allCourses.filter(c => c.category === activeCategory);

  return (
    <>
      <PageHero title="Our Courses" subtitle="Comprehensive coaching programs designed for every stage of academic excellence — from foundation to board exams." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Courses' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-noble-blue text-white shadow-md shadow-noble-blue/20' : 'bg-noble-light text-noble-navy/70 hover:bg-noble-blue/10 hover:text-noble-blue'}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <motion.div key={course.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl border border-noble-blue/10 p-8 hover:shadow-xl hover:shadow-noble-blue/8 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${course.color} flex items-center justify-center`}><BookOpen className="w-5 h-5 text-white" /></div>
                  {course.badge && <span className="bg-noble-gold/10 text-noble-gold text-xs font-semibold px-3 py-1 rounded-full border border-noble-gold/20">{course.badge}</span>}
                </div>
                <span className="text-noble-blue/60 text-xs font-medium uppercase tracking-wider">{course.category}</span>
                <h3 className="font-heading text-xl font-bold text-noble-navy mt-1 mb-1">{course.title}</h3>
                <p className="text-noble-blue text-sm font-medium mb-3">{course.subtitle}</p>
                <p className="text-noble-navy/60 text-sm leading-relaxed mb-5">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.subjects.slice(0, 3).map((s) => <span key={s} className="bg-noble-blue/5 text-noble-blue text-xs px-3 py-1 rounded-full font-medium">{s}</span>)}
                  {course.subjects.length > 3 && <span className="bg-noble-blue/5 text-noble-blue text-xs px-3 py-1 rounded-full font-medium">+{course.subjects.length - 3} more</span>}
                </div>
                <div className="flex items-center gap-4 text-xs text-noble-navy/50 mb-5 pt-4 border-t border-noble-blue/8">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
                  <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" />{course.batchSize}</span>
                  <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-noble-gold fill-noble-gold" />{course.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-noble-navy">{course.fee}</span>
                  <button onClick={() => setSelectedCourse(course)} className="flex items-center gap-1.5 text-noble-blue text-sm font-semibold hover:gap-2.5 transition-all duration-200">View Details <ArrowRight className="w-4 h-4" /></button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      {selectedCourse && (
        <div className="fixed inset-0 bg-noble-navy/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCourse(null)}>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()} className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div><span className="text-noble-blue text-xs font-medium uppercase tracking-wider">{selectedCourse.category}</span><h2 className="font-heading text-2xl font-bold text-noble-navy mt-1">{selectedCourse.title}</h2><p className="text-noble-blue font-medium text-sm">{selectedCourse.subtitle}</p></div>
              <button onClick={() => setSelectedCourse(null)} className="text-noble-navy/40 hover:text-noble-navy text-2xl leading-none transition-colors" aria-label="Close">×</button>
            </div>
            <p className="text-noble-navy/70 text-sm leading-relaxed mb-6">{selectedCourse.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[{ label: 'Duration', value: selectedCourse.duration }, { label: 'Batch Size', value: selectedCourse.batchSize }, { label: 'Monthly Fee', value: selectedCourse.fee }, { label: 'Rating', value: `${selectedCourse.rating}/5.0` }].map((item) => (
                <div key={item.label} className="bg-noble-light rounded-xl p-4"><div className="text-noble-navy/50 text-xs mb-1">{item.label}</div><div className="font-heading font-bold text-noble-navy">{item.value}</div></div>
              ))}
            </div>
            <div className="mb-6"><h3 className="font-heading font-semibold text-noble-navy mb-3">Subjects Covered</h3><div className="flex flex-wrap gap-2">{selectedCourse.subjects.map((s) => <span key={s} className="bg-noble-blue/5 text-noble-blue text-xs px-3 py-1.5 rounded-full font-medium border border-noble-blue/10">{s}</span>)}</div></div>
            <div className="mb-6"><h3 className="font-heading font-semibold text-noble-navy mb-3">Batch Timings</h3><div className="flex flex-wrap gap-2">{selectedCourse.timings.map((t) => <span key={t} className="bg-noble-navy/5 text-noble-navy text-xs px-3 py-1.5 rounded-full font-medium">{t}</span>)}</div></div>
            <div className="mb-8"><h3 className="font-heading font-semibold text-noble-navy mb-3">Course Highlights</h3><div className="grid grid-cols-2 gap-2">{selectedCourse.highlights.map((h) => <div key={h} className="flex items-center gap-2 text-sm text-noble-navy/70"><CheckCircle className="w-4 h-4 text-noble-blue shrink-0" />{h}</div>)}</div></div>
            <Link href="/admissions" onClick={() => setSelectedCourse(null)} className="block text-center bg-noble-blue text-white py-3.5 rounded-xl font-semibold hover:bg-noble-navy transition-colors duration-200">Apply for This Course</Link>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Courses;
