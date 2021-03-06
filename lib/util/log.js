var logger = require('pomelo-logger-ts');

/**
 * Configure pomelo logger
 */
module.exports.configure = function (app, filename) {
  var serverId = app.getServerId();
  var base = app.getBase();
  logger.configure(filename, { serverId: serverId, base: base });
};
