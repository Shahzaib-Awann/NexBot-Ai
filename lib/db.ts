// lib/db.ts
import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from '@/drizzle/schema'

export const poolConnection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
  connectionLimit: process.env.MYSQL_MAX_CONNECTION ? Number(process.env.MYSQL_MAX_CONNECTION) : 30,
  waitForConnections: true,
});

export const db = drizzle(poolConnection, {
  schema,
  mode: 'default',
})
