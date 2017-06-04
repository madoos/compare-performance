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

describe('Module: compare-performance test', () => {
  it('Should to be a function', () => expect(comparePerformance).to.be.a('function'))

  it('to execute should return an array with the performance description and show report', () => {
    expect(
      comparePerformance([
        {name: 'Arrow function', source: (bool) => bool },
        {name: 'Function', source: function(bool) { return bool } }
      ], { iterations: 10000, args: [true] })
    ).to.be.a('array')

  })
})
