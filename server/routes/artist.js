const express = require('express');

const asyncHandler = require('../helpers/errors/async-handler');
const { getArtistWithAlbums } = require('../controllers/artist-controller');
const cache = require('../middleware/cache');

const artist = express.Router();

const token =
  'BQBYRHM5byu1SI3pnDtugn6LijpAMSU_JyL4395qlQ0UUm5pNvJsVNbCBUHemB8M2g_3Cd1rmnO8q2J1lgeEHgjG69gy22sPLATXp2cGuzgdVMlrI9lMAtOZSJUfD1xFgcgfeBWQ_6AACekp_P-WdF17TDchzmrVXK0';

artist.get(
  '/:query',
  cache,
  asyncHandler(async (request, response) => {
    const dataArtist = await getArtistWithAlbums(request.params.query, token);
    response.status(200).json(dataArtist);
  }),
);

module.exports = artist;
