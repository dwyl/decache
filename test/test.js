// awesome tests here!
var test     = require('tape'); // the reliable testing framework
var decache  = require('../decache.js');
var mymodule = require('../lib/mymodule');

console.log(mymodule.count);

test('Expect mymodule.count initial state to be 0', function(t) {
  t.equal(mymodule.get(), 0, 'count is false! (we have not run this)');
  t.end();
});

test('Increment the value of the count so its 1 (one)', function(t) {
  var runcount = mymodule.exec();
  t.equal(runcount, 1, 'runcount is one! (as expected)');
  t.end();
});

test('Increment the value of the count so its 2 (one)', function(t) {
  mymodule.set();
  var runcount = mymodule.get();
  t.equal(runcount, 2, 'runcount is 2!');
  t.end();
});

test('There\'s no going back to initial (runcount) state!', function(t) {
  var runcount = mymodule.get();
  t.equal(runcount, 2, 'runcount cannot be decremented!!');
  t.end();
});

test('Delete Require Cache for mymodule to re-set the runcount!', function(t) {
  decache('../lib/mymodule'); // exercise the decache module
  mymodule = require('../lib/mymodule');
  var runcount = mymodule.get();
  t.equal(runcount, 0, 'runcount is zero! (as epxected)');
  t.end();
});
