require("dotenv").config();

const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

const migrationsDirectory = path.join(__dirname, "migrations");

async function runMigrations() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "recipe_nest",
  });

  try {
    await connection.query(`
      CREATE TABLE IF NOT EXISTS schema_migrations (
        filename VARCHAR(255) NOT NULL PRIMARY KEY,
        applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    const [appliedRows] = await connection.query(
      "SELECT filename FROM schema_migrations"
    );
    const applied = new Set(appliedRows.map((row) => row.filename));
    const files = fs
      .readdirSync(migrationsDirectory)
      .filter((filename) => /^\d+_[a-z0-9_-]+\.sql$/i.test(filename))
      .sort();

    for (const filename of files) {
      if (applied.has(filename)) continue;

      console.log(`Applying ${filename}...`);
      const sql = fs.readFileSync(path.join(migrationsDirectory, filename), "utf8");
      const statements = sql
        .split(";")
        .map((statement) => statement.trim())
        .filter(Boolean);

      for (const statement of statements) {
        await connection.query(statement);
      }

      await connection.query(
        "INSERT INTO schema_migrations (filename) VALUES (?)",
        [filename]
      );
      console.log(`Applied ${filename}`);
    }

    console.log(files.length ? "Database migrations are up to date." : "No migrations found.");
  } finally {
    await connection.end();
  }
}

runMigrations().catch((error) => {
  console.error("Database migration failed:", error.message);
  process.exitCode = 1;
});
