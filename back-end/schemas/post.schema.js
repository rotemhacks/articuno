const mongoose = require("mongoose");
const { model, Schema } = mongoose;
const { commentSchema } = require("./comment.schema");

const postSchema = new Schema(
  {
    url: { type: String, required: true }, // img src
    description: String,
    tags: [String],
    comments: [commentSchema],
    nsfw: { type: Boolean, default: false },
  },
  { timestamps: true }
);

postSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = { Post: model("Post", postSchema) };
