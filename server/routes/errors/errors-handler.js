const express = require('express');

const handleError = express.Router();

handleError.use((request, response, next) => {
  const error = new Error('oups ... pas trouvé');
  error.status = 404;
  next(error);
});

handleError.use((error, request, response, next) => {
  response.status = error.status || 500;
  console.log('catch', error);
  response.json({
    error: {
      message: error.message || 'bad request',
    },
  });
});

module.exports = handleError;
