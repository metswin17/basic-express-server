'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');

const request = supertest(app);

describe('Express Server', () => {

  test('returns a 404 on a bad route', async () => {
    const response = await request.get('/bad-route');

    expect(response.status).toEqual(404);
  });

});