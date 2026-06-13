"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const positions = [
  { title: 'Mathematics Teacher', type: 'Full-time', location: 'Ghatkopar, Mumbai', exp: '3+ years', desc: 'We are looking for an experienced Mathematics teacher for Classes 8–12, including JEE and NEET preparation.' },
  { title: 'Physics Teacher', type: 'Full-time', location: 'Ghatkopar, Mumbai', exp: '3+ years', desc: 'Seeking a passionate Physics teacher with JEE/NEET coaching experience.' },
  { title: 'Chemistry Teacher', type: 'Full-time', location: 'Ghatkopar, Mumbai', exp: '3+ years', desc: 'Looking for a Chemistry specialist to join our growing faculty team.' },
  { title: 'Administrative Assistant', type: 'Full-time', location: 'Ghatkopar, Mumbai', exp: '1+ years', desc: 'Handle day-to-day administrative tasks, student records, and parent communications.' },
];

const Careers: React.FC = () => {
  return (
    <>
      <PageHero title="Careers at Noble Classes" subtitle="Join a team of passionate educators and professionals dedicated to shaping the future of students." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Open Positions</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Current Openings</h2>
            <p className="text-noble-navy/60 max-w-2xl mx-auto">If you are passionate about education and want to make a difference, we would love to hear from you.</p>
          </div>
          <div className="space-y-6">
            {positions.map((pos, i) => (
              <motion.div key={pos.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-6 hover:shadow-lg hover:border-noble-blue/20 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2"><Briefcase className="w-4 h-4 text-noble-blue" /><h3 className="font-heading font-bold text-noble-navy">{pos.title}</h3></div>
                    <div className="flex flex-wrap gap-3 text-xs text-noble-navy/60 mb-3">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{pos.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{pos.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{pos.exp}</span>
                    </div>
                    <p className="text-noble-navy/60 text-sm">{pos.desc}</p>
                  </div>
                  <a href="mailto:careers@nobleclasses.in" className="flex items-center gap-2 text-noble-blue text-sm font-semibold whitespace-nowrap hover:gap-3 transition-all">Apply Now <ArrowRight className="w-4 h-4" /></a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12 p-8 bg-noble-light rounded-2xl border border-noble-blue/10">
            <Mail className="w-8 h-8 text-noble-blue mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-noble-navy mb-2">Don't see a fitting role?</h3>
            <p className="text-noble-navy/60 text-sm mb-4">Send us your resume and we'll keep you in mind for future opportunities.</p>
            <a href="mailto:careers@nobleclasses.in" className="inline-flex items-center gap-2 bg-noble-blue text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-noble-navy transition-colors">Send Resume <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Careers;
