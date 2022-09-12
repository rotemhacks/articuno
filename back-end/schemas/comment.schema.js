const mongoose = require("mongoose");
const { model, Schema } = mongoose;

export const commentSchema = new Schema(
  {
    author: { type: String, required: true }, // author userId
    body: { type: String, required: true },
  },
  { timestamps: true }
);

commentSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = { Comment: model("Comment", commentSchema), commentSchema };
