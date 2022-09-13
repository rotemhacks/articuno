const { compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

const { User } = require("../schemas/user.schema");

module.exports = async function (req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw { status: 404, message: "no user exists with the given email" };
    }

    if (!(await compare(password, user.password))) {
      throw { status: 401, message: "incorrect password" };
    }

    delete user._doc.password;

    const accessToken = sign({ id: user._id }, process.env.SECRET, {
      expiresIn: "1y",
    });

    delete user._doc._id;

    res.cookie("access_token", accessToken, { httpOnly: true }).send(user);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
