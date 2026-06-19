"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const allCourses = [
  { id: 'std-8', title: 'Std 8th Coaching (State Board & CBSE)', category: 'Programs', subtitle: 'Concept Mastery', description: 'Concept-focused learning for State Board and CBSE students with regular assessments, doubt-solving sessions, and performance tracking.', subjects: ['Mathematics', 'Science', 'English'], duration: 'Academic Year', students: 'Enrolling Now', rating: 5.0, fee: 'Contact For Fee', batchSize: 'Small batches', timings: ['Flexible Timings'], highlights: ['Concept clarity', 'Weekly tests', 'Progress tracking', 'Study material'], badge: 'Popular', color: 'bg-emerald-600' },
  { id: 'std-9', title: 'Std 9th Coaching (State Board & CBSE)', category: 'Programs', subtitle: 'Advanced Preparation', description: 'Advanced preparation for State Board and CBSE students with detailed subject understanding, exam strategies, and comprehensive curriculum coverage.', subjects: ['Mathematics', 'Science', 'English'], duration: 'Academic Year', students: 'Enrolling Now', rating: 5.0, fee: 'Contact For Fee', batchSize: 'Small batches', timings: ['Flexible Timings'], highlights: ['Advanced prep', 'Mock tests', 'Expert guidance', 'Exam strategies'], badge: 'Advanced', color: 'bg-noble-navy' },
  { id: 'std-10', title: 'Std 10th Coaching (State Board & CBSE)', category: 'Programs', subtitle: 'Board Exam Focus', description: 'Board exam-focused preparation for State Board and CBSE students with revision programs, intensive practice sessions, and mock tests.', subjects: ['Mathematics', 'Science', 'English'], duration: 'Academic Year', students: 'Enrolling Now', rating: 5.0, fee: 'Contact For Fee', batchSize: 'Small batches', timings: ['Flexible Timings'], highlights: ['Board prep', 'Revision program', 'Practice sessions', 'Mock exams'], badge: 'Board Focus', color: 'bg-red-600' },
];

const categories = ['All', 'Programs'];

const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);
  const filtered = activeCategory === 'All' ? allCourses : allCourses.filter(c => c.category === activeCategory);

  return (
    <>
      <PageHero title="Our Courses" subtitle="Comprehensive coaching programs for Std 8th, 9th & 10th (State Board & CBSE) designed to build strong concepts and academic excellence." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Courses' }]} />
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
