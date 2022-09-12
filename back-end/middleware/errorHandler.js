module.exports = async function ({ status, message }, req, res, next) {
  res.status(status ?? 500).send({ message: message || "unknown error" });
};
