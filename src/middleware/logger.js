'use strict';

/**
 * Logs the HTTP request method and path for each incoming request.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - Passes control to the next middleware function.
 * @returns {void}
 */


function logger(req, res, next) {
  console.log(req.method, req.path);
  next();
}

module.exports = logger;