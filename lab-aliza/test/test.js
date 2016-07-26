'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

require('../server');

describe('test', () => {
  it('test', (done) => {
    expect('test').to.eql('test');
    done();
  });
});
