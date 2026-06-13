"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Quote } from 'lucide-react';
import Image from 'next/image';

interface FacultyMember {
  id: number;
  name: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
  quote: string;
  achievements?: string[];
}

interface FacultyCardProps {
  member: FacultyMember;
  index?: number;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ member, index = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-6 lg:p-8 hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start gap-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-noble-blue to-noble-navy flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-lg shadow-noble-blue/20">
          {member.image ? (
            <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full rounded-2xl object-cover" />
          ) : (
            member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-heading font-bold text-noble-navy text-lg">{member.name}</h3>
            <span className="px-2.5 py-0.5 bg-noble-blue/10 text-noble-blue text-[10px] font-semibold rounded-full">{member.subject}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-noble-navy/50 mb-3">
            <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{member.qualification}</span>
            <span className="flex items-center gap-1"><Award className="w-3 h-3" />{member.experience}</span>
          </div>
          <div className="relative pl-5 border-l-2 border-noble-blue/20">
            <Quote className="absolute -left-1 -top-0.5 w-4 h-4 text-noble-blue/30" />
            <p className="text-noble-navy/60 text-sm italic">{member.quote}</p>
          </div>
          {member.achievements && member.achievements.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {member.achievements.map((a, i) => (
                <span key={i} className="flex items-center gap-1 text-[10px] text-noble-navy/50 bg-noble-light px-2 py-1 rounded-lg"><BookOpen className="w-2.5 h-2.5" />{a}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
