"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const stories = [
  { name: 'Rahul Mehta', role: 'Student', content: 'I had a great experience with VS Tutorials. The management and teaching staff are supportive and truly focus on each student\'s growth. Their guidance helped me score well in my examinations.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', result: 'Academic Excellence Award' },
  { name: 'Priya Sharma', role: 'Student', content: 'The teaching is well-organized and highly effective. Regular tests and doubt-solving sessions improved my confidence and overall performance.', rating: 5, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face', result: 'Top Performer Award' },
  { name: 'Amit Joshi', role: 'Student', content: 'Supportive teachers, clear explanations, and helpful study material make VS Tutorials an excellent place for focused learning.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face', result: 'Consistent Improvement' },
  { name: 'Sneha Patil', role: 'Student', content: 'The teaching methodology at VS Tutorials helped me understand complex concepts easily. Regular assessments and feedback kept me on track.', rating: 5, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face', result: 'Outstanding Academic Performance' },
  { name: 'Rohan Desai', role: 'Student', content: 'VS Tutorials provided me with the guidance and support I needed to achieve my academic goals. The faculty is dedicated and approachable.', rating: 5, image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face', result: 'Best Improvement Award' },
  { name: 'Kavya Nair', role: 'Student', content: 'I am grateful to the teachers at VS Tutorials for their dedication and support. The study material and regular assessments were very helpful.', rating: 5, image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face', result: 'Academic Excellence Award' },
];

const SuccessStories: React.FC = () => {
  return (
    <>
      <PageHero title="Success Stories" subtitle="Read inspiring stories from our students about their journey with VS Tutorials." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Success Stories' }]} />
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
