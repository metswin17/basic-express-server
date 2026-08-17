'use strict';

function validator(req, res, next) {
  if (req.query.name) {
    next();
  } else {
    next('Name is required');
  }
}

module.exports = validator;