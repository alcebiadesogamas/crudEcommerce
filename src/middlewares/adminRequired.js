export default (req, res, next) => {
  const { admin } = req;

  if (!admin) {
    return res.status(403).json({
      errors: ['Admin required'],
    });
  }

  return next();
};
