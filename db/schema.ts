import { pgTable, text, timestamp, serial, varchar } from 'drizzle-orm/pg-core';

// Volunteers table - for Get Involved form submissions
export const volunteers = pgTable('volunteers', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  lga: varchar('lga', { length: 100 }).notNull(),
  supportType: varchar('support_type', { length: 100 }).notNull(), // Volunteer, Mobilization, Professional Support, Media/Content, Other
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Ideas table - for Share Ideas form submissions
export const ideas = pgTable('ideas', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
  lga: varchar('lga', { length: 100 }).notNull(),
  suggestion: text('suggestion').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
