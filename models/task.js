import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This is the reference for User Table/ collection
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", taskSchema); // this is table name in DB
