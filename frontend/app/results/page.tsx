"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Star } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const resultsData = [
  { year: '2025-26', title: 'Std 7th Academic Excellence', desc: 'Students demonstrated outstanding performance with an average improvement of 22% in overall academic scores.', icon: Trophy, color: '#005DAA' },
  { year: '2025-26', title: 'Std 10th Board Preparation', desc: 'Our Std 10th students showed exceptional progress in board exam preparation with intensive practice and mock tests.', icon: Star, color: '#C62828' },
  { year: '2024-25', title: 'Top Scorers Recognition', desc: 'Multiple students secured top percentile rankings in school examinations with scores above 90%.', icon: Award, color: '#F4B400' },
  { year: '2024-25', title: 'Consistent Academic Growth', desc: 'Over 85% of students showed measurable improvement in their academic performance throughout the year.', icon: Users, color: '#2563EB' },
];

const Results: React.FC = () => {
  return (
    <>
      <PageHero title="Results & Achievements" subtitle="Celebrating academic excellence and outstanding achievements of our students." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Results' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Academic Excellence</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Our Results</h2>
            <p className="max-w-2xl mx-auto text-noble-navy/60">We take pride in the academic growth and achievements of every student who learns with us.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {resultsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-noble-blue/10 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: item.color }}>{item.year}</span>
                    <h3 className="font-heading font-bold text-noble-navy mt-2 mb-1">{item.title}</h3>
                    <p className="text-noble-navy/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Results;
