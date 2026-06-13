"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop', alt: 'Modern classroom', category: 'Classroom', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop', alt: 'Students studying', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop', alt: 'Award ceremony', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop', alt: 'Science lab', category: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=300&fit=crop', alt: 'Group study session', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop', alt: 'Seminar hall', category: 'Events', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop', alt: 'Teacher explaining', category: 'Classroom' },
  { src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=300&fit=crop', alt: 'Student writing exam', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop', alt: 'Celebration event', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop', alt: 'Library reading', category: 'Classroom' },
];

const categories = ['All', 'Classroom', 'Students', 'Events'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<typeof galleryImages[0] | null>(null);
  const filtered = activeCategory === 'All' ? galleryImages : galleryImages.filter(img => img.category === activeCategory);

  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse into life at Noble Classes — classrooms, events, celebrations, and the moments that define our journey." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Gallery' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? 'bg-noble-blue text-white shadow-md shadow-noble-blue/20' : 'bg-noble-light text-noble-navy/70 hover:bg-noble-blue/10 hover:text-noble-blue'}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {filtered.map((img, i) => (
              <motion.div key={img.src} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ''}`} onClick={() => setLightboxImage(img)}>
                <Image src={img.src} alt={img.alt} width={600} height={400} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-noble-navy/0 group-hover:bg-noble-navy/40 transition-all duration-300 flex items-center justify-center"><ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" /></div>
                <div className="absolute bottom-3 left-3"><span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.category}</span></div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <AnimatePresence>
        {lightboxImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-noble-navy/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setLightboxImage(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setLightboxImage(null)} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors" aria-label="Close lightbox"><X className="w-8 h-8" /></button>
              <Image src={lightboxImage.src.replace('w=400&h=300', 'w=1200&h=800').replace('w=600&h=400', 'w=1200&h=800')} alt={lightboxImage.alt} width={1200} height={800} className="w-full rounded-2xl object-cover" />
              <p className="text-white/60 text-sm text-center mt-4">{lightboxImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
