"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, Star, GraduationCap, HeartPulse } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedCounter from '@/components/AnimatedCounter';
import dynamic from 'next/dynamic';

const ResultsChart = dynamic(() => import('@/components/ResultsChart'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-3xl border border-noble-blue/10 p-8 shadow-lg">
      <div className="h-[350px] animate-pulse bg-noble-blue/5 rounded-xl" />
    </div>
  ),
});

const toppers2025 = [
  { name: 'Rahul Mehta', score: '97.2 %ile', exam: 'JEE Mains 2025', rank: 'AIR 1240', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', subject: 'PCM' },
  { name: 'Priya Sharma', score: '680/720', exam: 'NEET 2025', rank: 'AIR 890', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face', subject: 'PCB' },
  { name: 'Amit Joshi', score: '99.56 %ile', exam: 'MHT-CET 2025', rank: 'Top 100 State', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', subject: 'PCM' },
  { name: 'Sneha Patil', score: '720/720', exam: 'NEET 2025', rank: 'AIR 234', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', subject: 'PCB' },
  { name: 'Rohan Desai', score: '96.8 %ile', exam: 'JEE Mains 2025', rank: 'AIR 3500', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', subject: 'PCM' },
  { name: 'Kavya Nair', score: '99.12 %ile', exam: 'MHT-CET 2025', rank: 'Top 500', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', subject: 'PCB' },
];

const performanceData = [
  { year: '2020', ssc: 82, jee: 78, neet: 75 },
  { year: '2021', ssc: 86, jee: 82, neet: 80 },
  { year: '2022', ssc: 90, jee: 85, neet: 83 },
  { year: '2023', ssc: 93, jee: 89, neet: 87 },
  { year: '2024', ssc: 95, jee: 92, neet: 90 },
  { year: '2025', ssc: 96, jee: 95, neet: 93 },
];

const stats = [
  { label: 'JEE Qualifiers', value: 100, suffix: '+', icon: GraduationCap, color: '#C62828' },
  { label: 'NEET Qualifiers', value: 75, suffix: '+', icon: HeartPulse, color: '#16A34A' },
  { label: 'MHT-CET Selections', value: 120, suffix: '+', icon: TrendingUp, color: '#005DAA' },
  { label: 'Success Rate', value: 95, suffix: '%', icon: Trophy, color: '#F4B400' },
];

const Results: React.FC = () => {
  return (
    <>
          <PageHero title="Results & Achievements" subtitle="A legacy of academic excellence — our students consistently achieve excellent results in their examinations." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Results' }]} />

      {/* Achievement badge */}
      <div className="bg-[#F8FAFC] pt-16 pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <Trophy className="w-5 h-5 text-noble-blue" />
            <span className="font-semibold text-noble-blue/70 text-base tracking-wide">Academic Excellence Since 2023</span>
            <div className="flex-1 h-px bg-[#E5E7EB] max-w-[120px] hidden md:block" />
          </div>
        </div>
      </div>

      {/* Premium Stat Cards */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ label, value, suffix, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: `${color}12` }}
                >
                  <Icon className="w-7 h-7" style={{ color }} />
                </div>
                <div className="font-heading text-[56px] font-extrabold leading-none text-[#111827]">
                  <AnimatedCounter end={value} suffix={suffix} />
                </div>
                <p className="text-lg font-medium mt-2" style={{ color: '#64748B' }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-[0.2em]">Hall of Fame</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight text-[#111827]">Toppers 2025</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#6B7280]">Celebrating the brilliant minds who made VS Tutorials proud.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers2025.map((topper, i) => {
              const rankColors = ['#F4B400', '#9CA3AF', '#CD7F32', '#2563EB', '#2563EB', '#2563EB'];
              return (
                <motion.div key={topper.name} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 text-center shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative inline-block mb-4">
                    <Image src={topper.image} alt={topper.name} width={100} height={100} className="w-[100px] h-[100px] rounded-full object-cover border-[3px] mx-auto" style={{ borderColor: rankColors[i] }} />
                    {i === 0 && (
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: rankColors[i] }}>
                        <Trophy className="w-3.5 h-3.5 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-[#111827] text-lg mb-1">{topper.name}</h3>
                  <div className="font-bold text-[42px] leading-tight mb-1" style={{ color: '#005DAA' }}>{topper.score}</div>
                  <p className="text-[#6B7280] text-sm mb-2">{topper.exam}</p>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold text-white" style={{ backgroundColor: rankColors[i] }}>{topper.rank}</span>
                  <div className="mt-3 text-[#6B7280]/40 text-xs">{topper.subject}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14"><span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Year on Year</span><h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Performance Trend</h2><p className="text-noble-navy/60 max-w-2xl mx-auto">Consistent improvement in student performance across all major examinations.</p></div>
          <ResultsChart data={performanceData} />
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-[0.2em]">Achievements</span>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mt-3 mb-4 leading-tight text-[#111827]">Notable Achievements</h2>
            <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#6B7280]">Celebrating our students' outstanding accomplishments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ title: '15+ Students', subtitle: '95%ile+ in JEE Main 2025', icon: Star }, { title: '8 Students', subtitle: 'Cleared JEE Advanced 2025', icon: Trophy }, { title: '10+ Students', subtitle: 'NEET Score 650+', icon: Award }, { title: '95%', subtitle: 'MHT-CET Qualifying Rate (2025)', icon: TrendingUp }].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <item.icon className="w-8 h-8 text-noble-blue mx-auto mb-3" />
                <div className="font-heading text-2xl font-bold text-[#111827] mb-1">{item.title}</div>
                <p className="text-[#6B7280] text-sm">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Results;
