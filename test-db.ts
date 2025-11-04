// This is the file to check if the connection has been established to the databse or not ->
// test-db.ts

import * as dotenv from "dotenv";
dotenv.config({ path: ".env" }); // loads environment variables

import { connectDatabase } from "./database/mongoose.js";

async function main() {
  console.log("🧩 MONGODB_URI =", process.env.MONGODB_URI);

  if (!process.env.MONGODB_URI) {
    console.error("❌ MONGODB_URI not found in .env file!");
    process.exit(1);
  }
  console.log("🔍 Loaded MONGODB_URI =", process.env.MONGODB_URI);

  try {
    await connectDatabase();
    console.log("✅ Database connection successful!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed:", (error as Error).message);
    process.exit(1);
  }
}

main();
