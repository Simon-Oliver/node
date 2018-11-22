const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

it('should return Hello World response', done => {
  request(app)
    .get('/')
    .expect(res => {
      expect(res.body).toInclude({
        name: 'ToDo'
      });
    })
    .end(done);
});
