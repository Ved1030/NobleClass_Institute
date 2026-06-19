"use client";

import React from 'react';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const RefundPolicy: React.FC = () => {
  return (
    <>
      <PageHero title="Refund Policy" subtitle="Our commitment to transparency and fairness in all financial matters." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Refund Policy' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">1. General Policy</h2>
          <p className="text-noble-navy/70 mb-6">At Labbdhi's Academy, we strive to ensure complete satisfaction with our programs. However, we understand that circumstances may change, and we have established a fair refund policy.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">2. Refund Eligibility</h2>
          <p className="text-noble-navy/70 mb-6">Refund requests made within 7 days of enrollment are eligible for a full refund minus a nominal administrative fee. After 7 days, refunds are processed on a pro-rata basis for the remaining course duration.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">3. Non-Refundable Items</h2>
          <p className="text-noble-navy/70 mb-6">Registration fees, study material costs, and examination fees are non-refundable once incurred.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">4. Refund Process</h2>
          <p className="text-noble-navy/70 mb-6">Refund requests must be submitted in writing. Approved refunds are processed within 15 business days and credited to the original payment method.</p>
          <h2 className="font-heading text-2xl font-bold text-noble-navy mb-4">5. Contact</h2>
          <p className="text-noble-navy/70 mb-6">For refund-related inquiries, please contact us through our website or visit our center during office hours.</p>
        </div>
      </SectionWrapper>
    </>
  );
};

export default RefundPolicy;
