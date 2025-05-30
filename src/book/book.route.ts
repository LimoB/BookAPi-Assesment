import { Router } from "express";
import { getBooks } from "./book.controller";


import {
  createBook,
  deleteBook,
//   getBooks,
  getBookById,
  updateBook,
} from "./book.controller";

const bookRouter = Router();

// 📚 Book routes
bookRouter.get("/books", getBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", createBook);
bookRouter.put("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

export default bookRouter;
