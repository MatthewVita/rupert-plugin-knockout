var Path = require('path');

module.exports = function (config){
    config.scripts = { types: [
        'main', 'provider', 'filter', 'service', 'controller', 'directive'
    ]};

    config.vendors = config.vendors || {};
    config.vendors.prefix = config.vendors.prefix || [];
    config.vendors.prefix.push(Path.resolve(__dirname, '../node_modules'));

    config.vendors.js = [
        'angular-builds/angular.min.js',
        'angular-builds/angular-cookies.min.js',
        'angular-builds/angular-resource.min.js',
        'angular-builds/angular-sanitize.min.js',
        'angular-builds/angular-animate.min.js',
        'angular-builds/angular-touch.min.js',
        'angular-builds/angular-messages.min.js',
        'angular-builds/angular-aria.min.js',
        'angular-ui-router/release/angular-ui-router.js',
    ].concat(config.vendors.js || []);

    return config;
};
