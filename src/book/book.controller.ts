// src/book/book.controller.ts
import { Request, Response } from "express";
import {
  createBookServices,
  deleteBookServices,
  getBookByIdServices,
  getBooksServices,
  updateBookServices,
} from "./book.service";

export const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const allBooks = await getBooksServices();
    if (!allBooks || allBooks.length === 0) {
      res.status(404).json({ message: "No books found" });
      return;
    }
    res.status(200).json(allBooks);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch books" });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    res.status(400).json({ error: "Invalid book ID" });
    return;
  }
  try {
    const book = await getBookByIdServices(bookId);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to fetch book" });
  }
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    res.status(400).json({ error: "All fields (title, author, year, genre) are required" });
    return;
  }
  try {
    const message = await createBookServices({ title, author, year, genre });
    res.status(201).json({ message });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to create book" });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    res.status(400).json({ error: "Invalid book ID" });
    return;
  }
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    res.status(400).json({ error: "All fields (title, author, year, genre) are required" });
    return;
  }
  try {
    const message = await updateBookServices(bookId, { title, author, year, genre });
    res.status(200).json({ message });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to update book" });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    res.status(400).json({ error: "Invalid book ID" });
    return;
  }
  try {
    const message = await deleteBookServices(bookId);
    res.status(200).json({ message });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Failed to delete book" });
  }
};
