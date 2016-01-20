var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var config = require('./webpack.config');
var views = require('koa-render');
var underscore = require('underscore');


var app = require('koa')();
var port = 2020;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.use(views('./server/', {
    map: {
        html: 'underscore'
    }
}));
app.use(function* (next) {
    this.body = yield this.render('index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
