const express = require("express");

const { addToFavorites, removeFromFavorites } = require("../controllers/post");
const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

router.use(verifyUser);

router.post("/:id", addToFavorites);
router.delete("/:id", removeFromFavorites);

module.exports = router;
