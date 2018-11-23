const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return Hello World response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).toInclude({
            name: 'ToDo'
          });
        })
        .end(done);
    });
  });
  describe('GET /users', () => {
    it('should return array ', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: 'Max', age: 34 });
        })
        .end(done);
    });
  });
});
