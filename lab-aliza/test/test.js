'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const server = require('../server');

describe('Http POST testing', () => {
  it('Test valid POST request', (done) => {
    request(server)
      .post('/api/user')
      .send({
        name: 'aliza'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body).to.include.keys('id', 'name', 'creationDate');
        expect(res.body.name).to.eql('aliza');
        done();
      });
  });
  it('test POST error', (done) => {
    request(server)
    .post('/api/user')
    .send({
      blah: 'blah'
    })
    .end(function(err, res) {
      expect(res).to.have.status(400);
      expect(res.body).to.eql('400 bad request');
      done();
    });
  });
});

describe('Http GET testing', () => {
  before((done) => {
    request(server)
      .post('/api/user')
      .send({
        name: 'aliza'
      })
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(res.body).to.include.keys('id', 'name', 'creationDate');
        expect(res.body.name).to.eql('aliza');
        done();
      });
  });
  it('test GET 404', (done) => {
    request(server)
    .get('/api/user/123')
    .end(function(err, res) {
      expect(res).to.have.status(404);
      expect(res.body).to.eql('404 not found');
      done();
    });
  });
});
