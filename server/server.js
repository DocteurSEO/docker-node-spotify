const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');

const routes = require('./routes');
const handleErrors = require('./helpers/errors/errors-handler');

const server = express();

server.use(helmet());
server.use(cors());
server.use(logger('tiny'));
server.use(express.json());

server.use('/api', routes);

server.use(handleErrors);

module.exports = server;
