const config = require('config');
const Hapi = require('hapi');
const harvester = require('hapi-harvester');
const injectThen = require('inject-then');
const polyglot = require('hapi-harvester-polyglot');
const port = config.get('server.port');
const server = new Hapi.Server();

console.log('config', config.db);

const harvesterRegister = {
  register: harvester,
  options: { adapter: harvester.getAdapter('mongodb')(config.db.mongodbUrl) }
};

server.connection({ port });
module.exports = () =>
  server.register([injectThen,
    harvesterRegister,
    polyglot])
  .then(() => {
    console.log('Hapi app listening on: ', port);
    server.route({
      method: 'GET',
      path: '/',
      handler: (req, rep) => rep('Hello!')
    });
    return server.start()
    .then(() => server);
  });

process.on('SIGTERM', () => {
  server.stop(e => {
    console.log('SIGTERM ERROR: ', e);
  });
});
