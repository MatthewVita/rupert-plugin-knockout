config =
  name: 'rupert-config-angular.test'
  root: __dirname
  stassets:
    root: __dirname
    vendors:
      config:
        dependencies: {}
      js: ['extra']

config.stassets.vendors.config.dependencies[__dirname + '/../src/config'] = yes

describe 'Rupert Config Angular', ->
  app = null
  rupert = require('rupert')(config)

  it 'attaches scripts to the config', ->
    config.stassets.vendors.js.length.should.equal 10

  it 'registers Angular file types', ->
    config.stassets.scripts.types.length.should.equal 6

  it 'loads before given vendors', ->
    config.stassets.vendors.js[9].should.equal['extra']
