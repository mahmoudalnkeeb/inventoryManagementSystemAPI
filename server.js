const bodyParser = require('body-parser');
const express = require('express');
const mongoose  = require('./config/db');
const app = express();
const routes = require('./routes/routes');

//middlewares

mongoose
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(routes)

const port = process.env.PORT || 3000
app.listen(port , ()=>{
    console.log(`Inventory Management System is now running on http://127.0.0.1:${port}`);
});