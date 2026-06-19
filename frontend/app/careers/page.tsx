"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const positions = [
  { title: 'Mathematics Teacher (Std 8th to 10th)', type: 'Full-Time', location: 'Ghatkopar West', desc: 'We are looking for an experienced Mathematics teacher to teach State Board and CBSE students from Std 8th to 10th.' },
  { title: 'Academic Counselor', type: 'Full-Time', location: 'Ghatkopar West', desc: 'Looking for a dedicated academic counselor to guide students and parents through program selection and learning pathways.' },
  { title: 'English Language Faculty', type: 'Part-Time', location: 'Ghatkopar West', desc: 'We need a passionate English faculty to teach language, grammar, and literature to Std 8th to 10th students (State Board & CBSE).' },
  { title: 'Science Teacher (Std 8th to 10th)', type: 'Full-Time', location: 'Ghatkopar West', desc: 'Seeking an experienced Science teacher to teach Physics, Chemistry, and Biology for State Board and CBSE curriculum.' },
];

const Careers: React.FC = () => {
  return (
    <>
      <PageHero title="Careers at Labbdis Academy" subtitle="Join our team of passionate educators dedicated to shaping the academic future of students from Std 8th to 10th." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Careers' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Join Our Team</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Open Positions</h2>
            <p className="max-w-2xl mx-auto text-noble-navy/60">We are always looking for passionate educators to join our team and help shape the future of our students.</p>
          </div>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-noble-blue/10 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-heading font-bold text-noble-navy text-lg mb-1">{pos.title}</h3>
                    <div className="flex items-center gap-4 text-noble-navy/50 text-sm mb-3">
                      <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {pos.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {pos.location}</span>
                    </div>
                    <p className="text-noble-navy/60 text-sm">{pos.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-noble-navy/60 text-sm mb-4">Interested candidates can send their resume to:</p>
            <span className="inline-flex items-center gap-2 bg-noble-blue text-white px-6 py-3 rounded-full text-sm font-semibold">careers@labbdisacademy.in <ArrowRight className="w-4 h-4" /></span>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Careers;
