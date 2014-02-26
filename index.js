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
  if (document.contains(el)) return get(el, fn);

  var tmp = document.createElement('div');
  tmp.style = style;

  tmp.appendChild(el);
  body.appendChild(tmp);

  var ret = get(el, fn);

  body.removeChild(tmp);

  return ret;
}

/**
 * Get
 */

function get(el, fn) {
  return 'string' == typeof fn ? el[fn] : fn(el);
}
