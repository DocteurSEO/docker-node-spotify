const express = require('express');

const artist = require('./artist');
const auth = require('./auth');

const mainRoute = express.Router();

mainRoute.use('/auth', auth);
mainRoute.use('/artist', artist);

module.exports = mainRoute;
