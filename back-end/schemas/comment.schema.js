const mongoose = require("mongoose");
const { Schema } = mongoose;

export const commentSchema = new Schema({
  created: { type: Date, default: Date() },
  author: { type: String, required: true }, // author userId
  body: { type: String, required: true },
});

export const Comment =
  mongoose.models["Comment"] || mongoose.model("Comment", commentSchema);
