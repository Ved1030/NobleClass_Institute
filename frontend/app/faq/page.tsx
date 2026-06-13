"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const faqData = [
  { q: 'What is the batch size at Noble Classes?', a: 'We maintain a maximum of 25 students per batch to ensure personalized attention and quality learning.' },
  { q: 'Do you provide study material?', a: 'Yes, we provide comprehensive, exam-focused study material prepared by our expert faculty at no extra cost.' },
  { q: 'Are there any scholarships available?', a: 'Yes, we offer merit-based scholarships for students who score above 90% in their previous exams.' },
  { q: 'What are the timings for batches?', a: 'We offer morning (7–9 AM), afternoon (2–4 PM), and evening (5–7 PM) batches to suit different schedules.' },
  { q: 'Is there a diagnostic test for admission?', a: 'Yes, we conduct an optional diagnostic test to assess the student\'s current level and identify areas for improvement.' },
  { q: 'Do you offer online classes?', a: 'Yes, we offer a hybrid learning model with both in-person and online class options for flexibility.' },
  { q: 'What is the fee structure?', a: 'Our fees vary by course and range from ₹2,000/month to ₹5,000/month. Please visit our Courses page or contact us for detailed fee information.' },
  { q: 'How can I track my child\'s progress?', a: 'We conduct regular parent-teacher meetings, provide monthly progress reports, and offer real-time updates through our parent portal.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const filtered = faqData.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about Noble Classes, our programs, admissions, and more." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="relative mb-10">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-noble-navy/40" />
            <input type="text" placeholder="Search questions..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-noble-blue/20 bg-noble-light focus:outline-none focus:ring-2 focus:ring-noble-blue/30 text-noble-navy text-sm placeholder:text-noble-navy/40" />
          </div>
          <div className="space-y-4">
            {filtered.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-noble-blue/10 overflow-hidden hover:border-noble-blue/20 transition-colors">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left" aria-expanded={openIndex === i}>
                  <span className="font-heading font-semibold text-noble-navy pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-noble-blue shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} />
                </button>
                {openIndex === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="px-6 pb-6"><p className="text-noble-navy/60 text-sm leading-relaxed">{faq.a}</p></motion.div>}
              </motion.div>
            ))}
            {filtered.length === 0 && <div className="text-center py-12 text-noble-navy/40"><p>No questions match your search.</p></div>}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default FAQ;
