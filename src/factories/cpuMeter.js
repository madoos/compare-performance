'use strict'

const CPUMeter = require('../CPUMeter')

module.exports = function (...args) {
  return new CPUMeter(...args)
}
