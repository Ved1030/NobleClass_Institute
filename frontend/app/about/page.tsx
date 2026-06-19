"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, BookOpen, Star } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const timeline = [
  { year: '2007', title: 'Foundation', desc: 'Labbdhi's Academy was founded with a vision to provide quality education and academic guidance to students in Ghatkopar West, Mumbai with a small batch of dedicated learners.' },
  { year: '2015', title: 'Expansion & Growth', desc: 'Expanded programs to include comprehensive academic support across multiple subjects, growing to serve over 200 students annually.' },
  { year: '2020', title: 'Expanded Academic Programs', desc: 'Strengthened coaching programs across all standards with enhanced curriculum, assessments, and student support systems.' },
  { year: '2026', title: '500+ Students Mentored', desc: 'Proud milestone of mentoring over 500 students with a continued focus on academic excellence, personalized guidance, and student success.' },
];

const values = [
  { icon: Target, title: 'Excellence', desc: 'We pursue academic excellence in everything we do, setting high standards for both students and faculty.' },
  { icon: Heart, title: 'Integrity', desc: 'Honest, transparent, and ethical in all our dealings with students, parents, and the community.' },
  { icon: Users, title: 'Inclusivity', desc: 'We believe every student deserves quality education regardless of their background.' },
  { icon: BookOpen, title: 'Innovation', desc: 'Continuously evolving our teaching methods to match modern educational standards.' },
  { icon: Award, title: 'Accountability', desc: 'We take responsibility for every student\'s progress and are committed to their success.' },
  { icon: Star, title: 'Passion', desc: 'Our faculty brings genuine passion for teaching that inspires students to love learning.' },
];

const team = [
  { name: 'Dr. Aniket Deshmukh', role: 'Academic Head', qualification: 'M.Sc., Ph.D.', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=300&fit=crop&crop=face', bio: 'Over 15 years of experience in Mathematics and Science education. Passionate about building strong academic foundations and mentoring students toward excellence.' },
  { name: 'Ms. Neha Joshi', role: 'Senior Faculty — English', qualification: 'M.A., B.Ed.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face', bio: 'Specializes in English language and literature with 10+ years of experience. Known for innovative teaching methods that make learning engaging and effective.' },
  { name: 'Mr. Rajesh Iyer', role: 'Senior Faculty — Mathematics', qualification: 'M.Sc.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face', bio: 'Expert mathematics educator with 12+ years of experience in helping students master core concepts and excel in school examinations.' },
];

const About: React.FC = () => {
  return (
    <>
      <PageHero title="About Labbdhi's Academy" subtitle="A trusted coaching academy since 2007 in Ghatkopar West, Mumbai, providing expert coaching for Std 8th, 9th & 10th students (State Board & CBSE) with concept-based learning and personal attention." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Our Story</span>
              <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-6">Where learning is Journey</h2>
              <div className="space-y-4 text-noble-navy/70 leading-relaxed">
                <p>Labbdhi's Academy has been guiding students since 2007 with a focus on academic excellence, concept clarity, and individual attention. We provide coaching for students of Std 8th, 9th & 10th (State Board & CBSE), helping them strengthen fundamentals and achieve outstanding academic results.</p>
                <p>Our approach focuses on understanding each student's unique learning style, addressing their weaknesses, strengthening their fundamentals, and building the confidence they need to excel in school examinations.</p>
                <p>We believe in providing quality education that goes beyond textbooks — nurturing critical thinking, building character, and preparing students for academic success.</p>
              </div>
            </div>
            <div className="relative">
                <Image src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=450&fit=crop" alt="Labbdhi's Academy - coaching classroom" width={600} height={450} className="rounded-3xl object-cover w-full shadow-2xl shadow-noble-blue/10" />
              <div className="absolute -bottom-6 -left-6 bg-noble-blue text-white rounded-2xl p-6 shadow-xl">
                <div className="font-heading text-4xl font-bold">2007</div>
                <div className="text-white/70 text-sm">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-noble-blue to-noble-navy rounded-3xl p-10 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6"><Target className="w-6 h-6 text-white" /></div>
              <h2 className="font-heading text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/80 leading-relaxed">To provide quality education that helps students build strong academic foundations, develop critical thinking, and achieve their full potential through structured learning and personalized guidance.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl p-10 border border-noble-blue/10 shadow-lg">
              <div className="w-12 h-12 bg-noble-blue/8 rounded-2xl flex items-center justify-center mb-6"><Eye className="w-6 h-6 text-noble-blue" /></div>
              <h2 className="font-heading text-3xl font-bold text-noble-navy mb-4">Our Vision</h2>
              <p className="text-noble-navy/70 leading-relaxed">To be recognized as a trusted educational institute where academic excellence meets holistic development, and where every student builds the foundation for a successful future.</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Our Journey</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-noble-blue/20" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-8 pl-20 relative">
                  <div className="absolute left-4 top-1 w-8 h-8 bg-noble-blue rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md shadow-noble-blue/30 -translate-x-1/2">{i + 1}</div>
                  <div className="bg-white border border-noble-blue/10 rounded-2xl p-6 flex-1 hover:shadow-md transition-shadow">
                    <span className="text-noble-blue text-sm font-bold">{item.year}</span>
                    <h3 className="font-heading font-bold text-noble-navy mt-1 mb-2">{item.title}</h3>
                    <p className="text-noble-navy/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-noble-blue/10 hover:shadow-lg hover:shadow-noble-blue/5 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 bg-noble-blue/8 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-noble-blue transition-colors duration-300"><v.icon className="w-5 h-5 text-noble-blue group-hover:text-white transition-colors duration-300" /></div>
                <h3 className="font-heading font-bold text-noble-navy text-lg mb-2">{v.title}</h3>
                <p className="text-noble-navy/60 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Leadership</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Management Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center group">
                <div className="relative inline-block mb-5">
                  <Image src={member.image} alt={member.name} width={120} height={120} className="w-28 h-28 rounded-full object-cover border-4 border-noble-blue/20 group-hover:border-noble-blue transition-colors duration-300 mx-auto" />
                </div>
                <h3 className="font-heading font-bold text-noble-navy text-lg mb-1">{member.name}</h3>
                <p className="text-noble-blue font-semibold text-sm mb-1">{member.role}</p>
                <p className="text-noble-navy/50 text-xs mb-4">{member.qualification}</p>
                <p className="text-noble-navy/60 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default About;
