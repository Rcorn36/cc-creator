import { env } from '@/data/env/server';
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config();


export default defineConfig({
    schema: "./drizzle/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    strict: true,
    verbose: true,
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});