const logger = (req, res, next) => {
  console.log(
    `Request: ${req.method} ${req.path} from ip ${req.socket.remoteAddress}`
  );
  next();
};

module.exports = logger;
