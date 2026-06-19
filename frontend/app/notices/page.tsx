"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Search, Filter } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const allNotices = [
  { id: 1, title: 'Admissions Open For Std 8th, 9th & 10th', date: '01 Jun 2026', category: 'Batch', excerpt: 'Enrollments are now open for all standards. Limited seats available. Early bird discounts available for early registrations.', isNew: true },
  { id: 2, title: 'New Academic Batch Starting Soon', date: '05 Jun 2026', category: 'Batch', excerpt: 'New academic batches starting from next month for all standards. Small batch sizes ensure personalized attention for every student.', isNew: true },
  { id: 3, title: 'Weekly Assessment Schedule Released', date: '10 Jun 2026', category: 'Exam', excerpt: 'Weekly unit test schedule has been released for all standards. Regular assessments help track progress and identify areas for improvement.', isNew: true },
  { id: 4, title: 'Parent-Teacher Meeting This Month', date: '15 Jun 2026', category: 'General', excerpt: 'Regular parent-teacher meetings are scheduled to discuss student progress, learning strategies, and academic planning.', isNew: false },
  { id: 5, title: 'Scholarship Test Registration Now Open', date: '20 Jun 2026', category: 'Exam', excerpt: 'Annual scholarship test for new admissions. Students scoring 90%+ in previous exams are eligible for up to 50% fee waiver.', isNew: false },
  { id: 6, title: 'Revision Program For Final Exams', date: '25 Jun 2026', category: 'Batch', excerpt: 'Special revision program starting soon focusing on key topics, practice sessions, and exam preparation for all standards.', isNew: false },
  { id: 7, title: 'Weekend Revision Sessions Starting Soon', date: '28 Jun 2026', category: 'Batch', excerpt: 'Special weekend revision sessions starting from July. Focused on concept clarity, doubt resolution, and exam practice.', isNew: false },
  { id: 8, title: 'Monthly Progress Reports Released', date: '30 Jun 2026', category: 'Result', excerpt: 'Monthly progress reports for all students are now available. Parents can schedule a meeting to discuss their child\'s performance.', isNew: false },
];

const categories = ['All', 'Batch', 'Exam', 'Result', 'Holiday', 'General'];

const categoryColors: Record<string, string> = {
  'Exam': 'bg-red-50 text-red-600 border-red-100',
  'Holiday': 'bg-green-50 text-green-600 border-green-100',
  'Batch': 'bg-noble-blue/5 text-noble-blue border-noble-blue/10',
  'Result': 'bg-purple-50 text-purple-600 border-purple-100',
  'General': 'bg-noble-navy/5 text-noble-navy border-noble-navy/10',
};

const Notices: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const filtered = allNotices.filter(n => {
    const matchesCategory = activeCategory === 'All' || n.category === activeCategory;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || n.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHero title="Notices & Announcements" subtitle="Stay informed about new batches, schedules, and important announcements from Labbdis Academy." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Notices' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-noble-navy/40" />
              <input type="text" placeholder="Search notices..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-11 pr-4 py-3 rounded-xl border border-noble-blue/20 bg-white focus:outline-none focus:ring-2 focus:ring-noble-blue/30 text-noble-navy text-sm placeholder:text-noble-navy/40" />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-noble-navy/40" />
              <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="px-4 py-3 rounded-xl border border-noble-blue/20 bg-white focus:outline-none focus:ring-2 focus:ring-noble-blue/30 text-noble-navy text-sm">
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-noble-navy/40"><Bell className="w-12 h-12 mx-auto mb-4 opacity-30" /><p>No notices found matching your search.</p></div>
            ) : (
              filtered.map((notice, i) => (
                <motion.div key={notice.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white rounded-2xl border border-noble-blue/10 p-6 hover:shadow-md hover:border-noble-blue/20 transition-all duration-200">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-noble-blue/8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"><Bell className="w-4 h-4 text-noble-blue" /></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${categoryColors[notice.category] || categoryColors['General']}`}>{notice.category}</span>
                        {notice.isNew && <span className="bg-noble-gold text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">New</span>}
                      </div>
                      <h3 className="font-heading font-bold text-noble-navy mb-2">{notice.title}</h3>
                      <p className="text-noble-navy/60 text-sm leading-relaxed mb-3">{notice.excerpt}</p>
                      <div className="flex items-center gap-1.5 text-noble-navy/40 text-xs"><Calendar className="w-3.5 h-3.5" /> {notice.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Notices;
