const { Post } = require("../schemas/post.schema");

exports.addPost = async function (req, res, next) {
  try {
    const post = new Post({
      ...req.body,
      tags: req.body.tags.split(",").map((tag) => tag.trim()),
      author: req.user._id,
    });
    res.send(await post.save());
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.getPost = async function (req, res, next) {
  try {
    const post = await Post.findById(req.params.id);
    res.send(post);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.getFriendsPosts = async function (req, res, next) {
  try {
    const posts = await Post.find({ author: { $in: req.user.friends } });
    res.send(posts);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
