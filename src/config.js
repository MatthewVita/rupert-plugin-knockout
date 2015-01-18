var Path = require('path');

var cts = require('rupert').Stassets.constructors;

TW.prototype.concat = cts.SourceMap.prototype.concat; // Skip the globals.

module.exports = function (config){
    var nm = Path.resolve(__dirname, '../node_modules');
    config.append('stassets.vendors.prefix', nm);

    config.prepend('stassets.vendors.js', [
        'knockout/build/output/knockout-latest.js'
    ]);
};

module.exports.Gruntfile = require('./Gruntfile');
