import { BaseService } from './baseService';
import type { Faculty } from './types';

class FacultyService extends BaseService<Faculty> {
  constructor() {
    super('faculty');
  }
}

export const facultyService = new FacultyService();
