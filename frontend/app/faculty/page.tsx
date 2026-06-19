"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const facultyList = [
  { name: 'Dr. Aniket Deshmukh', role: 'Academic Head', qualification: 'M.Sc., Ph.D.', initials: 'AD', icon: Award, desc: 'Over 15 years of teaching experience in Mathematics and Science. Dedicated to building strong academic foundations through conceptual teaching and personalized mentoring.' },
  { name: 'Ms. Neha Joshi', role: 'Senior Faculty — English', qualification: 'M.A., B.Ed.', initials: 'NJ', icon: BookOpen, desc: '10+ years of experience in English language and literature. Known for innovative teaching methods that make learning engaging, interactive, and effective.' },
  { name: 'Mr. Rajesh Iyer', role: 'Senior Faculty — Mathematics', qualification: 'MBA, B.E.', initials: 'RI', icon: GraduationCap, desc: 'Experienced mathematics educator known for making complex topics simple and building strong problem-solving skills in students across all standards.' },
  { name: 'Ms. Sneha Patil', role: 'Faculty — Mathematics', qualification: 'M.Sc.', initials: 'SP', icon: Award, desc: 'Passionate mathematics educator with 8+ years of experience. Specializes in making complex mathematical concepts simple and accessible for all students.' },
  { name: 'Mr. Vikram Singh', role: 'Faculty — Science', qualification: 'M.Sc., B.Ed.', initials: 'VS', icon: BookOpen, desc: 'Experienced science educator with a focus on practical learning and experimental approaches to build strong conceptual understanding.' },
  { name: 'Ms. Pooja Mehta', role: 'Faculty — English', qualification: 'MBA', initials: 'PM', icon: GraduationCap, desc: 'Skilled English language faculty with expertise in grammar, literature, and communication skills development for school students.' },
];

const Faculty: React.FC = () => {
  return (
    <>
      <PageHero title="Our Faculty" subtitle="Experienced educators dedicated to student success, academic excellence, and building strong foundations for the future." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Faculty' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Meet The Team</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Our Faculty</h2>
            <p className="max-w-2xl mx-auto text-noble-navy/60">Our team of experienced educators is committed to helping every student achieve academic success through personalized guidance and structured learning.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((faculty, i) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-noble-blue/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-noble-blue rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">{faculty.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-noble-navy text-lg mb-1">{faculty.name}</h3>
                <p className="text-noble-blue text-sm font-semibold mb-1">{faculty.role}</p>
                <p className="text-noble-navy/50 text-xs mb-4">{faculty.qualification}</p>
                <p className="text-noble-navy/60 text-sm leading-relaxed">{faculty.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Faculty;
