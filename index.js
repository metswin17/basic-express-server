'use strict';

/**
 * Entry point for the Basic Express Server application.
 * Loads environment variables, imports the server module,
 * determines the port, and starts the server.
 *
 * @module index
 */


require('dotenv').config();

const server = require('./src/server.js');

const PORT = process.env.PORT || 3000;

server.start(PORT);