'use strict';

const express = require('express');
const morgan = require('morgan');
const errorResponse = require('./model/errorresponse');
const AppError = require('./model/AppError');
let app = express();
let router = require('./route/Router');

app.use(errorResponse());

app.use(morgan('dev'));

app.use('/api', router);

app.use((req, res) => {
  res.sendError(AppError.error404('not found'));
});

app.listen(3000, () => console.log('server up at 3000'));

module.exports = app;
