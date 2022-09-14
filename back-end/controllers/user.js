const { User } = require("../schemas/user.schema");

exports.subscribe = async function (req, res, next) {
  const { tag } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      subscriptions: { $push: tag },
    });

    res.send({ tag });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.unsubscribe = async function (req, res, next) {
  const { tag } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      subscriptions: { $pull: tag },
    });

    res.send({ tag });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.addToBlacklist = async function (req, res, next) {
  const { tag } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      blacklist: { $push: tag },
    });

    res.send({ tag });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.removeFromBlacklist = async function (req, res, next) {
  const { tag } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      blacklist: { $pull: tag },
    });

    res.send({ tag });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.updateUser = async function (req, res, next) {
  const { password, isadmin, ...newData } = req.body;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      $set: newData,
    });

    res.send({ tag });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
