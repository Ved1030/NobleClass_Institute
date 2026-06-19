"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Results', path: '/results' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Notices', path: '/notices' },
  { label: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <div className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 bg-noble-blue text-white text-xs h-[40px] transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          <span>Coaching Classes in Ghatkopar East, Mumbai</span>
          <div className="flex items-center gap-4">
            <span className="hover:text-white/80 transition-colors flex items-center gap-1 text-xs">
              +91 97691 13425
            </span>
          </div>
        </div>
      </div>
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-md' : ''} top-0 lg:top-[40px]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-[90px]">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-noble-blue">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-noble-dark">
                  VS Tutorials
                </span>
                <span className="block text-[9px] tracking-[0.15em] uppercase text-noble-blue">
                  Building Strong Concepts & Academic Excellence
                </span>
              </div>
            </Link>
            <nav className="hidden lg:flex items-center gap-0.5 mx-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  prefetch
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.path
                      ? 'bg-noble-blue/10 text-noble-blue'
                      : 'text-noble-dark/70 hover:text-noble-blue hover:bg-noble-blue/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center shrink-0">
              <Link
                href="/contact"
                prefetch
                className="flex items-center gap-2 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 transition-all duration-200 shadow-lg"
                style={{ backgroundColor: '#C62828' }}
              >
                <Phone className="w-4 h-4" /> Enquire Now
              </Link>
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden ml-auto p-2 rounded-lg transition-colors text-noble-dark hover:bg-noble-light"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    prefetch
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      pathname === link.path
                        ? 'bg-noble-blue/10 text-noble-blue'
                        : 'text-noble-dark/70 hover:bg-noble-light'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
                  <span className="flex items-center gap-2 px-4 py-2.5 text-sm text-noble-dark/70 rounded-xl">
                    <Phone className="w-4 h-4 text-noble-blue" /> +91 97691 13425
                  </span>
                  <Link
                    href="/contact"
                    className="block text-center text-white px-5 py-3 rounded-xl text-sm font-bold"
                    style={{ backgroundColor: '#C62828' }}
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
