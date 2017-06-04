'use strict'

const chai = require('chai')
const expect = chai.expect

const comparePerformance = require('../')

const timerTest = require('./src/Timer')
const memoryMeterTest = require('./src/MemoryMeter')
const utilTest = require('./src/util')

describe('src tests', function () {
  timerTest()
  memoryMeterTest()
  /utilTest()
})
