const express = require("express");
const { addToBlacklist, removeFromBlacklist } = require("../controllers/user");

const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

router.use(verifyUser);

router.post("/:tag", addToBlacklist);
router.delete("/:tag", removeFromBlacklist);

module.exports = router;
