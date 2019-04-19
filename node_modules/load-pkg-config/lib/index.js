var path = require('path')
var resolve = require('resolve-pkg')

var runCwd = process.cwd()
function load (name, cwd) {
  var pkg = null
  if (!cwd) {
    cwd = runCwd
  }
  var modulePath = cwd
  if (name !== '.') {
    modulePath = resolve(name, {
      cwd: cwd
    })
  }
  try {
    pkg = require(path.join(modulePath, 'package.json'))
    pkg.modulePath = modulePath
  } catch (e) {}
  return pkg
}

module.exports = load
