const redis = require('redis');

const REDIS_HOST = process.env.REDIS_HOST || 'redis-server';
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
  retry_strategy: () => 1000,
});
const redisSubscriber = redisClient.duplicate();

redisSubscriber.on('message', (channel, message) => {
  redisClient.set(message, 'api response');
});
redisSubscriber.subscribe('insert');

module.exports = redisSubscriber;
