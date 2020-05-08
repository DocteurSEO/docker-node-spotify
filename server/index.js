const express = require('express')
const redis = require('redis')
// const axios = require('axios')

const PORT = process.env.PORT || 4000
const REDIS_HOST = process.env.REDIS_HOST || 'redis-server'
const REDIS_PORT = process.env.REDIS_PORT || 6379

console.log(REDIS_HOST)

const redisClient = redis.createClient({
  host: REDIS_HOST,
  port: REDIS_PORT,
})

const app = express()

redisClient.set('run', true)

app.listen(PORT, () => {
  console.log('App listening on port', PORT)
})
