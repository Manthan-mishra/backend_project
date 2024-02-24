import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import "dotenv/config";

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB connected !!! ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("ERROR: ", err);
    process.exit(1);
  }
};
