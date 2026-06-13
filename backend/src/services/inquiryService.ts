import { BaseService } from './baseService';
import type { Inquiry } from './types';

class InquiryService extends BaseService<Inquiry> {
  constructor() {
    super('inquiries');
  }
}

export const inquiryService = new InquiryService();
