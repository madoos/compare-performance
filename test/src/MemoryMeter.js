'use strict';

const chai = require('chai')
const expect = chai.expect

const MemoryMeter = require('../../src/MemoryMeter')
const memory = new MemoryMeter()

const expectedMethods = ['constructor', 'start', 'end', '_calculateMemoryUsed', 'endPretty', '_memoryUsed']
const instanceMethods = Object.getOwnPropertyNames(MemoryMeter.prototype)

const expectedProps = [ '_start', '_end' ]
const instanceProps = Object.getOwnPropertyNames(memory)

module.exports = function makeTest () {

  describe('MemoryMeter class test',() => {

    describe('MemoryMeter constructor test',() => {
      it('MemoryMeter to be a function',() => {
          expect(MemoryMeter).to.be.a('function')
      })
    })

    describe('MemoryMeter instance test',() => {
      it('To execute new MemoryMeter() should to be a object',() => {
          expect(memory).to.be.a('object')
      })
    })

    describe('MemoryMeter method tests',() => {
      it(`To execute new MemoryMeter() should to be methods: ${expectedMethods}`,() => {
          expect(instanceMethods).to.eql(expectedMethods)
      })

      it(`The methods should to be functions`,() => {
          expectedMethods.forEach((method) => expect(memory[method]).to.be.a('function'))
          expect(expectedMethods).to.eql(instanceMethods)
      })
    })

    describe('MemoryMeter properties tests',() => {
      it(`The instance of MemoryMeter should to be props: ${expectedProps}`,() => {
          expect(expectedProps).to.eql(instanceProps)
      })

      it(`The properties should to be a numbers`,() => {
          instanceProps.forEach((prop) => expect(memory[prop]).to.be.a('number'))
      })
    })

    describe('MemoryMeter execution method tests',() => {
      it('To execute memory.start(), timer.end() should return positive number',(done) => {
          memory.start()
          let elapsedTime = memory.end()
          expect(elapsedTime).to.be.a('number')

          memory.start()
          setTimeout(() => {
            elapsedTime = memory.end()
            expect(elapsedTime >= 0).to.equal(true)
            done()
          }, 500)
      })

      it('To execute timer.start(), timer.endPretty() should return a human string',() => {
          memory.start()
          const prettyTime = memory.endPretty()
          expect(prettyTime).to.be.a('string')
      })
    })


  })
}
