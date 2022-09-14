const express = require("express");
const multer = require("multer");
const upload = multer();

const verifyUser = require("../middleware/verifyUser");
const storeImage = require("../middleware/storeImage");
const { addPost, getPost } = require("../controllers/posts");

const router = express.Router();

router.post("/", verifyUser, upload.single("image"), storeImage, addPost);
router.get("/:id", getPost);

module.exports = router;
