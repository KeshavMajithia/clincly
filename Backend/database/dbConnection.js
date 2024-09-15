import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error("MONGO_URI environment variable is not defined.");
    return;
  }

  mongoose
    .connect(mongoUri, {
      dbName: "CLINICLY",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.error("Some error occurred while connecting to database:", err);
    });
};