const express = require("express");

const { subscribe, unsubscribe } = require("../controllers/user");
const verifyUser = require("../middleware/verifyUser");

const router = express.Router();

router.use(verifyUser);

router.post("/:tag", subscribe);
router.delete("/:tag", unsubscribe);

module.exports = router;
