"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const stories = [
  { name: 'Arjun M.', role: 'Student', content: 'The teachers explain concepts very clearly and always encourage students to improve. The regular assessments and doubt-clearing sessions helped me gain confidence in my studies.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', result: 'Secured 92% in Std 7th Exams' },
  { name: 'Priya S.', role: 'Student', content: 'The learning environment at the academy is supportive and helps build confidence. The structured teaching approach and personalized attention have made a huge difference in my academic performance.', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', result: 'Improved from 65% to 88% in One Year' },
  { name: 'Mrs. Sharma', role: 'Parent', content: 'Dedicated faculty and structured teaching methods make learning effective. The academy provides personal attention and regular updates regarding student progress, which gives us great confidence.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', result: 'My child\'s confidence and grades have improved significantly' },
];

const SuccessStories: React.FC = () => {
  return (
    <>
      <PageHero title="Success Stories" subtitle="Read inspiring stories from our students about their journey with Labbdhis Academy." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Success Stories' }]} />
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
