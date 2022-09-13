const express = require("express");

const login = require("../controllers/login");
const signup = require("../middleware/signup");

const router = express.Router();

router.post("/", signup, login);

module.exports = router;
