const results = require('../utils/getReqIp');

const logger = (req, res, next) => {
  const body = JSON.stringify(req.body);
  if (req.method == 'POST' || req.method == 'PUT') {
    console.log(
      `Request: 
        METHOD: ${req.method}
        BODY: ${body}
        PATH: ${req.path} 
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
