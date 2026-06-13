import { BaseService } from './baseService';
import type { Gallery } from './types';

class GalleryService extends BaseService<Gallery> {
  constructor() {
    super('gallery');
  }
}

export const galleryService = new GalleryService();
