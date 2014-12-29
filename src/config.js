var Path = require('path');

var TemplateWatcher = require('stassets/lib/Watchers/Template');
TemplateWatcher.prototype.getModuleName = function(shortPath){
    var module = shortPath.replace(/\//g, '.') + '.template';
    if (moduleRoot = this.config.templates.baseModule){
        module = "" + moduleRoot + "." + module;
    }
    return module;
};

TemplateWatcher.prototype.cache = function(path){
    debugger;
    var shortPath = this.getShortPath(path);

    var module = this.getModuleName(shortPath);

    var pre =[
        "angular.module(", "'", module, "'", ", ", "[]", ")",
        ".run(function($templateCache){",
        "$templateCache.put(", "'", shortPath, "'", ",", " '"
    ];
    var post = [
        "');", "});"
    ];

    return {pre: pre, post: post};
};

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
