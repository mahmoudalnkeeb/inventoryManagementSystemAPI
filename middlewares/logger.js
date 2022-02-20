const results = require('../utils/getReqIp');

const logger = (req, res, next) => {
  if (req.method == 'POST' || req.method == 'PUT') {
    console.log(
      `Request: 
        METHOD: ${req.method}
        BODY: ${JSON.stringify(req.body)}
        PATH: ${JSON.stringify(req.path)} 
        IP: from ip ${JSON.stringify(results)} `
    );
    next();
  } else {
    console.log(
      `Request: 
        METHOD: ${req.method}
        PATH: ${req.path}
        IP: from ip ${JSON.stringify(results)} `
    );
    next();
  }
};
module.exports = logger;
