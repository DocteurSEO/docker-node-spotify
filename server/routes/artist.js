const express = require('express');

const redisPublisher = require('../controllers/redis_pub-controller');

const artist = express.Router();

artist.get('/:id', async (request, response) => {
  redisPublisher.publish('insert', request.params.id);
  console.log(request.params.id);
  response.status(201).json({ test: 'colo' });
});

module.exports = artist;
