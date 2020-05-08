const express = require('express');

require('../controllers/redis_sub-controller');
const artist = require('./artist');

const mainRoute = express.Router();

mainRoute.use('/', artist);

module.exports = mainRoute;
