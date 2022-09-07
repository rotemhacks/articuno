const express = require("express");
require("dotenv").config();
const connectDB = require("./utils/connectDB");

const PORT = process.env.PORT || 2501;

const app = express();

connectDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`👉 Server listening on ${PORT}.`);
  });
});
