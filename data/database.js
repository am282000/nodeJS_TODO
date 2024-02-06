import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "todoDB",
    })
    .then(() => {
      console.log("Connected to mongoDB");
    })
    .catch((e) => {
      console.log("Error connecting MongoDB", e);
    });
};
