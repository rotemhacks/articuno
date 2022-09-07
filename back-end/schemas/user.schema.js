const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: String,
  isadmin: { type: Boolean, default: false },
  friends: [String], // friends userIds
  subscriptions: [String], // favorite tags
  blacklist: [String], // tags to exclude from curated feed
  shownsfw: { type: Boolean, default: false },
});

export const User =
  mongoose.models["User"] || mongoose.model("User", userSchema);
