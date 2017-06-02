'use strict'

const chai = require('chai')
const expect = chai.expect

const timerTest = require('./src/Timer')
const factoriesTest = require('./src/factories')

describe('src tests', function () {
  timerTest()
  describe('Factories test', () =>  factoriesTest())
})
