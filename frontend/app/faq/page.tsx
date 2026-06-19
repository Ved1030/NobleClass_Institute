"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Search } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const faqData = [
  { q: 'What coaching does Labbdhis Academy offer?', a: 'Labbdhis Academy provides coaching for students of Std 8th, 9th & 10th (State Board & CBSE) in Mathematics, Science, and English. Our programs focus on concept-based learning and academic excellence.' },
  { q: 'Where is Labbdhis Academy located?', a: 'Labbdhis Academy is located near Shreyas Cinema, Ghatkopar West, Mumbai, Maharashtra. We are easily accessible from all parts of Ghatkopar and surrounding areas.' },
  { q: 'How can I enroll?', a: 'You can fill out the inquiry form on our website or visit the academy in person. Our team will contact you for a free academic counseling session, followed by enrollment formalities.' },
  { q: 'What is the class size?', a: 'We maintain small batch sizes to ensure personalized attention and effective learning. Each batch is intentionally limited to allow every student to receive the guidance they need.' },
  { q: 'What are the batch timings?', a: 'Batch timings are scheduled based on student availability and class requirements. Please contact us or fill out the inquiry form for the latest schedule information.' },
  { q: 'Is study material provided?', a: 'Yes, comprehensive study material, practice worksheets, and test series are provided to all enrolled students as part of the program.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const filtered = faqData.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Find answers to common questions about Labbdhis Academy, our coaching programs, admissions, and more." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'FAQ' }]} />
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
