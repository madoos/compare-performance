'use strict';

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const exceptionHandler = require('../../src/exceptionHandler')

const expectedProps = [ 'testSuiteDataStructure' ]
const instanceProps = Object.getOwnPropertyNames(exceptionHandler)


module.exports = function makeTest () {

  describe('expectedProps test',() => {

    describe('Instance',() => {
      it('Should to be a object',() => {
          expect(exceptionHandler).to.be.a('object')
      })

      it(`Should to be props: ${expectedProps}`,() => {
          expect(expectedProps).to.eql(instanceProps)
      })

      it(`The methods should to be functions`,() => {
          expectedProps.forEach((method) => expect(exceptionHandler[method]).to.be.a('function'))
      })
    })
  })

  describe('Method: testSuiteDataStructure', () => {

    const badTestSuite = [{}, {}, {}]
    const correctTestSuite = [
      { name: 'a', source: () => 1 },
      { name: 'b', source: () => 1 }
    ]
    const handleDataStructure = exceptionHandler.testSuiteDataStructure

    it('testSuiteDataStructure(testSuite, options) if the first parameter not is an Array with correct structure should throw error',() => {
        expect(() => handleDataStructure('[{}, {}]')).to.throw();
        expect(() => handleDataStructure(badTestSuite)).to.throw();
        expect(() => handleDataStructure(correctTestSuite)).to.not.throw()
    })

    it('testSuiteDataStructure(testSuite, options) if the first parameter is an Array with correct structure should return the same array',() => {
        expect(handleDataStructure(correctTestSuite)).to.be.eql(correctTestSuite)
    })
  })
}





