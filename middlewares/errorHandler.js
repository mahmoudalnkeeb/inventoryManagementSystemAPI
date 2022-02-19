const errHandler = (err, req, res, next) => {
  if (err) {
    console.log(err);
    return res.status(500).json({ message: 'something went wrong' });
  }
  next();
};
module.exports = errHandler;
