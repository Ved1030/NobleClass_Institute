"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  class: string;
  image: string;
  content: string;
  rating: number;
  year: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-6 lg:p-8 relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-noble-blue/10" />
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-noble-gold fill-noble-gold' : 'text-noble-navy/10'}`} />
      )}
      </div>
      <p className="text-noble-navy/70 text-sm leading-relaxed mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-noble-blue to-noble-navy flex items-center justify-center text-white font-bold text-sm shrink-0">{testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</div>
        <div>
          <h4 className="font-heading font-bold text-noble-navy text-sm">{testimonial.name}</h4>
          <p className="text-noble-navy/40 text-xs">{testimonial.class} &middot; {testimonial.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
