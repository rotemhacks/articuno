const { User } = require("../schemas/user.schema");
const { verify } = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const { access_token: accessToken } = req.cookies;

  try {
    const userId = verify(accessToken, process.env.SECRET).id;
    const { password, ...user } = (await User.findById(userId)) ?? {};

    if (!user) {
      throw {
        status: 401,
        message: "you must be a user to access this endpoint",
      };
    }

    req.user = user;
    next();
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
