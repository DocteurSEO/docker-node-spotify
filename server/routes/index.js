const express = require('express');

const auth = require('./auth');
const artist = require('./artist');
const tracks = require('./tracks');

const mainRoute = express.Router();

mainRoute.use('/auth', auth);
mainRoute.use('/artist', artist);
mainRoute.use('/tracks', tracks);

module.exports = mainRoute;
