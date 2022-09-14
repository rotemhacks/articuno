const express = require("express");
const multer = require("multer");
const upload = multer();

const verifyUser = require("../middleware/verifyUser");
const storeImage = require("../middleware/storeImage");
const {
  addPost,
  getPost,
  getFriendsPosts,
  getSubsPosts,
  getPostsByTags,
} = require("../controllers/post");

const router = express.Router();

router.post("/", verifyUser, upload.single("image"), storeImage, addPost);
router.get("/friends", verifyUser, getFriendsPosts);
router.get("/subs", verifyUser, getSubsPosts);
router.get("/tags", verifyUser, getPostsByTags);
router.get("/:id", getPost);

module.exports = router;
