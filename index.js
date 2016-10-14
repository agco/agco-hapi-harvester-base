const config = require('config');
const Hapi = require('hapi');
const injectThen = require('inject-then');
const port = config.get('server.port');
const server = new Hapi.Server();

server.connection({ port });
module.exports = () =>
  server.register(injectThen)
  .then(() => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (req, rep) => rep('Hello!')
    });
    return server.start()
    .then(() => server);
  });
