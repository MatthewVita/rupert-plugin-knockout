Path = require('path');

module.exports = function(grunt, config){
  config.prepend('client.test.tools', [].map(function(_){
    return Path.join(__dirname, "../node_modules/", _);
  }));
};
