import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // By default it is true: send password key in find query , If false it dont send passwod in select query
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema); // this is table name in DB
