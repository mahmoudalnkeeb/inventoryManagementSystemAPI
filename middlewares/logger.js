const results = require('../utils/getReqIp');

const logger = (req, res, next) => {
  if (req.method == 'POST') {
    console.log(
      `Request: 
        BODY: ${req.body}
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
