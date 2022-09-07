const mongoose = require("mongoose");
const { Schema } = mongoose;
import commentSchema from "./comment.schema";

const postSchema = new Schema({
  created: { type: Date, default: Date() },
  updated: Date,
  url: { type: String, required: true }, // img src
  description: String,
  tags: [String],
  comments: [commentSchema],
  nsfw: { type: Boolean, default: false },
});

export const Post =
  mongoose.models["Post"] || mongoose.model("Post", postSchema);
