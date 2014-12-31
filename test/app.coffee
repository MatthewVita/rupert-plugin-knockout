Path = require('path')
config =
  name: 'rupert-config-angular.test'
  root: __dirname
  stassets:
    root: './'
    vendors:
      prefix: ['.']
      config:
        dependencies: {}
      js: ['extra.js']

config.stassets.vendors.config.dependencies[Path.relative(__dirname, '../src/config')] = yes

rupert = require('rupert')(config)
unless describe?
  rupert.start()
else
  describe 'Rupert Config Angular', ->
    it 'attaches scripts to the config', ->
      config.stassets.vendors.js.length.should.equal 10

    it 'registers Angular file types', ->
      config.stassets.scripts.types.length.should.equal 6

    it 'loads before given vendors', ->
      config.stassets.vendors.js[9].should.equal['extra.js']

    it 'injects into the $templateCache', (done)->
      rupert.app.stassets.promise.then ->
        require('supertest')(rupert.app)
        .get('/templates.js')
        .expect(200)
        .expect ({text})->
            text.indexOf('window').should.equal -1
            text.indexOf('$templateCache').should.be.greaterThan -1
            text.indexOf('fixtures').should.be.greaterThan -1
            return
        .end(done)
