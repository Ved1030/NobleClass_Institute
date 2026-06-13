"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const allCourses = [
  { id: 'class-8', title: 'Class 8 Program', category: 'Middle School', subtitle: 'Foundation Building', description: 'Comprehensive coaching for Class 8 students covering all core subjects with focus on conceptual clarity and building strong fundamentals for future board exams.', subjects: ['Mathematics', 'Science', 'English', 'Social Studies'], duration: '10 months', students: '200+ enrolled', rating: 4.9, fee: '₹2,500/month', batchSize: 'Max 25 students', timings: ['7:00 AM – 9:00 AM', '5:00 PM – 7:00 PM'], highlights: ['Conceptual teaching', 'Weekly tests', 'Doubt sessions', 'Study material included'], badge: 'Popular', color: 'bg-noble-blue' },
  { id: 'class-9', title: 'Class 9 Program', category: 'Middle School', subtitle: 'Skill Development', description: 'Advanced curriculum designed to strengthen fundamentals and prepare students for board examinations with regular assessments and personalized feedback.', subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'], duration: '10 months', students: '250+ enrolled', rating: 4.8, fee: '₹3,000/month', batchSize: 'Max 25 students', timings: ['7:00 AM – 9:00 AM', '2:00 PM – 4:00 PM', '5:00 PM – 7:00 PM'], highlights: ['Board-oriented teaching', 'Monthly mock tests', 'Parent-teacher meetings', 'Digital notes'], color: 'bg-noble-navy' },
  { id: 'class-10', title: 'Class 10 Board Prep', category: 'Board Exam', subtitle: 'Board Excellence', description: 'Intensive board exam preparation with mock tests, revision sessions, and personalized mentoring to ensure every student achieves their best possible score.', subjects: ['All Subjects', 'Mock Tests', 'Revision Sessions', 'Previous Papers'], duration: '12 months', students: '300+ enrolled', rating: 5.0, fee: '₹3,500/month', batchSize: 'Max 20 students', timings: ['7:00 AM – 9:00 AM', '2:00 PM – 4:00 PM', '5:00 PM – 7:00 PM'], highlights: ['Full syllabus coverage', 'Weekly mock tests', 'Individual mentoring', 'Exam strategy sessions'], badge: 'Best Results', color: 'bg-noble-sky' },
  { id: 'science', title: 'Science Stream (11–12)', category: 'Higher Secondary', subtitle: 'JEE & NEET Ready', description: 'Rigorous science stream coaching with JEE/NEET orientation, expert faculty guidance, and comprehensive study material for competitive exam success.', subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'], duration: '2 years', students: '180+ enrolled', rating: 4.9, fee: '₹5,000/month', batchSize: 'Max 20 students', timings: ['6:00 AM – 8:00 AM', '4:00 PM – 6:00 PM'], highlights: ['JEE/NEET focused', 'Expert IIT/NIT faculty', 'Competitive exam prep', 'Regular mock tests'], color: 'bg-noble-blue' },
  { id: 'commerce', title: 'Commerce Stream (11–12)', category: 'Higher Secondary', subtitle: 'CA & CS Foundation', description: 'Comprehensive commerce coaching with focus on accounts, economics, and business studies, with CA/CS foundation preparation.', subjects: ['Accountancy', 'Economics', 'Business Studies', 'Mathematics'], duration: '2 years', students: '150+ enrolled', rating: 4.7, fee: '₹4,500/month', batchSize: 'Max 25 students', timings: ['7:00 AM – 9:00 AM', '5:00 PM – 7:00 PM'], highlights: ['CA Foundation prep', 'Practical accounting', 'Case study approach', 'Industry insights'], color: 'bg-noble-navy' },
  { id: 'foundation', title: 'Foundation Program', category: 'Foundation', subtitle: 'Early Excellence', description: 'Early start program for Class 6–7 students to build strong academic foundations and develop good study habits from an early age.', subjects: ['Mathematics', 'Science', 'English', 'Mental Ability'], duration: '8 months', students: '120+ enrolled', rating: 4.8, fee: '₹2,000/month', batchSize: 'Max 25 students', timings: ['4:00 PM – 6:00 PM', '5:00 PM – 7:00 PM'], highlights: ['Concept building', 'Activity-based learning', 'Olympiad preparation', 'Personality development'], badge: 'New Batch', color: 'bg-noble-sky' },
];

const categories = ['All', 'Middle School', 'Board Exam', 'Higher Secondary', 'Foundation'];

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
