"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import WhatsAppButton from './WhatsAppButton';
import AdminLayout from './AdminLayout';

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
      <WhatsAppButton />
    </div>
  );
}
