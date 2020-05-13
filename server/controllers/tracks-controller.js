const redisCache = require('./redis-controller');
const fetchData = require('../helpers/fetch-data');

const BASE_URL = 'https://api.spotify.com/v1/albums/';

tracksController = {
  getTracks: async (idAlbum, token) => {
    const tracks = await fetchData(
      BASE_URL + `${idAlbum}/tracks?market=FR`,
      token,
    );

    const dataTacks = tracks.data;

    const tracksDataCache = redisCache.set(idAlbum, JSON.stringify(dataTacks));
    return { data: dataTacks };
  },
};
module.exports = tracksController;
