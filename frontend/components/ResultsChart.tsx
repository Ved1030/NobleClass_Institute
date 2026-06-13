"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultsChartProps {
  data: Array<{ year: string; ssc: number; jee: number; neet: number }>;
}

const ResultsChart: React.FC<ResultsChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-3xl border border-noble-blue/10 p-8 shadow-lg">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="year" tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis domain={[75, 100]} tick={{ fill: '#64748b', fontSize: 12 }} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} formatter={(value: number) => [`${value}%`, '']} />
          <Bar dataKey="ssc" name="SSC Board" fill="#1e40af" radius={[4, 4, 0, 0]} />
          <Bar dataKey="jee" name="JEE Mains" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="neet" name="NEET" fill="#93c5fd" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4">
        {[{ color: 'bg-noble-navy', label: 'SSC Board' }, { color: 'bg-noble-blue', label: 'JEE Mains' }, { color: 'bg-noble-sky', label: 'NEET' }].map((item) => (
          <div key={item.label} className="flex items-center gap-2"><div className={`w-3 h-3 rounded-sm ${item.color}`} /><span className="text-noble-navy/60 text-xs">{item.label}</span></div>
        ))}
      </div>
    </div>
  );
};

export default ResultsChart;
