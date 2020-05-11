const client = require('../controllers/redis-controller');

function cache(req, res, next) {
  const { name } = req.params;

  client.get(name, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send({ dataArtist: JSON.parse(data) });
    } else {
      next();
    }
  });
}

module.exports = cache;
