const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      res.status = err.status || 500;
      res.json({
        error: {
          message: err,
        },
      });
    }
  };
};

module.exports = asyncHandler;
