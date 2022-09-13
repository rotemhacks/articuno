const express = require("express");

const logout = require("../controllers/logout");

const router = express.Router();

router.post("/", logout);

module.exports = router;
