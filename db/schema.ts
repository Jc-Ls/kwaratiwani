import { pgTable, text, varchar, timestamp, uuid } from "drizzle-orm/pg-core";

// 1. The Volunteers Table
export const volunteers = pgTable("volunteers", {
  id: uuid("id").primaryKey().defaultRandom(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 50 }).notNull(),
  emailAddress: varchar("email_address", { length: 255 }).notNull(),
  lga: varchar("lga", { length: 100 }).notNull(),
  supportType: varchar("support_type", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. The Ideas & Suggestions Table
export const ideas = pgTable("ideas", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }), // This is optional, so no .notNull()
  lga: varchar("lga", { length: 100 }).notNull(),
  suggestion: text("suggestion").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
