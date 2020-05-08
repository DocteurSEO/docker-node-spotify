const server = require('./server');

const port = process.env.PORT || 4000;

/* eslint-disable no-console */
server.listen(port, () => {
  console.debug(`Server is listening on port ${port}`);
});
