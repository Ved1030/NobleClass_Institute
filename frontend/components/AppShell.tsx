"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import WhatsAppButton from './WhatsAppButton';
import AdminLayout from './AdminLayout';

const NobleAI = dynamic(() => import('./NobleAI'), { ssr: false });

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return (
    <div className="min-h-screen bg-noble-light overflow-x-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <NobleAI />
      <WhatsAppButton />
    </div>
  );
}
