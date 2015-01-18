var Path = require('path');

module.exports = function (config){
  config.append('stassets.vendors.prefix', [
    Path.resolve(__dirname, '../node_modules')
  ]);

  config.prepend('stassets.vendors.js', [
    'jquery/dist/jquery.js',
    'knockout/build/output/knockout-latest.js'
  ]);
};

module.exports.Gruntfile = require('./Gruntfile');
