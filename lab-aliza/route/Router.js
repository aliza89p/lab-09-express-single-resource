'use strict';

const Router = require('express').Router;
const appError = require('../model/apperror');
const UserConstructor = require('../model/userconstructor');
let router = Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/user', bodyParser, appError, (req, res) => {
  res.status(200).json({id: req.body.id, name: req.body.name, creationDate: req.body.creationDate});
});

router.get('/user/:id/:name/:date', appError, (req, res) => {
  res.status(200).json({id: req.params.id, name: req.params.name, creationDate: req.params.creationDate});
});

router.use('/api', router);

module.exports = router;
