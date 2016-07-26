'use strict';
const AppError = require('./apperror');
const uuid = require('node-uuid');

const User = function(name) {
  if(!name) return AppError.error400();
  this.id = uuid.v1();
  this.name = name;
  this.creationDate = Date.now();
};

module.exports = User;
