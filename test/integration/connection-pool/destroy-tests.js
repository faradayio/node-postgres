var helper = require(__dirname + "/../test-helper");
var pg = require(__dirname + "/../../../lib");

pg.connect(helper.config, assert.success(function(client, done) {
  done(new Error())
  assert.ok(client.connection.stream._writableState.ended, 'connection should be closed')
}))
