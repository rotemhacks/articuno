module.exports = function (req, res, next) {
  const { user, params } = req;

  try {
    if (user._id !== params.id && !user.isAdmin) {
      throw { status: 403, message: "access denied" };
    }

    next();
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
