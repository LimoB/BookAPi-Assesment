import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const books = pgTable("books", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  author: varchar("author", { length: 255 }).notNull(),
  year: integer("year").notNull(),
  genre: varchar("genre", { length: 100 }).notNull(),
});

export type TBook = InferModel<typeof books>;
export type TBookInsert = InferModel<typeof books, "insert">;
