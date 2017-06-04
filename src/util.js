'use strict'

const R = require('ramda')

module.exports = {
  instance,
  makeLoop,
  values: R.curry(values)
}

function instance (Constructor, ...args) {
  return new Constructor(...args)
}

function makeLoop (fn, times, ...args) {
  return function () {
    for (let i = 0; i <= times; i++) fn(...args)
  }
}

function values (keys, obj) {
  return keys.map((key) => obj[key])
}
