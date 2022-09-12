const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const { commentSchema } = require("./com");

const postSchema = new Schema({
  created: { type: Date, default: Date() },
  updated: Date,
  url: { type: String, required: true }, // img src
  description: String,
  tags: [String],
  comments: [commentSchema],
  nsfw: { type: Boolean, default: false },
});

postSchema.pre('findOneAndUpdate', function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = { Post: model("Post", postSchema) };
