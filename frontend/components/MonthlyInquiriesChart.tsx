"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MonthlyInquiriesChartProps {
  data: Array<{ month: string; inquiries: number }>;
}

const MonthlyInquiriesChart: React.FC<MonthlyInquiriesChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl border border-noble-blue/10 p-6">
      <h2 className="font-heading font-bold text-noble-navy mb-6">Monthly Inquiries</h2>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0' }} />
          <Line type="monotone" dataKey="inquiries" stroke="#1e40af" strokeWidth={2} dot={{ fill: '#1e40af', r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyInquiriesChart;
