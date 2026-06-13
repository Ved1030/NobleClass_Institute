import { BaseService } from './baseService';
import type { Course } from './types';

class CourseService extends BaseService<Course> {
  constructor() {
    super('courses');
  }
}

export const courseService = new CourseService();
