import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "todoDB",
    })
    .then((c) => {
      console.log(`Connected to mongoDB wih host ${c.connection.host}`);
    })
    .catch((e) => {
      console.log("Error connecting MongoDB", e);
    });
};
