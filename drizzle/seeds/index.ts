// seeds/index.ts

// === Load ENV Variables ===
import dotenv from 'dotenv';
dotenv.config();

// === Import Dependencies ===
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { users } from '../schema';  //<- Import users table from schema.ts (requires .ts extension and "allowImportingTsExtensions": true in tsconfig)

import { eq } from 'drizzle-orm';

//  === Create MySQL Pool Connection === 
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_NAME,
  port: process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306,
});

//  === Initialize Drizzle ORM with Pool === 
const seedDb = drizzle(pool);

//  === Main Seeding Function === 
async function main() {
  try {

    // === Step 1: Seed Constant Users ===
    const seedUsers = [{
      name: "Admin",
      email: "admin123@gmail.com",
      password: '121212',
      admin: true,
      verified: true,
    }, {
      name: "User",
      email: "user123@gmail.com",
      password: '121212',
      admin: false,
      verified: true,
    }];

    for (const { name, email, password, admin, verified } of seedUsers) {
      const [existingUser] = await seedDb
        .select()
        .from(users)
        .where(eq(users.email, email));

      if (!existingUser) {
        await seedDb.insert(users).values({
          name,
          email,
          password,
          admin,
          verified
        });

        console.log(`✅ User inserted: ${email}`);
      } else {
        console.log(`ℹ️ User already exists: ${email}`);
      }
    }

    //  === Final Success Message === 
    console.log('✅ Seeding complete.');

  } catch (err) {
    // === Error Handling ===
    console.error('❌ Error running seed script:', err);
    process.exitCode = 1; // Allow finally block to run before exiting

  } finally {
    //  === Always Close Pool Connection === 
    await pool.end();
    console.log('🔌 Database connection closed.');

    process.exit(); // Gracefully exit the process
  }
}

//  === Execute Seeding === 
main();