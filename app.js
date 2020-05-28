const express = require('express');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes/index.js');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use (morgan('dev'));
app.use(express.urlencoded({extended: true}));

//routes
app.use(routes);

module.exports = app;
