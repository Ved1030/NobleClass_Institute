"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const InquiryForm = dynamic(() => import('@/components/InquiryForm'), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-2xl shadow-sm border border-noble-blue/10 p-6 sm:p-8 animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={i === 5 ? 'sm:col-span-2' : ''}>
            <div className="h-4 bg-noble-blue/10 rounded w-24 mb-2" />
            <div className="h-10 bg-noble-blue/5 rounded-xl w-full" />
          </div>
        ))}
      </div>
      <div className="h-11 bg-noble-blue/10 rounded-xl w-full mt-6" />
    </div>
  ),
});

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', lines: ['Shop No. 11, Ground Floor,', 'Building No. 185, Drushti Sapphire,', 'Opp. Shivaji Technical School,', 'Gaurishankar Wadi, Pant Nagar,', 'Ghatkopar East, Mumbai – 400075'] },
  { icon: Phone, title: 'Call Us', lines: ['+91 97691 13425'] },
  { icon: Mail, title: 'Email Us', lines: ['info@vstutorials.in'] },
  { icon: Clock, title: 'Office Hours', lines: ['Mon – Sat: 7:00 AM – 9:00 PM', 'Sunday: 10:00 AM – 2:00 PM'] },
];

const Contact: React.FC = () => {
  return (
    <>
      <PageHero title="Contact Us" subtitle="We're here to help. Reach out to us for admissions, inquiries, or any questions about our programs." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Reach Out</span>
              <h2 className="font-heading text-3xl font-bold text-noble-navy mt-2 mb-8">Get In Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((info, i) => (
                  <motion.div key={info.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-noble-light rounded-2xl p-6 border border-noble-blue/10">
                    <div className="w-10 h-10 bg-noble-blue/10 rounded-xl flex items-center justify-center mb-4"><info.icon className="w-4 h-4 text-noble-blue" /></div>
                    <h3 className="font-heading font-semibold text-noble-navy mb-2">{info.title}</h3>
                    {info.lines.map((line) => <p key={line} className="text-noble-navy/60 text-sm">{line}</p>)}
                  </motion.div>
                ))}
              </div>
              <div className="bg-white rounded-[24px] shadow-lg overflow-hidden border border-gray-200">
                <div className="w-full h-[300px]">
                  <iframe
                    src="https://www.google.com/maps?q=19.1147,72.9293&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VS Tutorials Location"
                  />
                </div>
                <div className="p-4 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-noble-blue shrink-0 mt-0.5" />
                    <p className="text-noble-dark/60 text-sm">Shop No. 11, Drushti Sapphire, Opp. Shivaji Technical School, Gaurishankar Wadi, Pant Nagar, Ghatkopar East, Mumbai 400075</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=19.1147,72.9293"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-noble-blue text-white px-4 py-2 rounded-xl font-semibold text-xs hover:bg-noble-blue-dark transition-all duration-200 shrink-0"
                  >
                    Open In Google Maps
                  </a>
                </div>
              </div>
              <div className="mt-6"><a href="https://wa.me/919769113425" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-[#20b858] transition-colors duration-200 w-fit"><MessageCircle className="w-4 h-4" />Chat on WhatsApp</a></div>
            </div>
            <div>
              <div className="bg-white rounded-3xl border border-noble-blue/10 p-8 shadow-xl shadow-noble-blue/5">
                <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Send a Message</span>
                <h2 className="font-heading text-2xl font-bold text-noble-navy mt-2 mb-2">Inquiry Form</h2>
                <p className="text-noble-navy/60 text-sm mb-6">We'll get back to you within 24 hours.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Contact;
