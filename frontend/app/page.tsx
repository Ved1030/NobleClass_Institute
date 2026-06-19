"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Star, Trophy, Users, BookOpen, TrendingUp,
  Award, MapPin, Phone, ChevronDown, GraduationCap, Target, Clock,
  Mail, MessageCircle, ExternalLink, X, HeartPulse
} from 'lucide-react';
import AnimatedCounter from '@/components/AnimatedCounter';

const InquiryForm = dynamic(() => import('@/components/InquiryForm'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl shadow-sm border border-noble-blue/10 p-6 sm:p-8 animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={i === 5 ? 'sm:col-span-2' : ''}>
            <div className="h-4 bg-noble-blue/10 rounded w-24 mb-2" />
            <div className="h-10 bg-noble-blue/5 rounded-xl w-full" />
          </div>
        ))}
      </div>
      <div className="h-11 bg-noble-blue/10 rounded-xl w-full mt-6" />
    </div>
  ),
});

const stats = [
  { label: 'Years of Excellence', value: 18, suffix: '+', icon: Trophy },
  { label: 'Students Mentored', value: 500, suffix: '+', icon: Users },
  { label: 'Parent Satisfaction', value: 95, suffix: '%', icon: Award },
  { label: 'Student-Centric Learning', value: 100, suffix: '%', icon: Star },
];

const courses = [
  { icon: BookOpen, name: 'Std 7th Coaching', badge: 'FOUNDATION', tag: 'Academic', color: '#005DAA', desc: 'Strong foundation building in Mathematics, Science, English, and core academic subjects with concept-based learning.', subjects: ['Mathematics', 'Science', 'English'], stats: { days: 'Regular Classes', faculty: 'Expert Teachers', material: 'Study Material' } },
  { icon: BookOpen, name: 'Std 8th Coaching', badge: 'POPULAR', tag: 'Academic', color: '#2563EB', desc: 'Concept-focused learning with regular assessments, doubt-solving sessions, and performance tracking to ensure steady progress.', subjects: ['Mathematics', 'Science', 'English'], stats: { days: 'Regular Classes', faculty: 'Subject Experts', material: 'Practice Sheets' } },
  { icon: Target, name: 'Std 9th Coaching', badge: 'ADVANCED', tag: 'Academic', color: '#C62828', desc: 'Advanced preparation with detailed subject understanding, exam strategies, and comprehensive coverage of the academic curriculum.', subjects: ['Mathematics', 'Science', 'English'], stats: { days: 'Advanced Prep', faculty: 'Senior Faculty', material: 'Exam Kit' } },
  { icon: Trophy, name: 'Std 10th Coaching', badge: 'BOARD FOCUS', tag: 'Board Prep', color: '#16A34A', desc: 'Board exam-focused preparation, revision programs, intensive practice sessions, and mock tests for academic excellence.', subjects: ['Mathematics', 'Science', 'English'], stats: { days: 'Board Prep', faculty: 'Exam Experts', material: 'Board Kit' } },
];

const testimonials = [
  { id: 1, name: 'Rohan K.', label: 'Student', content: 'The teachers explain every topic in a simple and understandable way. My concepts are now very clear and I feel confident in my studies.', rating: 5, type: 'student', initials: 'RK' },
  { id: 2, name: 'Mrs. Deshmukh', label: 'Parent', content: 'My child\'s confidence and academic performance improved significantly after joining Labbdhis Academy. The personal attention makes a big difference.', rating: 5, type: 'parent', initials: 'MD' },
  { id: 3, name: 'Sneha P.', label: 'Student', content: 'Regular tests and feedback sessions help students stay on track. The doubt-solving sessions are extremely helpful for clearing concepts.', rating: 5, type: 'student', initials: 'SP' },
];

const notices = [
  { id: 1, title: 'Admissions Open For Std 7th, 8th, 9th & 10th', date: '01 Jun 2026', type: 'Admission', desc: 'Enrollments are now open for all standards. Limited seats available. Early bird discounts available for early registrations.' },
  { id: 2, title: 'New Academic Batch Starting Soon', date: '05 Jun 2026', type: 'Batch', desc: 'New academic batches starting from next month. Small batch sizes ensure personalized attention for every student.' },
  { id: 3, title: 'Weekly Assessment Schedule Released', date: '10 Jun 2026', type: 'Exam', desc: 'Weekly unit test schedule has been released. Regular assessments help track progress and identify areas for improvement.' },
];

const achievements = [
  { year: '2007', title: 'Strong Academic Results Every Year', desc: 'Consistent track record of helping students achieve excellent academic outcomes year after year.', icon: Trophy },
  { year: '2015', title: 'Comprehensive Subject Support', desc: 'Expanded to offer complete academic support across Mathematics, Science, and English for all standards.', icon: Star },
  { year: '2026', title: 'Personalized Student Guidance', desc: 'Dedicated to providing individual attention and mentorship to every student for their academic growth.', icon: Users },
];

const faqs = [
  { q: 'What coaching does Labbdhis Academy offer?', a: 'Labbdhis Academy provides coaching for students from Std 7th to Std 10th in Mathematics, Science, and English. Our programs focus on building strong concepts and academic excellence.' },
  { q: 'Where is Labbdhis Academy located?', a: 'Labbdhis Academy is located near Shreyas Cinema, LBS Marg, Ghatkopar West, Mumbai, Maharashtra 400086.' },
  { q: 'How can I enroll?', a: 'You can fill out the inquiry form on our website or visit the academy in person. Our team will guide you through the admission process, counseling session, and enrollment formalities.' },
  { q: 'What is the class size?', a: 'We maintain small batch sizes to ensure personalized attention and effective learning. Each batch is limited to ensure every student gets the guidance they need.' },
];

const whyUs = [
  { title: 'Experienced Faculty', desc: 'Learn from qualified and experienced educators dedicated to student success.' },
  { title: 'Small Batch Sizes', desc: 'Limited students per batch to ensure individual attention and effective learning.' },
  { title: 'Personal Attention', desc: 'Every student receives focused guidance to address their unique learning needs.' },
  { title: 'Regular Unit Tests', desc: 'Frequent assessments to track progress and identify areas for improvement.' },
  { title: 'Doubt Solving Sessions', desc: 'Dedicated sessions for clearing doubts and strengthening conceptual understanding.' },
  { title: 'Progress Tracking', desc: 'Consistent monitoring of academic performance and learning milestones.' },
  { title: 'Parent Feedback Meetings', desc: 'Regular parent-teacher interactions to discuss student progress and growth.' },
  { title: 'Exam-Oriented Preparation', desc: 'Structured preparation aligned with school examinations and academic requirements.' },
  { title: 'Concept-Based Teaching', desc: 'Strong emphasis on building clear understanding of core academic concepts.' },
  { title: 'Academic Mentorship', desc: 'Personal mentorship to guide students through their academic journey.' },
];

const staggeredFade = (i: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const SectionHeading: React.FC<{ subtitle: string; title: string; desc?: string; light?: boolean }> = ({ subtitle, title, desc, light }) => (
  <div className="text-center mb-14 lg:mb-16">
    <span className={`text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-blue-300' : 'text-noble-blue'}`}>{subtitle}</span>
    <h2 className={`font-heading text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight ${light ? 'text-white' : 'text-noble-dark'}`}>{title}</h2>
    {desc && <p className={`max-w-2xl mx-auto text-lg leading-relaxed ${light ? 'text-white/60' : 'text-noble-dark/60'}`}>{desc}</p>}
  </div>
);

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-visible pt-[90px] lg:pt-[130px]">
        {/* Right image – absolutely positioned, fills to viewport right edge */}
        <div
          className="absolute top-[90px] lg:top-[130px] right-0 bottom-0 w-[55vw] hidden lg:flex-col lg:flex justify-center overflow-visible animate-fade-in"
        >
          <div className="relative w-full h-[620px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: '0 40px 40px 0' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(100% 0%, 100% 100%, 3% 100%, 4% 95%, 6% 85%, 9% 70%, 12% 58%, 14.5% 50%, 12% 42%, 9% 30%, 6% 15%, 4% 5%, 3% 0%)',
                  filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.06))'
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=620&fit=crop"
                  alt="Labbdhis Academy Classroom"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '35% 30%' }}
                  priority
                  sizes="55vw"
                />
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute top-[15%] right-0 flex flex-col gap-4 z-20">
              {[
                { icon: Award, color: '#005DAA', value: 'Since 2007', label: 'Established', delay: 0.2 },
                { icon: Users, color: '#2563EB', value: 'Focused', label: 'Student Guidance', delay: 0.4 },
                { icon: Star, color: '#F4B400', value: 'Excellence', label: 'Academic Focus', delay: 0.6 },
              ].map((card, idx) => (
                <div
                  key={card.label}
                  className={`flex items-center gap-3 p-3 animate-slide-up`}
                  style={{
                    width: '170px',
                    height: '68px',
                    backgroundColor: 'rgba(255,255,255,0.96)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    borderRadius: '12px 0 0 12px',
                    boxShadow: '0 10px 30px rgba(15,23,42,0.12)',
                    transition: 'box-shadow 0.3s ease',
                    animationDelay: `${idx * 0.15}s`,
                  }}
                >
                  <div
                    className="w-[32px] h-[32px] rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${card.color}18` }}
                  >
                    <card.icon className="w-[16px] h-[16px]" style={{ color: card.color }} />
                  </div>
                  <div>
                    <p className="font-bold leading-none" style={{ fontSize: '18px', color: '#1E293B' }}>{card.value}</p>
                    <p className="font-medium leading-tight mt-0.5"                      style={{ fontSize: '12px', color: '#64748B' }}>{card.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Left content – inside max-w-7xl container */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="min-h-[calc(100vh-90px)] lg:min-h-[calc(100vh-130px)] flex items-start">
            <div className="w-full max-w-[540px] pt-4 lg:pt-8 pb-12 lg:pb-20">
              <div className="animate-fade-in">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 border border-noble-blue rounded-full px-4 py-1.5 text-noble-blue text-xs font-semibold tracking-wide uppercase mb-8 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-noble-blue" />
                  Established Since 2007
                </div>

                {/* Main Heading */}
                <h1 className="font-heading text-3xl lg:text-5xl xl:text-[56px] font-bold leading-[1.05] animate-slide-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
                  <span className="text-noble-blue">Expert Coaching for</span>{" "}
                  <span style={{ color: '#C62828' }}>Std 7th, 8th, 9th &amp; 10th Students</span>
                </h1>

                {/* Tagline */}
                <p className="font-heading text-2xl lg:text-3xl xl:text-[40px] leading-[1.15] font-medium mt-[20px] animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards', color: '#374151' }}>
                  Shaping Young Minds Through Quality Education
                </p>

                {/* Description */}
                <p className="text-gray-600 text-base lg:text-lg xl:text-[20px] leading-[1.8] mt-[28px] max-w-[540px] animate-slide-up" style={{ animationDelay: '0.25s', animationFillMode: 'backwards' }}>
                  Build strong concepts, improve academic performance, and prepare confidently for school examinations with personalized guidance and experienced faculty.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-5 mt-[36px] animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-10 h-[60px] rounded-lg font-bold text-base text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-red-600/20"
                    style={{ backgroundColor: '#C62828' }}
                  >
                    Enquire Now <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/courses"
                    className="inline-flex items-center gap-2 border-2 border-noble-blue text-noble-blue px-10 h-[60px] rounded-lg font-semibold text-base bg-white hover:bg-noble-blue hover:text-white transition-all duration-200"
                  >
                    Join a Demo Class
                  </Link>
                </div>

                {/* Trust Strip – single horizontal component */}
                <div className="mt-[36px] animate-slide-up" style={{ animationDelay: '0.35s', animationFillMode: 'backwards' }}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center divide-x divide-gray-100">
                    {[
                      { icon: Award, value: 'Since 2007', label: 'Established' },
                      { icon: Users, value: 'Focused', label: 'Student Guidance' },
                      { icon: Star, value: 'Excellence', label: 'Academic Focus' },
                    ].map((item) => (
                      <div key={item.value} className="flex items-center gap-3 px-5 first:pl-2 last:pr-2 w-1/3">
                        <div className="w-10 h-10 rounded-lg bg-noble-blue/10 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-noble-blue" />
                        </div>
                        <div>
                          <p className="font-bold text-noble-dark text-sm">{item.value}</p>
                          <p className="text-noble-dark/50 text-xs">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Ticker */}
      <section className="bg-gradient-to-r from-noble-blue to-noble-blue-dark py-3 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-hidden">
            <span className="text-yellow-300 text-sm font-bold whitespace-nowrap shrink-0">📢 Announcements:</span>
            <div className="overflow-hidden flex-1">
              <motion.div
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="whitespace-nowrap flex gap-12"
              >
                <span className="text-white/90 text-sm">📢 Admissions Open For Std 7th, 8th, 9th &amp; 10th</span>
                <span className="text-white/90 text-sm">📢 New Academic Batch Starting Soon</span>
                <span className="text-white/90 text-sm">📢 Weekly Assessment Schedule Released</span>
                <span className="text-white/90 text-sm">📢 Free Career Counseling Session Available</span>
                <span className="text-white/90 text-sm">📢 Admissions Open For Std 7th, 8th, 9th &amp; 10th</span>
                <span className="text-white/90 text-sm">📢 New Academic Batch Starting Soon</span>
                <span className="text-white/90 text-sm">📢 Weekly Assessment Schedule Released</span>
                <span className="text-white/90 text-sm">📢 Free Career Counseling Session Available</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - premium full-width stats ribbon */}
      <section className="bg-noble-blue h-[140px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, suffix, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 justify-center">
                <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white/80 shrink-0" />
                <div>
                  <div className="font-heading text-xl lg:text-2xl font-bold text-white">
                    {label === 'Years of Excellence' ? (
                      <AnimatedCounter end={18} suffix="+" />
                    ) : label === 'Students Mentored' ? (
                      <AnimatedCounter end={500} suffix="+" />
                    ) : label === 'Parent Satisfaction' ? (
                      <AnimatedCounter end={95} suffix="%" />
                    ) : (
                      <AnimatedCounter end={100} suffix="%" />
                    )}
                  </div>
                  <div className="text-blue-200 text-xs lg:text-sm whitespace-nowrap font-medium">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Excellence */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="section-subtitle">About Labbdhis Academy</span>
              <h2 className="section-heading mb-6">Ghatkopar West&apos;s <span className="text-noble-blue">Trusted Coaching Academy</span></h2>
              <p className="text-noble-dark/60 text-lg leading-relaxed mb-6">
                Labbdhis Academy has been guiding students since 2007 with a focus on academic excellence, concept clarity, and individual attention. We provide coaching for students from Std 7th to Std 10th, helping them strengthen fundamentals and achieve outstanding academic results.
              </p>
              <p className="text-noble-dark/60 text-lg leading-relaxed mb-8">
                Our teaching approach focuses on building strong concepts, regular assessments, and personalized mentorship to ensure every student reaches their full potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">Know More About Labbdhis <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.slice(0, 4).map((item, i) => (
                <motion.div
                  key={item.title}
                  {...staggeredFade(i)}
                  className="bg-noble-light rounded-xl p-6 border-l-4 border-noble-blue"
                >
                  <CheckCircle className="w-5 h-5 text-noble-blue mb-3" />
                  <h3 className="font-heading font-bold text-noble-dark mb-1.5">{item.title}</h3>
                  <p className="text-noble-dark/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 lg:py-28 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-[700px] mx-auto mb-12 lg:mb-16"
          >
            <span className="section-subtitle">Academic Programs</span>
            <h2 className="section-heading">Courses We Offer</h2>
            <p className="text-noble-dark/60 text-lg mt-4">Comprehensive coaching for Std 7th, 8th, 9th, and 10th students with expert faculty and personalized guidance.</p>
          </motion.div>

          {/* Content Grid + Image */}
          <div className="flex gap-10 items-start">
            {/* Cards Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course: any, i: number) => (
                <motion.div
                  key={course.name}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-6 flex flex-col flex-1">
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${course.color}15` }}
                        >
                          <course.icon className="w-5 h-5" style={{ color: course.color }} />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-base text-noble-dark">{course.name}</h4>
                          <span
                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${course.color}12`,
                              color: course.color
                            }}
                          >
                            {course.tag}
                          </span>
                        </div>
                      </div>
                      {/* Badge */}
                      <span
                        className="text-[11px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap"
                        style={{
                          backgroundColor: course.badge === 'POPULAR' ? '#005DAA12' : '#16A34A12',
                          color: course.badge === 'POPULAR' ? '#005DAA' : '#16A34A'
                        }}
                      >
                        {course.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-noble-dark/60 text-sm leading-relaxed mb-4 line-clamp-2">{course.desc}</p>

                    {/* Subject Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {course.subjects.map((s: string) => (
                        <span
                          key={s}
                          className="text-xs font-medium px-3 py-1.5 rounded-full"
                          style={{
                            backgroundColor: `${course.color}10`,
                            color: course.color
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Stats */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-noble-dark/30" />
                          <span className="text-xs text-noble-dark/50">{course.stats.days}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-noble-dark/30" />
                          <span className="text-xs text-noble-dark/50">{course.stats.faculty}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-noble-dark/30" />
                          <span className="text-xs text-noble-dark/50">{course.stats.material}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block w-[380px] shrink-0 sticky top-[180px]"
            >
              <div className="relative h-[520px] rounded-2xl overflow-hidden shadow-lg shadow-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=520&fit=crop"
                  alt="Students at Labbdhis Academy coaching classes"
                  fill
                  className="object-cover"
                  sizes="380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noble-blue/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg">Real Classroom</p>
                  <p className="text-white/70 text-sm">Learning Environment</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Meet The Team" title="Our Faculty" desc="Experienced educators dedicated to student success and academic excellence." />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Aniket Deshmukh', role: 'Academic Head', qualification: 'M.Sc., Ph.D.', initials: 'AD', desc: 'Over 15 years of teaching experience in Mathematics and Science. Passionate about building strong academic foundations.' },
              { name: 'Ms. Neha Joshi', role: 'Senior Faculty — English', qualification: 'M.A., B.Ed.', initials: 'NJ', desc: 'Specializes in English language and literature with 10+ years of experience in guiding students toward academic excellence.' },
              { name: 'Mr. Rajesh Iyer', role: 'Senior Faculty — Mathematics', qualification: 'M.Sc.', initials: 'RI', desc: 'Expert mathematics educator with 12+ years of experience in helping students master core concepts and excel in examinations.' },
            ].map((faculty, i) => (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-noble-light rounded-xl p-6 border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-noble-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{faculty.initials}</span>
                </div>
                <h3 className="font-heading font-bold text-noble-dark text-lg mb-1">{faculty.name}</h3>
                <p className="text-noble-blue text-sm font-semibold mb-1">{faculty.role}</p>
                <p className="text-noble-dark/50 text-xs mb-4">{faculty.qualification}</p>
                <p className="text-noble-dark/60 text-sm leading-relaxed">{faculty.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-16">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-[0.2em]">Achievements</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight text-[#111827]">Our Milestones</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#6B7280]">Celebrating years of academic excellence and student achievements.</p>
          </div>

          {/* Section Divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <Trophy className="w-5 h-5 text-noble-blue" />
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          {/* Achievement Timeline */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((item, i) => {
              const yearColors = ['#005DAA', '#C62828', '#F4B400'];
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${yearColors[i]}15` }}>
                      <item.icon className="w-6 h-6" style={{ color: yearColors[i] }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white" style={{ backgroundColor: yearColors[i] }}>{item.year}</span>
                      <h4 className="font-heading font-bold text-[#111827] mt-2 mb-1">{item.title}</h4>
                      <p className="text-[#6B7280] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[32px] p-10 lg:p-14 text-center text-white overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #005DAA, #2563EB)' }}
          >
            {/* Decorative floating shapes */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-white/[0.06] rounded-full"
            />
            <motion.div
              animate={{ scale: [1.15, 1, 1.15] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/[0.04] rounded-full"
            />
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/[0.03] rounded-full" />
            <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/[0.05] rounded-full" />

            {/* Floating icons */}
            <div className="absolute top-10 left-12 text-white/[0.08] hidden lg:block">
              <Trophy className="w-20 h-20" />
            </div>
            <div className="absolute bottom-10 right-14 text-white/[0.06] hidden lg:block">
              <Award className="w-14 h-14" />
            </div>
            <div className="absolute top-1/2 right-10 text-white/[0.05] hidden lg:block">
              <Star className="w-24 h-24" />
            </div>

            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Begin Your Academic Journey</h3>
              <p className="text-white/80 text-lg mb-8">Join Labbdhis Academy Today.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 h-[56px] px-8 rounded-xl bg-white text-noble-blue font-bold text-base hover:bg-blue-50 transition-all duration-200 shadow-lg"
                >
                  Enquire Now <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Reviews" title="What People Say" desc="Hear from our students and parents about their experience at Labbdhis Academy." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                {...staggeredFade(i)}
                className="bg-noble-light rounded-xl p-6 lg:p-8 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'text-noble-accent fill-noble-accent' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-noble-dark/70 leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-noble-blue flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-noble-dark text-sm">{t.name}</h4>
                    <p className="text-noble-dark/40 text-xs">
                      {t.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notices + Inquiry */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="section-subtitle">Stay Updated</span>
              <h2 className="section-heading mb-4">Latest Notices & Announcements</h2>
              <p className="text-noble-dark/60 mb-8">Stay informed about admissions, batch schedules, assessments, and important announcements from Labbdhis Academy.</p>
              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <motion.div
                    key={notice.id}
                    {...staggeredFade(i)}
                    className="bg-noble-light rounded-xl p-5 border-l-4 border-noble-blue"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">{notice.type}</span>
                      <span className="text-xs text-noble-dark/40">{notice.date}</span>
                    </div>
                    <h4 className="font-heading font-bold text-noble-dark text-sm mb-1">{notice.title}</h4>
                    <p className="text-noble-dark/60 text-sm">{notice.desc}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6">
                <Link href="/notices" className="text-noble-blue font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all">
                  View All Notices <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-noble-light rounded-xl p-6 lg:p-8 border border-gray-200">
                <span className="section-subtitle">Quick Inquiry</span>
                <h3 className="font-heading text-2xl font-bold text-noble-dark mb-2">Send an Enquiry</h3>
                <p className="text-noble-dark/60 text-sm mb-6">Fill the form and our team will contact you.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Stay Ahead" title="Upcoming Events" desc="Mark your calendar for our upcoming academic events and activities." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { date: '15 July 2026', title: 'Career Guidance Seminar', desc: 'Expert-led session to help students explore academic and career pathways after school education.' },
              { date: '20 July 2026', title: 'Parent Interaction Session', desc: 'An interactive session for parents to discuss student progress, learning strategies, and academic planning.' },
              { date: '28 July 2026', title: 'Academic Excellence Workshop', desc: 'Workshop focused on effective study techniques, time management, and exam preparation strategies.' },
              { date: '5 August 2026', title: 'Revision Program For Final Exams', desc: 'Intensive revision program covering key topics and practice sessions for upcoming final examinations.' },
            ].map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-noble-light rounded-2xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="text-noble-blue text-sm font-bold mb-3">{event.date}</div>
                <h3 className="font-heading font-bold text-noble-dark mb-2">{event.title}</h3>
                <p className="text-noble-dark/60 text-sm leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 lg:py-28 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Join Us" title="Simple Admission Process" desc="Getting started with coaching at Labbdhis Academy is easy." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Inquiry', desc: 'Fill the online inquiry form to get started.' },
              { step: '02', title: 'Counseling Session', desc: 'Free academic counseling with our team.' },
              { step: '03', title: 'Enrollment', desc: 'Complete admission formalities and join your program.' },
              { step: '04', title: 'Begin Learning', desc: 'Start your academic journey with Labbdhis Academy.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...staggeredFade(i)}
                className="text-center relative"
              >
                {i < 3 && <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px border-t-2 border-dashed border-noble-blue/20" />}
                <div className="w-16 h-16 bg-noble-blue rounded-xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-noble-blue/20">
                  <span className="font-heading text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-heading font-bold text-noble-dark mb-2">{item.title}</h3>
                <p className="text-noble-dark/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary text-base px-10 py-4">
              Enquire Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="section-subtitle">Get In Touch</span>
              <h2 className="section-heading mb-6">Contact <span className="text-noble-blue">Labbdhis Academy</span></h2>
              <p className="text-noble-dark/60 text-lg mb-8">
                Have questions? We&apos;d love to hear from you. Reach out to us and our team will assist you.
              </p>
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4 p-4 bg-noble-light rounded-xl">
                  <div className="w-12 h-12 bg-noble-blue/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-noble-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-noble-dark/40 uppercase tracking-wider">Phone</p>
                    <p className="font-heading font-bold text-noble-dark text-lg">Coming Soon</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-noble-light rounded-xl">
                  <div className="w-12 h-12 bg-noble-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-noble-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-noble-dark/40 uppercase tracking-wider">Address</p>
                    <p className="font-heading font-bold text-noble-dark">Near Shreyas Cinema, LBS Marg, Ghatkopar West, Mumbai, Maharashtra 400086</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-outline">Send Inquiry</Link>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-[24px] shadow-lg overflow-hidden h-full flex flex-col">
                <div className="w-full h-[350px] lg:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps?q=Shreyas+Cinema+LBS+Marg+Ghatkopar+West+Mumbai&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Labbdhis Academy Location"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-noble-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-noble-dark">Labbdhis Academy</p>
                      <p className="text-noble-dark/60 text-sm">Near Shreyas Cinema, LBS Marg, Ghatkopar West, Mumbai, Maharashtra 400086</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-noble-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left hover:bg-noble-blue/5 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-heading font-semibold text-noble-dark pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-noble-blue shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 lg:px-6 pb-5 lg:pb-6"
                  >
                    <p className="text-noble-dark/60 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-noble-blue font-semibold text-sm hover:underline inline-flex items-center gap-1">
              View All FAQs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-noble-blue to-noble-blue-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Begin Your<br /><span className="text-noble-accent">Academic Journey?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join Labbdhis Academy and build strong foundations for academic success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-noble-blue px-8 py-4 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-xl"
              >
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-white/50 text-sm">
              <MapPin className="w-4 h-4" /> Ghatkopar West, Mumbai, Maharashtra
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
