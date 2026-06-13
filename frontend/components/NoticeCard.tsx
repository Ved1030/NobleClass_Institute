"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, ExternalLink } from 'lucide-react';

interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
  link?: string;
}

interface NoticeCardProps {
  notice: Notice;
  index?: number;
}

const typeColors: Record<string, string> = {
  'Exam': 'bg-purple-50 text-purple-600',
  'Holiday': 'bg-green-50 text-green-600',
  'Event': 'bg-orange-50 text-orange-600',
  'Result': 'bg-blue-50 text-blue-600',
  'Admission': 'bg-cyan-50 text-cyan-600',
  'General': 'bg-navy-50 text-navy-600',
};

const NoticeCard: React.FC<NoticeCardProps> = ({ notice, index = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className="group bg-white rounded-2xl border border-noble-blue/10 p-5 hover:shadow-md hover:border-noble-blue/30 transition-all duration-300 flex items-start gap-4">
      <div className="w-10 h-10 bg-noble-blue/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-noble-blue group-hover:text-white transition-all duration-300"><Bell className="w-4 h-4" /></div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center flex-wrap gap-2 mb-1">
          <h3 className="font-heading font-semibold text-noble-navy text-sm">{notice.title}</h3>
          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeColors[notice.type] || 'bg-noble-light text-noble-navy/60'}`}>{notice.type}</span>
        </div>
        <p className="text-noble-navy/60 text-xs mb-2">{notice.description}</p>
        <div className="flex items-center gap-3 text-noble-navy/40 text-[11px]">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{notice.date}</span>
          {notice.link && <a href={notice.link} className="flex items-center gap-1 text-noble-blue hover:underline"><ExternalLink className="w-3 h-3" />View Details</a>}
        </div>
      </div>
    </motion.div>
  );
};

export default NoticeCard;
