'use strict';

const Router = require('express').Router;
const debug = require('debug');
const serverLog = debug('serverlog');
const appError = require('../model/apperror');
const UserConstructor = require('../model/userconstructor');
let router = Router();
var bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
router.use(jsonParser);

router.get('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

router.post('/user', jsonParser, (req, res) => {
  if(!req.body) return res.sendStatus(400);
  res.status(200).json({name: req.body.name});
});

router.put('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

module.exports = router;
