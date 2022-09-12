const mongoose = require("mongoose");
const { model, Schema } = mongoose;
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

module.exports = { Post: model("Post", postSchema) };
