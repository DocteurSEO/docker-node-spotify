const express = require('express');

const asyncHandler = require('../helpers/errors/async-handler');
const { gettracksWithAlbums } = require('../controllers/tracks-controller');
const cache = require('../middleware/cache');

const tracks = express.Router();

const token =
  'BQATuOB_0iY75D99B2IgvDHzMOimuhYlYbkMZmSXDKNcCRT_XwT70LMXWT-_59qjafdWfCeSSPthYMMduQh6f45VlAuYpltJ3yceHFls2zQEM9h3u5GcY8ejYw2tPj_srPWl50pjgphczk_YEUCVM-PZdown1wPNQUc';

tracks.get(
  '/:name',
  cache,
  asyncHandler(async (request, response) => {
    const datatracks = await gettracksWithAlbums(request.params.name, token);
    response.status(200).json(datatracks);
  }),
);

module.exports = tracks;
