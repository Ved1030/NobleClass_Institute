"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, BookOpen, Award, Image, MessageSquare, Bell, Settings, LogOut, Menu, X, GraduationCap, FileText, UserCheck, TrendingUp } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare },
  { label: 'Courses', path: '/admin/courses', icon: BookOpen },
  { label: 'Faculty', path: '/admin/faculty', icon: UserCheck },
  { label: 'Results', path: '/admin/results', icon: Award },
  { label: 'Gallery', path: '/admin/gallery', icon: Image },
  { label: 'Testimonials', path: '/admin/testimonials', icon: Users },
  { label: 'Notices', path: '/admin/notices', icon: Bell },
  { label: 'CMS', path: '/admin/cms', icon: FileText },
  { label: 'Analytics', path: '/admin/analytics', icon: TrendingUp },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-noble-light flex">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-noble-navy transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center gap-3 p-6 border-b border-white/10">
          <div className="w-9 h-9 bg-noble-blue rounded-xl flex items-center justify-center"><GraduationCap className="w-4 h-4 text-white" /></div>
          <div><span className="font-heading font-bold text-white text-sm">Labbdhis Academy</span><span className="block text-white/40 text-[10px]">Admin Panel</span></div>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${pathname === item.path ? 'bg-noble-blue text-white' : 'text-white/60 hover:text-white hover:bg-white/10'}`}>
              <item.icon className="w-4 h-4" />{item.label}
            </Link>
          ))}
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-red-500/20 transition-all duration-200 mt-4"><LogOut className="w-4 h-4" />Logout</button>
        </nav>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 bg-noble-navy/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-noble-blue/10 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg hover:bg-noble-light transition-colors" aria-label="Toggle sidebar">{sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
            <h1 className="font-heading font-bold text-noble-navy text-lg">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-noble-blue rounded-full flex items-center justify-center"><span className="text-white text-xs font-bold">A</span></div>
            <span className="text-noble-navy/70 text-sm hidden sm:block">Admin</span>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
