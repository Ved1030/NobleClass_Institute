import { BaseService } from './baseService';
import type { User } from './types';

class UserService extends BaseService<User> {
  constructor() {
    super('users');
  }

  async findByEmail(email: string): Promise<User | null> {
    const users = await this.getAll();
    return users.find((u) => u.email === email) || null;
  }

  async findById(id: number): Promise<Omit<User, 'password'> | null> {
    const user = await this.getById(id);
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }
}

export const userService = new UserService();
