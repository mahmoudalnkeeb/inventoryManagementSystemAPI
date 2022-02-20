const bodyParser = require('body-parser');
const express = require('express');
const mongoose  = require('./config/db');
const errHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const app = express();
const routes = require('./routes/routes');
const logger = require('./middlewares/logger');

//middlewares

mongoose;
app.use(
  cors({
    optionsSuccessStatu: 200,
    origin: '*',
  })
);
app.use(express.json());
app.use(logger);
app.use(errHandler);
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(routes);


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'http://127.0.0.1';

app.listen(port, () => {
  console.log(`Inventory Management System is now running on ${host}:${port}`);
});