"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  breadcrumbs?: { label: string; path?: string }[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section
      className="page-hero relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #003B73 0%, #005DAA 50%, #0B74D1 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
          borderRadius: '50%',
        }}
      />

      {/* Decorative floating circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full"
          style={{ background: 'rgba(255,255,255,0.03)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
      </div>

      {/* Academic pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full mx-auto px-6"
        style={{ maxWidth: '1200px', padding: '140px 24px 80px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {breadcrumbs && (
            <nav className="flex items-center justify-center gap-2 text-sm mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={crumb.path ?? crumb.label}>
                  {i > 0 && <span>/</span>}
                  {i === breadcrumbs.length - 1 || !crumb.path ? (
                    <span style={{ color: 'rgba(255,255,255,0.8)' }}>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.path} prefetch className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1
            className="font-heading font-bold text-white mx-auto"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: 1.1,
              fontWeight: 700,
              maxWidth: '900px',
              overflow: 'hidden',
              wordBreak: 'normal',
              textWrap: 'balance',
            }}
          >
            {title}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6"
            style={{
              maxWidth: '700px',
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.85)',
              overflow: 'hidden',
              wordBreak: 'normal',
              textWrap: 'balance',
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Responsive min-height */}
      <style>{`
        .page-hero { min-height: 320px; }
        @media (max-width: 1023px) { .page-hero { min-height: 260px; } }
        @media (max-width: 639px) { .page-hero { min-height: 220px; } }
      `}</style>
    </section>
  );
};

export default PageHero;
