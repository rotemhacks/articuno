module.exports = async function ({ status, message, stack }, req, res, next) {
  res
    .status(status ?? 500)
    .send({ message: message || "unknown error", stack });
};
