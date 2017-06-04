'use strict';

const chai = require('chai')
const expect = chai.expect
const R = require('ramda')
const core = require('../../src/core')
const stdout = require("test-console").stdout;

const expectedProps = [ 'measureWith', 'getPerformance', 'showReport' ]
const instanceProps = Object.getOwnPropertyNames(core)


module.exports = function makeTest () {

  describe('core test',() => {

    describe('Instance',() => {
      it('Util should to be a object',() => {
          expect(core).to.be.a('object')
      })

      it(`util should to be props: ${expectedProps}`,() => {
          expect(expectedProps).to.eql(instanceProps)
      })

      it(`The methods should to be functions`,() => {
          expectedProps.forEach((method) => expect(core[method]).to.be.a('function'))
      })
    })

    describe('Method: measureWith(subject, startCommand, code, endCommand)',() => {
      it('measureWith(fakeSubject, "a", R.identity, "b") should return a Number 1',() => {
          const fakeSubject = {a: () => 0, b: () => 1 }
          const value = core.measureWith(fakeSubject, 'a', R.identity, 'b')
          expect(value).to.be.equal(1)
      })
    })

    describe('Method: getPerformance(name, source, iterations, args)',() => {

      const expectedPops = ['name', 'iterations', 'time', 'memory', 'source', 'args', 'humanTime', 'humanMemory']

      it(`getPerformance("test", R.identity) should iterate one time and return an object with props: a ${expectedPops}`,() => {
         const performance = core.getPerformance("test", R.identity)
         expect(performance).to.have.all.keys(expectedPops)
         expect(performance.source).to.be.a('function')
         expect(performance.iterations).to.be.equal(1)
         expect(performance.args).to.be.empty;
      })

      it(`getPerformance("test", R.identity, 5, 'a1') should iterate one time and return an object with props: a ${expectedPops}`,() => {
         const performance = core.getPerformance("test", R.identity, ['a1', 'd'], 5)
         expect(performance).to.have.all.keys(expectedPops)
         expect(performance.source).to.be.a('function')
         expect(performance.iterations).to.be.equal(5)
         expect(performance.args).to.not.be.empty;
      })
    })



    describe('Method: showReport(head, rows)',() => {
      it('showReport(head, rows) should show in console the report',() => {

          const output = stdout.inspectSync(() => core.showReport(['a','b','c'], [[1, 2, 3],[4, 5, 6]]))
          expect(output).to.be.a('array')
          output.forEach((out) => expect(out).to.be.a('string'))
      })
    })


  })
}




