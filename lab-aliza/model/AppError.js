'use strict';

const AppError = function(message, statusCode, resMessage) {
  this.message = message;
  this.statusCode = statusCode;
  this.resMessage = resMessage;
};

AppError.prototype = Object.create(Error.prototype);

AppError.hasError = function(err){
  return err instanceof AppError;
};

AppError.error400 = function(err){
  return new AppError(err, 400, 'bad request');
};

AppError.error404 = function(err){
  return new AppError(err, 404, 'not found');
};

AppError.error500 = function(err){
  return new AppError(err, 404, 'internal service error');
};

module.exports = AppError;
