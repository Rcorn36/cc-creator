import { env } from '@/data/env/server';
import { defineConfig } from 'drizzle-kit';




export default defineConfig({
    schema: "./db/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    strict: true,
    verbose: true,
    dbCredentials: {
        url: env.DATABASE_URL,
    },
})