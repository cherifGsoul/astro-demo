import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";
 
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  emailAddress: text("email_address").notNull().unique(),
  password: text("password").notNull()
});