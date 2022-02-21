const logger = async (req, res, next) => {
  const body = JSON.stringify(req.body);
  if (req.method == 'POST' || req.method == 'PUT') {
    console.log(
      `Request: 
        METHOD: ${req.method}
        BODY: ${body}
        PATH: ${req.path} 
        `
    );
    next();
  } else {
    console.log(
      `Request: 
        METHOD: ${req.method}
        PATH: ${req.path}`
    );
    next();
  }
};
module.exports = logger;
