config =
  name: 'rupert-config-angular.test'
  root: __dirname
  stassets:
    root: __dirname
    vendors:
      config:
        dependencies: {}

config.stassets.vendors.config.dependencies[__dirname + '/../src/config'] = yes

describe 'Rupert Config Angular', ->
  app = null
  rupert = require('rupert')(config)
  before (done)->
    rupert.start ->
      app = rupert.app
      done()

  it 'attaches types to the config', ->
    config.stassets.vendors.js.length.should.equal 8

  it 'registers Angular file types', ->
    config.stassets.scripts.types.length.should.equal 6
