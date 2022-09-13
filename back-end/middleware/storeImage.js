const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

module.exports = async function (req, res, next) {
  try {
    const result = await cloudinary.uploader
      .upload_stream({ folder: `${req.user._id}/images` }, (error, result) => {
        if (error) {
          throw error;
        }

        req.body.url = result.secure_url;
        next();
      })
      .end(req.file.buffer);
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
