'use strict'

const chai = require('chai')
const expect = chai.expect

const comparePerformance = require('../')

const timerTest = require('./src/Timer')
const memoryMeterTest = require('./src/MemoryMeter')
const utilTest = require('./src/util')
const coreTest = require('./src/core')
const exceptionHandlerTest = require('./src/exceptionHandler')

describe('src tests', function () {
  timerTest()
  memoryMeterTest()
  utilTest()
  coreTest()
  exceptionHandlerTest()
})
