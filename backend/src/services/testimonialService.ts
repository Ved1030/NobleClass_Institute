import { BaseService } from './baseService';
import type { Testimonial } from './types';

class TestimonialService extends BaseService<Testimonial> {
  constructor() {
    super('testimonials');
  }
}

export const testimonialService = new TestimonialService();
