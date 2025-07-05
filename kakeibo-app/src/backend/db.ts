import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "your-default-mongodb-uri";
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

export const getDatabase = () => {
  return client.db("kakeibo");
};