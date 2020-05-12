const express = require('express');

const asyncHandler = require('../helpers/errors/async-handler');
const { getTracks } = require('../controllers/tracks-controller');
const cache = require('../middleware/cache');

const tracks = express.Router();

tracks.get(
  '/:query',
  cache,
  asyncHandler(async (request, response) => {
    const token = request.headers.token;
    const dataTracks = await getTracks(request.params.query, token);
    response.status(200).json(dataTracks);
  }),
);

module.exports = tracks;
