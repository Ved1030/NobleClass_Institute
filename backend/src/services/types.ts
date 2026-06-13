export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface Inquiry {
  id: number;
  studentName: string;
  parentName: string;
  mobile: string;
  email: string;
  class: string;
  course: string;
  message?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Faculty {
  id: number;
  name: string;
  qualification: string;
  experience: string;
  image: string;
  subject?: string;
  achievements?: string;
  bio?: string;
  rating?: number;
  students?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  class: string;
  category?: string;
  subtitle?: string;
  subjects?: string;
  duration?: string;
  students?: string;
  rating?: number;
  fee?: string;
  badge?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Result {
  id: number;
  studentName: string;
  percentage: string;
  year: string;
  image?: string;
  exam?: string;
  rank?: string;
  subject?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Gallery {
  id: number;
  image: string;
  category?: string;
  alt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: number;
  studentName: string;
  review: string;
  role?: string;
  rating?: number;
  image?: string;
  result?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notice {
  id: number;
  title: string;
  content: string;
  category?: string;
  isNew: boolean;
  createdAt: string;
  updatedAt: string;
}
