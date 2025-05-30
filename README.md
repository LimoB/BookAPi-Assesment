# 📚 Book API Backend

A RESTful API for managing books built with **Node.js**, **Express**, **TypeScript**, **Drizzle ORM**, and **PostgreSQL**.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

This API allows users to create, read, update, and delete books stored in a PostgreSQL database using Drizzle ORM for database interaction. It is built using Express.js and TypeScript to ensure type safety and maintainability.

---

## Features

- CRUD operations for books (Create, Read, Update, Delete)
- Input validation and error handling
- RESTful API design
- Structured project with modular controllers, routes, and services
- Environment-based configuration using `.env`
- Typed with TypeScript for robustness

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- dotenv for environment variables

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL database setup
- pnpm or npm installed globally

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/book-api.git
   cd book-api




   Install dependencies:
pnpm install
# or
npm install
Setup your PostgreSQL database and configure your connection in drizzle.config.ts and .env.

Environment Variables
Create a .env file in the root directory and add:


PORT=3000
DATABASE_URL=your_postgres_connection_string
Running the Server
Start the development server:

pnpm run dev
# or
npm run dev
The API will run at http://localhost:3000.



API Endpoints
Method	Endpoint	Description	Request Body	Response
GET	/api/books	Get all books	None	List of books
GET	/api/books/:id	Get book by ID	None	Book object or 404 error
POST	/api/books	Create a new book	{ title, author, year, genre }	Success message or error
PUT	/api/books/:id	Update book by ID	{ title, author, year, genre }	Success message or error
DELETE	/api/books/:id	Delete book by ID	None	Success message or error






Error Handling
Returns 400 Bad Request for invalid inputs (e.g., invalid book ID, missing fields)

Returns 404 Not Found if resource is not found

Returns 500 Internal Server Error on unexpected errors

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

Made with ❤️ by @Boaz Limo


