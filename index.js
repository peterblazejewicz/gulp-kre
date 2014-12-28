'use strict';
var Command = require('./utils/command');
//
var kre = module.exports = function() {
  this.isWindows = /^win/.test(process.platform);
};
//
kre.build = function() {
  var command = new Command('kpm build');
}

kre.kestrel = function() {
  var command = new Command('k kestrel');
};

kre.restore = function() {
  var command = new Command('kpm restore');
};

kre.run = function() {
  var command = new Command('k run');
};

kre.serve = function() {
  if (this.isWindows) {
    this.web();
  } else {
    this.kestrel();
  }
}

kre.web = function() {
  var command = new Command('k web');
}