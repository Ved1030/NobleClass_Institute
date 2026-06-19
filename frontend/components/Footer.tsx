"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-noble-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" prefetch className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 bg-noble-blue rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white">Labbdhis Academy</span>
                <span className="block text-[9px] tracking-[0.15em] uppercase text-blue-300">Shaping Young Minds Through Quality Education</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Labbdhis Academy has been guiding students since 2007 in Ghatkopar West, Mumbai, providing quality coaching for Std 7th to Std 10th with concept-based learning, personal attention, and academic excellence.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-sm">+91 99208 59870</span>
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Courses</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Std 7th Coaching', path: '/courses' },
                { label: 'Std 8th Coaching', path: '/courses' },
                { label: 'Std 9th Coaching', path: '/courses' },
                { label: 'Std 10th Coaching', path: '/courses' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.path} prefetch className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Faculty', path: '/faculty' },
                { label: 'Results', path: '/results' },
                { label: 'Gallery', path: '/gallery' },
                { label: 'Admissions', path: '/admissions' },
                { label: 'Notices', path: '/notices' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.path} prefetch className="text-white/50 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-noble-accent mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Ghatkopar West, Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-noble-accent shrink-0" />
                <span className="text-white/50 text-sm">+91 99208 59870</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-noble-accent shrink-0" />
                <span className="text-white/50 text-sm">Coming Soon</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Labbdhis Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" prefetch className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="/terms" prefetch className="text-white/40 hover:text-white text-xs transition-colors">Terms of Use</Link>
            <Link href="/refund-policy" prefetch className="text-white/40 hover:text-white text-xs transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
