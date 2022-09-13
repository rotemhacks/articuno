const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

module.exports = async function (req, res, next) {
  const options = {
    folder: `${req.user._id}/images`,
  };

  try {
    const result = await cloudinary.uploader
      .upload_stream({ folder: `${req.user._id}/images` }, (error, result) => {
        if (error) {
          throw error;
        }

        req.body.url = result.secure_url;
      })
      .end(req.file.buffer);

    next();
  } catch (err) {
    err.status ??= 400;
    next(err);
  }
};
