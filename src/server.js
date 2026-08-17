'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');

const app = express();

app.use(logger);

app.get('/person', validator, (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});

app.use('*', notFoundHandler);

app.use(serverErrorHandler);

function start(port) {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

module.exports = {
  app,
  start,
};