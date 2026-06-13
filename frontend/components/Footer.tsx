"use client";

import React from 'react';
import Link from 'next/link';
import { GraduationCap, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

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
                <span className="font-heading font-bold text-xl text-white">Noble Classes</span>
                <span className="block text-[9px] tracking-[0.15em] uppercase text-blue-300">Shaping The Future</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Empowering students since 2010 with quality education. We provide comprehensive coaching for Classes VIII to XII, focusing on academic excellence and holistic development.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Youtube, href: '#', label: 'Youtube' },
                { icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-noble-blue transition-colors text-white/50 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-5">Courses</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Class VIII - X', path: '/courses' },
                { label: 'Science (XI - XII)', path: '/courses' },
                { label: 'Commerce (XI - XII)', path: '/courses' },
                { label: 'JEE Preparation', path: '/courses' },
                { label: 'NEET Preparation', path: '/courses' },
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
                <span className="text-white/50 text-sm">LBS Marg, Ghatkopar (W), Mumbai - 400086</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-noble-accent shrink-0" />
                <div>
                  <a href="tel:+919820023732" className="text-white/50 hover:text-white text-sm transition-colors block">98200 23732</a>
                  <a href="tel:+919930890499" className="text-white/50 hover:text-white text-sm transition-colors block">99308 90499</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-noble-accent shrink-0" />
                <a href="mailto:info@nobleclasses.in" className="text-white/50 hover:text-white text-sm transition-colors">info@nobleclasses.in</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-noble-accent shrink-0" />
                <span className="text-white/50 text-sm">Mon-Sat: 7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">&copy; {new Date().getFullYear()} Noble Classes. All rights reserved.</p>
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
