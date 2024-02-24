import { connectDB } from "./db/dbConfig.js";
import "dotenv/config";
import express from "express";

const app = express();

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error is ", err);
  });
