import { jsonb, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Every website form (contact, storage, camping, events) is stored here so the
 * resort team can review and follow up. `details` holds form-specific answers.
 */
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 32 }).notNull(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  subject: varchar("subject", { length: 160 }),
  message: text("message"),
  details: jsonb("details").$type<Record<string, string>>().notNull().default({}),
  ipAddress: varchar("ip_address", { length: 64 }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Inquiry = typeof inquiries.$inferSelect;
