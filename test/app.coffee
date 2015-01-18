Path = require('path')
server =
  name: 'rupert-plugin-knockout.test'
  root: __dirname
  plugins:
    dependencies: {}
  stassets:
    root: './'
    vendors:
      prefix: ['.']
      js: ['extra.js']

server.plugins.dependencies[Path.resolve(__dirname, '../src/config')] = yes

rupert = require('rupert')(server)
config = rupert.config
unless describe?
  rupert.start()
else
  describe 'Rupert Plugin Knockout', ->
    it 'attaches scripts to the config', ->
      config.stassets.vendors.js.length.should.equal 10

    it 'registers Knockout file types', ->
      config.stassets.scripts.types.length.should.equal 0

    it 'loads before given vendors', ->
      config.stassets.vendors.js[9].should.equal['extra.js']
