# load-pkg-config

> Load the package.json for a module currently installed in node_modules, or at the given cwd.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save load-pkg-config
```

## Usage

```js
var load = require('load-pkg-config')
```

```js
var pkg = load('kind-of')
console.log(pkg.name)
//=> 'kind-of'

var pkg = load('./foo', 'your/cwd')
console.log(pkg.name)
//=> 'your module'
```
