'use strict';

const chai = require('chai')
const expect = chai.expect

const Timer = require('../../src/Timer')
const timer = new Timer()

const expectedMethods = ['constructor', 'start', 'end', '_getTime', 'endPretty']
const instanceMethods = Object.getOwnPropertyNames(Timer.prototype)

const expectedProps = [ '_start', '_end' ]
const instanceProps = Object.getOwnPropertyNames(timer)

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
          expect(expectedMethods).to.eql(instanceMethods)
      })
    })

    describe('Timer properties tests',() => {
      it(`The instance of Timer should to be props: ${expectedProps}`,() => {
          expect(expectedProps).to.eql(instanceProps)
      })

      it(`The properties should to be a numbers`,() => {
          instanceProps.forEach((prop) => expect(timer[prop]).to.be.a('number'))
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

      it('To execute timer.start(), timer.endPretty() should return a human string',() => {
          timer.start()
          const prettyTime = timer.endPretty()
          expect(prettyTime).to.be.a('string')
      })
    })


  })
}
