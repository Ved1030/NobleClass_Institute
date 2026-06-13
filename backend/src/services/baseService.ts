import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(__dirname, '../../data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export class BaseService<T extends { id: number }> {
  private filePath: string;

  constructor(entityName: string) {
    this.filePath = path.join(DATA_DIR, `${entityName}.json`);
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '[]', 'utf-8');
    }
  }

  private readData(): T[] {
    try {
      const raw = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(raw) as T[];
    } catch {
      return [];
    }
  }

  private writeData(data: T[]): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf-8');
  }

  private nextId(data: T[]): number {
    if (data.length === 0) return 1;
    return Math.max(...data.map((item) => item.id)) + 1;
  }

  async getAll(): Promise<T[]> {
    return this.readData();
  }

  async getById(id: number): Promise<T | null> {
    const data = this.readData();
    return data.find((item) => item.id === id) || null;
  }

  async create(data: any): Promise<T> {
    const records = this.readData();
    const newItem = { ...data, id: this.nextId(records), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() } as T;
    records.push(newItem);
    this.writeData(records);
    return newItem;
  }

  async update(id: number, data: any): Promise<T | null> {
    const records = this.readData();
    const index = records.findIndex((item) => item.id === id);
    if (index === -1) return null;
    records[index] = { ...records[index], ...data, updatedAt: new Date().toISOString() };
    this.writeData(records);
    return records[index];
  }

  async delete(id: number): Promise<boolean> {
    const records = this.readData();
    const index = records.findIndex((item) => item.id === id);
    if (index === -1) return false;
    records.splice(index, 1);
    this.writeData(records);
    return true;
  }

  async count(): Promise<number> {
    return this.readData().length;
  }
}
