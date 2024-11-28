import "reflect-metadata";
import { DataSource } from "typeorm";
import pg from "pg";
import "dotenv/config"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  // entities: ["src/entity/*.ts"], // Path to entities.
  // migrations: ["src/migration/*.ts"], // Path to migrations.
  // subscribers: ["src/subscriber/*.ts"], // Path to subscribers.
  entities: [`${process.env.NODE_ENV == 'production' ? "dist" : "src"}/entity/*.ts`], // Path to entities.
  migrations: [`${process.env.NODE_ENV == 'production' ? "dist" : "src"}/migration/*.ts`], // Path to migrations.
  subscribers: [`${process.env.NODE_ENV == 'production' ? "dist" : "src"}/subscriber/*.ts`], // Path to subscribers.
});


// Create database if it doesn't exist.
async function ensureDatabaseExists() {
  const client = new pg.Client({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  });

  try {
    await client.connect();
    const dbName = process.env.DB_NAME;

    const res = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [dbName]
    );

    if (res.rowCount === 0) {
      console.log(`Database "${dbName}" does not exist. Creating...`);
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Database "${dbName}" created successfully.`);
    } else {
      console.log(`Database "${dbName}" already exists.`);
    }
  } catch (error) {
    console.error("Error ensuring database existence:", error);
    process.exit(1);
  } finally {
    await client.end();
  }
}


export const initializeDataSource = async () => {
  await ensureDatabaseExists();
  try {
    await AppDataSource.initialize();
    console.log("Database connection established!");
  } catch (error) {
    console.error("Error initializing the database connection:", error);
    process.exit(1); // Exit the app if the database connection fails.
  }
};

//Set type property as module in package.json before running and then remove it after running(Find why later)
//Generate Migration
//npm run typeorm -- migration:generate ./src/migration/user-table -d ./src/config/data-source.ts

//Run Migration
//npm run typeorm -- migration:run -d ./src/config/data-source.ts

