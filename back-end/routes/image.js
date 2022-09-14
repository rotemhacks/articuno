const express = require("express");

const { getPost } = require("../controllers/posts");

const router = express.Router();

router.get("/:id", getPost);

module.exports = router;
