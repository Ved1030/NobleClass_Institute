"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const stories = [
  { name: 'Priya Sharma', role: 'Class 10 Student – 95.6% in Boards', content: 'Noble Classes transformed my approach to studying. The faculty is incredibly supportive and the study material is top-notch. I scored 95.6% in my boards!', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', result: 'SSC Board: 95.6% | Rank 3 in School' },
  { name: 'Rahul Mehta', role: 'Class 12 Science – JEE Aspirant', content: 'The Physics and Chemistry faculty here are exceptional. Their teaching methodology helped me crack JEE with a great rank.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', result: 'JEE Mains: 97.2 Percentile' },
  { name: 'Anita Patel', role: 'Parent of Class 9 Student', content: 'As a parent, I am extremely satisfied with Noble Classes. The regular parent-teacher meetings and progress reports keep us well informed.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', result: 'Child improved from 72% to 91%' },
  { name: 'Arjun Singh', role: 'NEET 2025 Qualifier', content: 'The NEET coaching at Noble Classes is outstanding. The mock test series and doubt-clearing sessions were incredibly helpful.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', result: 'NEET 2025: AIR 2340' },
  { name: 'Sneha Gupta', role: 'Class 12 Commerce', content: 'The commerce faculty made subjects like accountancy and economics so easy to understand. Their practical approach is amazing.', rating: 5, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', result: 'HSC Commerce: 94.2%' },
  { name: 'Vikram Desai', role: 'Parent of Class 10 Student', content: 'My son improved from 65% to 92% in one year at Noble Classes. The teachers are dedicated and truly care about the students.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', result: 'Improved from 65% to 92%' },
];

const SuccessStories: React.FC = () => {
  return (
    <>
      <PageHero title="Success Stories" subtitle="Read inspiring stories from our students and parents about their journey with Noble Classes." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Success Stories' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <motion.div key={story.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-8 hover:shadow-lg hover:shadow-noble-blue/8 hover:-translate-y-1 transition-all duration-300 relative">
                <Quote className="w-8 h-8 text-noble-blue/15 absolute top-6 right-6" />
                <div className="flex items-center gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < story.rating ? 'text-noble-gold fill-noble-gold' : 'text-noble-navy/20'}`} />)}</div>
                <p className="text-noble-navy/70 text-sm leading-relaxed mb-6 italic">"{story.content}"</p>
                {story.result && <div className="bg-noble-blue/5 rounded-xl px-4 py-2.5 mb-5 border border-noble-blue/10"><span className="text-noble-blue text-xs font-semibold">{story.result}</span></div>}
                <div className="flex items-center gap-3">
                  <Image src={story.image} alt={story.name} width={44} height={44} className="w-11 h-11 rounded-full object-cover border-2 border-noble-blue/20" />
                  <div><p className="font-heading font-semibold text-noble-navy text-sm">{story.name}</p><p className="text-noble-navy/50 text-xs">{story.role}</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default SuccessStories;
