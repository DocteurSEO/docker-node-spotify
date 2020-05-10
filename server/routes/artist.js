const express = require('express');
const axios = require('axios');

const asyncHandler = require('./errors/async-handler');
const redisCache = require('../controllers/redis-controller');

const artist = express.Router();

const BASE_URL = 'https://api.spotify.com/v1/artists/';

artist.get(
  '/:id',
  asyncHandler(async (request, response) => {
    const singer = await axios.get(BASE_URL + request.params.id, {
      headers: {
        Authorization: `Bearer BQCfeyMDl1GDaF_Ij1ZYffNAYhcgcQkuNMtd2j7ug3lEuH2RQ5lFKwVaqglQOSyv_StEeVgPUijuJPpK6orChZDBXGlEJ5bslzuMN1AJMYuXuUJRWWvFAvnMpcNmIXlIFaYGItxFRnkuIzoh30HfuLJobgykP10B2tg`,
      },
    });

    const { name, images } = singer.data;
    const cacheDataArtist = { name, imageURL: images[1].url };
    const idArtist = request.params.id;
    redisCache.set(idArtist, JSON.stringify(cacheDataArtist));

    response.status(200).json(cacheDataArtist);
  }),
);

module.exports = artist;
