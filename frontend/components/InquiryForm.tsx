"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Phone, Mail, User, GraduationCap, BookOpen } from 'lucide-react';
import { toast } from 'react-toastify';
import { inquiryService } from '@/services/inquiries';

const inquirySchema = z.object({
  studentName: z.string().min(2, 'Enter student name'),
  parentName: z.string().min(2, 'Enter parent name'),
  mobile: z.string().min(10, 'Enter valid mobile number').max(10, 'Enter valid mobile number'),
  email: z.string().email('Enter valid email'),
  className: z.string().min(1, 'Select a class'),
  course: z.string().min(1, 'Select a course'),
  message: z.string().optional(),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

const classOptions = ['Class 11 Science', 'Class 12 Science', 'Foundation', 'Competitive Exams'];
const courseOptions = ['All Subjects', 'Mathematics', 'Science', 'Physics', 'Chemistry', 'Biology', 'English'];

interface InquiryFormProps {
  className?: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ className = '' }) => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryFormData) => {
    try {
      await inquiryService.create({
        studentName: data.studentName,
        parentName: data.parentName,
        mobile: data.mobile,
        email: data.email,
        class: data.className,
        course: data.course,
        message: data.message || '',
      });
      toast.success('Thank you! We will contact you shortly.');
      reset();
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`bg-white rounded-2xl shadow-sm border border-noble-blue/10 p-6 sm:p-8 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Student Name</span></label>
          <input type="text" placeholder="Student name" className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('studentName')} />
          {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
        </div>
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> Parent Name</span></label>
          <input type="text" placeholder="Parent name" className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('parentName')} />
          {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
        </div>
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Mobile Number</span></label>
          <input type="tel" placeholder="9876543210" maxLength={10} className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('mobile')} />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
        </div>
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Email</span></label>
          <input type="email" placeholder="email@example.com" className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('email')} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> Class</span></label>
          <select className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('className')}>
            <option value="">Select class</option>
            {classOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.className && <p className="text-red-500 text-xs mt-1">{errors.className.message}</p>}
        </div>
        <div>
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5"><span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> Course Interested</span></label>
          <select className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30" {...register('course')}>
            <option value="">Select course</option>
            {courseOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course.message}</p>}
        </div>
        <div className="sm:col-span-2">
          <label className="block text-noble-navy/70 text-sm font-medium mb-1.5">Message (Optional)</label>
          <textarea rows={3} placeholder="Any specific requirements..." className="w-full px-4 py-2.5 rounded-xl border border-noble-blue/20 text-noble-navy text-sm focus:outline-none focus:ring-2 focus:ring-noble-blue/30 resize-none" {...register('message')} />
        </div>
      </div>
      <button type="submit" disabled={isSubmitting} className="mt-6 w-full bg-noble-blue text-white py-3 rounded-xl font-semibold text-sm hover:bg-noble-navy transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-2"><Send className="w-4 h-4" />{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</button>
    </form>
  );
};

export default InquiryForm;
