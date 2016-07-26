'use strict';

const Router = require('express').Router;
const appError = require('../model/apperror');
const UserConstructor = require('../model/userconstructor');
let router = Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(appError());

let user = new UserConstructor();
user.id = this.user.id;
user.name = this.user.name;
user.creationDate = this.user.creationDate;

router.get('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

router.post('/user', (req, res) => {
  res.status(200).json({name: req.body.name});
});

router.put('/user/:id', (req, res) => {
  res.status(200).json({id: req.params.id});
});

module.exports = router;
