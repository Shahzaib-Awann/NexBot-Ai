// drizzle.config.ts
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './drizzle/schema.ts',   // <- Schema files location
  out: './drizzle/migrations',        // <- Migrations output directory
  dialect: 'mysql',                   // <- Database dialect (Options: 'mysql' | 'pg' | 'sqlite')
  dbCredentials: {
    url: `mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.MYSQL_DATABASE}?ssl-mode=REQUIRED`,   // <- Database connection URL from environment variable
    ssl: {
      ca: process.env.DATABASE_CA_CERT ? process.env.DATABASE_CA_CERT?.replace(/\\n/g, '\n') : undefined, // <- SSL certificate for secure MySQL connection
    },
  },
});