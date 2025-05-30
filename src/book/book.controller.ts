// src/book/book.controller.ts
import { Request, Response } from "express";
import {
  createBookServices,
  deleteBookServices,
  getBookByIdServices,
  getBooksServices,
  updateBookServices,
} from "./book.service";

export const getBooks = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allBooks = await getBooksServices();
    if (!allBooks || allBooks.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json(allBooks);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Failed to fetch books" });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<Response> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  try {
    const book = await getBookByIdServices(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Failed to fetch book" });
  }
};

export const createBook = async (req: Request, res: Response): Promise<Response> => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    return res.status(400).json({ error: "All fields (title, author, year, genre) are required" });
  }
  try {
    const message = await createBookServices({ title, author, year, genre });
    return res.status(201).json({ message });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Failed to create book" });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<Response> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    return res.status(400).json({ error: "All fields (title, author, year, genre) are required" });
  }
  try {
    const message = await updateBookServices(bookId, { title, author, year, genre });
    return res.status(200).json({ message });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Failed to update book" });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<Response> => {
  const bookId = parseInt(req.params.id);
  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  try {
    const message = await deleteBookServices(bookId);
    return res.status(200).json({ message });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "Failed to delete book" });
  }
};
