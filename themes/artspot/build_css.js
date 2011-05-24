#!/usr/bin/env node

var stylus = require('stylus')
  , nodes = stylus.nodes
  , args = process.argv.splice(2)
  , path = args[0]
  , str = require('fs').readFileSync(path, 'utf8');

stylus(str)
  .set('filename', path)
  .define('url', stylus.url({ paths: [__dirname + "/img"] }))
  .render(function(err, css) {
    if (err) {
      throw err;
    }
    console.log(css);
  });
