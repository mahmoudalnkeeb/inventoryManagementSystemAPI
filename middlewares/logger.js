const fetch = require('node-fetch');

const logger = async (req, res, next) => {
  const body = JSON.stringify(req.body);
  const response = await fetch('http://ip-api.com/json/');
  const data = await response.json();
  const reqData = data;
  if (req.method == 'POST' || req.method == 'PUT') {
    console.log(
      `Request: 
        METHOD: ${req.method}
        BODY: ${body}
        PATH: ${req.path} 
        IP:  ${reqData.query} 
        COUNTRY:  ${reqData.country} 
        REGION:  ${reqData.regionName}
        `
    );
    next();
  } else {
    console.log(
      `Request: 
        METHOD: ${req.method}
        PATH: ${req.path}
        IP:  ${reqData.query} 
        COUNTRY:  ${reqData.country} 
        REGION:  ${reqData.regionName} `
    );
    next();
  }
};
module.exports = logger;
