import db from "./db";
import { books } from "./schema";

async function seed() {
  try {
    await db.insert(books).values([
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: "Fiction",
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        genre: "Fiction",
      },
      {
        title: "Outliers",
        author: "Malcolm Gladwell",
        year: 2008,
        genre: "Non-Fiction",
      },
    ]);

    console.log("✅ Books seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();
