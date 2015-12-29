"use strict";
/**
 * Dependencies
 */
const koa = require("koa");

/**
 * Config
 */
const config = require("./config/config");

/**
 * Server
 */
const app = module.exports = koa();

require("./config/koa")(app, config);

// Routes
require("./config/routes")(app);

// Start app
if (!module.parent) {
  app.listen(config.app.port);
  console.log("Server started, listening on port: " + config.app.port);
}
console.log("Environment: " + config.app.env);
