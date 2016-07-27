'use strict';

const morgan = require('morgan');
const Error = require('./AppError');

const errorResponse(err, req, res, next){
  if(err){
    res.status(err.statusCode || 500).send(err.message);
  }
}

module.exports = errorResponse;
