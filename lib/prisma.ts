import { getCloudflareContext } from '@opennextjs/cloudflare';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { cache } from 'react';
function connectionString() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  return getCloudflareContext().env.HYPERDRIVE.connectionString;
}
export const getPrisma = cache(() => new PrismaClient({ adapter: new PrismaPg({ connectionString: connectionString(), maxUses: 1 }), log: ['error'] }));
