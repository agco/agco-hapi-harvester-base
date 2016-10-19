const chai = require('chai');
const expect = chai.expect;

const startServer = require('../app');

describe('The server is running', () => {
  let server;
  before(() => startServer().then(s => (server = s)));

  it('lets us inject a request for root', () =>
    server.injectThen('/')
    .then(res => {
      expect(res.statusCode).to.equal(200);
      expect(res.result).to.equal('Hello!');
    })
  );
});
