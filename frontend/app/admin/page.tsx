"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, BookOpen, TrendingUp, Bell, Award, ArrowUp, Eye } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Total Inquiries', value: '248', change: '+12%', icon: MessageSquare, color: 'bg-noble-blue' },
  { label: 'Active Students', value: '1,240', change: '+8%', icon: Users, color: 'bg-noble-navy' },
  { label: 'Active Courses', value: '6', change: '0%', icon: BookOpen, color: 'bg-noble-sky' },
  { label: 'Success Rate', value: '98%', change: '+2%', icon: TrendingUp, color: 'bg-noble-gold' },
];

const inquiryData = [
  { month: 'Jan', inquiries: 32 },
  { month: 'Feb', inquiries: 28 },
  { month: 'Mar', inquiries: 45 },
  { month: 'Apr', inquiries: 52 },
  { month: 'May', inquiries: 68 },
  { month: 'Jun', inquiries: 75 },
];

const recentInquiries = [
  { name: 'Rahul Sharma', class: 'Class 10', date: '15 May 2026', status: 'New' },
  { name: 'Priya Patel', class: 'Class 12 Science', date: '14 May 2026', status: 'Contacted' },
  { name: 'Arjun Mehta', class: 'Class 9', date: '13 May 2026', status: 'Enrolled' },
  { name: 'Sneha Desai', class: 'Class 11 Commerce', date: '12 May 2026', status: 'New' },
  { name: 'Rohan Kumar', class: 'Foundation', date: '11 May 2026', status: 'Contacted' },
];

const statusColors: Record<string, string> = {
  'New': 'bg-noble-blue/10 text-noble-blue',
  'Contacted': 'bg-yellow-50 text-yellow-600',
  'Enrolled': 'bg-green-50 text-green-600',
};

const AdminDashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white rounded-2xl border border-noble-blue/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}><stat.icon className="w-4 h-4 text-white" /></div>
              <span className="flex items-center gap-1 text-green-600 text-xs font-semibold"><ArrowUp className="w-3 h-3" />{stat.change}</span>
            </div>
            <div className="font-heading text-2xl font-bold text-noble-navy">{stat.value}</div>
            <div className="text-noble-navy/50 text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl border border-noble-blue/10 p-6">
          <h2 className="font-heading font-bold text-noble-navy mb-6">Monthly Inquiries</h2>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={inquiryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }} />
              <Line type="monotone" dataKey="inquiries" stroke="#1e40af" strokeWidth={2} dot={{ fill: '#1e40af', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-2xl border border-noble-blue/10 p-6">
          <h2 className="font-heading font-bold text-noble-navy mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[{ label: 'Add Notice', icon: Bell, path: '/admin/notices' }, { label: 'View Inquiries', icon: MessageSquare, path: '/admin/inquiries' }, { label: 'Add Faculty', icon: Users, path: '/admin/faculty' }, { label: 'Upload Gallery', icon: Eye, path: '/admin/gallery' }, { label: 'Add Result', icon: Award, path: '/admin/results' }, { label: 'Manage Courses', icon: BookOpen, path: '/admin/courses' }].map((action) => (
              <button key={action.label} className="flex items-center gap-2 p-3 rounded-xl bg-noble-light hover:bg-noble-blue/10 text-noble-navy/70 hover:text-noble-blue text-sm font-medium transition-all duration-200"><action.icon className="w-4 h-4" />{action.label}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-noble-blue/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-bold text-noble-navy">Recent Inquiries</h2>
          <button className="text-noble-blue text-sm font-medium hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-noble-blue/10">
                <th className="text-left text-xs font-semibold text-noble-navy/50 uppercase tracking-wider pb-3">Student</th>
                <th className="text-left text-xs font-semibold text-noble-navy/50 uppercase tracking-wider pb-3">Class</th>
                <th className="text-left text-xs font-semibold text-noble-navy/50 uppercase tracking-wider pb-3">Date</th>
                <th className="text-left text-xs font-semibold text-noble-navy/50 uppercase tracking-wider pb-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-noble-blue/5">
              {recentInquiries.map((inquiry) => (
                <tr key={inquiry.name} className="hover:bg-noble-light/50 transition-colors">
                  <td className="py-3 text-sm font-medium text-noble-navy">{inquiry.name}</td>
                  <td className="py-3 text-sm text-noble-navy/60">{inquiry.class}</td>
                  <td className="py-3 text-sm text-noble-navy/60">{inquiry.date}</td>
                  <td><span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[inquiry.status]}`}>{inquiry.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
