const mongoose = require("mongoose");

const connectDB = async (callback) => {
  try {
    const DATABASE_URL = process.env.DATABASE_URL;
    if (!DATABASE_URL) throw new Error("DATABASE_URL not found.");
    const conn = await mongoose.connect(DATABASE_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return callback();
  } catch (err) {
    return callback(err);
  }
};

module.exports = connectDB;
