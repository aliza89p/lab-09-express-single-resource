'use strict';

const Router = require('express').Router;
const debug = require('debug');
const serverlog = debug('serverlog');
const AppError = require('../model/apperror');
const User = require('../model/userconstructor');
let router = Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
let jsonParser = bodyParser.json();

const userPool = module.exports = exports = {};

router.get('/user/:id', (req, res) => {
  if(!userPool[req.params.id]){
    serverlog('error');
    return AppError.error400('400 bad request').respond(res);
  }
  serverlog(req.params.id);
  serverlog(userPool);
  var user = userPool[req.params.id];
  serverlog('user: ', user);
  return res.status(200).json(user);

});

router.get('/all', (req, res) => {
  serverlog(userPool);
  return res.status(200).json(userPool);
});

router.post('/user', jsonParser, (req, res) => {
  if(!req.body.name) {
    serverlog('error');
    return AppError.error400('400 bad request').respond(res);
  }
  var user = new User(req.body.name);
  userPool[user.id] = user;
  res.status(200).json(user);
  serverlog('users: ', userPool);
});

router.put('/user/:id', (req, res) => {
  if(!req.params.id){
    serverlog('error');
    return AppError.error404('404 not found').respond(res);
  }
  if(!req.body.name){
    serverlog('error');
    return AppError.error400('400 bad request').respond(res);
  }
  var user = new User(req.body.name);
  userPool[req.params.id] = user;
  res.status(200).json(user);
  serverlog('users: ', userPool);
});

router.delete('/user/:id', (req, res) => {
  if(!req.params.id){
    serverlog('error');
    return AppError.error404('404 not found').respond(res);
  }
  delete userPool[req.params.id];
  res.status(200).json(userPool);
  serverlog('users: ', userPool);
});

module.exports = router;
