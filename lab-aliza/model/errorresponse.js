'use strict';

// const morgan = require('morgan');
// const Error = require('./AppError');

const errorResponse = function(err, res, req, next){
  res.status(err.statusCode || 500).send(err.message);
  next();
};

module.exports = errorResponse;
