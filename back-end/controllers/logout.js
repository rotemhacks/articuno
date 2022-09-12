module.exports = async function (req, res, next) {
  try {
    res.clearCookie("access_token").send({ message: "logged out" });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
