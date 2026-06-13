"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: string;
  duration: string;
  students: string;
  features: string[];
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  '\u{1F4D0}': <BookOpen className="w-6 h-6" />,
  '\u{1F52C}': <BookOpen className="w-6 h-6" />,
  '\u{1F4BB}': <BookOpen className="w-6 h-6" />,
  '\u{1F4CA}': <BookOpen className="w-6 h-6" />,
  '\u{1F4D6}': <BookOpen className="w-6 h-6" />,
  '\u{1F3AF}': <BookOpen className="w-6 h-6" />,
};

const CourseCard: React.FC<CourseCardProps> = ({ course, index = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group bg-white rounded-2xl border border-noble-blue/10 p-6 hover:shadow-lg hover:shadow-noble-blue/5 hover:border-noble-blue/30 transition-all duration-300">
      <div className="w-12 h-12 bg-noble-blue/10 rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:bg-noble-blue group-hover:text-white transition-all duration-300">{iconMap[course.icon] || '\u{1F4DA}'}</div>
      <h3 className="font-heading font-bold text-noble-navy text-lg mb-2">{course.title}</h3>
      <p className="text-noble-navy/60 text-sm mb-4">{course.description}</p>
      <div className="flex items-center gap-4 mb-4 text-xs text-noble-navy/50">
        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{course.duration}</span>
        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{course.students}</span>
      </div>
      <ul className="space-y-1.5 mb-5">
        {course.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-noble-navy/60"><div className="w-1 h-1 bg-noble-blue rounded-full" />{f}</li>
        ))}
      </ul>
      <Link href="/contact" className="flex items-center gap-1.5 text-noble-blue text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">Enquire Now<ArrowRight className="w-3.5 h-3.5" /></Link>
    </motion.div>
  );
};

export default CourseCard;
