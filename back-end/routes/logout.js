const express = require("express");
const login = require("../controllers/logout");

const router = express.Router();

router.post("/", logout);

module.exports = router;
