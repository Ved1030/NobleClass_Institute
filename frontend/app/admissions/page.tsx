"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Users, Clock, ArrowRight } from 'lucide-react';
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

const steps = [
  { step: '01', title: 'Submit Inquiry', desc: 'Fill the online inquiry form or visit our center in Ghatkopar East.', icon: FileText },
  { step: '02', title: 'Free Counseling', desc: 'Our academic counselors will guide you on the best course for your child.', icon: Users },
  { step: '03', title: 'Diagnostic Test', desc: 'Optional assessment to identify learning gaps and customize the learning plan.', icon: CheckCircle },
  { step: '04', title: 'Enrollment', desc: 'Complete admission formalities and join your batch.', icon: ArrowRight },
];

const documents = [
  'Previous year mark sheet / report card',
  'School leaving certificate (if applicable)',
  'Aadhar card (student)',
  'Passport size photographs (2)',
  'Parent/Guardian ID proof',
  'Birth certificate (for Class 8 admissions)',
];

const batches = [
  { name: 'Morning Batch', time: '7:00 AM – 9:00 AM', days: 'Mon – Sat', seats: '5 seats left', status: 'Filling Fast' },
  { name: 'Afternoon Batch', time: '2:00 PM – 4:00 PM', days: 'Mon – Sat', seats: '12 seats left', status: 'Available' },
  { name: 'Evening Batch', time: '5:00 PM – 7:00 PM', days: 'Mon – Sat', seats: '8 seats left', status: 'Filling Fast' },
  { name: 'Weekend Batch', time: '9:00 AM – 1:00 PM', days: 'Sat & Sun', seats: '15 seats left', status: 'Available' },
];

const Admissions: React.FC = () => {
  return (
    <>
      <PageHero title="Admissions" subtitle="Begin your academic journey with Labbdhis Academy. Admissions open for Std 7th, 8th, 9th & 10th. Limited seats available." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Admissions' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">How to Join</span>
            <h2 className="font-heading text-4xl font-bold text-noble-navy mt-2 mb-4">Admission Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
                <div className="w-16 h-16 bg-noble-blue rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg shadow-noble-blue/20"><span className="font-heading text-xl font-bold text-white">{step.step}</span></div>
                <h3 className="font-heading font-bold text-noble-navy mb-2">{step.title}</h3>
                <p className="text-noble-navy/60 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper className="py-20 bg-noble-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Available Batches</span>
              <h2 className="font-heading text-3xl font-bold text-noble-navy mt-2 mb-6">Batch Timings</h2>
              <div className="space-y-4 mb-10">
                {batches.map((batch, i) => (
                  <motion.div key={batch.name} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-noble-blue/8 rounded-xl flex items-center justify-center"><Clock className="w-4 h-4 text-noble-blue" /></div>
                      <div><h3 className="font-heading font-semibold text-noble-navy text-sm">{batch.name}</h3><p className="text-noble-navy/50 text-xs">{batch.time} · {batch.days}</p></div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${batch.status === 'Filling Fast' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>{batch.status}</span>
                      <p className="text-noble-navy/40 text-xs mt-1">{batch.seats}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Documents Required</span>
              <h2 className="font-heading text-2xl font-bold text-noble-navy mt-2 mb-4">Required Documents</h2>
              <div className="space-y-2">{documents.map((doc) => <div key={doc} className="flex items-center gap-3 text-sm text-noble-navy/70"><CheckCircle className="w-4 h-4 text-noble-blue shrink-0" />{doc}</div>)}</div>
            </div>
            <div>
              <div className="bg-white rounded-3xl border border-noble-blue/10 p-8 shadow-xl shadow-noble-blue/5">
                <span className="text-noble-blue text-sm font-semibold uppercase tracking-widest">Apply Now</span>
                <h2 className="font-heading text-2xl font-bold text-noble-navy mt-2 mb-2">Admission Inquiry Form</h2>
                <p className="text-noble-navy/60 text-sm mb-6">Fill the form and our counselor will contact you within 24 hours.</p>
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Admissions;
