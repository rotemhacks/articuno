const { User } = require("../schemas/user.schema");
const { hash } = require("bcrypt");

module.exports = async function (req, res, next) {
  const { firstname, email, password, repassword } = req.body;

  if (password !== repassword) {
    throw { message: "passwords don't match" };
  }

  try {
    const user = new User({
      firstname,
      email,
      password: await hash(req.body.password, 10),
    });

    await user.save();

    next();
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
