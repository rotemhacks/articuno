const express = require("express");
const multer = require("multer");
const upload = multer();

const storeImage = require("../middleware/storeImage");
const verifyUser = require("../middleware/verifyUser");
const router = express.Router();

router.post(
  "/upload",
  verifyUser,
  upload.single("image"),
  storeImage,
  (req, res, next) => {
    res.send({ message: "image uploaded successfully" });
  }
);

module.exports = router;
