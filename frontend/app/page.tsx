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
  { label: 'Students Enrolled', value: 200, suffix: '+', icon: Users },
  { label: 'Years Of Excellence', value: 3, suffix: '+', icon: Award },
  { label: 'Success Rate', value: 92, suffix: '%', icon: TrendingUp },
  { label: 'Expert Faculty', value: 8, suffix: '+', icon: BookOpen },
];

const coursesData: Record<string, any[]> = {
  'JEE': [
    { icon: Target, name: 'JEE Main Program', badge: 'POPULAR', tag: 'JEE', color: '#C62828', desc: 'Comprehensive preparation for JEE Main with conceptual clarity, problem-solving techniques, and extensive mock tests.', subjects: ['Physics', 'Chemistry', 'Mathematics'], stats: { days: '6 Days/Week', faculty: 'IIT Alumni', material: 'Adv. Problem Sets' } },
    { icon: Target, name: 'JEE Advanced Program', badge: 'JEE SPECIAL', tag: 'JEE', color: '#C62828', desc: 'Rigorous IIT-JEE Advanced coaching with advanced problem-solving, PYQ analysis, and mock tests.', subjects: ['Physics', 'Chemistry', 'Mathematics'], stats: { days: '6 Days/Week', faculty: 'IIT Alumni', material: 'Adv. Problem Sets' } },
    { icon: Target, name: 'Crash Course JEE', badge: 'TOP PICK', tag: 'JEE', color: '#C62828', desc: 'Intensive revision program for JEE Main & Advanced with focused topic-wise sessions.', subjects: ['Physics', 'Chemistry', 'Mathematics'], stats: { days: '6 Days/Week', faculty: 'Senior Faculty', material: 'Revision Kit' } },
    { icon: Target, name: 'JEE + Board Combo', badge: 'BEST RESULTS', tag: 'JEE', color: '#C62828', desc: 'Integrated program covering XII board exam and JEE preparation simultaneously.', subjects: ['Physics', 'Chemistry', 'Mathematics'], stats: { days: '6 Days/Week', faculty: 'IIT Alumni', material: 'Combo Kit' } },
  ],
  'NEET': [
    { icon: HeartPulse, name: 'NEET UG Program', badge: 'NEET SPECIAL', tag: 'NEET', color: '#16A34A', desc: 'Comprehensive NEET coaching with focus on biology, physics and chemistry for medical entrance.', subjects: ['Biology', 'Physics', 'Chemistry'], stats: { days: '6 Days/Week', faculty: 'Medical Experts', material: 'NEET Q. Bank' } },
    { icon: HeartPulse, name: 'NEET Crash Course', badge: 'TOP PICK', tag: 'NEET', color: '#16A34A', desc: 'Fast-track revision program for NEET UG with topic-wise tests and doubt sessions.', subjects: ['Biology', 'Physics', 'Chemistry'], stats: { days: '6 Days/Week', faculty: 'Medical Experts', material: 'Revision Kit' } },
    { icon: HeartPulse, name: 'NEET + Board Combo', badge: 'BEST RESULTS', tag: 'NEET', color: '#16A34A', desc: 'Dual preparation for XII boards and NEET with integrated curriculum.', subjects: ['Biology', 'Physics', 'Chemistry'], stats: { days: '6 Days/Week', faculty: 'Senior Faculty', material: 'Comprehensive Kit' } },
    { icon: HeartPulse, name: 'Biology Specialization', badge: 'POPULAR', tag: 'NEET', color: '#16A34A', desc: 'In-depth biology coaching for NEET with diagram-based learning and mock tests.', subjects: ['Botany', 'Zoology', 'Genetics'], stats: { days: '5 Days/Week', faculty: 'PhD Faculty', material: 'Bio Manual' } },
  ],
  'MHT-CET + Science': [
    { icon: GraduationCap, name: 'MHT-CET Program', badge: 'POPULAR', tag: 'CET', color: '#005DAA', desc: 'Focused preparation for MHT-CET with state board syllabus alignment.', subjects: ['Physics', 'Chemistry', 'Mathematics'], stats: { days: '6 Days/Week', faculty: 'Expert Faculty', material: 'CET Kit' } },
    { icon: GraduationCap, name: 'XI Science', badge: 'POPULAR', tag: 'Science', color: '#005DAA', desc: 'PCB/PCM streams with lab-based learning for board and competitive exams.', subjects: ['Physics', 'Chemistry', 'Biology/Maths'], stats: { days: '6 Days/Week', faculty: 'PhD Faculty', material: 'Lab Manuals' } },
    { icon: GraduationCap, name: 'XII Science', badge: 'TOP PICK', tag: 'Science', color: '#005DAA', desc: 'Board-aligned curriculum with simultaneous competitive exam preparation.', subjects: ['Physics', 'Chemistry', 'Biology/Maths'], stats: { days: '6 Days/Week', faculty: 'Senior Faculty', material: 'Board Prep Kit' } },
    { icon: GraduationCap, name: 'Foundation Program', badge: 'NEW', tag: 'Science', color: '#005DAA', desc: 'Early preparation for IX-X students aiming for JEE/NEET/MHT-CET with strong fundamentals.', subjects: ['Mathematics', 'Science', 'English'], stats: { days: '4 Days/Week', faculty: 'Expert Faculty', material: 'Practice Sets' } },
  ],
};

const faculty = [
  { id: 1, name: 'Prof. Rajesh Kumar', subject: 'Mathematics', qualification: 'M.Sc. Mathematics, IIT Bombay', experience: '15 years', initials: 'RK', achievements: ['IIT Bombay Alumni', '500+ students mentored', 'Author of 3 textbooks'] },
  { id: 2, name: 'Dr. Sunita Verma', subject: 'Chemistry', qualification: 'Ph.D. Chemistry, Mumbai University', experience: '12 years', initials: 'SV', achievements: ['PhD from Mumbai University', 'NEET specialist', '300+ NEET qualifiers'] },
  { id: 3, name: 'Mr. Amit Joshi', subject: 'Physics', qualification: 'M.Sc. Physics, VJTI Mumbai', experience: '10 years', initials: 'AJ', achievements: ['JEE Advanced qualifier', 'Physics Olympiad coach', '200+ JEE qualifiers'] },
  { id: 4, name: 'Prof. Sneha Kulkarni', subject: 'Biology', qualification: 'M.Sc. Biology, Pune University', experience: '11 years', initials: 'SK', achievements: ['Gold Medalist', 'NEET Biology expert', '400+ medical seats'] },
];

const toppers = [
  { name: 'Rahul Mehta', score: '97.2 %ile', exam: 'JEE Mains 2025', rank: 'AIR 1240', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face' },
  { name: 'Priya Sharma', score: '680/720', exam: 'NEET 2025', rank: 'AIR 890', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face' },
  { name: 'Amit Joshi', score: '99.56 %ile', exam: 'MHT-CET 2025', rank: 'Top 100', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
  { name: 'Sneha Patil', score: '720/720', exam: 'NEET 2025', rank: 'AIR 234', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
];

const testimonials = [
  { id: 1, name: 'Rahul Mehta', label: 'Student, JEE Aspirant', content: 'I had a great experience with VS Tutorials. The management and teaching staff are supportive and truly focus on each student\'s growth. Their guidance helped me score well in my examinations.', rating: 5, type: 'student', initials: 'RM' },
  { id: 2, name: 'Priya Sharma', label: 'Student, NEET Aspirant', content: 'The teaching is well-organized and highly effective. Regular tests and doubt-solving sessions improved my confidence and overall performance.', rating: 5, type: 'student', initials: 'PS' },
  { id: 3, name: 'Amit Joshi', label: 'Student, MHT-CET', content: 'Supportive teachers, clear explanations, and helpful study material make VS Tutorials an excellent place for focused learning.', rating: 5, type: 'student', initials: 'AJ' },
  { id: 4, name: 'Sneha Patil', label: 'Student, Science', content: 'The teaching methodology at VS Tutorials helped me understand complex concepts easily. Regular assessments and feedback kept me on track throughout the year.', rating: 5, type: 'student', initials: 'SP' },
];

const notices = [
  { id: 1, title: 'New Batch Starting – June 2026', date: '15 May 2026', type: 'Admission', desc: 'Admissions open for the new batch starting June 2026. Limited seats available.' },
  { id: 2, title: 'Academic Year 2025-26 Results', date: '10 May 2026', type: 'Result', desc: 'Our students achieved excellent academic results with notable improvements.' },
  { id: 3, title: 'Summer Crash Course', date: '5 May 2026', type: 'Batch', desc: 'Intensive 45-day crash course covering complete syllabus with daily tests.' },
];

const achievements = [
  { year: '2025', title: 'Strong Academic Results', desc: 'Students achieved notable improvements in board and competitive exams', icon: Trophy },
  { year: '2024', title: 'Growing Student Community', desc: 'Trusted by 150+ students and parents in Ghatkopar East', icon: Target },
  { year: '2023', title: 'Quality Education Recognized', desc: 'Established as a trusted coaching institute in the community', icon: Award },
];

const faqs = [
  { q: 'What is the batch size at VS Tutorials?', a: 'We maintain a maximum of 25 students per batch to ensure personalized attention and quality learning.' },
  { q: 'Do you provide study material?', a: 'Yes, we provide comprehensive, exam-focused study material prepared by our expert faculty at no extra cost.' },
  { q: 'Are there any scholarships available?', a: 'Yes, we offer merit-based scholarships for students who score above 90% in their previous exams.' },
  { q: 'What are the timings for batches?', a: 'We offer morning (7-9 AM), afternoon (2-4 PM), and evening (5-7 PM) batches to suit different schedules.' },
];

const whyUs = [
  { title: 'Experienced Faculty', desc: 'Qualified teachers with years of experience in guiding students.' },
  { title: 'Concept-Based Learning', desc: 'Focus on building strong fundamentals and conceptual clarity.' },
  { title: 'Small Batch Size', desc: 'Maximum 25 students per batch for personalized attention.' },
  { title: 'Regular Assessments', desc: 'Weekly tests, monthly assessments, and full mock exams.' },
  { title: 'Quality Study Material', desc: 'Comprehensive, exam-focused study material prepared by experts.' },
  { title: 'Student Progress Tracking', desc: 'Regular feedback and progress updates for students and parents.' },
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
  const [activeTab, setActiveTab] = useState('JEE');

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
                  alt="VS Tutorials Coaching Classroom"
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
                { icon: Trophy, color: '#F4B400', value: '98%', label: 'Success Rate', delay: 0.2 },
                { icon: Users, color: '#2563EB', value: '5000+', label: 'Students', delay: 0.4 },
                { icon: TrendingUp, color: '#EF4444', value: 'Top', label: 'Coaching Institute', delay: 0.6 },
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
                    <p className="font-bold leading-none" style={{ fontSize: '22px', color: '#1E293B' }}>{card.value}</p>
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
                  Admissions Open For 2026-27
                </div>

                {/* Main Heading */}
                <h1 className="font-heading text-5xl lg:text-6xl xl:text-[64px] font-bold leading-[0.95] animate-slide-up" style={{ animationDelay: '0.15s', animationFillMode: 'backwards' }}>
                  <span className="text-noble-blue">VS</span>{" "}
                  <span style={{ color: '#C62828' }}>Tutorials</span>
                </h1>

                {/* Tagline */}
                <p className="font-heading text-3xl lg:text-4xl xl:text-[48px] leading-[1.1] font-medium mt-[20px] animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards', color: '#374151' }}>
                  Building Strong Concepts & Academic Excellence
                </p>

                {/* Description */}
                <p className="text-gray-600 text-lg lg:text-xl xl:text-[20px] leading-[1.8] mt-[28px] max-w-[540px] animate-slide-up" style={{ animationDelay: '0.25s', animationFillMode: 'backwards' }}>
                  VS Tutorials is a trusted coaching institute dedicated to helping students build strong concepts, improve confidence, and achieve excellent academic results with experienced teachers and regular assessments.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-5 mt-[36px] animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-10 h-[60px] rounded-lg font-bold text-base text-white hover:opacity-90 transition-all duration-200 shadow-lg shadow-red-600/20"
                    style={{ backgroundColor: '#C62828' }}
                  >
                    Apply For Admission <ArrowRight className="w-5 h-5" />
                  </Link>
              <a
                href="tel:+919769113425"
                    className="inline-flex items-center gap-2 border-2 border-noble-blue text-noble-blue px-10 h-[60px] rounded-lg font-semibold text-base bg-white hover:bg-noble-blue hover:text-white transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" /> Call Now
                  </a>
                </div>

                {/* Trust Strip – single horizontal component */}
                <div className="mt-[36px] animate-slide-up" style={{ animationDelay: '0.35s', animationFillMode: 'backwards' }}>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center divide-x divide-gray-100">
                    {[
                      { icon: Star, value: '4.9', label: 'Google Rating' },
                      { icon: Users, value: '200+', label: 'Students' },
                      { icon: Trophy, value: '3+', label: 'Years Experience' },
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

      {/* Stats Bar - premium full-width stats ribbon */}
      <section className="bg-noble-blue h-[140px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ label, value, suffix, icon: Icon }) => (
              <div key={label} className="flex items-center gap-4 justify-center">
                <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white/80 shrink-0" />
                <div>
                  <div className="font-heading text-xl lg:text-2xl font-bold text-white">
                    <AnimatedCounter end={value} suffix={suffix} />
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
              <span className="section-subtitle">About VS Tutorials</span>
              <h2 className="section-heading mb-6">Ghatkopar East&apos;s Trusted <span className="text-noble-blue">Coaching Institute</span></h2>
              <p className="text-noble-dark/60 text-lg leading-relaxed mb-6">
                VS Tutorials is a trusted coaching institute in Ghatkopar East dedicated to helping students build strong concepts, improve confidence, and achieve excellent academic results. With experienced teachers, regular assessments, and personalized attention, students receive complete guidance for academic success.
              </p>
              <p className="text-noble-dark/60 text-lg leading-relaxed mb-8">
                Our mission is to provide quality education that goes beyond textbooks — nurturing critical thinking, building character, and preparing students for academic excellence and success in life.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">Know More About VS Tutorials <ArrowRight className="w-4 h-4" /></Link>
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
            <p className="text-noble-dark/60 text-lg mt-4">Comprehensive programs designed for JEE, NEET, MHT-CET and Science students.</p>
          </motion.div>

          {/* Stream Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100">
              {['JEE', 'NEET', 'MHT-CET + Science'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-noble-blue text-white shadow-md shadow-noble-blue/20'
                      : 'text-noble-dark/50 hover:text-noble-dark'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Grid + Image */}
          <div className="flex gap-10 items-start">
            {/* Cards Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {coursesData[activeTab].map((course: any, i: number) => (
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
                          backgroundColor: course.badge === 'POPULAR' ? '#005DAA12' : course.badge === 'BEST RESULTS' || course.badge === 'TOP PICK' ? '#16A34A12' : '#C6282812',
                          color: course.badge === 'POPULAR' ? '#005DAA' : course.badge === 'BEST RESULTS' || course.badge === 'TOP PICK' ? '#16A34A' : '#C62828'
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
                  alt="Students studying at VS Tutorials"
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
          <SectionHeading subtitle="Meet The Team" title="Our Expert Faculty" desc="Learn from the best — IIT alumni, PhD holders, and seasoned educators dedicated to your success." />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((f, i) => (
              <motion.div
                key={f.id}
                {...staggeredFade(i)}
                className="bg-noble-light rounded-xl overflow-hidden border border-gray-200 hover:border-noble-blue/30 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-noble-blue to-noble-blue-dark flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="font-heading text-3xl font-bold text-white">{f.initials}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-noble-dark">{f.name}</h3>
                    <span className="px-2 py-0.5 bg-noble-blue/10 text-noble-blue text-[10px] font-semibold rounded">{f.subject}</span>
                  </div>
                  <p className="text-noble-dark/50 text-xs mb-1">{f.qualification}</p>
                  <p className="text-noble-blue text-xs font-semibold mb-3">{f.experience}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {f.achievements.map((a, j) => (
                      <span key={j} className="text-[10px] text-noble-dark/60 bg-white px-2 py-1 rounded border border-gray-100">{a}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faculty" className="btn-outline">Meet All Faculty <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-14 lg:mb-16">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-[0.2em]">Hall Of Fame</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight text-[#111827]">Our Toppers 2025</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#6B7280]">Celebrating the brilliant minds who made VS Tutorials proud.</p>
          </div>

          {/* Topper Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {toppers.map((topper, i) => {
              const rankColors = ['#F4B400', '#9CA3AF', '#CD7F32', '#2563EB'];
              return (
                <motion.div
                  key={topper.name}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative inline-block mb-4">
                    <Image src={topper.image} alt={topper.name} width={100} height={100} className="w-[100px] h-[100px] rounded-full object-cover border-[3px] mx-auto" style={{ borderColor: rankColors[i] }} />
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: rankColors[i] }}>
                        <Trophy className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-[#111827] mb-1">{topper.name}</h3>
                  <div className="font-bold text-[42px] leading-tight mb-1" style={{ color: '#005DAA' }}>{topper.score}</div>
                  <p className="text-[#6B7280] text-xs mb-2">{topper.exam}</p>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: rankColors[i] }}>{topper.rank}</span>
                </motion.div>
              );
            })}
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
              <h3 className="text-2xl lg:text-3xl font-bold mb-3">Want To Be Our Next Topper?</h3>
              <p className="text-white/80 text-lg mb-8">Join VS Tutorials Today.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 h-[56px] px-8 rounded-xl bg-white text-noble-blue font-bold text-base hover:bg-blue-50 transition-all duration-200 shadow-lg"
                >
                  Apply For Admission <ArrowRight className="w-5 h-5" />
                </Link>
                  <a
                    href="tel:+919769113425"
                    className="inline-flex items-center gap-2 h-[56px] px-8 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" /> Contact Us
                  </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Success Stories" title="What Our Community Says" desc="Real stories from real students who experienced the VS Tutorials difference." />
          <div className="grid md:grid-cols-2 gap-6">
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
                      <span className={`ml-2 px-2 py-0.5 rounded text-[10px] font-medium ${t.type === 'parent' ? 'bg-noble-secondary/10 text-noble-secondary' : 'bg-noble-blue/10 text-noble-blue'}`}>
                        {t.type === 'parent' ? 'Parent' : 'Student'}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/success-stories" className="btn-outline">Read More Stories <ArrowRight className="w-4 h-4" /></Link>
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
              <p className="text-noble-dark/60 mb-8">Stay informed about upcoming batches, exam schedules, results, and important announcements.</p>
              <div className="space-y-4">
                {notices.map((notice, i) => (
                  <motion.div
                    key={notice.id}
                    {...staggeredFade(i)}
                    className="bg-noble-light rounded-xl p-5 border-l-4 border-noble-blue"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        notice.type === 'Result' ? 'bg-green-100 text-green-700' :
                        notice.type === 'Admission' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>{notice.type}</span>
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
                <h3 className="font-heading text-2xl font-bold text-noble-dark mb-2">Get Free Counseling</h3>
                <p className="text-noble-dark/60 text-sm mb-6">Fill the form and our team will contact you within 24 hours.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-20 lg:py-28 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading subtitle="Join Us" title="Simple Admission Process" desc="Getting started at VS Tutorials is easy. Follow these simple steps to begin your journey." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Submit Inquiry', desc: 'Fill the online inquiry form or visit our center.' },
              { step: '02', title: 'Counseling Session', desc: 'Free academic counseling with our expert team.' },
              { step: '03', title: 'Diagnostic Test', desc: 'Optional assessment to identify learning gaps.' },
              { step: '04', title: 'Enrollment', desc: 'Complete admission formalities and join your batch.' },
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
            <Link href="/admissions" className="btn-primary text-base px-10 py-4">
              Start Admission Process <ArrowRight className="w-4 h-4" />
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
              <h2 className="section-heading mb-6">Contact <span className="text-noble-blue">VS Tutorials</span></h2>
              <p className="text-noble-dark/60 text-lg mb-8">
                Have questions? We&apos;d love to hear from you. Reach out to us and our academic counselors will assist you.
              </p>
              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4 p-4 bg-noble-light rounded-xl">
                  <div className="w-12 h-12 bg-noble-blue/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5 text-noble-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-noble-dark/40 uppercase tracking-wider">Phone</p>
                    <p className="font-heading font-bold text-noble-dark text-lg">+91 97691 13425</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-noble-light rounded-xl">
                  <div className="w-12 h-12 bg-noble-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-noble-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-noble-dark/40 uppercase tracking-wider">Address</p>
                    <p className="font-heading font-bold text-noble-dark">Shop No. 11, Ground Floor, Building No. 185, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar, Ghatkopar East, Mumbai - 400075</p>
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
                    src="https://www.google.com/maps?q=19.0850138,72.9131446&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VS Tutorials Location"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-noble-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-noble-dark">VS Tutorials</p>
                      <p className="text-noble-dark/60 text-sm">Shop No. 11, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar, Ghatkopar East, Mumbai 400075</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/VS+TUTORIALS/@19.0850138,72.9107628,18z/data=!4m10!1m2!2m1!1sShop+No.+11,+Ground+Floor,+Building+No.+185,+Drushti+Sapphire,+Opp.+Shivaji+Technical+School,+Gaurishankar+Wadi,+Pant+Nagar,+Ghatkopar+East,+Mumbai+-+400075!3m6!1s0x3be7c633b3536911:0x573755102c273c49!8m2!3d19.0850138!4d72.9131446!15sCpwBU2hvcCBOby4gMTEsIEdyb3VuZCBGbG9vciwgQnVpbGRpbmcgTm8uIDE4NSwgRHJ1c2h0aSBTYXBwaGlyZSwgT3BwLiBTaGl2YWppIFRlY2huaWNhbCBTY2hvb2wsIEdhdXJpc2hhbmthciBXYWRpLCBQYW50IE5hZ2FyLCBHaGF0a29wYXIgRWFzdCwgTXVtYmFpIC0gNDAwMDc1WpIBIo8Bc2hvcCBubyAxMSBncm91bmQgZmxvb3IgYnVpbGRpbmcgbm8gMTg1IGRydXNodGkgc2FwcGhpcmUgb3BwIHNoaXZhamkgdGVjaG5pY2FsIHNjaG9vbCBnYXVyaXNoYW5rYXIgd2FkaSBwYW50IG5hZ2FyIGdoYXRrb3BhciBlYXN0IG11bWJhaSA0MDAwNzWSARBlZHVjYXRpb25fY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJwR1ZGTlZNWEJUUlVaSlpEQjBkV05zWkRWTmVrSXlXbTFHTms1SFl4QULgAQD6AQQITBBD!16s%2Fg%2F11gbnk_bds?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-noble-blue text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-noble-blue-dark transition-all duration-200 shadow-md shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" /> Open In Google Maps
                  </a>
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
              Ready to Begin Your<br /><span className="text-noble-accent">Success Journey?</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Join 200+ students who have transformed their academic performance with VS Tutorials. Limited seats available for 2026-27.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-white text-noble-blue px-8 py-4 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all duration-200 shadow-xl"
              >
                Apply Now - Free Counseling <ArrowRight className="w-4 h-4" />
              </Link>
                  <a
                    href="tel:+919769113425"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-white/10 transition-all duration-200"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 mt-8 text-white/50 text-sm">
              <MapPin className="w-4 h-4" /> Shop No. 11, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar, Ghatkopar East, Mumbai - 400075
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
