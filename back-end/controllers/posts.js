const { Post } = require("../schemas/post.schema");

exports.addPost = async function (req, res, next) {
  try {
    const post = new Post({ ...req.body, author: req.user._id });
    res.send(await post.save());
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
