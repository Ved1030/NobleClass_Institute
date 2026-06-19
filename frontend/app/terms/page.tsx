"use client";

import React from 'react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const Terms: React.FC = () => {
  return (
    <>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before using our services." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">1. Acceptance of Terms</h2>
          <p className="text-noble-navy/70 mb-6">By enrolling in any course at Labbdhis Academy, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">2. Enrollment & Fees</h2>
          <p className="text-noble-navy/70 mb-6">All enrollments are subject to seat availability. Fees must be paid at the time of enrollment or as per the fee schedule provided. Fees once paid are non-refundable except as outlined in our refund policy.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">3. Attendance & Conduct</h2>
          <p className="text-noble-navy/70 mb-6">Students are expected to maintain regular attendance and adhere to the code of conduct established by Labbdhis Academy. The institute reserves the right to take disciplinary action against any student whose behavior disrupts the learning environment.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">4. Intellectual Property</h2>
          <p className="text-noble-navy/70 mb-6">All study materials, notes, and resources provided by Labbdhis Academy are the intellectual property of the institute and may not be reproduced, distributed, or shared without prior written consent.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">5. Modifications</h2>
          <p className="text-noble-navy/70 mb-6">Labbdhis Academy reserves the right to modify these terms at any time. Changes will be communicated via our website or through institute communications.</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Terms;
