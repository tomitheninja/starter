import { type Mock, vi } from 'vitest';
import type { PrismaService as TPrismaClient } from '@/domains/prisma';

class MockPrismaModel {
  findMany = vi.fn();
  findUnique = vi.fn();
  findFirst = vi.fn();
  create = vi.fn();
  createMany = vi.fn();
  update = vi.fn();
  updateMany = vi.fn();
  upsert = vi.fn();
  delete = vi.fn();
  deleteMany = vi.fn();
  count = vi.fn();
  aggregate = vi.fn();
  groupBy = vi.fn();
}

type MockedPrisma = {
  [K in keyof TPrismaClient & string]: MockPrismaModel | Mock;
};

export class MockPrismaService implements MockedPrisma {
  user = new MockPrismaModel();
  todo = new MockPrismaModel();

  $executeRawUnsafe = vi.fn();
  $extends = vi.fn();
  $queryRawUnsafe = vi.fn();
  $transaction = vi
    .fn()
    .mockImplementation((cbOrArray) =>
      Array.isArray(cbOrArray)
        ? cbOrArray.map((cb) => cb(this as unknown as TPrismaClient))
        : cbOrArray(this as unknown as TPrismaClient)
    );
  $connect = vi.fn();
  $disconnect = vi.fn();
  $on = vi.fn();
  $queryRaw = vi.fn();
  $executeRaw = vi.fn();
}
