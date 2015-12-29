"use strict";
var path = require("path");
var _ = require("lodash");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var base = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env,
  },
};

var specific = {
  development: {
    app: {
      port: 4444,
      name: "Koa React Redux Mocha - Dev",
      keys: [ "super-secret-hurr-durr" ],
    },
    // mongo: {
    //   url: "mongodb://localhost/koareactfullexample_dev",
    // },
  },
  test: {
    app: {
      port: 3001,
      name: "Koa React Redux Mocha - Test realm",
      keys: [ "super-secret-hurr-durr" ],
    },
    // mongo: {
    //   url: "mongodb://localhost/koareactfullexample_test",
    // },
  },
  production: {
    app: {
      port: process.env.PORT || 3000,
      name: "Koa React Redux Mocha",
    },
    // mongo: {
    //   url: "mongodb://localhost/koareactfullexample",
    // },
  },
};

module.exports = _.merge(base, specific[env]);
