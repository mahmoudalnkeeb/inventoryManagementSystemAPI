const bodyParser = require('body-parser');
const express = require('express');
const mongoose  = require('./config/db');
const errHandler = require('./middlewares/errorHandler');
const app = express();
const routes = require('./routes/routes');

//middlewares

mongoose;
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(routes);
app.use(errHandler);

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://127.0.0.1';

app.listen(port, () => {
  console.log(`Inventory Management System is now running on ${host}:${port}`);
});