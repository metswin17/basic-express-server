'use strict';

/**
 * Validates that the request query string contains a name property.
 * Passes control to the next middleware when valid and forces an error when missing.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - Passes control to the next middleware or error handler.
 * @returns {void}
 */


function validator(req, res, next) {
  if (req.query.name) {
    next();
  } else {
    next('Name is required');
  }
}

module.exports = validator;