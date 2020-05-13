const redisCache = require('../controllers/redis-controller');
const fetchData = require('../helpers/fetch-data');

const BASE_URL = 'https://api.spotify.com/v1/';

artistController = {
  getArtistWithAlbums: async (nameArtist, token) => {
    const QUERY_URL =
      'search?query=' + nameArtist + '&type=artist&market=FR&offset=0&limit=1';

    const artist = await fetchData(BASE_URL + QUERY_URL, token);

    const {
      id,
      name,
      images,
      genres,
      followers,
    } = artist.data.artists.items[0];

    const ALBUMS_URL = BASE_URL + `artists/${id}/albums?market=FR`;

    const albums = await fetchData(ALBUMS_URL, token);

    const dataAlbums = albums.data.items;

    const dataArtist = {
      name,
      imageURL: images[1].url,
      genres,
      followers: followers.total,
      dataAlbums,
    };

    const artistDataCache = redisCache.set(
      nameArtist,
      JSON.stringify(dataArtist),
    );

    return { data: dataArtist };
  },
};
module.exports = artistController;
