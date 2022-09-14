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
  getFavPosts,
  getPosts,
} = require("../controllers/post");
const attachUser = require("../middleware/attachUser");

const router = express.Router();

router.post("/", verifyUser, upload.single("image"), storeImage, addPost);
router.get("/", attachUser, getPosts);
router.get("/favs", verifyUser, getFavPosts);
router.get("/friends", verifyUser, getFriendsPosts);
router.get("/subs", verifyUser, getSubsPosts);
router.get("/tags", verifyUser, getPostsByTags);
router.get("/:id", getPost);

module.exports = router;
