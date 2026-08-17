'use strict';

const supertest = require('supertest');
const { app } = require('../src/server.js');

const request = supertest(app);

describe('Express Server', () => {

  test('returns a 404 on a bad route', async () => {
    const response = await request.get('/bad-route');

    expect(response.status).toEqual(404);
  });

  test('returns a 404 on a bad method', async () => {
    const response = await request.post('/person?name=fred');

    expect(response.status).toEqual(404);
  });

  test('returns a 500 if no name is in the query string', async () => {
    const response = await request.get('/person');
  
    expect(response.status).toEqual(500);
  });

  test('returns a 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=fred');
  
    expect(response.status).toEqual(200);
  });
  
  test('returns the correct name object', async () => {
    const response = await request.get('/person?name=fred');
  
    expect(response.body).toEqual({
      name: 'fred',
    });
  });

});