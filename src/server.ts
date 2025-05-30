import express, { Application, Response, Request } from "express";
import dotenv from "dotenv";
import bookRouter from "./book/book.route";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Basic Middleware for JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("📚 Welcome to Book API Backend with Drizzle ORM and PostgreSQL");
});

// Book routes only
// app.use("/api", bookRouter);
app.use("/api", bookRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
