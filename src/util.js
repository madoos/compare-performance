'use strict'

const R = require('ramda')

module.exports = {
  instance,
  makeLoop,
  values: R.curry(values)
}

/**
 *
 *
 * @param {Function} Constructor
 * @param {<MixValue, ...>} args
 * @returns {Object}
 * @description Return the instance of Constructor
 */
function instance (Constructor, ...args) {
  return new Constructor(...args)
}

/**
 *
 *
 * @param {Function} fn
 * @param {Number} times
 * @param {MixValues} args
 * @returns {Function}
 */
function makeLoop (fn, times, ...args) {
  return function () {
    for (let i = 0; i <= times; i++) fn(...args)
  }
}

/**
 *
 *
 * @param {Array<String>} keys
 * @param {Object} obj
 * @returns {Array}
 * @description (Currified function) Return an Array with values of the keys
 */
function values (keys, obj) {
  return keys.map((key) => obj[key])
}
