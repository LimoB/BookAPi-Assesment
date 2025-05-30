import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { books, TBookInsert } from "../drizzle/schema";

// Get all books
export const getBooksServices = async (): Promise<TBookInsert[] | null> => {
  return await db.query.books.findMany();
};

// Get book by ID
export const getBookByIdServices = async (bookId: number): Promise<TBookInsert | undefined> => {
  return await db.query.books.findFirst({
    where: eq(books.id, bookId),
  });
};

// Create a new book
export const createBookServices = async (book: TBookInsert): Promise<string> => {
  await db.insert(books).values(book);
  return "Book created successfully 📚🎉";
};

// Update an existing book
export const updateBookServices = async (bookId: number, book: Partial<TBookInsert>): Promise<string> => {
  await db.update(books).set(book).where(eq(books.id, bookId));
  return "Book updated successfully 📚😎";
};

// Delete a book
export const deleteBookServices = async (bookId: number): Promise<string> => {
  await db.delete(books).where(eq(books.id, bookId));
  return "Book deleted successfully 📚🎉";
};
