"use client";

import React from 'react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <PageHero title="Privacy Policy" subtitle="We value your privacy and are committed to protecting your personal data." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">1. Information We Collect</h2>
          <p className="text-noble-navy/70 mb-6">We collect personal information including name, email address, phone number, academic details, and other relevant information when you fill inquiry forms or enroll in our programs.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">2. How We Use Your Information</h2>
          <p className="text-noble-navy/70 mb-6">Your information is used to process enrollments, communicate updates, improve our services, and provide academic support. We do not sell or share your personal data with third parties for marketing purposes.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">3. Data Security</h2>
          <p className="text-noble-navy/70 mb-6">We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">4. Contact</h2>
          <p className="text-noble-navy/70 mb-6">For any questions regarding this privacy policy, please contact us at info@nobleclasses.in.</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default PrivacyPolicy;
