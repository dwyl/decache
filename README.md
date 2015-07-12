# decache

In node.js when you `require()` a module, node stores a cached version of the
module, so that all subsequent calls to `require()` do not have to reload
the module from the filesystem.

`decache` ( _**De**lete **Cache**_ ) lets you delete modules from node.js `require()` cache
this is useful when _**testing**_ your modules/projects.

## Why?

When testing our modules we often need to re-require the module being tested.
This makes it easy.

## What?

An easy way to delete a cached module.

## How? (_usage_)

### install

Install the module from npm:

```sh
npm install decache --save-dev
```

### Use it in your code:

```js
// require the decache module:
var decache = require('decache');

// require a module that you wrote"
var mymod = require(__dirname + '/mymodule.js');

// use your module the way you need to:
console.log(mymod.count()); // 0   (the initial state for our counter is zero)
console.log(mymod.incrementRunCount()); // 1

// if your module has an initial state that you want to re-set:
mymod = require(__dirname + '/mymodule.js'); // fresh start
console.log(mymod.count()); // 0   (back to initial state ... zero)
```

If you have any questions or need more examples, please create a GitHub issue:
https://github.com/nelsonic/decache/issues

_**Thanks**_!
