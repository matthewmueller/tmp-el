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
 *
 * @param {Element|String} el
 * @param {Function|String} fn
 * @return {String} 
 */

function tmp(el, fn) {
  fn = fn || function() {};

  // if the el is already in the dom, just call fn
  if (document.contains(el)) return get(el, fn);

  // create the temporary element
  var tmp = document.createElement('div');
  tmp.style = style;

  // handle strings
  if ('string' == typeof el) tmp.innerHTML = el;
  else tmp.appendChild(el);

  // add the el to the DOM, call fn, and remove it
  body.appendChild(tmp);
  var ret = get(tmp.lastChild, fn);
  body.removeChild(tmp);

  // return the value we obtained
  return ret;
}

/**
 * Get the value
 *
 * @param {Element} el
 * @param {Function|String} fn
 * @return {String}
 */

function get(el, fn) {
  return 'string' == typeof fn ? el[fn] : fn(el);
}
