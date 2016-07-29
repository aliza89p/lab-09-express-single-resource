'use strict';

const express = require('express');
const morgan = require('morgan');
let app = express();
let router = require('./route/Router');


app.use(morgan('combined'));



app.use('/api', router);

app.listen(3000, () => console.log('server up at 3000'));

module.exports = app;
