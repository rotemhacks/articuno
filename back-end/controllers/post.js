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

exports.getPosts = async function (req, res, next) {
  try {
    const showNsfw = !!req.user?.shownsfw;

    const posts = await Post.find(showNsfw ? null : { nsfw: false });
    res.send(posts);
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

exports.getSubsPosts = async function (req, res, next) {
  try {
    const posts = await Post.find({ tags: { $in: req.user.subscriptions } });
    res.send(posts);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.getFavPosts = async function (req, res, next) {
  try {
    const posts = await Post.find({ _id: { $in: req.user.favorites } });
    res.send(posts);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.getOwnPosts = async function (req, res, next) {
  try {
    const posts = await Post.findById(req.user._id);
    res.send(posts);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.getPostsByTags = async function (req, res, next) {
  try {
    const posts = await Post.find({ tags: { $in: req.body.tags } });
    res.send(posts);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.addToFavorites = async function (req, res, next) {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      favorites: { $push: id },
    });

    res.send({ postId: id });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};

exports.removeFromFavorites = async function (req, res, next) {
  const { id } = req.params;

  try {
    await User.findByIdAndUpdate(req.user._id, {
      favorites: { $pull: id },
    });

    res.send({ postId: id });
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
