process.env.NEW_RELIC_NO_CONFIG_FILE = 'True'; require('newrelic');
require('@risingstack/trace'); // Application monitoring

module.exports = {
  config: require('./config'),
  logger: require('./logger'),
  middleware: {
    requestLogger: require('./koa-middleware/request-logger'),
    swaggerModelValidator: require('./koa-middleware/swagger-model-validator')
  }
};
