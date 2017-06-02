'use strict';

const chai = require('chai')
const expect = chai.expect

const Timer = require('../../src/Timer')
const timer = new Timer()
const expectedMethods = ['constructor', 'start', 'end', '_getTime']
const instanceMethods = Object.getOwnPropertyNames(Timer.prototype)

module.exports = function makeTest () {

  describe('Timer class test',() => {

    describe('Timer constructor test',() => {
      it('Timer to be a function',() => {
          expect(Timer).to.be.a('function')
      })
    })

    describe('Timer instance test',() => {
      it('To execute new Timer() should to be a object',() => {
          expect(timer).to.be.a('object')
      })
    })

    describe('Timer method tests',() => {
      it(`To execute new Timer() should to be methods: ${expectedMethods}`,() => {
          expect(instanceMethods).to.eql(expectedMethods)
      })

      it(`The methods should to be functions`,() => {
          expectedMethods.forEach((method) => expect(timer[method]).to.be.a('function'))
          expect(expectedMethods).to.eql(['constructor', 'start', 'end', '_getTime'])
      })
    })

    describe('Timer execution method tests',() => {
      it('To execute timer.start(), timer.end() should return positive milliseconds',(done) => {
          timer.start()
          let elapsedTime = timer.end()
          expect(elapsedTime).to.be.a('number')

          timer.start()
          setTimeout(() => {
            elapsedTime = timer.end()
            expect(elapsedTime >= 0).to.equal(true)
            done()
          }, 500)
      })
    })


  })
}
