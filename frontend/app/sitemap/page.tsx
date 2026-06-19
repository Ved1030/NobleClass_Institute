"use client";

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import SectionWrapper from '@/components/SectionWrapper';

const sections = [
  { title: 'Main Pages', links: [
    { label: 'Home', path: '/' }, { label: 'About Us', path: '/about' }, { label: 'Courses', path: '/courses' },
    { label: 'Faculty', path: '/faculty' }, { label: 'Results', path: '/results' }, { label: 'Gallery', path: '/gallery' },
    { label: 'Notices', path: '/notices' }, { label: 'Contact', path: '/contact' }, { label: 'Admissions', path: '/admissions' },
  ]},
  { title: 'Information', links: [
    { label: 'FAQ', path: '/faq' }, { label: 'Careers', path: '/careers' }, { label: 'Success Stories', path: '/success-stories' },
  ]},
  { title: 'Legal', links: [
    { label: 'Privacy Policy', path: '/privacy-policy' }, { label: 'Terms & Conditions', path: '/terms' }, { label: 'Refund Policy', path: '/refund-policy' },
  ]},
];

const Sitemap: React.FC = () => {
  return (
    <>
      <PageHero title="Sitemap" subtitle="Navigate through all pages of Labbdis Academy website." breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Sitemap' }]} />
      <SectionWrapper className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-heading text-lg font-bold text-noble-navy mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.path}><Link href={link.path} className="text-noble-blue hover:text-noble-navy text-sm transition-colors hover:underline">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Sitemap;
