# decache

In node.js when you `require()` a module, node stores a cached version of the
module, so that all subsequent calls to `require()` do not have to reload
the module from the filesystem.

_**De**lete **Cache**_ `decache` lets you delete modules from node.js `require()` cache
this is useful when _**testing**_ your modules/projects.
