require("dotenv").config();
const express = require("express");
var cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./utils/connectDB");
const login = require("./routes/login");
const logout = require("./routes/logout");
const signup = require("./routes/signup");
const images = require("./routes/images");
const sub = require("./routes/sub");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 2501;

const app = express();

const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:5173"];
const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

app.use("/signup", signup);
app.use("/login", login);
app.use("/logout", logout);
app.use("/images", images);
app.use("/sub", sub);
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
