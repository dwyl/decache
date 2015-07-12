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
var decache  = require('decache');


```
