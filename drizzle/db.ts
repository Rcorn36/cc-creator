import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
//import { env } from '@/data/env/server';
import * as schema from '../app/db/schema';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL must be a Neon postgres connection string');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { 
    schema: schema,
});
