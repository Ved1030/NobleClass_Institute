"use client";

import React, { useState } from 'react';
import { Search, Filter, Download, Trash2, Eye, CheckCircle } from 'lucide-react';
import { toast } from 'react-toastify';

const initialInquiries = [
  { id: 1, studentName: 'Rahul Sharma', parentName: 'Suresh Sharma', mobile: '9876543210', email: 'rahul@email.com', className: 'Class 10', course: 'All Subjects', date: '15 May 2026', status: 'New', message: 'Interested in Class 10 board prep.' },
  { id: 2, studentName: 'Priya Patel', parentName: 'Ramesh Patel', mobile: '9876543211', email: 'priya@email.com', className: 'Class 12 Science', course: 'Physics, Chemistry', date: '14 May 2026', status: 'Contacted', message: 'Looking for JEE preparation.' },
  { id: 3, studentName: 'Arjun Mehta', parentName: 'Vijay Mehta', mobile: '9876543212', email: 'arjun@email.com', className: 'Class 9', course: 'Mathematics', date: '13 May 2026', status: 'Enrolled', message: 'Need maths coaching.' },
  { id: 4, studentName: 'Sneha Desai', parentName: 'Anil Desai', mobile: '9876543213', email: 'sneha@email.com', className: 'Class 11 Commerce', course: 'Accountancy', date: '12 May 2026', status: 'New', message: 'Commerce stream coaching needed.' },
  { id: 5, studentName: 'Rohan Kumar', parentName: 'Manoj Kumar', mobile: '9876543214', email: 'rohan@email.com', className: 'Foundation', course: 'All Subjects', date: '11 May 2026', status: 'Contacted', message: 'Foundation program inquiry.' },
];

const statusColors: Record<string, string> = {
  'New': 'bg-noble-blue/10 text-noble-blue',
  'Contacted': 'bg-yellow-50 text-yellow-600',
  'Enrolled': 'bg-green-50 text-green-600',
  'Closed': 'bg-noble-navy/10 text-noble-navy/60',
};

const AdminInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedInquiry, setSelectedInquiry] = useState<typeof initialInquiries[0] | null>(null);

  const filtered = inquiries.filter(i => {
    const matchesSearch = i.studentName.toLowerCase().includes(search.toLowerCase()) || i.mobile.includes(search);
    const matchesStatus = statusFilter === 'All' || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number) => {
    setInquiries(prev => prev.filter(i => i.id !== id));
    toast.success('Inquiry deleted.');
  };

  const handleStatusChange = (id: number, status: string) => {
    setInquiries(prev => prev.map(i => i.id === id ? { ...i, status } : i));
    toast.success('Status updated.');
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-noble-blue/10 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-noble-navy/40" />
            <input type="text" placeholder="Search by name or mobile..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-noble-navy/40" />
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30">
              {['All', 'New', 'Contacted', 'Enrolled', 'Closed'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <button onClick={() => toast.info('CSV export feature coming soon.')} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-noble-blue text-white text-sm font-medium hover:bg-noble-navy transition-colors"><Download className="w-4 h-4" /> Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-noble-blue/10">
                {['Student', 'Parent', 'Mobile', 'Class', 'Date', 'Status', 'Actions'].map(h => <th key={h} className="text-left text-xs font-semibold text-noble-navy/50 uppercase tracking-wider pb-3 pr-4">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-noble-blue/5">
              {filtered.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-noble-light/50 transition-colors">
                  <td className="py-3 pr-4 text-sm font-medium text-noble-navy">{inquiry.studentName}</td>
                  <td className="py-3 pr-4 text-sm text-noble-navy/60">{inquiry.parentName}</td>
                  <td className="py-3 pr-4 text-sm text-noble-navy/60">{inquiry.mobile}</td>
                  <td className="py-3 pr-4 text-sm text-noble-navy/60">{inquiry.className}</td>
                  <td className="py-3 pr-4 text-sm text-noble-navy/60">{inquiry.date}</td>
                  <td className="py-3 pr-4">
                    <select value={inquiry.status} onChange={(e) => handleStatusChange(inquiry.id, e.target.value)} className={`text-xs font-semibold px-2.5 py-1 rounded-full border-0 cursor-pointer ${statusColors[inquiry.status]}`}>
                      {['New', 'Contacted', 'Enrolled', 'Closed'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => setSelectedInquiry(inquiry)} className="p-1.5 rounded-lg hover:bg-noble-blue/10 text-noble-blue transition-colors" aria-label="View inquiry"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => handleDelete(inquiry.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors" aria-label="Delete inquiry"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <div className="text-center py-12 text-noble-navy/40"><Search className="w-8 h-8 mx-auto mb-2 opacity-30" /><p>No inquiries found.</p></div>}
        </div>
      </div>
      {selectedInquiry && (
        <div className="fixed inset-0 bg-noble-navy/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedInquiry(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6"><h2 className="font-heading font-bold text-noble-navy">Inquiry Details</h2><button onClick={() => setSelectedInquiry(null)} className="text-noble-navy/40 hover:text-noble-navy text-2xl leading-none">×</button></div>
            <div className="space-y-3">
              {[{ label: 'Student Name', value: selectedInquiry.studentName }, { label: 'Parent Name', value: selectedInquiry.parentName }, { label: 'Mobile', value: selectedInquiry.mobile }, { label: 'Email', value: selectedInquiry.email }, { label: 'Class', value: selectedInquiry.className }, { label: 'Course', value: selectedInquiry.course }, { label: 'Date', value: selectedInquiry.date }, { label: 'Message', value: selectedInquiry.message }].map(item => (
                <div key={item.label} className="flex gap-3"><span className="text-noble-navy/50 text-sm w-28 shrink-0">{item.label}:</span><span className="text-noble-navy text-sm font-medium">{item.value}</span></div>
              ))}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => { handleStatusChange(selectedInquiry.id, 'Contacted'); setSelectedInquiry(null); }} className="flex-1 flex items-center justify-center gap-2 bg-noble-blue text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-noble-navy transition-colors"><CheckCircle className="w-4 h-4" /> Mark Contacted</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminInquiries;
