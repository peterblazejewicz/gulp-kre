'use strict';
var exec = require('child_process').exec;
var chalk = require('chalk');
//
function Command(commandString) {
  var child = this.process = exec(commandString, function(err, stdout, stderr) {});
  var self = this;
  child.stdout.on('data', function(data) {
    var out = self.stringify(data);
    out && console.log(chalk.yellow(out));
  });
  child.stderr.on('data', function(data) {
    var out = self.stringify(data);
    out && console.log(chalk.red(out));
  });
}
Command.prototype.stringify = function(data) {
  return data.toString().trim();
}

module.exports = Command;