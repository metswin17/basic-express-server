'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');
const serverErrorHandler = require('./error-handlers/500.js');

const app = express();

app.use(logger);

/**
 * Handles GET requests to the /person route.
 * Returns a JSON object containing the validated name from the query string.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @returns {void}
 */


app.get('/person', validator, (req, res) => {
  res.status(200).json({
    name: req.query.name,
  });
});

app.use(notFoundHandler);

app.use(serverErrorHandler);

/**
 * Starts the Express server on the specified port.
 *
 * @param {number|string} port - The port on which the server will listen.
 * @returns {void}
 */


function start(port) {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

module.exports = {
  app,
  start,
};