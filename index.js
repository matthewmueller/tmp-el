/**
 * Module Dependencies
 */

var body = document.body;
var style = 'position: absolute; left: -10000px; top: -10000px';

/**
 * Export `tmp`
 */

module.exports = tmp;

/**
 * Initialize `tmp`
 */

function tmp(el, fn) {
  fn = fn || function(){};
  if (document.contains(el)) return fn(el);

  var tmp = document.createElement('div');
  tmp.style = style;

  tmp.appendChild(el);
  body.appendChild(tmp);

  var ret = ('string' == typeof fn) ? el[fn] : fn(el);

  body.removeChild(tmp);

  return ret;
}
