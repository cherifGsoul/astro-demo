import { defineConfig } from 'drizzle-kit'
 
export default defineConfig({
 schema: "./src/lib/schema.ts",
  driver: 'better-sqlite',
  out: "./src/config/migrations",
  dbCredentials: {
    url: "app.db"
  },
  verbose: true,
  strict: true,
})