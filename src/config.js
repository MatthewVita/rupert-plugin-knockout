var Path = require('path');

module.exports = function (config){

    config.vendors.prefix.push(Path.resolve(__dirname, '../node_modules'));

    config.vendors.js = config.vendors.js.concat([
        'angular-builds/angular.min.js',
        'angular-builds/angular-cookies.min.js',
        'angular-builds/angular-resource.min.js',
        'angular-builds/angular-sanitize.min.js',
        'angular-builds/angular-animate.min.js',
        'angular-builds/angular-touch.min.js',
        'angular-builds/angular-messages.min.js',
        'angular-ui-router/release/angular-ui-router.js',
    ]);

    config.vendors.css = config.vendors.css.concat ([
    ]);

    return config;
};
