'use strict';

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')

const util = require('../../src/util')

const expectedProps = [ 'instance', 'makeLoop', 'values' ]
const instanceProps = Object.getOwnPropertyNames(util)


module.exports = function makeTest () {

  describe('Util test',() => {

    describe('Instance',() => {
      it('Util should to be a object',() => {
          expect(util).to.be.a('object')
      })

      it(`util should to be props: ${expectedProps}`,() => {
          expect(expectedProps).to.eql(instanceProps)
      })

      it(`The methods should to be functions`,() => {
          expectedProps.forEach((method) => expect(util[method]).to.be.a('function'))
      })
    })

    describe('Method: instance(Constructor, args)',() => {
      it('instance(Date, 1496576286113) should return a Date object',() => {
          const instance = util.instance(Date, 1496576286113)
          expect(instance).to.be.a('date')
          expect(instance).to.be.instanceOf(Date)
      })

      it('instance(Date) should return a Date object',() => {
          const instance = util.instance(Date)
          expect(instance).to.be.a('date')
          expect(instance).to.be.instanceOf(Date)
      })
    })

    describe('Method: values([a, b, c], { a:1, b: 2, c: 3, d: 4}) should return [1, 2, 3]',() => {
      it('Should return an array with values',() => {
          const expectedResult = [1, 2, 3]
          const values = util.values(['a', 'b', 'c'], { a:1, b: 2, c: 3, d: 4})
          expect(values).to.be.a('array')
          expect(values).to.eql(expectedResult)
      })
    })

    describe('Method: makeLoop(fn, iteration, args) ',() => {
      it('should return a function that execute in a loop for the function passed as argument',() => {

          const loop = util.makeLoop(R.identity, 30, 'a1', 'a2')
          expect(loop).to.be.a('function')
          expect(loop()).to.be.undefined
      })
    })


  })
}




