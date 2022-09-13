const express = require("express");
const multer = require("multer");
const upload = multer();

const verifyUser = require("../middleware/verifyUser");
const storeImage = require("../middleware/storeImage");
const { addPost } = require("../controllers/posts");

const router = express.Router();

router.post("/upload", verifyUser, upload.single("image"), storeImage, addPost);

module.exports = router;
