const express = require('express');

const asyncHandler = require('../helpers/errors/async-handler');
const { getArtistWithAlbums } = require('../controllers/artist-controller');
const cache = require('../middleware/cache');

const artist = express.Router();

artist.get(
  '/:query',
  cache,
  asyncHandler(async (request, response) => {
    const token = request.headers.token;
    console.log(token);
    const dataArtist = await getArtistWithAlbums(request.params.query, token);
    response.status(200).json(dataArtist);
  }),
);

module.exports = artist;
