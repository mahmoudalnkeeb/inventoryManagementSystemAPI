const results = require('../utils/getReqIp');

const logger = (req, res, next) => {
  if (req.method == 'POST') {
    console.log(
      `Request: 
         BODY: ${req.body}
         PATH: ${req.path} 
         from ip ${JSON.stringify(results)} `
    );
    next();
  } else {
    console.log(
      `Request: ${req.method} ${req.path} from ip ${JSON.stringify(
        results
      )} `
    );
    next();
  }
};
module.exports = logger;
