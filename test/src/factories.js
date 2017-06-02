'use strict'

const chai = require('chai')
const expect = chai.expect

const TimerConstructor = require('../../src/Timer')
const timerFactory = require('../../src/factories/timer')

module.exports = function makeTest () {

  describe('Timer factory test',() => {

    describe('Timer factory import test',() => {
      it('should to be a function',() => {
          expect(timerFactory).to.be.a('function')
      })

      it('to execute timerFactory(...args) should return an object',() => {
          expect(timerFactory()).to.be.a('object')
      })

      it('to execute timerFactory(...args) should to be instance of Timer',() => {
          expect(timerFactory()).to.be.an.instanceof(TimerConstructor)
      })

    })
  })
}
