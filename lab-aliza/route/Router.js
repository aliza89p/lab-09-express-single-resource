'use strict';

const Router = require('express').Router;
const debug = require('debug');
const serverlog = debug('serverlog');
const appError = require('../model/apperror');
const User = require('../model/userconstructor');
let router = Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
let jsonParser = bodyParser.json();

const userPool = {};

router.get('/user/:id', (req, res) => {
  serverlog(req.params.id);
  serverlog(userPool);
  var user = userPool[req.params.id];
  serverlog('user: ', user);
  res.status(200).json(user);
});

router.post('/user', jsonParser, (req, res) => {
  res.status(200).json({name: req.body.name});
  if(req.body){
    var user = new User(req.body.name);
    userPool[user.id] = user;
    serverlog('users: ', userPool);
  }
});

router.put('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

module.exports = router;
