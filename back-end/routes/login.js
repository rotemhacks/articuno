const express = require("express");
const verifyUser = require("../middleware/verifyUser");
const login = require("../controllers/login");

const router = express.Router();

router.post("/", login);

router.get("/", verifyUser, (req, res) => {
  if (req.user) {
    const { user } = req;
    delete user._id;
    delete user._doc.password;
    res.status(200).send(user);
  } else {
    res.status(400).send({ message: "user not found" });
  }
});

module.exports = router;
