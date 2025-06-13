import { date } from 'drizzle-orm/pg-core'
import { text } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

export const customers = pgTable('customers', {
  id: text().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  address: text().notNull().unique(),
  state: text().notNull(),
  zipCode: text().notNull(),
  country: text().notNull(),
  dateOfBirth: date({ mode: 'date' }),  
})