import { BaseService } from './baseService';
import type { Notice } from './types';

class NoticeService extends BaseService<Notice> {
  constructor() {
    super('notices');
  }
}

export const noticeService = new NoticeService();
