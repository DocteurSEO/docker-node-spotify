const client = require('../controllers/redis-controller');

function cache(req, res, next) {
  const { query } = req.params;

  client.get(query, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send({ data: JSON.parse(data) });
    } else {
      next();
    }
  });
}

module.exports = cache;
