"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Mail } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const facultyList = [
  { name: 'Prof. Rajesh Kumar', subject: 'Mathematics', qualification: 'M.Sc. Mathematics, IIT Bombay', experience: '20 years', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face', achievements: ['IIT Bombay Alumni', '500+ students mentored', 'Author of 3 textbooks', 'Best Teacher Award 2022'], bio: 'Prof. Kumar is the founder of Noble Classes and brings 20 years of teaching experience. His unique approach to mathematics makes complex concepts simple and enjoyable.', rating: 5.0, students: '500+' },
  { name: 'Dr. Sunita Verma', subject: 'Chemistry', qualification: 'Ph.D. Chemistry, Mumbai University', experience: '15 years', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face', achievements: ['PhD from Mumbai University', 'NEET specialist', '300+ NEET qualifiers', 'Research publications'], bio: 'Dr. Verma specializes in making chemistry accessible and interesting. Her NEET-focused teaching has helped hundreds of students achieve their medical dreams.', rating: 4.9, students: '400+' },
  { name: 'Mr. Amit Joshi', subject: 'Physics', qualification: 'M.Sc. Physics, VJTI Mumbai', experience: '12 years', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', achievements: ['JEE Advanced qualifier', 'Physics Olympiad coach', '200+ JEE qualifiers', 'Innovative teaching methods'], bio: 'Mr. Joshi\'s passion for physics is infectious. His problem-solving approach and JEE-focused teaching have produced some of Noble Classes\' best results.', rating: 4.9, students: '350+' },
  { name: 'Ms. Priya Desai', subject: 'Biology', qualification: 'M.Sc. Zoology, Mumbai University', experience: '10 years', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face', achievements: ['NEET Biology specialist', '150+ NEET qualifiers', 'Diagram-based teaching', 'Student favorite'], bio: 'Ms. Desai\'s visual and diagram-based approach to biology has helped students master complex biological concepts with ease.', rating: 4.8, students: '280+' },
  { name: 'Mr. Suresh Patil', subject: 'Accountancy', qualification: 'M.Com, CA Inter, Mumbai University', experience: '14 years', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', achievements: ['CA Inter qualified', 'Commerce topper coach', '100+ CA Foundation qualifiers', 'Practical teaching approach'], bio: 'Mr. Patil brings real-world accounting experience to the classroom, making commerce subjects practical and career-relevant.', rating: 4.8, students: '250+' },
  { name: 'Ms. Kavita Sharma', subject: 'English', qualification: 'M.A. English Literature, Delhi University', experience: '11 years', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', achievements: ['Delhi University Gold Medalist', 'Communication skills expert', 'Creative writing coach', 'Grammar specialist'], bio: 'Ms. Sharma\'s comprehensive approach to English covers grammar, literature, and communication skills, ensuring students excel in all aspects.', rating: 4.7, students: '400+' },
];

const Faculty: React.FC = () => {
  return (
    <>
      <PageHero title="Our Expert Faculty" subtitle="Learn from the best — IIT alumni, PhD holders, and seasoned educators dedicated to your academic success." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Faculty' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">The Team</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Meet Our Faculty</h2>
            <p className="text-noble-navy/60 max-w-2xl mx-auto">Each faculty member at Noble Classes is carefully selected for their subject expertise, teaching ability, and dedication to student success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyList.map((faculty, i) => (
              <motion.div key={faculty.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group bg-white rounded-2xl border border-noble-blue/10 overflow-hidden hover:shadow-xl hover:shadow-noble-blue/8 hover:-translate-y-1 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image src={faculty.image} alt={faculty.name} width={400} height={280} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-noble-navy/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-noble-blue text-white text-xs font-semibold px-3 py-1 rounded-full">{faculty.subject}</span>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1"><Star className="w-3 h-3 text-noble-gold fill-noble-gold" /><span className="text-white text-xs font-semibold">{faculty.rating}</span></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-noble-navy mb-1">{faculty.name}</h3>
                  <p className="text-noble-blue text-sm font-medium mb-1">{faculty.qualification}</p>
                  <div className="flex items-center gap-4 text-xs text-noble-navy/50 mb-4">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{faculty.experience}</span>
                    <span className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5" />{faculty.students} students</span>
                  </div>
                  <p className="text-noble-navy/60 text-sm leading-relaxed mb-4">{faculty.bio}</p>
                  <div className="space-y-1.5 mb-4">{faculty.achievements.slice(0, 2).map((a) => <div key={a} className="flex items-center gap-2 text-xs text-noble-navy/60"><Award className="w-3.5 h-3.5 text-noble-gold shrink-0" />{a}</div>)}</div>
                  <a href="mailto:info@nobleclasses.in" className="flex items-center gap-2 text-noble-blue text-sm font-medium hover:text-noble-navy transition-colors"><Mail className="w-4 h-4" /> Contact Faculty</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-noble-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Our Approach</span>
          <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-6">Teaching Philosophy</h2>
          <p className="text-noble-navy/70 text-lg leading-relaxed mb-8">At Noble Classes, we believe that great teaching goes beyond delivering content. Our faculty focuses on building conceptual understanding, developing problem-solving skills, and nurturing the confidence that students need to excel in any examination.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[{ title: 'Concept First', desc: 'We ensure every student understands the "why" before the "how".' }, { title: 'Practice Driven', desc: 'Regular tests and practice sessions to reinforce learning.' }, { title: 'Student Centered', desc: 'Every student\'s pace and learning style is respected and accommodated.' }].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-noble-blue/10">
                <h3 className="font-heading font-bold text-noble-navy mb-2">{item.title}</h3>
                <p className="text-noble-navy/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Faculty;
