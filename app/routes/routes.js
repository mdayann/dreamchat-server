const log = require('../middlewares/log');
const _response = require('../middlewares/_response');

module.exports = (app) => {
  app.use(log);

  //Initial route
  app.get('/', (req, res) => {
    return _response(res, 200, 'API Service running.', null, null);
  });
};
