/**
 * Module Dependencies
 */

var tmp = require('tmp-el');
var assert = require('assert');
var domify = require('domify');

/**
 * Tests
 */

describe('tmp-el', function() {
  it('fn: should attach elements temporarily', function() {
    var el = domify('<h2>hi there</h2>');
    assert(0 == el.offsetHeight);
    height = tmp(el, function(el) {
      return el.offsetHeight;
    });
    assert(28 == height);
    assert(0 == el.offsetHeight);
  })

  it('str: should attach elements temporarily', function() {
    var el = domify('<h2>hi there</h2>');
    assert(0 == el.offsetHeight);
    height = tmp(el, 'offsetHeight');
    assert(28 == height);
    assert(0 == el.offsetHeight);
  })

  it('should allow you to pass in strings', function() {
    var width = tmp('<h2>hi</h2>', 'offsetWidth');
    assert(960 == width);
  })
})
