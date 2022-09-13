const express = require("express");
const errorHandler = require("./middleware/errorHandler");
var cors = require("cors");
require("dotenv").config();
const connectDB = require("./utils/connectDB");
const login = require("./routes/login");
const logout = require("./routes/logout");
const signup = require("./routes/signup");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 2501;

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());

app.use("/signup", signup);
app.use("/login", login);
app.use("/logout", logout);
app.use(errorHandler);

connectDB((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`👉 Server listening on ${PORT}.`);
  });
});
