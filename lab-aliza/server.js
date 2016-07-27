'use strict';

const express = require('express');
let app = express();
let router = require('./route/Router');

app.use('/api', router);

app.listen(3000, () => console.log('server up at 3000'));

module.exports = app;
