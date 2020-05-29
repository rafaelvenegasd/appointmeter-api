const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use (morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//routes
app.use(routes);

module.exports = app;
