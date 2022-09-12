const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  bio: String,
  isadmin: { type: Boolean, default: false },
  friends: [String], // friends userIds
  favorites: [String], // favorite posts
  subscriptions: [String], // favorite tags
  blacklist: [String], // tags to exclude from curated feed
  shownsfw: { type: Boolean, default: false },
});

userSchema.pre("findOneAndUpdate", function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = { User: model("User", userSchema) };
