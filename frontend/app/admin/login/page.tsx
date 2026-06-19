"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { GraduationCap, Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuth } from '@/contexts/AuthContext';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const AdminLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      toast.success('Welcome back, Admin!');
      router.push('/admin');
    } catch {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-noble-navy via-[#0a2a5e] to-noble-blue flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20"><GraduationCap className="w-8 h-8 text-white" /></div>
          <h1 className="font-heading text-2xl font-bold text-white">Labbdis Academy</h1>
          <p className="text-white/60 text-sm mt-1">Admin Dashboard</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
          <h2 className="font-heading text-xl font-bold text-white mb-6">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5"><span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email Address</span></label>
              <input type="email" placeholder="admin@labbdhisacademy.in" className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" {...register('email')} />
              {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5"><span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Password</span></label>
              <div className="relative">
                <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" className="w-full px-4 py-3 pr-12 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm" {...register('password')} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors" aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
              </div>
              {errors.password && <p className="text-red-300 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-noble-gold text-noble-navy py-3.5 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-all duration-200 disabled:opacity-60">{isSubmitting ? 'Signing in...' : 'Sign In to Dashboard'}</button>
          </form>
          <p className="text-white/40 text-xs text-center mt-4">Demo: admin@labbdhisacademy.in / admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
