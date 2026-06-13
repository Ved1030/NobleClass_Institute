import { BaseService } from './baseService';
import type { Result } from './types';

class ResultService extends BaseService<Result> {
  constructor() {
    super('results');
  }
}

export const resultService = new ResultService();
